<template>
    <b-modal
        @show="handleOpenModal"
        no-close-on-backdrop
        no-close-on-esc
        header-class="modal-header-add-pipeline"
        v-model="showModal">
        <AddStageModal
            :type="typeOfModalAddPipelineStage"
            :title-stage="titleState"
            :stage-data="currentState"
            @handleClose="showModalAddState=false;"
            :showModal="showModalAddState"></AddStageModal>
        <UnSavedChangeModal
            @handleSaveChange="handleSaveChange()"
            @handleClose="handleCloseUnSavedChange"
            :showModal="showModalUnSavedChange"></UnSavedChangeModal>
        <template slot="modal-header" slot-scope="{ close }">
            <h1 v-if="type=='new'">{{messages.SR_007_MODAL_ADD_TITLE}}</h1>
            <h1 v-else>{{messages.SR_007_MODAL_PIPELINE_TITLE}}</h1>
            <b-button size="sm" class="button-add-pipeline" variant="secondary" @click="handleCloseModal()">
                <i class="fa fa-times"></i>
            </b-button>
        </template>
        <div>
            <h5>{{messages.SR_007_MODAL_PIPELINE_INPUT_NAME_TITLE}}</h5>
            <b-form-input :class="{'isError':isErrorInput}" v-model="title"
                          :disabled="disabledInputTitle"
                          :placeholder="messages.SR_007_MODAL_PIPELINE_STAGE_INPUT_REQUIRED"></b-form-input>
            <h5 style="margin-top:10px">{{messages.SR_007_MODAL_PIPELINE_TYPE_TITLE}}</h5>
            <b-list-group>
                <draggable v-model="cachePipeline.list_state" v-bind:dragOptions="dragOptions" @start="drag=true"
                           @end="changeIndexListStage">
                    <b-list-group-item class="state-item" style="" v-for="state, index in cachePipeline.list_state"
                                       :key="index"
                                       v-if="state.showInPositionPipelineStageModal && !state.deleted">
                        <div>
                            <i :class="state.icon"></i>
                            {{state.title}}
                        </div>
                        <div class="flex-box-right">
                            <i class="fa fa-arrows-alt"></i>
                            <i @click="handleOpenModalAddStage('edit', state, index)" class="fa fa-edit"></i>
                            <i @click="removePipelineStage(index)" v-if="!state.disabledRemove && !state.deleted"
                               class="fa fa-times"></i>
                        </div>
                    </b-list-group-item>
                </draggable>
            </b-list-group>
            <!--<div v-text="cachePipeline.list_state"></div>-->
            <button class="btn btn-primary btn-custom" @click="handleOpenModalAddStage('new')">
                <i class="fa fa-plus"></i>
                {{messages.SR_007_MODAL_PIPELINE_BUTTON_ADD}}
            </button>
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

