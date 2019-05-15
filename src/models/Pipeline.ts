import Model from './base';
import PipelineStage from "@/models/PipelineStage";
import {messages} from "@/messages";

export default class Pipeline extends Model {

    title: string = "";
    company_id: string = "";
    is_default: boolean = false;

    public deleteAllStateByID(position_stage_id: string) {
        if (position_stage_id) {
            {
                const modelCollection = this.firestore.collection('PipelineStage');
                modelCollection.where("pipeline_id", "==", position_stage_id).get().then(function (querySnapshot) {
                    querySnapshot.forEach(docSnapshot => {
                        docSnapshot.ref.delete();
                    });
                })
            }
        }
    }

    public async createPipelineDefault(company_id: string): Promise<Pipeline> {
        let defaultPineLine = new Pipeline();
        defaultPineLine.title = messages.SR_007_DEFAULT_PIPELINE_TITLE;
        defaultPineLine.company_id = company_id;
        defaultPineLine.is_default = true;
        defaultPineLine.insert().then((pipeline) => {
            new PipelineStage().getAllStages(pipeline.id);
            Object.assign(defaultPineLine, pipeline);
        });
        return defaultPineLine;
    }

    public async getAllPipelines(company_id: string): Promise<Pipeline[]> {
        const results: Pipeline[] = new Array();
        let that = this;
        if (company_id) {
            const modelCollection = this.firestore.collection(this.COLLECTION);

            await modelCollection.where("company_id", "==", company_id)
                .orderBy('is_default', 'desc')
                .orderBy('updatedAt')
                .get()
                .then(async (querySnapshot) => {
                    if (querySnapshot.empty == true) {
                        await that.createPipelineDefault(company_id).then((pipeline) => {
                            results.push(pipeline);
                        });
                    } else {
                        querySnapshot.forEach(docSnapshot => {
                            let record = new Pipeline();
                            Object.assign(record, docSnapshot.data());
                            record.id = docSnapshot.id;
                            results.push(record);
                        });
                    }
                })
        }
        return await results;
    }

    constructor() {
        super("Pipeline");
    }

}
