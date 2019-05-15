<template>
    <b-modal
        :hide-footer="true"
        no-close-on-esc
        no-close-on-backdrop
        v-model="showModal">
        <div>
            <h3 class="text-center">Unsaved Changes</h3>
            <p>Would you like to save your changes to this pipeline?</p>
            <div class="text-right">
            <button class="btn btn-none" @click="handleCloseModal" type="button" style="margin-right:10px">No thanks</button>
            <button class="btn btn-blue" @click="handleSaveChange" type="button" ng-click="yes()">
                <i class="fa fa-check"></i>
                Yes please
            </button>
            </div>
        </div>
    </b-modal>
</template>

<script>
    const _ = require('lodash');

    export default {

        name: "UnSavedChange",
        props: {
            showModal: {
                type: Boolean,
                default: false
            },
        },

        methods: {
            handleSaveChange(){
                this.$emit('handleSaveChange')
            },
            handleCloseModal() {
                this.$emit('handleClose')
            }
        }
    }
</script>

<style scoped>
    >>>.modal-header{
        border-bottom:none;
        padding-bottom:0px;
    }
    >>>.modal.show .modal-dialog{
        padding-left: 30px;
        padding-right: 30px;
        border-radius: 5px;
        background: #edeff0;
        text-align: center;
    }
    >>>.modal-content{
        border:none;
    }
    >>>.modal-body{
        padding-top:0px;
    }
    >>>.modal-header .close{
        display: none;
    }
</style>