<script lang="ts">
    import draggable from 'vuedraggable';
    import Vue from "vue";
    import {fauth} from '@/firebase';
    import {mapGetters, mapActions} from 'vuex';
    import AddStageModal from './AddStageModal.vue';
    import Pipeline from "@/models/Pipeline";
    import PipelineStage from "@/models/PipelineStage";
    import {Component, Prop, Emit} from "vue-property-decorator";
    import UnSavedChangeModal from '@/components/modals/PinelineStage/UnsavedChange.vue';
    import {
        State,
        Getter,
        Action,
        Mutation,
        namespace
    } from 'vuex-class'
    import {messages} from "@/messages";

    const _ = require('lodash');
    @Component({
        components: {
            UnSavedChangeModal,
            AddStageModal,
            draggable,
        },
        computed: {
            // mix the getters into computed with object spread operator
            ...mapGetters([
                'currentCompany',
                'listPipelineStage',
                'listPipeline',
                'cachePipeline',
                'currentPipeline'
            ]),
            disabledInputTitle(){
                let that = this as any;
                return that.type == 'edit' && that.currentPipeline.is_default == true;
            }
        },
        methods: {
            ...mapActions('action', [
                'setListPipelineStage',
                'setListPipeline',
                'setCachePipeline',
                'setCurrentPipeline'
            ]),
        },
    })
    export default class AddEditPipeline extends Vue {
        @Prop(Boolean) showModal: false;
        @Prop(String) type: 'new';
        @Prop(Number) index: 1;

        @Getter('cachePipeline') cachePipeline;
        @Getter('currentPipeline') currentPipeline;
        @Getter('listPipeline') listPipeline;
        @Getter('listPipelineStage') listPipelineStage;
        @Getter('currentCompany') currentCompany;

        @Action('setListStage') setListStage;
        @Action('setListPipeline') setListPipeline;
        @Action('setCachePipeline') setCachePipeline;
        @Action('setCurrentPipeline') setCurrentPipeline;
        @Action('setListStageToPipeline') setListStageToPipeline;

        showModalAddState: boolean = false;
        title: string = '';
        showModalUnSavedChange: boolean = false;
        drag: boolean = false;
        titleState: string = '';
        currentState: object = {};
        newPositionPipeline: object = {} as Pipeline || {};
        typeOfModalAddPipelineStage: string = 'new';
        isErrorInput: boolean = false;
        isProcessing: boolean = false;
        isSavedChange: boolean = false;
        cloneListPipelineStage: Array<object> = [];

        changeIndexListStage() {
            // let lengthDefaultStage = _.sumBy(this.cachePipeline.list_state, (stage) => {
            //     return stage.index == 0;
            // })
            Object.freeze(this.listPipelineStage)
            this.cachePipeline.list_state.map((stage, index) => {
                if (stage.index > 0) {
                    stage.index = index;
                }
                return stage;
            })
        }

        onMove({relatedContext, draggedContext}) {
            const relatedElement = relatedContext.element;
            const draggedElement = draggedContext.element;
            let indexRelatedElement = relatedElement.index;
            let indexDraggedElement = draggedElement.index;
            console.log(draggedElement.title, 'to', indexRelatedElement)
            console.log(relatedElement.title, 'to', indexDraggedElement)
            relatedElement.index = indexDraggedElement;
            draggedElement.index = indexRelatedElement;
            return (
                (!relatedElement || !relatedElement.fixed) && !draggedElement.fixed
            );
        }

        dragOptions() {
            return {
                animation: 0,
                group: "description",
                ghostClass: "ghost"
            };
        }

        handleSaveChange() {
            this.showModalUnSavedChange = false;
            this.isSavedChange = true;
            this.saveChange();
        }

        handleCloseUnSavedChange() {
            this.showModalUnSavedChange = false;
            this.$emit('handleClose');
        }

        async saveChange() {
            if (this.title.trim() == '') {
                this.isErrorInput = true;
                return;
            } else {
                this.isErrorInput = false;
            }
            this.isProcessing = true;
            switch (String(this.type)) {
                case 'new':
                    await this.createNewPipeline();
                    break;
                case 'edit':
                    await this.editPipeline();
                    break;
            }
            this.isProcessing = false;
            this.isSavedChange = true;
            await this.handleCloseModal();
        }

        editPipeline() {
            return new Promise(async (resolve, reject) => {
                this.cachePipeline.title = this.title;
                this.changeIndexListStage();
                const pArray = await this.cachePipeline.list_state.map(async (stage) => {
                    if (stage.id == '') {
                        let _newStage = new PipelineStage();
                        Object.assign(_newStage, stage);
                        _newStage.pipeline_id = this.currentPipeline.id;
                        await _newStage.insert().then((data) => {
                            stage.id = data.id;
                            stage.pipeline_id = data['pipeline_id'];
                        })
                    } else {
                        await new PipelineStage().getById(stage.id).then((data) => {
                            Object.assign(data, stage);
                            data['index'] = stage.index;
                            if (data['title'] != stage.title) {
                                data['title'] = stage.title;
                            }
                            if (data['stage_type'] != stage.stage_type) {
                                data['stage_type'] = stage.stage_type;
                            }
                            data.update();
                        })
                    }
                    if (stage.deleted == true) {
                        await new PipelineStage().getById(stage.id).then((data) => {
                            data.delete();
                            console.log('Done ', stage.title);
                        })
                    }
                    return stage;
                });
                await Promise.all(pArray);
                this.cachePipeline.list_state = this.cachePipeline.list_state.filter((stage) => {
                    return !stage.deleted;
                })
                new Pipeline().getById(this.currentPipeline.id).then((data) => {
                    Object.assign(data, this.cachePipeline);
                    delete data['list_state'];
                    data.update().then((_data) => {
                        this.listPipeline.splice(this.index, 1, data);
                        this.setListPipeline(this.listPipeline);
                        resolve();
                    });
                });
            })


        }

        createNewPipeline() {
            return new Promise(async (resolve, reject) => {
                this.newPositionPipeline = new Pipeline();
                this.changeIndexListStage();
                Object.assign(this.newPositionPipeline, this.cachePipeline);
                this.newPositionPipeline['title'] = this.title;
                delete this.newPositionPipeline['list_state'];
                //@ts-ignore
                this.newPositionPipeline.insert()
                    .then(async (data) => {
                        const pArray = this.cachePipeline.list_state.map(async (stage) => {
                            if (stage.pipeline_id == '') stage.pipeline_id = data.id;
                            if ((stage.id == '' || stage.pipeline_id == 'default') && !stage.deleted) {
                                let _newStage = new PipelineStage();
                                Object.assign(_newStage, stage);
                                _newStage.pipeline_id = data.id;
                                await _newStage.insert().then((_data) => {
                                    stage.id = _data.id;
                                })
                            }
                            return stage;
                        });
                        await Promise.all(pArray);
                        //@ts-ignore
                        this.newPositionPipeline.update().then((data) => {
                            let _array = this.listPipeline.concat(data);
                            this.setListPipeline(_array);
                            resolve();
                        })
                    })
            })

        }

        async _getAllStages(type) {
            return new PipelineStage().getAllStages(type);
        }

        async handleOpenModal() {
            let _data = {};
            this.isErrorInput = false;
            // this.changeIndexListStage();

            // Use cloneDeep cuz remove Observer Property in Object.
            if (String(this.type) == 'new') {
                _data = {
                    company_id: this.currentCompany.id,
                    list_state: _.cloneDeep(this.listPipelineStage),
                    title: '',
                };
                this.cloneListPipelineStage = _.cloneDeep(this.listPipelineStage);
                this.title = '';
            } else {
                await this._getAllStages(this.currentPipeline.id).then((data) => {
                    _data = {
                        company_id: this.currentCompany.id,
                        list_state: data,
                    };
                    this.title = this.currentPipeline.title;
                    this.cloneListPipelineStage = _.cloneDeep(data);
                });
                // alert(this.title);
                await this.setListStageToPipeline({id: this.currentPipeline.id, content: _data['list_state']});
            }
            await this.setCachePipeline(_data);
            await console.log(_data)
        }

        removePipelineStage(index) {
            this.cachePipeline.list_state[index]['deleted'] = true;
            this.cachePipeline.list_state.splice(index, 1, this.cachePipeline.list_state[index]);
            this.setCachePipeline(this.cachePipeline);
        }

        handleOpenModalAddStage(type, state, index) {
            this.showModalAddState = true;
            this.typeOfModalAddPipelineStage = type;
            if (type == 'new') {
                this.currentState = null;
                this.titleState = '';
            } else {
                this.currentState = state;
                // indexInCurrentArray is position of this item in list_state of state
                this.currentState['indexInCurrentArray'] = index;
                this.titleState = this.currentState['title'];
            }
        }

        handleCloseModal() {
            let compareTitle = '';
            let compareStage = false;
            if (!this.isSavedChange) {
                this.cloneListPipelineStage.forEach((stage) => {
                    delete stage['firestore'];
                    delete stage['updatedAt'];
                    delete stage['createdAt'];
                })
                let checkArray = [];
                if (this.type == 'new') {
                    compareTitle = this.cachePipeline.title;
                    checkArray = _.cloneDeep(this.cachePipeline.list_state)
                    checkArray.forEach((stage) => {
                        delete stage['firestore'];
                        delete stage['updatedAt'];
                        delete stage['createdAt'];
                    })
                    compareStage =  _.isMatch(this.cloneListPipelineStage, checkArray)
                } else {
                    compareTitle = this.currentPipeline.title;
                    checkArray = _.cloneDeep(this.currentPipeline.list_state)
                    checkArray.forEach((stage) => {
                        delete stage['firestore'];
                        delete stage['updatedAt'];
                        delete stage['createdAt'];
                    })
                    console.log(this.cloneListPipelineStage)
                    compareStage =  _.isMatch(this.cloneListPipelineStage, checkArray, _.isEqual)
                }


                // Compare
                if (!compareStage || this.title != compareTitle){
                    this.showModalUnSavedChange = true;
                    return;
                }
            }
            this.showModalUnSavedChange = false;
            this.title = '';
            this.isSavedChange = false;
            this.$emit('handleClose')
        }
    }
