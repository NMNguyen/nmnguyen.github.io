<template>
    <div class="d-flex flex-column" style="height: 100%">
        <header class="flex-shrink-0 p-3">
            <div class="d-flex justify-content-between">
                <!-- Left buttons -->
                <div class="d-flex">
                    <!-- Filter -->
                    <b-button
                        @click="filterNav.open = !filterNav.open"
                        class="mx-3 text-secondary"
                        style="background: #E9ECEF; height: 30px;"
                    >
                        <i class="fas fa-filter"></i>
                        <template v-if="filterNav.open">
                            <i class="fas fa-angle-left"></i>
                        </template>
                        <template v-else>
                            <i class="fas fa-angle-right"></i>
                        </template>
                    </b-button>
                    <!-- Position filter -->
                    <CandidateTypeDropdown v-model="candidateType"/>

                    <!-- <div class="mr-3 positionFilterSelect d-flex justify-content-start align-items-center">
                                <div
                                  id="positionFilter"
                                  class="d-flex justify-content-start align-items-center"
                                  style="z-index: 2; position: absolute;"
                                >
                                  <i style="float:left" class="fas fa-briefcase text-secondary"></i>
                                </div>
                                <div
                                  class="positionFilterSelect d-flex justify-content-start align-items-center"
                                  style="z-index: 0; position: absolute;"
                                >
                                  <select class="form-control pl-10 py-0 my-2 border-0 text-secondary">
                                    <option>Mọi vị trí (Admin)</option>
                                    <option>Vị trí của tôi</option>
                                  </select>
                                </div>
                    </div>-->

                    <!-- Column checkboxes -->
                    <CandidateColumnFilterDropdown v-model="column_filters"/>

                    <!-- Number of candidates -->
                    <p
                        class="ml-3 my-0 text-secondary d-flex justify-content-start align-items-center"
                    >2 ứng viên</p>
                </div>
                <!-- Right buttons -->
                <div class="d-flex">
                    <!-- More button -->
                    <b-dropdown :disabled="true" text="More">
                        <b-dropdown-item>Gửi tin nhắn</b-dropdown-item>
                        <b-dropdown-item>Gửi câu hỏi</b-dropdown-item>
                        <b-dropdown-item>Đánh dấu ứng viên</b-dropdown-item>
                        <b-dropdown-item>Di chuyển ứng viên</b-dropdown-item>
                        <b-dropdown-item>Xuất ứng viên</b-dropdown-item>
                    </b-dropdown>
                    <!-- Trash button -->
                    <b-button class="mx-2 text-secondary" style="border: none; background: #E9ECEF" disabled>
                        <i class="fas fa-trash"></i>
                    </b-button>
                    <!-- Messages button -->
                    <b-button class="mx-2 text-secondary" style="border: none; background: #E9ECEF" disabled>
                        <i class="fas fa-comments"></i>
                    </b-button>
                    <!-- Candidate email button -->
                    <b-button class="mx-2 text-secondary" style="border: none; background: #E9ECEF" disabled>
                        <i class="fas fa-envelope"></i>&nbsp;
                        Email ứng viên
                    </b-button>
                    <b-button class="mx-2" variant="primary" @click="addCandidate">
                        <i class="fas fa-plus"></i>&nbsp;
                        Thêm ứng viên
                    </b-button>
                </div>
            </div>
        </header>
        <!-- Task content -->
        <div class="d-flex flex-grow-1 flex-shrink-1 overflow-auto align-items-start">
            <!-- Left border -->
            <FilterColumn :open="filterNav.open"/>
            <!-- Right border -->
            <div class="p-3 flex-grow-1 overflow-auto" style="max-height: 100%">
                <div class="px-0 mx-0" style="background:#F9FAFA; border: 1px solid #edeff0">
                    <!-- Table content -->
                    <b-form-checkbox-group v-model="row_check">
                        <b-table hover :fields="tableFields" :items="tableItems" :busy="!loaded.candidate">
                            <template slot="table-busy">
                                <div class="d-flex align-items-center flex-column">
                                    <h3>Loading</h3>
                                    <b-spinner></b-spinner>
                                </div>
                            </template>

                            <!-- CUSTOM CHECK COLUMN-->
                            <template slot="HEAD_selected">
                                <b-form-checkbox v-on:change="checkAll"></b-form-checkbox>
                            </template>
                            <template slot="selected" slot-scope="{ item }">
                                <b-form-checkbox :value="item.id"></b-form-checkbox>
                            </template>

                            <!--CUSTOM PHOTO COLUMN-->
                            <template slot="photo" slot-scope="data">
                                <b-img
                                    :src="data.photo"
                                    rounded="circle"
                                    blankColor="#888"
                                    :blank="true"
                                    :width="18"
                                    :height="18"
                                ></b-img>
                            </template>
                        </b-table>
                    </b-form-checkbox-group>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    .avatarCircle {
        color: #ffffff;
        background: #30a6d1;
        border-radius: 50%;
    }
</style>


