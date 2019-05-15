<template>
    <b-modal
        @show="handleOpenModal"
        no-close-on-esc
        no-close-on-backdrop
        v-model="showModal">
        <template slot="modal-header" slot-scope="{ close }">
            <h1>{{messages.SR_007_MODAL_STAGE_TITLE}}</h1>
            <b-button size="sm" class="button-add-pipeline" variant="secondary" @click="handleCloseModal()">
                <i class="fa fa-times"></i>
            </b-button>
        </template>
        <div>
            <h5>{{messages.SR_007_MODAL_STAGE_INPUT_TITLE}}</h5>
            <b-form-input :class="{'isError':isErrorForm.stageNameInput}" v-model="currentTitleStage" :placeholder="messages.SR_007_MODAL_STAGE_INPUT_REQUIRED"></b-form-input>
            <div v-if="stageData == null || (stageData != null && stageData.stage_type != 'applied')">
                <h5 style="margin-top:10px">{{messages.SR_007_MODAL_STAGE_STAGE_TITLE}}</h5>
                <b-form-select v-model="stageData.stage_type" class="mb-3 custom-select" :class="{'isError':isErrorForm.stageType}" v-if="type=='edit'">
                    <option :value="null" disabled>{{messages.SR_007_MODAL_STAGE_STAGE_TITLE}}</option>
                    <option :value="stage.stage_type" v-for="stage in listPipelineStage" v-if="!stage.disabledRemove">{{stage.title}}</option>
                </b-form-select>
                <b-form-select v-model="stageData" class="mb-3 custom-select" :class="{'isError':isErrorForm.stageType}" v-else>
                    <option :value="null" disabled>{{messages.SR_007_MODAL_STAGE_STAGE_TITLE}}</option>
                    <option :value="stage" v-for="stage in listPipelineStage" v-if="!stage.disabledRemove">{{stage.title}}</option>
                </b-form-select>
            </div>
        </div>
        <div>
            <h5>{{messages.SR_007_MODAL_STAGE_STAGE_ACTIONS}}</h5>
            <p>{{messages.SR_007_MODAL_STAGE_STAGE_ACTIONS_DESCRIPTION}}</p>
            <b-form-select v-model="selectedOptionAction" :options="optionsAction" class="mb-3">
            </b-form-select>
        </div>
        <template slot="modal-footer" slot-scope="{ ok }">
            <!-- Emulate built in modal footer ok and cancel button actions -->
            <p v-if="isProcessing">{{messages.SR_007_MODAL_STAGE_ADDING}}</p>
            <b-button size="sm" variant="primary" class="btn btn-blue" @click="saveChange()">
                <i class="fa fa-save"></i> {{messages.SR_007_MODAL_PIPELINE_BUTTON_SAVE}}
            </b-button>
        </template>
    </b-modal>
</template>

