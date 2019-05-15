<template>
    <div class="settings">
        <div class="main-content">
            <div class="profile">
                <div>
                    <div class="header">
                        <h1>Giao diện</h1>
                    </div>
                    <div name="appearanceForm" novalidate="novalidate"
                         class="nigvlxpristine nigvlxvalid nigvlxvalid-url nigvlxvalid-pattern">
                        <div class="company">
                            <div class="section">
                                <h2>Logo công ty</h2>
                                <p>Logo nên được đặt trên nền trong suốt.</p>
                                <div class="company-logo-container">

                                    <div class="logo">
                                        <img :src="currentCompany.appearance_logo">
                                    </div>
                                    <!--<button class="btn btn-xs btn-blue nigvlxpristine nigvlxuntouched nigvlxvalid"-->
                                    <!--type="file" accept="image/*"-->
                                    <!--style="overflow: hidden;">-->
                                    <!--<i class="fa fa-plus"></i>-->
                                    <!--<i class="fa fa-refresh fa-spin"></i>-->
                                    <!--<span> Tải lên logo</span>-->
                                    <!--</button>-->

                                    <div class="upload-btn-wrapper">
                                        <button class="btn btn-xs btn-blue ">
                                            <i class="fa fa-plus"></i>
                                            <i class="fa fa-refresh fa-spin"></i>
                                            Tải lên logo
                                        </button>
                                        <input type="file" accept="image/*" @change="detectFiles($event.target.files, 'appearance_logo')">

                                    </div>

                                </div>
                            </div>
                            <div class="section">
                                <h2>Tiêu đề chính</h2>
                                <p>Tiêu đề chính sẽ nằm ở vị trí trên cùng trong trang tuyển dụng.</p>
                                <div class="company-hero-container">
                                    <div class="hero-wrap">
                                        <!--<div class="hero-preview"-->
                                        <!--style="background-image: linear-gradient(rgba(117,111,125,0.48), rgba(117,111,125,0.48)), url(&quot;https://gallery-cdn.breezy.hr/9a12577f-5374-4086-8331-778cdc87d768/ab20f8a18653-1047-4abb-b0c0-7d4e86228052.png&quot;);">-->
                                        <div class="hero-preview"
                                             :style="{color: currentCompany.appearance_background_color, 'background-image': 'url(' + currentCompany.appearance_header + ')'}">
                                            <h1>{{ currentCompany.messaging_header }}</h1>
                                            <p>{{ currentCompany.messaging_subheader }}</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="section"><br>
                                    <h3>Màu nền cho tiêu đề</h3>
                                    <div class="active-color-container">
                                        <div class="selected-color" :style="{background: currentCompany.appearance_background_color}"></div>
                                        <div
                                            class="minicolors minicolors-theme-bootstrap minicolors-position-bottom minicolors-position-left">
                                            <input
                                                class="color-picker nigvlxpristine nigvlxuntouched nigvlxvalid minicolors-input"
                                                type="text"
                                                size="20"
                                                data-opacity="1.00"
                                                v-model="currentCompany.appearance_background_color"
                                                @focus="displayPicker = 'appearance_background_color'">
                                            <swatches-picker :value="colors" v-if="displayPicker == 'appearance_background_color'" @input="updateFromPicker"/>
                                        </div>
                                    </div>
                                </div>
                                <div><br>
                                    <h3>Hình nền cho tiêu đề</h3>
                                    <p>Bạn cũng có thể tải lên một hình nền tùy chọn để sử dụng thay vì màu nền. Nên sử dụng ảnh kích thước lớn.</p>
                                    <div class="hero-image-controls">
                                        <div>
                                            <!--<div class="hero-slider">-->
                                            <!--<p>Sử dụng thanh trượt này để điều chỉnh lượng màu để phủ lên hình ảnh.</p>-->
                                            <!--<input type="range"-->
                                            <!--min="0" max="1" step="0.01"-->
                                            <!--class="nigvlxpristine nigvlxuntouched nigvlxvalid">-->
                                            <!--</div>-->
                                            <div class="buttons">

                                                <div class="upload-btn-wrapper">
                                                    <button class="btn btn-xs btn-blue ">
                                                        <i class="fa fa-plus"></i>
                                                        <i class="fa fa-refresh fa-spin"></i>
                                                        Thay đổi hình ảnh
                                                    </button>
                                                    <input type="file" accept="image/*" @change="detectFiles($event.target.files, 'appearance_header')">
                                                </div>
                                                <div class="upload-btn-wrapper">
                                                    <button class="btn btn-grey btn-xs" type="button" @click="removeImage()">
                                                        <i class="fa fa-times"></i><span>Xóa</span>
                                                    </button>
                                                </div>


                                                <!--<div class="attach-file btn btn-xs btn-blue nigvlxpristine nigvlxuntouched nigvlxvalid"-->
                                                <!--type="file" accept="image/*" style="overflow: hidden;"><i-->
                                                <!--class="fa fa-refresh fa-spin"></i><i-->
                                                <!--class="fa fa-plus"></i><span> Thay đổi hình ảnh</span>-->
                                                <!--<input type="file" accept="image/*"-->
                                                <!--tabindex="-1" nigvlxfile-generated-elem="true"-->
                                                <!--style="width: 1px; height: 1px; opacity: 0; position: absolute; padding: 0px; margin: 0px; overflow: hidden;">-->
                                                <!--</div>-->


                                            </div>
                                        </div>
                                    </div><!-- end ngIf: portal.appearance.hero -->
                                </div>
                            </div>
                            <div class="section">
                                <h2>Favicon</h2>
                                <p>Là logo thu nhỏ được hiển thị góc trên cùng của tab trong trình duyệt.</p>
                                <div class="favicon">
                                    <div class="preview">
                                        <img :src="currentCompany.appearance_favicon"></div>
                                    <div><input
                                        class="form-control"
                                        name="favicon" type="url"
                                        v-model="currentCompany.appearance_favicon"
                                        pattern="(http)?s?:?(//[^&quot;']*.(?:png|jpg|jpeg|gif|ico))"
                                        placeholder="e.g. https://app.cloudjet.work/favicon.ico"></div>
                                </div>
                            </div>
                            <div class="section">
                                <h2>Màu nút bấm & link</h2>
                                <div class="active-color-container inline-color">
                                    <h3>Màu nút bấm:</h3>
                                    <div class="selected-color" :style="{background: currentCompany.appearance_button_color}"></div>
                                    <div
                                        class="minicolors minicolors-theme-bootstrap minicolors-position-bottom minicolors-position-left">
                                        <input
                                            class="color-picker nigvlxpristine nigvlxuntouched nigvlxvalid minicolors-input"
                                            size="20"
                                            data-opacity="1.00"
                                            v-model="currentCompany.appearance_button_color"
                                            @focus="displayPicker = 'appearance_button_color'">

                                        <swatches-picker :value="colors" v-if="displayPicker == 'appearance_button_color'" @input="updateFromPicker"/>
                                    </div>
                                </div>
                                <div class="active-color-container inline-color">
                                    <h3>Màu link:</h3>
                                    <div class="selected-color" :style="{background: currentCompany.appearance_link_color}"></div>
                                    <div
                                        class="minicolors minicolors-theme-bootstrap minicolors-position-bottom minicolors-position-left">
                                        <input
                                            class="color-picker nigvlxpristine nigvlxuntouched nigvlxvalid minicolors-input"
                                            type="text"
                                            size="20"
                                            data-opacity="1.00"
                                            v-model="currentCompany.appearance_link_color"
                                            @focus="displayPicker = 'appearance_link_color'">

                                        <swatches-picker :value="colors" v-if="displayPicker == 'appearance_link_color'" @input="updateFromPicker"/>
                                    </div>
                                </div>
                            </div>
