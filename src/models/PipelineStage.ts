import Model from './base';
import {messages} from "@/messages";

export default class PipelineStage extends Model {

    title: string = "";
    pipeline_id: string = "";
    stage_type: string = "";
    index: number = 0;
    icon: string = "";
    disabledRemove: boolean=false; // Có 1 stage default applied là không cho phép xóa.
    showInPositionPipelineStageModal: boolean=true; // Có 1 số item thuộc list default stage không hiển thị.

    // Cần phải có list stage default với pipeline_id là default.
    // => Cần define các field mô tả như icon, title.
    // 1. Khi tạo mới 1 pipeline (PL), việc khởi tạo sẽ yêu cầu có những stage mặc định.
    // 2. Chỉ sử dụng Vuex để lưu, vì giữa các modal còn xử lý việc lưu tạm object nữa
    //     nên code rất dài so với việc lưu default trên DB và xử lý việc tạm ở Vuex.

    public async getAllStages(pipeline_id:string): Promise<PipelineStage[]>{
        const results: PipelineStage[] = new Array();
        const modelCollection = this.firestore.collection(this.COLLECTION);
        await modelCollection
            .where("pipeline_id", "==", pipeline_id)
            .orderBy('index', 'asc')
            .limit(20).get().then(  async (querySnapshot)=> {
            if (querySnapshot.empty == true) {
                const listState = [
                    {
                        title: messages.SR_007_MODAL_PIPELINE_STAGE_APPLIED,
                        icon: 'fa fa-user',
                        value: 'applied',
                        disabledRemove: true,
                        showInPositionPipelineStageModal: true,
                    },
                    {
                        title: messages.SR_007_MODAL_PIPELINE_STAGE_FEEDBACK,
                        icon: 'fa fa-users',
                        value: 'feedback',
                        showInPositionPipelineStageModal: true,
                    },
                    {
                        title: messages.SR_007_MODAL_PIPELINE_STAGE_INTERVIEW,
                        icon: 'fa fa-comments',
                        value: 'interview',
                        showInPositionPipelineStageModal: true,
                    },
                    {
                        title: messages.SR_007_MODAL_PIPELINE_STAGE_MADEOFFER,
                        icon: 'fa fa-gift',
                        value: 'madeoffer',
                        showInPositionPipelineStageModal: true,
                    },
                    {
                        title: messages.SR_007_MODAL_PIPELINE_STAGE_DISQUALIFIED,
                        icon: 'fa fa-trash',
                        value: 'disqualified',
                        showInPositionPipelineStageModal: true,
                    },
                    {
                        title: messages.SR_007_MODAL_PIPELINE_STAGE_HIRED,
                        icon: 'fa fa-trophy',
                        value: 'hired',
                        showInPositionPipelineStageModal: true,
                    },
                    {
                        title: messages.SR_007_MODAL_PIPELINE_STAGE_PHONESCREEN,
                        icon: 'fa fa-phone',
                        value: 'phonescreen',
                        showInPositionPipelineStageModal: false,
                    },
                    {
                        title: messages.SR_007_MODAL_PIPELINE_STAGE_SOURCED,
                        icon: 'fa fa-upload',
                        value: 'sourced',
                        showInPositionPipelineStageModal: false,
                    },
                    {
                        title: messages.SR_007_MODAL_PIPELINE_STAGE_OTHER,
                        icon: 'fa fa-list-ul',
                        value: 'other',
                        showInPositionPipelineStageModal: false,
                    }
                ]
                const arrayP = listState.map( async (state, index) => {
                    let _newStage = new PipelineStage();
                    if (state.showInPositionPipelineStageModal ==  true) _newStage.index = index + 1;
                    _newStage.title = state.title;
                    _newStage.stage_type = state.value;
                    _newStage.pipeline_id = pipeline_id;
                    _newStage.icon = state.icon;
                    _newStage.showInPositionPipelineStageModal = state.showInPositionPipelineStageModal;
                    _newStage.disabledRemove = !!state.disabledRemove; // stage.disabledRemove = 'abc'  --> !disabledRemove == false --> !!disabledRemove == true.
                    await _newStage.insert().then((new_stage) => {
                        let _stage = new PipelineStage();
                        Object.assign(_stage, new_stage);
                        results.push(_stage);
                    });
                    return state;
                })
                await Promise.all(arrayP)

            }else {
                await querySnapshot.forEach(docSnapshot => {
                    let stage = new PipelineStage()
                    Object.assign(stage, docSnapshot.data());
                    stage.id = docSnapshot.id;
                    results.push(stage);
                });
            }
        })
        return await results
    }

    constructor() {
        super("PipelineStage");
    }


}
