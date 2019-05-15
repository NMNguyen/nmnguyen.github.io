<template>
    <div class="content">
        <h1>{{messages.SR_001_USER_PROFILE}}</h1>
        <p>{{messages.SR_001_USER_PROFILE_DESCR}}</p>
        <div class="my-3">
            <img class="logo" :src="photoURL" alt="User Avatar"  onerror="this.style.opacity='0'">
        </div>
        <label class="uploadPicture" for="file_input">
            <i class="fa fa-plus">&nbsp;</i>{{messages.SR_001_UPLOAD_BUTTON}}
        </label>
        <input id="file_input" type="file" accept="image/*" @change="detectFiles($event.target.files)"
               style="display: none">
        <div class="my-3">
            <div>
                <input type="text" name="user_name" id="user_name" :placeholder="messages.COMMON_USER_DISPLAY_NAME" v-model="name" style="width:320px;">
                <span style="color: red; padding-left: 10px;"
                      v-if="error"> {{errorMessage}}</span>
            </div>

            <button class="my-3 btn btn-blue default" @click="SaveUser">
                <i class="default fa fa-save" v-if="!saveflag">&nbsp;&nbsp;</i>
                <span class="default" v-if="!saveflag">{{messages.COMMON_SAVE}}</span>
                <i class="success fa fa-check" v-if="saveflag">&nbsp;&nbsp;</i>
                <span class="success" v-if="saveflag">{{messages.COMMON_SAVED}}</span>
            </button>
        </div>
    </div>
</template>

<style lang="scss">
    .content {
        padding: 20px;
        background: white;
    }

    .logo {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        object-fit: cover;
    }

    .uploadPicture {
        color: #5ac0e5;
        cursor: pointer;
    }

</style>

<script lang="ts">
    import Vue from "vue";
    import User from "@/models/User";
    import {fstorage} from '@/firebase';
    import {mapGetters} from 'vuex';


    export default Vue.extend({

        name: "UserProfile",

        data() {
            return {
                email: "",
                username: "",
                name: "",
                saveflag: false,
                whichFile: "",
                upload: {} as firebase.storage.UploadTask,
                photoURL: "",
                filename: "",
                fileupload: {},
                flag_upload: false,
                errorMessage: "",
                error:false,


            }
        },
        computed: {
            // mix the getters into computed with object spread operator
            ...mapGetters([
                'currentUser',
                'currentCompany',
                // ...
            ]),
        },
        watch: {
            currentUser: function (user) {
                const self = this;
                self.name = user.name;
                self.photoURL = user.photoURL;
            }
        },
        mounted: function () {

            const self = this;

            if (self.currentUser) {
                self.name = self.currentUser.name;
                if (self.currentUser.photoURL)
                    self.photoURL = self.currentUser.photoURL;
            }


        },
        methods: {
            validate: function () {
                const self = this;
                let flag = true;
                self.error = false;
                self.errorMessage = "";
                self.name = self.name.trim();

                if (self.name == "") {
                    self.errorMessage = "Tên người dùng không được để trống !";
                    flag = false;
                    self.error = true;
                }

                return flag;

            },
            SaveUser: function () {
                const self = this;
                if ((self.currentUser) && (self.validate())) {
                    self.currentUser.name = self.name;

                    if (self.flag_upload) {
                        self.$toasted.show(self.messages.SR_001_UPLOADING);
                        const filenameup = self.currentUser.email + '-' + self.stringGen(10) + self.currentUser.id + '-' + self.filename;
                        self.upload = fstorage.ref('image/avatar/' + self.currentUser.id + '/' + filenameup).put(self.fileupload);
                        self.upload.on('state_changed', sp => {
                                if (sp.bytesTransferred == sp.totalBytes) {
                                    this.$toasted.show(self.messages.SR_001_UPLOADED);
                                }
                            },
                            null,
                            () => {
                                self.upload.snapshot.ref.getDownloadURL().then(downloadURL => {
                                    const oldavatar = self.currentUser.photoName;

                                    self.currentUser.photoURL = downloadURL;
                                    self.currentUser.photoName = filenameup;

                                    console.log(downloadURL);
                                    self.currentUser.update();

                                    if ((oldavatar) && (oldavatar != '')) {
                                        var desertRef = fstorage.ref().child('image/avatar/' + self.currentUser.id + '/' + oldavatar);
                                        desertRef.delete().then(function () {
                                            // File deleted successfully
                                        }).catch(function (error) {
                                            console.log(error);
                                        });
                                    }


                                })
                            })

                    }


                    self.currentUser.update();
                    self.saveflag = true;

                    setTimeout(function () {
                        self.saveflag = false;
                    }, 2000);
                }

            },
            createImage(file) {
                let reader = new FileReader();
                let self = this;
                self.filename = file.name;

                reader.onload = (e: Event) => {
                    self.photoURL = reader.result as string;
                };
                reader.readAsDataURL(file);
            },
            detectFiles(fileList, whichFile) {
                const self = this;
                self.flag_upload = false;
                self.whichFile = whichFile;
                console.log(fileList);
                if (fileList.length == 1) {
                    if (fileList[0].type.indexOf("image") == -1) {
                        this.$toasted.error('Chỉ được up file ảnh !');
                    } else {
                        self.createImage(fileList[0]);
                        self.fileupload = fileList[0];
                        self.flag_upload = true;
                    }
                }
            },
            stringGen(len) {
                let text = " ";

                let charset = "abcdefghijklmnopqrstuvwxyz0123456789";

                for (var i = 0; i < len; i++)
                    text += charset.charAt(Math.floor(Math.random() * charset.length));

                return text;

            },
        }
    });

</script>
