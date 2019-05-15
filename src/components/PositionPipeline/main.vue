<template>
    <div class="container" :class="{'isDefaultClass':listPipeline[index].is_default}">
        <div class="flex-box-left">
            <div>
                <i class="fa fa-list"></i>
                <p>{{listPipeline[index].title}}</p>
            </div>
        </div>
        <div class="flex-box-right">
            <i @click="editPositionPipeline" class="fa fa-edit"></i>
            <i @click="duplicatePositionPipeline" class="fa fa-clone"></i>
            <i v-if="!listPipeline[index].is_default" @click="removePositionPipeline" class="fa fa-times"></i>
        </div>
    </div>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex';
    import PipelineStage from "../../models/PipelineStage";
    export default {
        props:[
            'index',
        ],
        computed:{
            ...mapGetters([
                'listPipeline',
            ])
        },
        methods:{
            ...mapActions([
                'setListPipeline',
                'editListPipeline',
                'setCurrentPipeline',
                'setListStageToPipeline'
            ]),
            editPositionPipeline(){
                    this.setCurrentPipeline(this.listPipeline[this.index]);
                    this.$emit('editPositionPipeline', this.index)
            },
            removePositionPipeline(){
                let data = {
                    type:'remove',
                    index: this.index,
                    content: this.listPipeline
                }
                this.editListPipeline(data);
            },
            duplicatePositionPipeline(){
                new PipelineStage().getAllStages(this.listPipeline[this.index].id).then((stages)=>{
                    this.setListStageToPipeline({id:this.listPipeline[this.index].id, content:stages});
                    let data = {
                        type:'duplicate',
                        index: this.index,
                        content: this.listPipeline
                    }
                    this.editListPipeline(data);
                });
            }
        }
    }
</script>

<style scoped>
    .modal-content{
        overflow: hidden;
        text-overflow: ellipsis;
        vertical-align: middle;
        white-space: nowrap;
    }
    .container {
        padding: 10px;
        display: flex;
        justify-content: space-between;
        width: 100%;
        background: #fafafa;
        border: 1px solid #edeff0;
        border-radius: 3px;
    }
    .isDefaultClass{
        margin-bottom:10px;
    }
    .flex-box-right{
        min-width: 60px;
        text-align: right;
    }
    .flex-box-right i{
        /*margin-left:10px;*/
        font-size:10px;
        padding:5px;
        cursor:pointer;
    }
    .flex-box-left{
        overflow: hidden;
        text-overflow: ellipsis;
        vertical-align: middle;
        white-space: nowrap;
    }
    .flex-box-left div{
        display:flex;
        align-items: center;
    }
    .flex-box-left div p{
        margin-left:10px;
        font-size:14px;
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .flex-box-left p{
        margin-bottom:0px;
        font-size:12px;
        color:#4c555c;
        margin-left:20px
    }
</style>