<!--                            <div class="section">-->
<!--                                <h2>Phương thức ứng tuyển</h2>-->
<!--                                <ul class="application-list-options">-->
<!--                                    <li>-->
<!--                                        <div class="option-list-item">-->
<!--                                            <div class="option-list-header">-->
<!--                                                <h3>Ứng tuyển bằng LinkedIn</h3>-->
<!--                                                <div class="actions">-->
<!--                                                    <div class="bzy-switch">-->
<!--                                                        <label>-->
<!--                                                            <input type="radio"-->
<!--                                                                   class="nigvlxpristine nigvlxuntouched nigvlxvalid"-->
<!--                                                                   v-model="currentCompany.apply_by_linkedin"-->
<!--                                                                   value="true">-->
<!--                                                            <span class="bzy-option">-->
<!--                                                                <span class="bzy-name">Bật</span>-->
<!--                                                            </span>-->
<!--                                                        </label>-->
<!--                                                        <label>-->
<!--                                                            <input-->
<!--                                                                type="radio"-->
<!--                                                                class="nigvlxpristine nigvlxuntouched nigvlxvalid"-->
<!--                                                                v-model="currentCompany.apply_by_linkedin"-->
<!--                                                                value="false">-->
<!--                                                            <span class="bzy-option">-->
<!--                                                            <span class="bzy-name">Tắt</span>-->
<!--                                                            </span>-->
<!--                                                        </label>-->
<!--                                                    </div>-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                    </li>-->
<!--                                    <li>-->
<!--                                        <div class="option-list-item">-->
<!--                                            <div class="option-list-header">-->
<!--                                                <h3>Ứng tuyển bằng Indeed-->
<!--                                                </h3>-->
<!--                                                <div class="actions">-->
<!--                                                    <div class="bzy-switch">-->
<!--                                                        <label>-->
<!--                                                            <input type="radio"-->
<!--                                                                   class="nigvlxpristine nigvlxuntouched nigvlxvalid"-->
<!--                                                                   v-model="currentCompany.apply_by_indeed"-->
<!--                                                                   value="true">-->
<!--                                                            <span class="bzy-option">-->
<!--                                                            <span class="bzy-name">Bật-->
<!--                                                            </span>-->
<!--                                                        </span>-->
<!--                                                        </label>-->
<!--                                                        <label>-->
<!--                                                            <input type="radio"-->
<!--                                                                   class="nigvlxpristine nigvlxuntouched nigvlxvalid"-->
<!--                                                                   value="false"-->
<!--                                                                   v-model="currentCompany.apply_by_indeed">-->
<!--                                                            <span class="bzy-option">-->
<!--                                                                <span class="bzy-name">Tắt</span>-->
<!--                                                            </span>-->
<!--                                                        </label>-->
<!--                                                    </div>-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                    </li>-->
<!--                                </ul>-->
<!--                            </div>-->
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


        </div>
    </div>
</template>


<style>

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
                colors: { 'hex': '#000'},
                displayPicker: ''
            }
        },
        methods: {
            updateCompany: function () {
                // this.currentCompany.appearance_background_color = this.appearance_background_color()
                this.currentCompany.update();
                this.$toasted.show('Saved!')
            },

            updateFromPicker(value) {
                this.colors = value;
                this.currentCompany[this.displayPicker] = this.colors.hex;
                this.displayPicker = '';
                console.log('changed by picker');
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
            removeImage() {
                this.currentCompany.appearance_header = '';
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
                            this.currentCompany[this.whichFile] = downloadURL;
                            this.updateCompany();
                        })
                    })
            }
        }

    });
</script>

<style>
    .upload-btn-wrapper {
        position: relative;
        overflow: hidden;
        display: inline-block;
    }

    .upload-btn-wrapper input[type=file] {
        font-size: 100px;
        position: absolute;
        left: 0;
        top: 0;
        opacity: 0;
    }
</style>
