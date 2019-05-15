import Model from './base';
import firebase from "@/firebase";
import User from "@/models/User";
import {store} from "@/store/store";

export default class Company extends Model {
    name: string = "";
    address: string = "";
    // START type page
    config: string = "bold"; // bold | simple
    // END type page

    // START appearance page
    appearance_logo: string = "";
    appearance_header: string = "";
    appearance_background_color: string = "rgb(58, 55, 62)";
    appearance_favicon: string = "https://firebasestorage.googleapis.com/v0/b/just-landing-229509.appspot.com/o/image%2Flogo.png?alt=media&token=2d98a457-1063-422c-8980-7dee0b99134e";
    appearance_button_color: string = "rgb(134, 198, 143)";
    appearance_link_color: string = "rgb(134, 198, 143)";
    apply_by_linkedin: boolean = true;
    apply_by_indeed: boolean = true;
    // END appearance page

    // START messaging page
    messaging_header: string = "Come work with us";
    messaging_subheader: string = "We're looking for great people to join our growing team.";
    messaging_introduction: string = "We're looking for great people to join our growing team.";
    // END messaging page

    // START social page
    website: string = "";
    twitter: string = "";
    facebook: string = "";
    linkedin: string = "";
    instagram: string = "";
    blog: string = "";
    tax_code: string = "";
    // END social page

    perks: { icon: string, name: string }[] = [];

    testimonials: { name: string, position: string, testimonial: string, photo: string }[] = [];

    employees: { name: string, position: string, photo: string }[] = [];

    // START media page
    youtube_video: string = "";
    photos: { url: string } [] = [];
    // END media page

    // START custom page
    js: string = "";
    css: string = "";
    // END custom page

    layout: { general: boolean, perks: boolean, gallery: boolean, testimonials: boolean, positions_list: boolean, employees: boolean }
        = {general: true, perks: true, gallery: true, testimonials: true, positions_list: true, employees: true};

    constructor() {
        super("companies");
    }

    static get instance(): Company {
        return new Company();
    }
    //
    // public async getCurrentCompany(): Promise<Company> {
    //     let user  = store.getters.currentUser;
    //     return new Company().getById(user.company_id) as Promise<Company>
    //
    // }

    onUsersChange(callback: Function) {
        const collection = this.firestore.collection(this.COLLECTION);
        collection.onSnapshot((snapshot)=>{
            snapshot.docChanges().forEach(docChange=>{
                if (typeof callback === "function") {
                    callback(
                        docChange.doc.id,
                        docChange.doc.data(),
                    );
                }
            })
        })
    }
}
