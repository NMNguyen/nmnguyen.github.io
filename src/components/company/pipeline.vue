<template>
    <div class="modal-content">
        <div class="modal-main">
            <div class="settings portal">
                <div class="main-content">
                    <h1>{{messages.SR_007_PIPELINE_TITLE}}</h1>
                    <p class="font-weight-normal">
                        {{messages.SR_007_PIPELINE_TITLE_DESCRIPTION}}
                    </p>
                    <h2>{{messages.SR_007_PIPELINE_SUBTITLE}}</h2>
                    <p v-html="messages.SR_007_PIPELINE_SUBTITLE_DESCRIPTION">
                    </p>
                    <PositionPipelineComponent
                        v-on:editPositionPipeline="editPipeline"
                        v-for="pipeline, index in listPipeline"
                        :key="index"
                        :index="index"
                        :pipeline="pipeline">
                    </PositionPipelineComponent>
                    <vue-content-loading
                        v-if="isLoading"
                        :width="500"
                        :height="35">
                        <rect x="0" y="13" rx="4" ry="4" width="15" height="15" />
                        <rect x="20" y="13" rx="4" ry="4" width="100%" height="15" />
                    </vue-content-loading>
                    <AddEditPipeline
                        :showModal="showModal"
                        :type="type"
                        :index="currentIndex"
                        @handleClose="handleCloseModalAddPositionPipeline"
                        >
                    </AddEditPipeline>
                    <button class="btn btn-primary btn-custom" @click="handleOpen">
                        <i class="fa fa-plus"></i>
                        {{ messages.SR_007_BTN_ADD_PIPELINE }}
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
    import Vue from "vue";
    import {fauth} from '@/firebase';
    import {mapGetters, mapActions} from 'vuex';
    import PositionPipelineComponent from '../PositionPipeline/main.vue';
    import AddEditPipeline from '../modals/PinelineStage/AddEditPipeline.vue';

    import Pipeline from '@/models/Pipeline';
    import PipelineStage from '@/models/PipelineStage';
    import VueContentLoading from 'vue-content-loading';
    import {messages} from '@/messages/index.ts';
    export default Vue.extend({
        components:{
            PositionPipelineComponent,
            AddEditPipeline,
            VueContentLoading
        },
        props: {},
        data(){
            return{
                showModal: false,
                newPositionPipeline: {} as Pipeline,
                type:'new',
                currentIndex:0,
                isLoading: false,
            }
        },
        computed: {
            // mix the getters into computed with object spread operator
            ...mapGetters([
                'currentCompany',
                'listPipeline',
                'listPipelineStage',
                'currentPipeline',
                'currentPipelineStage'
            ]),
        },
        mounted(){
            let that = this;
            that.isLoading = true;
            this.getAllPineline().then((data)=>{
                that.setListPipeline(data).then(()=>{
                    new PipelineStage().getAllStages('default').then((data)=>{
                        that.setListPipelineStage(data);
                    });
                    that.isLoading = false;

                });
            });
        },
        methods: {
            ...mapActions([
                'setListPipelineStage',
                'setListPipeline',
                'setCurrentPipeline',
                'setCurrentPipelineStage'
            ]),
            async getAllPineline(){
                return await new Pipeline().getAllPipelines(this.currentCompany.id);
            },

            handleCloseModalAddPositionPipeline(){
                this.showModal = false;
                // this.getAllPineline();
            },
            editPipeline(currentIndex){
                this.type = 'edit';
                this.currentIndex = currentIndex;
                this.showModal = true;
            },
            handleOpen: function () {
                this.showModal = true;
                this.type = 'new';
            }
        },
    });
</script>
<style lang="scss" scoped>
    .main-content{
        padding:20px;
    }
    .btn-custom{
        margin-top:10px;
        font-size: 12px !important;
        height: initial !important;
        padding: 2px 8px;
        background-color: #5ac0e5 !important;
        color: #fff !important;
        border:none;
    }
    .btn-custom:hover{
        font-size: 12px;
        background-color: #4cabcd !important;
        color: #fff !important;
    }
    .modal-content{
        border: none;
    }
</style>