</script>

<style lang="scss" scoped>
    .flex-box-right i {
        /*margin-left:10px;*/
        font-size: 10px;
        padding: 5px;
        cursor: pointer;
    }

    .flex-box-right i.fa-arrows-alt {
        cursor: move;
    }

    .btn-custom {
        margin-top: 10px;
        font-size: 12px !important;
        height: initial !important;
        padding: 2px 8px;
        background-color: #5ac0e5 !important;
        color: #fff !important;
        border: none;
    }

    .btn-custom:hover {
        font-size: 12px;
        background-color: #4cabcd !important;
        color: #fff !important;
    }

    .state-item {
        justify-content: space-between;
        display: flex;
        align-content: center;
        background: #edeff0;
        cursor: move;
        height: 40px;
        padding: 10px;
    }

    .btn-blue {
        border: none;
        padding: 5px 12px;
        font-weight: bold;
    }
</style>
<style scoped>
    >>> .modal-header-add-pipeline {
        border-bottom: none;
        padding-bottom: 0px;
    }

    >>> .modal.show .modal-dialog {
        padding-left: 10px;
        padding-right: 10px;
        border-radius: 5px;
        background: #edeff0;
    }

    >>> .modal-content {
        border: none;
        padding-left: 5px;
        padding-right: 5px;
    }

    >>> .modal-body {
        padding-top: 0px;
    }

    >>> .modal-footer {
        border-top: none;
        display: flex;
        justify-content: flex-end;
        align-content: center;
    }

    >>> .modal-footer p {
        flex: 1;
    }

    >>> .button-add-pipeline {
        padding: 10px;
        padding-left: 15px;
        position: absolute;
        right: 0;
        border: none;
        font-weight: bold;
        background: #edeff0;
        top: 0;
        font-size: 21px !important;
        color: #4c555c;
    }

    >>> .button-add-pipeline i {
        font-size: 21px !important;
    }

    >>> .isError {
        border:2px solid #eba2a5 !important
    }
</style>
