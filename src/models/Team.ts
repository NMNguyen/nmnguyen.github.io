import Model from './base';
import firebase from "@/firebase";
import Company from "@/models/Company";
import Router from '../router';
import {store} from "@/store/store";



export default class Team extends Model {

    name: string = "";



    constructor() {
        super("teams");
    }

    company_id = "";


    public async getCompany(): Promise<Company> {


        return (new Company()).getById(this.company_id) as Promise<Company>;
    }

}
