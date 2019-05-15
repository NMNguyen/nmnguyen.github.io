import Model from './base';
import Company from "@/models/Company";
import {store} from "@/store/store";
import Candidate from "@/models/Candidate";
import User from "@/models/User";
import moment from "moment";

import {Settings} from 'luxon';

Settings.defaultLocale = 'vi';
export default class Task extends Model {
    title: string = "";
    description: string = "";toLocaleString
    is_done: boolean = false;
    private _deadline: number = Date.now();
    files: { name: string, url: string }[] = [];
    assignee_id = "";
    company_id = "";
    candidate_id = "";
    assignee: User | null = null;

    constructor() {
        super("tasks");
        this.title = "Tên công việc";
        this._deadline = Date.now();
        try {
            this.company_id = store.getters.currentCompany.id;
        } catch (e) {

        }

        try {
            this.assignee_id = store.getters.currentUser.id;
        } catch (e) {

        }
    }

    static get instance(): Task {
        return new Task();
    }

    get deadline(): string {
        return new Date(this._deadline).toISOString();
    }

    set deadline(val: string) {
        try {
            this._deadline = new Date(val).getTime();
        } catch (e) {
            this._deadline = new Date().getTime();
        }
    }

    async insert(): Promise<Task> {

        delete this['assignee']; // do not want to save this back to firestore
        return super.insert() as Promise<Task>;

    }


    async update(): Promise<Task> {

        delete this['assignee']; // do not want to save this back to firestore
        return super.update() as Promise<Task>;

    }


    public async getAssignee(): Promise<User> {
        if (this.assignee_id != "") {
            if (!this.assignee) {
                this.assignee = await User.instance.getById(this.assignee_id) as User;
            }
            return this.assignee;
        } else {
            return await new User();
        }


    }


    public async getCompany(): Promise<Company> {

        return (new Company()).getById(this.company_id) as Promise<Company>;
    }


    public async getCandidate(): Promise<Candidate> {

        return (new Candidate()).getById(this.candidate_id) as Promise<Candidate>;
    }

    public async getAllTasks(counter: number = 10): Promise<Task[]> {
        const results: Task[] = new Array();

        let company = store.getters.currentCompany;

        if (company) {

            const modelCollection = this.firestore.collection(this.COLLECTION);
            const records = await modelCollection.where("company_id", "==", company.id)
                .orderBy("updatedAt", "desc")
                .limit(counter).get();


            const docs = records.docs;

            for (let index in docs) {
                // debugger;
                let docSnapshot = docs[index];
                const record = Task.from(docSnapshot.data(), docSnapshot.id) as Task;
                record.assignee = await record.getAssignee();
                // console.log(record.assignee);

                results.push(record);
            }
        }
        // console.info(`tasks:`);
        // console.info(results);


        return results
    }


}
