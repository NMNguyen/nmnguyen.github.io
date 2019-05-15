<template>
    <b-modal v-model="showModal" title="Thêm Ứng viên">
        <div class="p-3" v-if="step === 1">
            <b-form>
                <b-form-input placeholder="Tên đầy đủ (Bắt buộc)" required></b-form-input>
                <div class="row my-3">
                    <div class="col-md-6">
                        <b-form-input placeholder="Email"></b-form-input>
                    </div>
                    <div class="col-md-6">
                        <b-form-input placeholder="Phone Number"></b-form-input>
                    </div>
                </div>
                <section>
                    <h2>Summary / Description</h2>
                    <b-form-textarea placeholder="" rows="4"></b-form-textarea>
                </section>
            </b-form>
        </div>
        <div class="p-3" v-if="step === 2">
            <b-form>
                <h2>Chọn vị trí</h2>
            </b-form>
        </div>
        <template slot="modal-footer" slot-scope="{cancel}">
            <b-button variant="secondary" @click="cancel">Đóng</b-button>
            <b-button variant="info" @click="step = 2" v-if="step === 1">Tiếp tục</b-button>
            <b-button variant="primary" v-if="step === 2 && hasInfo">Thêm Ứng viên</b-button>
        </template>
    </b-modal>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {mapGetters, mapMutations} from 'vuex';

    export default Vue.extend({
        name: 'AddCandidateModal',
        data() {
            return {
                step: 1,
                position: null,
                position_list: [

                ]
            };
        },
        computed: {
            ...mapGetters([
                'modals/addCandidate',
            ]),
            showModal: {
                get(): any {
                    return this['modals/addCandidate'];
                },
                set(val: boolean) {
                    if (val === false) this.step = 1;
                    this['modals/showAddCandidate'](val);
                }
            },
            hasInfo(): boolean {
                return true;
            }
        },
        methods: {
            ...mapMutations([
                'modals/showAddCandidate',
            ]),
        }
    });
</script>
