import {Action, MutationTree, StoreOptions, Module} from "vuex";
import Vuex from 'vuex';

export interface ModalState {
    addTask: boolean;
    addCandidate: boolean;
}

const store: Module<ModalState, any> = {
    namespaced: true,
    state: {
        addTask: false,
        addCandidate: false,
    },
    mutations: {
        showAddTask(state, val = true) {
            state.addTask = val;
        },
        showAddCandidate(state, val = true) {
            state.addCandidate = val;
        },
    },
    getters: {
        addTask(state): boolean {
            return state.addTask;
        },
        addCandidate(state): boolean {
            return state.addCandidate;
        },
    }
};

export default store;
