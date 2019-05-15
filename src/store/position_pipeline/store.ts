import {Action, MutationTree, StoreOptions, Module} from "vuex";
import Vue from 'vue';
import Vuex from 'vuex';
import PipelineStage from "@/models/PipelineStage";
import PositionPipeline from "@/models/Pipeline";

Vue.use(Vuex);

export interface PositionPinelineState {
    listPipeline: Array<object>,
    listPipelineStage: Array<object>,
    currentPipeline: object,
    currentPipelineStage: object,
    cachePipeline: object
}

const store: Module<PositionPinelineState, any> = {
    // namespaced: true,
    state: {
        listPipeline: [],
        listPipelineStage: [],
        currentPipeline: {},
        currentPipelineStage: {},
        cachePipeline: {},
    },
    mutations: {
        setCachePipeline(state, data) {
            state.cachePipeline = data;
        },
        setListPipeline(state, data) {
            state.listPipeline = data;
        },
        setListPipelineStage(state, data) {
            state.listPipelineStage = data.map((stage)=>{
                delete stage['firestore'];
                return stage;
            });
            // Object.freeze(state.listPipelineStage)

        },
        setCurrentPipeline(state, data) {
            state.currentPipeline = data;
        },
        setCurrentPipelineStage(state, data) {
            state.currentPipelineStage = data;
        }
    },
    getters: {
        cachePipeline(state, data) {
            return state.cachePipeline;
        },
        listPipeline(state) {
            return state.listPipeline;
        },
        listPipelineStage(state) {
            return state.listPipelineStage;
        },
        currentPipeline(state) {
            return state.currentPipeline;
        },
        currentPipelineStage(state) {
            return state.currentPipelineStage;
        },
    },
    actions: {
        editListPipeline: async (context, data) => {
            switch (data.type) {
                case 'remove':
                    let _positionPipeline = data.content[data.index];
                    _positionPipeline.deleteAllStateByID(_positionPipeline.id);
                    _positionPipeline.delete();
                    data.content.splice(data.index, 1);
                    context.dispatch('setListPipeline', data.content);
                    break;
                case 'duplicate':
                    let _newPositionPipeline = new PositionPipeline();
                    Object.assign(_newPositionPipeline, data.content[data.index]);
                    _newPositionPipeline.is_default = false;
                    _newPositionPipeline.title+= ' (Copy)';
                    delete _newPositionPipeline['list_state'];
                    _newPositionPipeline.insert().then(async (_data) => {
                        const pArray = data.content[data.index]['list_state'].map(async (stage) => {
                            if (stage.pipeline_id != '' && stage.pipeline_id != 'default') {
                                let _newState = new PipelineStage();
                                Object.assign(_newState, stage);
                                _newState.pipeline_id = _data.id;
                                await _newState.insert().then((response) => {
                                    stage.id = response.id;
                                });
                            }
                            return stage;
                        });
                        await Promise.all(pArray);
                        _newPositionPipeline.update().then((response) => {
                            data.content.push(response);
                            context.dispatch('setListPipeline', data.content);
                        });
                    });
                    break;
            }
        },
        setCachePipeline: async (context, data) => {
            context.commit("setCachePipeline", data);
        },
        setCurrentPipelineStage: async (context, data) => {
            context.commit("setCurrentPipelineStage", data);
        },
        setCurrentPipeline: async (context, data) => {
            context.commit("setCurrentPipeline", data);
        },
        setListPipelineStage: async (context, data) => {
            context.commit("setListPipelineStage", data);
        },
        setListPipeline: async (context, data) => {
            context.commit("setListPipeline", data);
        },
        setListStageToPipeline: async (context, data) =>{
            let listPipeline =  context.getters['listPipeline']
            let indexPipeline = listPipeline.findIndex((pipeline)=>{
                return pipeline.id == data.id;
            })
            listPipeline[indexPipeline]['list_state'] = data.content;
            context.dispatch('setListPipeline', listPipeline);
        }
    },
};

export default store;
