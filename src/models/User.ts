import Model from './base';
import firebase from "@/firebase";
import Company from "@/models/Company";
// import Router from '../router';
import {store} from "@/store/store";
import Team from "@/models/Team";

export type USER_ROLE_TYPE = "admin" | "employee";

export const USER_ROLE = {
    ADMIN: "admin" as USER_ROLE_TYPE,
    EMPLOYEE: "employee" as USER_ROLE_TYPE,
};

export default class User extends Model {

    email: string = "";
    name: string = "";
    company_id = "";
    photoURL: string = "";
    team_id = ""; // mỗi user chỉ được thuộc 1 team duy nhất để tránh rắc rối không cần thiết
    // teams: firebase.firestore.DocumentReference[] = [];
    messages: firebase.firestore.DocumentReference[] = [];
    role: USER_ROLE_TYPE = USER_ROLE.EMPLOYEE;
    photoName: string = "";
    signatureFlag: boolean = true;
    signatureHtml: string = "";
    meetingRemind:boolean = true;
    candidateAssign: boolean = true;
    taskAssign:  boolean = true;
    taskDuel:  boolean = true;

    constructor() {
        super("users");
    }

    static get instance(): User {
        return new User();
    }

    public async getCompany(): Promise<Company> {
        return Company.instance.getById(this.company_id) as Promise<Company>;
    }

    // public async getTeams(): Promise<Team[]> {
    //     const result = [] as Team[];
    //     for (const teamRef of this.teams) {
    //         const response = await teamRef.get();
    //         const team = Team.from(response.data()) as Team;
    //         team.id = teamRef.id;
    //         result.push(team);
    //     }
    //     return result;
    // }

    public async getCurrentUser(): Promise<User> {
        return store.getters.currentUser;
    }


    public async getAllUsers(company_id: string): Promise<User[]> {
        const results: User[] = [];

        const records = await this.collection()
            .where("company_id", "==", company_id)
            .limit(20)
            .get();

        records.forEach(docSnapshot => {
            let record = User.from(docSnapshot.data()) as User;
            record.id = docSnapshot.id;
            results.push(record);
        });
        return results
    }

    // override
    async insert(): Promise<User> {
        throw new TypeError("No implement yet!");
    }

    async update(): Promise<User> {
        const modelCollection = this.firestore.collection(this.COLLECTION);

        let result = {...this};
        let id = result['id'];
        delete result['firestore'];
        delete result['COLLECTION'];
        delete result['id'];

        // const {TIMESTAMP} = firebase.database.ServerValue;
        result.updatedAt = Date.now();

        // @ts-ignore
        const model = await modelCollection.doc(id).set(JSON.parse(JSON.stringify(result), {merge: true}));

        return this;
    }
}
