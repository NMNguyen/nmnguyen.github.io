import Model from './base';
import Company from "@/models/Company";
import {store} from "@/store/store";
import User from "@/models/User";

export default class Candidate extends Model {
    title: string = "";
    company_id = "";
    assignee_id = "";

    constructor() {
        super("candidates");
    }

    static get instance(): Candidate {
        return new Candidate();
    }

    public async getAssignee(): Promise<User> {
        return (new User()).getById(this.assignee_id) as Promise<User>;
    }


    public async getCompany(): Promise<Company> {

        return (new Company()).getById(this.company_id) as Promise<Company>;
    }

    public async getAllCandidates(): Promise<Candidate[]> {
        const results: Candidate[] = new Array();

        let company = store.getters.currentCompany;

        if (company) {

            const modelCollection = this.firestore.collection(this.COLLECTION);
            const records = await modelCollection.where("company_id", "==", company.id)
            // TODO  .orderBy("updatedAt", "desc")
                .limit(20)
                .get();


            records.forEach(docSnapshot => {

                let record = new Candidate();

                Object.assign(record, docSnapshot.data());
                record.id = docSnapshot.id;
                results.push(record);

            });
        }
        // console.info(`Candidates:`);
        // console.info(results);


        return results
    }


}
