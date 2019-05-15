<template>

    <div class="settings portal">
        <div class="main-content">
            <div class="profile nigvlxscope">
                <div class="header">
                    <h1>Nhận xét của nhân viên</h1>
                </div>
                <div class="company">
                    <div class="section">
                        <h2>Thêm Nhận xét</h2>
                        <p>Nhân viên chia sẻ một số điều tốt đẹp khi làm việc tại doanh nghiệp của bạn. </p>
                        <div class="testimonial-container upload-btn-wrapper">
                            <div class="headshot-placeholder">
                                <div class="headshot nigvlxscope" v-if="!newTestimonial.photo" @click="$refs.file.click()">
                                    <i class="fa fa-camera-retro"></i>
                                </div>
                                <input type="file" accept="image/*" @change="detectFiles($event.target.files)" style="display: none" ref="file">
                                <img class="avatar" :src="newTestimonial.photo" v-if="newTestimonial.photo" @click="$refs.file.click()">

                            </div>
                            <input v-model="newTestimonial.name"
                                   class="emp-name half"
                                   type="text"
                                   placeholder="Tên nhân viên"
                                   required="required">
                            <div class="form-divider"></div>
                            <input v-model="newTestimonial.position"
                                   class="title half nigvlxpristine nigvlxuntouched nigvlxinvalid nigvlxinvalid-required"
                                   type="text"
                                   placeholder="Vị trí / Chức vụ"
                                   required="required">
                        </div>
                        <div class="form-divider"></div>
                        <input v-model="newTestimonial.testimonial"
                               class="body full"
                               type="text" style="width: 340px"
                               placeholder="e.g. I love working at Cloudjet. It's nothing but rainbows and unicorns."
                               required="required">
                        <div class="form-divider"></div>
                        <a class="logo add btn btn-blue btn-xs"
                           @click="addTestimonial"><i class="fa fa-plus"></i><span>Thêm lời giới thiệu</span></a>
                    </div>
                    <div class="section">
                        <h2>Nhận xét của bạn</h2>
                        <p nigvlxif="portal.testimonials.length > 0" class="nigvlxscope">Đây là những lời giới thiệu có sẵn của bạn. Nếu bạn có nhiều hơn chúng tôi hiển thị cùng một lúc, chúng tôi sẽ chuyển qua chúng ngẫu nhiên.</p><!-- end ngIf: portal.testimonials.length > 0 -->
                        <!-- ngIf: portal.testimonials.length === 0 -->
                        <ul class="testimonials">
                            <!-- ngRepeat: testimonial in portal.testimonials -->
                            <li class="testimonial nigvlxscope" v-for="(testimonial, index) in currentCompany.testimonials">
                                <img class="avatar-sm" :src="testimonial.photo">
                                <div class="content">
                                    <h4>{{testimonial.name}}</h4>
                                    <h5>{{testimonial.position}}</h5>
                                    <div class="body"><i class="fa fa-quote-left"></i>
                                        <p class="nigvlxbinding">{{testimonial.testimonial}}</p>
                                    </div>
                                    <a class="remove" @click="removeTestimonial(index)">
                                        <i class="fa fa-times"></i><span> Xóa</span>
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="footer align-right">
                    <button @click="updateCompany" class="btn btn-blue default"
                            type="submit">
                        <i class="default fa fa-save"></i>
                        <span class="default">Lưu</span>
                    </button>
                </div>
            </div>
        </div>
    </div>

</template>


<style>
    .upload-btn-wrapper {
        position: relative;
        overflow: hidden;
        display: inline-block;
    }

    img.avatar {
        height: 100%;
        width: 100%;
        border-radius: 0;
    }

    .avatar-sm {
        border-radius: 100%;
        border: 2px solid #fff;
        display: inline-block;
        height: 40px;
        vertical-align: middle;
        width: 40px;
    }
</style>


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
            addTestimonial() {
                if (this.newTestimonial.photo == '' || this.newTestimonial.name == '' || this.newTestimonial.position == '' || this.newTestimonial.testimonial == '') {
                    this.$toasted.error('Error !!!')
                } else {
                    this.currentCompany.testimonials.push(this.newTestimonial);
                    this.updateCompany();
                    console.log(this.currentCompany.testimonials);
                    this.newTestimonial = {
                        name: '',
                        photo: '',
                        position: '',
                        testimonial: ''
                    }
                }
            },
            removeTestimonial(index) {
                this.currentCompany.testimonials.splice(index, 1);
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
                            this.newTestimonial.photo = downloadURL;
                            // this.updateCompany();
                        })
                    })
            }
        }

    });
</script>