<script>
    import PinelineState from "../../../models/PipelineStage";
    import {mapGetters, mapActions} from 'vuex';
    const _ = require('lodash');
    import {messages} from "../../../messages";

    export default {

        name: "AddStagePipeline",
        props: {
            showModal: {
                type: Boolean,
                default: false
            },
            type: {
                type: String,
                default: 'new'
            },
            stageData:{
                type: Object,
                default:()=> null,
            },
            titleStage:{
                type: String,
                default: '',
            }
        },
        data() {
            return {
                showModalAddState:false,
                selectedOptionAction: null,
                currentTitleStage: '',
                currentState: null,
                optionsAction: [
                    { value: null, text: 'Available Stage Actions' , disabled: true},
                    { value: 'a', text: 'Send Email/SMS' },
                    { value: 'b', text: 'Send Questionnaire' },
                    { value: 'c', text: 'Team Feedback' },
                    { value: 'd', text: 'Candidate Scorecards'},
                ],
                isErrorForm: {
                    stageNameInput: false,
                    stageType: false,
                },
                isProcessing: false
        }
        },
        computed:{
            ...mapGetters([
                'cachePipeline',
                'listPipelineStage',
                'currentCompany'
            ]),
        },
        methods: {
            ...mapActions([
               'currentPipeline',
                'setCachePipeline',
                'setListPipelineStage'
            ]),
            async handleOpenModal(){
                this.isErrorForm =  {
                    stageNameInput: false,
                    stageType: false,
                }
                if (this.listPipelineStage.length == 0){
                    await new PinelineState().getAllStages('default').then((data)=>{
                        this.setListPipelineStage(data);
                        console.log(data);
                    });
                }
                this.currentTitleStage = this.titleStage;
            },
            saveChange(){
                if (this.stageData == null){
                    this.isErrorForm.stageType = true;
                }else{
                    this.isErrorForm.stageType = false;
                }
                if (this.currentTitleStage.trim() == ''){
                    this.isErrorForm.stageNameInput = true;
                }else{
                    this.isErrorForm.stageNameInput = false;
                }
                if (this.isErrorForm.stageType || this.isErrorForm.stageNameInput){
                    return;
                }
                switch (this.type) {
                    case 'new':
                        this.createPipelineStage();
                        break;
                    case 'edit':
                        this.editPipelineStage();
                        break;
                }
            },
            createPipelineStage(){
                let _newPipelineStage = {};
                let lengthListStage = _.sumBy(this.cachePipeline.list_state, (state)=>{
                    return state.showInPositionPipelineStageModal == true;
                });
                Object.assign(_newPipelineStage, this.stageData);
                _newPipelineStage.title = this.currentTitleStage;
                _newPipelineStage.id = '';
                _newPipelineStage.pipeline_id = '';
                _newPipelineStage.deleted = false;
                _newPipelineStage.index = lengthListStage + 1;
                _newPipelineStage.showInPositionPipelineStageModal = true;
                this.cachePipeline.list_state.push(_newPipelineStage);
                this.handleCloseModal();
            },
            editPipelineStage( ){
                let _newPipelineStage = {};
                let findStageChanged = this.listPipelineStage.find((stage)=>{
                    return stage.stage_type == this.stageData.stage_type;
                })
                Object.assign(_newPipelineStage, findStageChanged);
                _newPipelineStage.pipeline_id = this.stageData.pipeline_id;
                _newPipelineStage.id = this.stageData.id;
                _newPipelineStage.title = this.currentTitleStage;
                _newPipelineStage.deleted = false;
                _newPipelineStage.index = this.stageData.index;
                _newPipelineStage.showInPositionPipelineStageModal = true;
                this.cachePipeline.list_state.splice(this.stageData.indexInCurrentArray, 1 , _newPipelineStage);
                this.setCachePipeline(this.cachePipeline);
                this.handleCloseModal();
            },
            handleCloseModal() {
                this.$emit('handleClose')
            }
        }
    }
</script>

<style lang="scss" scoped>
    .flex-box-right i{
        margin-left:10px;
        font-size:10px;
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
    .state-item{
        justify-content: space-between;
        display:flex;
        align-content:center;
        background:#edeff0;
        height:40px;
        padding:10px;
    }
    .btn-blue{
        border:none;
        padding:5px 12px;
        font-weight:bold;
        /*font-size: 21px !important;*/
    }
    .custom-select{
        width:176px;
    }
</style>
<style scoped>
    >>>.modal-header{
        border-bottom:none;
        padding-bottom:0px;
    }
    >>>.modal.show .modal-dialog{
        padding-left: 30px;
        padding-right: 30px;
        border-radius: 5px;
        background: #edeff0;
    }
    >>>.modal-content{
        border:none;
    }
    >>>.modal-body{
        padding-top:0px;
    }
    >>>.modal-footer{
        border-top:none;
        background-color:#f9fafa;
        border-top: 1px solid #edeff0;
    }
    >>>.button-add-pipeline{
        padding: 10px;
        padding-left: 15px;
        position: absolute;
        right: 0;
        border: none;
        font-weight: bold;
        background: #edeff0;
        top: 0;
        font-size:21px!important;
        color:#4c555c;
    }
</style>