<script lang="ts">
    import Vue from "vue";
    import CandidateTypeDropdown from "@/components/Candidate/CandidateTypeDropdown.vue";
    import CandidateColumnFilterDropdown from "@/components/Candidate/CandidateColumnFilterDropdown.vue";
    import FilterColumn from "@/components/FilterColumn/FilterColumn.vue";
    import CandidateColumnFilter from "@/components/Candidate/CandidateColumnFilter";
    import Candidate from "@/models/Candidate";
    import ModalWrapper from "@/components/ModalWrapper.vue";

    import {mapMutations} from 'vuex';
    import {Component, Prop} from "vue-property-decorator";

    @Component({
        components: {
            CandidateTypeDropdown,
            CandidateColumnFilterDropdown,
            FilterColumn,
            ModalWrapper,
        },
        methods: {
            ...mapMutations(['modals/showAddCandidate']),
        }
    })
    export default class CandidatePage extends Vue {
        @Prop({default: null}) position_id: string | null;

        loaded = {
            candidate: false,
        };
        filterNav = {
            open: true,
        };
        candidates = [] as Candidate[];
        candidateType = "";
        column_filters = {...CandidateColumnFilter};
        row_check = [] as string[];

        addCandidate(): void {
            this['modals/showAddCandidate'](true);
        }

        reset(ev: Event): void {
            ev.preventDefault();
        }

        checkAll(checked: boolean): void {
            if (checked)
                this.row_check = this.candidates.map(c => c.id);
            else
                this.row_check = [];
        }

        async loadCandidates(): Promise<void> {
            this.candidates = [];
            if (this.position_id) {
                // load by position here
                // replace code under
                const loadedCandidates = await Candidate.instance.getAllCandidates();
                this.candidates = this.candidates.concat(loadedCandidates);
            } else {
                const loadedCandidates = await Candidate.instance.getAllCandidates();
                this.candidates = this.candidates.concat(loadedCandidates);
            }
            this.loaded.candidate = true;
        }

        // COMPUTED
        get tableItems(): any[] {
            return [...this.candidates];
        }
        get tableFields(): any[] {
            return Object.keys(this.column_filters)
                .reduce((fields: any[], filter: any) => {
                    if (this.column_filters[filter].check) {
                        return [
                            ...fields,
                            {
                                key: filter,
                                label: this.column_filters[filter].text,
                                sortable: true
                            }
                        ];
                    } else {
                        return fields;
                    }
                },
                ["selected"]
            );
        }

        // HOOK

        mounted() {
            this.loadCandidates().catch(err => {
                console.log(err);
            });
        }
    }

    // export default Vue.extend({
    //     name: "CandidatesPage",
    //     components: {
    //         CandidateTypeDropdown,
    //         CandidateColumnFilterDropdown,
    //         FilterColumn,
    //         ModalWrapper,
    //     },
    //     props: {
    //         position_id: {
    //             type: String | null, // if null, load all
    //             defaultValue: null,
    //         }
    //     },
    //     data() {
    //         return {
    //             loaded: {
    //                 candidate: false,
    //             },
    //             filterNav: {
    //                 open: true,
    //             },
    //             candidates: [] as Candidate[],
    //             candidateType: "",
    //             column_filters: {...CandidateColumnFilter},
    //             row_check: [] as string[],
    //         };
    //     },
    //     methods: {
    //         ...mapMutations(['modals/showAddCandidate']),
    //
    //         addCandidate(): void {
    //             this['modals/showAddCandidate'](true);
    //         },
    //
    //         reset(ev: Event): void {
    //             ev.preventDefault();
    //         },
    //
    //         checkAll(checked: boolean): void {
    //             if (checked)
    //                 this.row_check = this.candidates.map(c => c.id);
    //             else
    //                 this.row_check = [];
    //         },
    //
    //         async loadCandidates(): Promise<void> {
    //             this.candidates = [];
    //             if (this.position_id) {
    //                 // load by position here
    //                 // replace code under
    //                 const loadedCandidates = await Candidate.instance.getAllCandidates();
    //                 this.candidates = this.candidates.concat(loadedCandidates);
    //             } else {
    //                 const loadedCandidates = await Candidate.instance.getAllCandidates();
    //                 this.candidates = this.candidates.concat(loadedCandidates);
    //             }
    //             this.loaded.candidate = true;
    //         }
    //     },
    //     computed: {
    //         tableItems(): any[] {
    //             return [...this.candidates];
    //         },
    //         tableFields(): any[] {
    //             return Object.keys(this.column_filters).reduce(
    //                 (fields: any[], filter: any) => {
    //                     if (this.column_filters[filter].check) {
    //                         return [
    //                             ...fields,
    //                             {
    //                                 key: filter,
    //                                 label: this.column_filters[filter].text,
    //                                 sortable: true
    //                             }
    //                         ];
    //                     } else {
    //                         return fields;
    //                     }
    //                 },
    //                 ["selected"]
    //             );
    //         }
    //     },
    //     mounted() {
    //         this.loadCandidates().catch(err => {
    //             console.log(err);
    //         });
    //     },
    // });
</script>
