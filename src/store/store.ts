import Vue from 'vue';
import Vuex from 'vuex';
import firebase from 'firebase/app';
import Company from "@/models/Company";
import User from "@/models/User";
import Router from '../router';
import Task from "@/models/Task";
Vue.use(Vuex);

import ModalModule from './modals/store';
import PositionPipeline from './position_pipeline/store';

export const store = new Vuex.Store<any>({ // any for test
    modules: {
        modals: ModalModule,
        position_pipeline: PositionPipeline
    },
    state: {
        user: null as User | null,
        users: [] as User[] | [],
        company: null as Company | null,
        task: null as Task | null,

    },
    getters: {
        currentUser: state => {
            return state.user;
        },
        companyUsers: state => {
            return state.users;
        },
        getTask: state => {
            if (state.task == null){
                state.task = new Task();
            }
            return state.task;
        },
        currentCompany: state => {
            return state.company;
        },
    },
    mutations: {
        updateCurrentTask(state, task) {
            state.task = task;
            state.modals.addTask = true;
        },
        setUser(state, user) {
            state.user = user;
        },
        setCompanyUser(state, data) {
            const userIndex = state.users.findIndex(val=>val.id===data.id);
            state.users[userIndex] = data;
        },
        setUsers(state, users) {
            state.users = users;
        },
        setCompany(state, company) {
            state.company = company;
        },
        clearCurrentTask(state){
            state.task = new Task();
        }
    },
    actions: {
        setUser: async context => {
            let fuser = firebase.auth().currentUser;

            if (fuser) {
                // debugger;
                let user = await new User().getById(fuser.uid) as User;
                let company = await new Company().getById(user.company_id) as Company;
                let users = await new User().getAllUsers(user.company_id) as User[];

                context.commit("setUser", user);
                context.commit("setCompany", company);
                context.commit("setUsers", users);
            } else {
                Router.push('/login')
            }

        },
    },
});
