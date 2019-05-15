<template>
    <div class="settings portal">
        <div class="main-content">
            <div class="profile nigvlxscope">
                <div class="header">
                    <h1>Bố cục nội dung</h1>
                    <p>Kéo và thả các phần bố cục nội dung bên dưới.</p>
                </div>
                <div name="layoutForm" novalidate="novalidate" class="nigvlxpristine nigvlxvalid">
                    <div class="company">
                        <div class="section">
                            <ul class="columns">
                                <li class="column">
                                    <ul class="bzy-list nigvlxpristine nigvlxuntouched nigvlxvalid nigvlxscope">

                                        <li class="bzy-item draggable nigvlxscope as-sortable-item enabled">
                                            <div class="bzy-item-container nigvlxscope as-sortable-item-handle">
                                                <i class="icon fa fa-list"></i>
                                                <label class="nigvlxbinding">General</label>
                                                <nav>
                                                    <a class="disable-section" @click="switch_mode('general')" v-if="!currentCompany.layout.general"
                                                       data-container="body">
                                                        <i class="fa fa-eye-slash"></i>
                                                    </a>
                                                    <a class="enable-section" @click="switch_mode('general')" v-if="currentCompany.layout.general"
                                                       data-container="body">
                                                        <i class="fa fa-eye"></i>
                                                    </a>
                                                </nav>
                                            </div>
                                        </li>

                                        <li class="bzy-item draggable nigvlxscope as-sortable-item enabled">
                                            <div class="bzy-item-container nigvlxscope as-sortable-item-handle">
                                                <i class="icon fa fa-list"></i>
                                                <label class="nigvlxbinding">Perks</label>
                                                <nav>
                                                    <a class="disable-section" @click="switch_mode('perks')" v-if="!currentCompany.layout.perks"
                                                       data-container="body">
                                                        <i class="fa fa-eye-slash"></i>
                                                    </a>
                                                    <a class="enable-section" @click="switch_mode('perks')" v-if="currentCompany.layout.perks"
                                                       data-container="body">
                                                        <i class="fa fa-eye"></i>
                                                    </a>
                                                </nav>
                                            </div>
                                        </li>

                                        <li class="bzy-item draggable nigvlxscope as-sortable-item enabled">
                                            <div class="bzy-item-container nigvlxscope as-sortable-item-handle">
                                                <i class="icon fa fa-list"></i>
                                                <label class="nigvlxbinding">Gallery</label>
                                                <nav>
                                                    <a class="disable-section" @click="switch_mode('gallery')" v-if="!currentCompany.layout.gallery"
                                                       data-container="body">
                                                        <i class="fa fa-eye-slash"></i>
                                                    </a>
                                                    <a class="enable-section" @click="switch_mode('gallery')" v-if="currentCompany.layout.gallery"
                                                       data-container="body">
                                                        <i class="fa fa-eye"></i>
                                                    </a>
                                                </nav>
                                            </div>
                                        </li>

                                        <li class="bzy-item draggable nigvlxscope as-sortable-item enabled">
                                            <div class="bzy-item-container nigvlxscope as-sortable-item-handle">
                                                <i class="icon fa fa-list"></i>
                                                <label class="nigvlxbinding">Testimonials</label>
                                                <nav>
                                                    <a class="disable-section" @click="switch_mode('testimonials')" v-if="!currentCompany.layout.testimonials"
                                                       data-container="body">
                                                        <i class="fa fa-eye-slash"></i>
                                                    </a>
                                                    <a class="enable-section" @click="switch_mode('testimonials')" v-if="currentCompany.layout.testimonials"
                                                       data-container="body">
                                                        <i class="fa fa-eye"></i>
                                                    </a>
                                                </nav>
                                            </div>
                                        </li>

                                        <li class="bzy-item draggable nigvlxscope as-sortable-item enabled">
                                            <div class="bzy-item-container nigvlxscope as-sortable-item-handle">
                                                <i class="icon fa fa-list"></i>
                                                <label class="nigvlxbinding">Positions List</label>
                                                <nav>
                                                    <a class="disable-section" @click="switch_mode('positions_list')" v-if="!currentCompany.layout.positions_list"
                                                       data-container="body">
                                                        <i class="fa fa-eye-slash"></i>
                                                    </a>
                                                    <a class="enable-section" @click="switch_mode('positions_list')" v-if="currentCompany.layout.positions_list"
                                                       data-container="body">
                                                        <i class="fa fa-eye"></i>
                                                    </a>
                                                </nav>
                                            </div>
                                        </li>

                                        <li class="bzy-item draggable nigvlxscope as-sortable-item enabled">
                                            <div class="bzy-item-container nigvlxscope as-sortable-item-handle">
                                                <i class="icon fa fa-list"></i>
                                                <label class="nigvlxbinding">Employees</label>
                                                <nav>
                                                    <a class="disable-section" @click="switch_mode('employees')" v-if="!currentCompany.layout.employees"
                                                       data-container="body">
                                                        <i class="fa fa-eye-slash"></i>
                                                    </a>
                                                    <a class="enable-section" @click="switch_mode('employees')" v-if="currentCompany.layout.employees"
                                                       data-container="body">
                                                        <i class="fa fa-eye"></i>
                                                    </a>
                                                </nav>
                                            </div>
                                        </li>

                                    </ul>
                                    <div class="footer align-right">
                                        <button class="btn btn-blue default" @click="updateCompany"><i class="default fa fa-save"></i><span
                                            class="default">Lưu</span></button>
                                    </div>
                                </li>


                                <li class="column">
                                    <div class="browser bold full grid_layout">
                                        <div class="controls">
                                            <div class="control1"></div>
                                            <div class="control2"></div>
                                            <div class="control3"></div>
                                        </div>
                                        <div class="address-bar"></div>
                                        <div class="content">
                                            <div class="section">
                                                <div class="hero" style="background: rgb(117, 111, 125)">
                                                    <div class="hero-header">
                                                        <div class="logo"></div>
                                                        <ul class="actions">
                                                            <li class="action"></li>
                                                            <li class="action"></li>
                                                            <li class="action"></li>
                                                        </ul>
                                                    </div>
                                                    <div class="title"></div>
                                                    <div class="sub-title"></div>
                                                    <div class="cta" style="background-color: rgba(0,0,0,0.2)"></div>
                                                </div>
                                            </div><!-- ngRepeat: section in portal.layout.sections -->
                                            <div class="section nigvlxscope" nigvlxrepeat="section in portal.layout.sections">
                                                <!-- ngIf: section.type === "general" && section.disabled !== true -->
                                                <div class="video-container nigvlxscope"
                                                     nigvlxif="section.type === &quot;general&quot; &amp;&amp; section.disabled !== true">
                                                    <div class="video"></div>
                                                    <div class="copy">
                                                        <div class="line"></div>
                                                        <div class="line"></div>
                                                        <div class="line"></div>
                                                        <div class="line"></div>
                                                        <div class="line"></div>
                                                        <div class="line"></div>
                                                        <div class="line"></div>
                                                    </div>
                                                </div><!-- end ngIf: section.type === "general" && section.disabled !== true -->
                                                <!-- ngIf: section.type === "media" && section.disabled !== true -->
                                                <!-- ngIf: section.type === "testimonials" && section.disabled !== true -->
                                                <!-- ngIf: section.type === "perks" && section.disabled !== true -->
                                                <!-- ngIf: section.type === "positions" && section.disabled !== true -->
                                                <!-- ngIf: section.type === "employees" && section.disabled !== true -->
                                            </div><!-- end ngRepeat: section in portal.layout.sections -->
                                            <div class="section nigvlxscope" nigvlxrepeat="section in portal.layout.sections">
                                                <!-- ngIf: section.type === "general" && section.disabled !== true -->
                                                <!-- ngIf: section.type === "media" && section.disabled !== true -->
                                                <!-- ngIf: section.type === "testimonials" && section.disabled !== true -->
                                                <!-- ngIf: section.type === "perks" && section.disabled !== true -->
                                                <div class="perks-container nigvlxscope"
                                                     nigvlxif="section.type === &quot;perks&quot; &amp;&amp; section.disabled !== true">
                                                    <div class="perks">
                                                        <div class="perk">
                                                            <div class="dot" style="background-color: rgb(117, 111, 125)">
                                                                <div class="inner"></div>
                                                            </div>
                                                            <div class="line"></div>
                                                        </div>
                                                        <div class="perk">
                                                            <div class="dot" style="background-color: rgb(117, 111, 125)">
                                                                <div class="inner"></div>
                                                            </div>
                                                            <div class="line"></div>
                                                        </div>
                                                        <div class="perk">
                                                            <div class="dot" style="background-color: rgb(117, 111, 125)">
                                                                <div class="inner"></div>
                                                            </div>
                                                            <div class="line"></div>
                                                        </div>
                                                        <div class="perk">
                                                            <div class="dot" style="background-color: rgb(117, 111, 125)">
                                                                <div class="inner"></div>
                                                            </div>
                                                            <div class="line"></div>
                                                        </div>
                                                        <div class="perk">
                                                            <div class="dot" style="background-color: rgb(117, 111, 125)">
                                                                <div class="inner"></div>
                                                            </div>
                                                            <div class="line"></div>
                                                        </div>
                                                    </div>
                                                </div><!-- end ngIf: section.type === "perks" && section.disabled !== true -->
                                                <!-- ngIf: section.type === "positions" && section.disabled !== true -->
                                                <!-- ngIf: section.type === "employees" && section.disabled !== true -->
                                            </div><!-- end ngRepeat: section in portal.layout.sections -->
                                            <div class="section nigvlxscope" nigvlxrepeat="section in portal.layout.sections">
                                                <!-- ngIf: section.type === "general" && section.disabled !== true -->
                                                <!-- ngIf: section.type === "media" && section.disabled !== true -->
                                                <div class="media-container nigvlxscope"
                                                     nigvlxif="section.type === &quot;media&quot; &amp;&amp; section.disabled !== true">
                                                    <div class="media">
                                                        <div class="image-big"></div>
                                                        <div class="image"></div>
                                                        <div class="image"></div>
                                                        <div class="image"></div>
                                                        <div class="image"></div>
                                                        <div class="image"></div>
                                                        <div class="image"></div>
                                                    </div>
                                                </div><!-- end ngIf: section.type === "media" && section.disabled !== true -->
                                                <!-- ngIf: section.type === "testimonials" && section.disabled !== true -->
                                                <!-- ngIf: section.type === "perks" && section.disabled !== true -->
                                                <!-- ngIf: section.type === "positions" && section.disabled !== true -->
                                                <!-- ngIf: section.type === "employees" && section.disabled !== true -->
                                            </div><!-- end ngRepeat: section in portal.layout.sections -->
                                            <div class="section nigvlxscope" nigvlxrepeat="section in portal.layout.sections">
                                                <!-- ngIf: section.type === "general" && section.disabled !== true -->
                                                <!-- ngIf: section.type === "media" && section.disabled !== true -->
                                                <!-- ngIf: section.type === "testimonials" && section.disabled !== true -->
                                                <div class="testimonials-container nigvlxscope"
                                                     nigvlxif="section.type === &quot;testimonials&quot; &amp;&amp; section.disabled !== true">
                                                    <div class="testimonials">
                                                        <div class="testimonial">
                                                            <div class="dot">
                                                                <div class="inner"></div>
                                                            </div>
                                                            <div class="line"></div>
                                                            <div class="subline"></div>
                                                            <div class="subline"></div>
                                                        </div>
                                                        <div class="testimonial">
                                                            <div class="dot">
                                                                <div class="inner"></div>
                                                            </div>
                                                            <div class="line"></div>
                                                            <div class="subline"></div>
                                                            <div class="subline"></div>
                                                        </div>
                                                        <div class="testimonial">
                                                            <div class="dot">
                                                                <div class="inner"></div>
                                                            </div>
                                                            <div class="line"></div>
                                                            <div class="subline"></div>
                                                            <div class="subline"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <!-- end ngIf: section.type === "testimonials" && section.disabled !== true -->
                                                <!-- ngIf: section.type === "perks" && section.disabled !== true -->
                                                <!-- ngIf: section.type === "positions" && section.disabled !== true -->
                                                <!-- ngIf: section.type === "employees" && section.disabled !== true -->
                                            </div><!-- end ngRepeat: section in portal.layout.sections -->
                                            <div class="section nigvlxscope" nigvlxrepeat="section in portal.layout.sections">
                                                <!-- ngIf: section.type === "general" && section.disabled !== true -->
                                                <!-- ngIf: section.type === "media" && section.disabled !== true -->
                                                <!-- ngIf: section.type === "testimonials" && section.disabled !== true -->
                                                <!-- ngIf: section.type === "perks" && section.disabled !== true -->
                                                <!-- ngIf: section.type === "positions" && section.disabled !== true -->
                                                <div class="positions-container nigvlxscope"
                                                     nigvlxif="section.type === &quot;positions&quot; &amp;&amp; section.disabled !== true">
                                                    <ul class="positions">
                                                        <li class="position">
                                                            <div class="apply tr" style="background: rgb(117, 111, 125)"></div>
                                                            <div class="position-title"></div>
                                                            <ul class="meta">
                                                                <li class="line"></li>
                                                                <li class="line"></li>
                                                                <li class="line"></li>
                                                            </ul>
                                                            <div class="apply bt" style="background: rgb(117, 111, 125)"></div>
                                                        </li>
                                                        <li class="position">
                                                            <div class="apply tr" style="background: rgb(117, 111, 125)"></div>
                                                            <div class="position-title"></div>
                                                            <ul class="meta">
                                                                <li class="line"></li>
                                                                <li class="line"></li>
                                                                <li class="line"></li>
                                                            </ul>
                                                            <div class="apply bt" style="background: rgb(117, 111, 125)"></div>
                                                        </li>
                                                    </ul>
                                                </div>

                                            </div>
                                            <div class="section nigvlxscope">
                                                <div class="employees-container nigvlxscope"
                                                     nigvlxif="section.type === &quot;employees&quot; &amp;&amp; section.disabled !== true">
                                                    <div class="employees">
                                                        <div class="employee">
                                                            <div class="dot">
                                                                <div class="inner"></div>
                                                            </div>
                                                            <div class="line"></div>
                                                        </div>
                                                        <div class="employee">
                                                            <div class="dot">
                                                                <div class="inner"></div>
                                                            </div>
                                                            <div class="line"></div>
                                                        </div>
                                                        <div class="employee">
                                                            <div class="dot">
                                                                <div class="inner"></div>
                                                            </div>
                                                            <div class="line"></div>
                                                        </div>
                                                        <div class="employee">
                                                            <div class="dot">
                                                                <div class="inner"></div>
                                                            </div>
                                                            <div class="line"></div>
                                                        </div>
                                                        <div class="employee">
                                                            <div class="dot">
                                                                <div class="inner"></div>
                                                            </div>
                                                            <div class="line"></div>
                                                        </div>
                                                        <div class="employee">
                                                            <div class="dot">
                                                                <div class="inner"></div>
                                                            </div>
                                                            <div class="line"></div>
                                                        </div>
                                                        <div class="employee">
                                                            <div class="dot">
                                                                <div class="inner"></div>
                                                            </div>
                                                            <div class="line"></div>
                                                        </div>
                                                        <div class="employee">
                                                            <div class="dot">
                                                                <div class="inner"></div>
                                                            </div>
                                                            <div class="line"></div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
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
            switch_mode(section) {
                this.currentCompany.layout[section] = !this.currentCompany.layout[section];
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
