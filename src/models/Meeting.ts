import Model from './base';
import Company from "@/models/Company";
import {store} from "@/store/store";
import User from "@/models/User";

export default class Meeting extends Model {

    title: string = "";

    company_id = "";
    user_id = "";


    public async getCompany(): Promise<Company> {

        return (new Company()).getById(this.company_id) as Promise<Company>;
    }


    public async getUser(): Promise<User> {

        return (new User()).getById(this.user_id) as Promise<User>;
    }


    constructor() {
        super("meetings");
    }

    public async getAllMeetings(): Promise<Meeting[]> {
        const results: Meeting[] = new Array();

        let company = store.getters.currentCompany;

        if (company) {

            const modelCollection = this.firestore.collection(this.COLLECTION);
            const records = await modelCollection.where("company_id", "==", company.id).get();


            records.forEach(docSnapshot => {

                let record = new Meeting();

                Object.assign(record, docSnapshot.data());
                record.id = docSnapshot.id;
                results.push(record);

            });
        }
        return results
    }


}
