import Model from './base';
import Company from "@/models/Company";
import {store} from "@/store/store";

export default class Position extends Model {

    title: string = "";

    company_id = "";


    public async getCompany(): Promise<Company> {


        return (new Company()).getById(this.company_id) as Promise<Company>;
    }

    constructor() {
        super("positions");
    }

    public async getAllPositions(): Promise<Position[]> {
        const results: Position[] = new Array();

        let company = store.getters.currentCompany;

        if (company) {

            const modelCollection = this.firestore.collection(this.COLLECTION);
            const records = await modelCollection.where("company_id", "==", company.id)
                // TODO .orderBy("updatedAt", "desc")
                .limit(20)
                .get();



            records.forEach(docSnapshot => {

                let record = new Position();

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
