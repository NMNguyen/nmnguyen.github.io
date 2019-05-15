import Model from './base';
import Company from "@/models/Company";
import {store} from "@/store/store";
import Candidate from "@/models/Candidate";
import User from "@/models/User";

export default class Message extends Model {

    title: string = "";

    company_id: string = "";
    candidate_id:string = "";

    user_id:string  = "";

    is_seen:boolean = false;


    public async getUser(): Promise<User> {

        return (new User()).getById(this.user_id) as Promise<User>;
    }



    public async getCompany(): Promise<Company> {

        return (new Company()).getById(this.company_id) as Promise<Company>;
    }


    public async getCandidate(): Promise<Candidate> {

        return (new Candidate()).getById(this.candidate_id) as Promise<Candidate>;
    }

    constructor() {
        super("tasks");
    }

    public async getAllMessages(): Promise<Message[]> {
        const results: Message[] = new Array();

        let company = store.getters.currentCompany;

        if (company) {

            const modelCollection = this.firestore.collection(this.COLLECTION);
            const records = await modelCollection.where("company_id", "==", company.id).get();


            records.forEach(docSnapshot => {

                let record = new Message();

                Object.assign(record, docSnapshot.data());
                record.id = docSnapshot.id;
                results.push(record);

            });
        }
        // console.info(`tasks:`);
        // console.info(results);


        return results
    }


}
