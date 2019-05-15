<template>
    <div class="settings portal">
        <div class="main-content">

            <div class="profile nigvlxscope">
                <div class="header">
                    <h1>Hình ảnh & Video</h1>
                </div><!-- ngIf: updateFailed -->
                <div novalidate="novalidate"
                     class="nigvlxpristine nigvlxvalid">
                    <div class="company">
                        <div class="section">
                            <h2>Video Marketing</h2>
                            <p>Có một video tiếp thị sẽ giúp mọi người hào hứng với thương hiệu của bạn? Bao gồm nó ở đây.</p>
                            <h3>YouTube</h3>
                            <input class="form-control"
                                   type="text"
                                   placeholder="e.g. https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                                   v-model="currentCompany.youtube_video">
                            <div class="form-divider"></div>
                        </div>
                        <div class="section">
                            <h2>Thêm hình ảnh</h2>
                            <p>Chia sẻ một số hình ảnh của cuộc sống công việc. Sự kiện, tính năng văn phòng thú vị, vật nuôi văn phòng và nhân viên.</p>
                            <div class="company-logo-container">
                                <button class="attach-file add logo btn btn-blue btn-xs"
                                        style="overflow: hidden;"
                                        @click="$refs.file.click()">
                                    <div class="savinigvlxstate nigvlxscope">
                                        <i class="fa fa-plus"></i><span> Thêm hình ảnh</span></div>
                                </button>

                                <input type="file" accept="image/*" tabindex="-1"
                                       style="width: 1px; height: 1px; opacity: 0; position: absolute; padding: 0px; margin: 0px; overflow: hidden;" @change="detectFiles($event.target.files)" ref="file">
                            </div>
                        </div>
                        <div class="section">
                            <h2>Hình ảnh đã thêm</h2>
                            <p v-if="currentCompany.photos.length == 0" class="nigvlxscope">Bạn chưa thêm hình ảnh nào!</p>
                            <ul class="gallery">
                                <li class="gallery-item ng-scope" v-for="(photo, index) in currentCompany.photos">
                                    <div class="image" :style="{'background-image': 'url(' + photo.url + ')'}"></div>
                                    <a class="remove" @click="removePhoto(index)"><i class="fa fa-times"></i><span> Remove</span></a>
                                </li>
                            </ul>
                        </div>
                    </div><!-- ngIf: mediaChanged -->
                </div>
            </div><!-- end ngIf: activeTab == "media" -->
            <div class="footer align-right">
                <button @click="updateCompany" class="btn btn-blue default"
                        type="submit">
                    <i class="default fa fa-save"></i>
                    <span class="default">Lưu</span>
                </button>
            </div>
        </div>
    </div>
</template>


<script lang="ts">
    import Vue from "vue";
    import {fauth, fstorage} from '@/firebase';
    //import {storage} from 'firebase.storage'
    import {mapGetters} from 'vuex';
    // https://github.com/xiaokaike/vue-color
    import {Swatches} from 'vue-color';
    import * as firebase from "firebase";


    var colors = {
        hex: '#194d33',
        // hsl: {h: 150, s: 0.5, l: 0.2, a: 1},
        // hsv: {h: 150, s: 0.66, v: 0.30, a: 1},
        // rgba: {r: 25, g: 77, b: 51, a: 1},
        // a: 1
    }

    export default Vue.extend({
        props: {},
        computed: {
            // mix the getters into computed with object spread operator
            ...mapGetters([
                'currentUser',
                'currentCompany',
                // ...
            ]),

        },
        components: {
            'swatches-picker': Swatches
        },
        data() {
            return {

                progressUpload: 0,
                file: File,
                uploadTask: {} as firebase.storage.UploadTask,
                whichFile: '',
                newTestimonial: {
                    name: '',
                    photo: '',
                    position: '',
                    testimonial: ''
                }
            }
        },
        methods: {
            updateCompany: function () {
                this.currentCompany.update();
                this.$toasted.show('Saved!')
            },
            detectFiles(fileList, whichFile) {
                this.whichFile = whichFile;
                console.log(fileList);
                Array.from(Array(fileList.length).keys()).map(x => {
                    this.upload(fileList[x])
                })
            },
            upload(file) {
                this.uploadTask = fstorage.ref('image/' + file.name).put(file);
            },
            removePhoto(index) {
                this.currentCompany.photos.splice(index, 1);
                this.updateCompany();
            }
        },
        watch: {
            uploadTask: function () {
                this.$toasted.show('Uploading ...');
                this.uploadTask.on('state_changed', sp => {
                        if (sp.bytesTransferred == sp.totalBytes) {
                            this.$toasted.show('Uploaded !')
                        }
                    },
                    null,
                    () => {
                        this.uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
                            this.currentCompany.photos.push({url: downloadURL});
                            this.updateCompany();
                        })
                    })
            }
        }

    });
</script>


<style>
    .gallery .gallery-item .image {
        height: 100px;
        width: 100px;
        background-size: cover;
    }
</style>
