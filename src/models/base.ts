import {db} from '@/firebase/index'
import * as firebase from "firebase";
import DocumentSnapshot = firebase.firestore.DocumentSnapshot;
import Type from "@/components/portal/Type.vue";

/*

Đây là base Model, chúng ta sẽ viết những methods thường xuyên sử dụng cho các Models, ví dụ:

- insert
- update
- delete
- getById
- query...

 */

export default class Model {
    static COLLECTION: string;
    COLLECTION: string;
    firestore: firebase.firestore.Firestore;
    id: string = "";
    createdAt: number = Date.now();
    updatedAt: number = Date.now();

    // create new instance, not single instance, instead of (new Model())
    static get instance(): Model {
        throw new TypeError('override this');
    }
    static from(data: Object = {}, id?: string) {
        const newObj = this.instance;
        const obj = typeof data === 'object' ? data : {};
        Object.assign(newObj, obj, {id});
        // test
        newObj.onChange(()=>{});

        return newObj;
    }

    constructor(COLLECTION: string) {
        this.firestore = db;
        this.COLLECTION = COLLECTION;
        this.constructor['COLLECTION'] = COLLECTION;
    }


    deserialize(data: Object) {
        Object.assign(this, data);
    }

    async insert(): Promise<Model> {
        const modelCollection = this.firestore.collection(this.COLLECTION);
        let result = {...this};
        delete result['firestore'];
        delete result['COLLECTION'];
        delete result['id'];

        //const {TIMESTAMP} = firebase.database.ServerValue;
        result.createdAt = Date.now(); //TIMESTAMP;
        result.updatedAt = Date.now(); //TIMESTAMP;

        const model = await modelCollection.add(JSON.parse(JSON.stringify(result)));
        this.id = model.id;

        return this;
    }

    async upsert(): Promise<Model> {
        if (this.id) {
            return await this.update();
        } else {
            return await this.insert();
        }
    }

    async update(): Promise<Model> {
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

    async delete(): Promise<void> {

        const modelCollection = this.firestore.collection(this.COLLECTION);
        const record = await modelCollection.doc(this.id);

        return record.delete();
    }

    public collection(): firebase.firestore.CollectionReference {
        return db.collection(this.COLLECTION);
    }


    public async getById(id: string): Promise<Model> {
        const modelCollection = this.firestore.collection(this.COLLECTION);
        const record = await modelCollection.doc(id).get();
        if (!record.exists) {
            throw new Error(`${this.COLLECTION} ${id} not found`);
        }

        this.id = record.id;
        Object.assign(this, record.data());

        // test
        this.onChange(()=>{});

        return this;
    }

    onChange(callback: Function) {
        const collection = this.firestore.collection(this.COLLECTION);
        if (!this.id) return;
        collection.doc(this.id)
            .onSnapshot((docSnap: DocumentSnapshot)=>{
                if (typeof callback === "function") {
                    const isPreventDefault = callback(null, docSnap.data());
                    if (!isPreventDefault) {
                        // console.info("Auto update object: ", this);
                        Object.assign(this, docSnap.data());
                    }
                }
            }, (error) => {
                if (typeof callback === "function") {
                    callback(error, null);
                }
            })
    }
}
