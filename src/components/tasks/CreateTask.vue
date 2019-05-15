<template>

    <b-modal v-model="modalFlag">
        <div slot="modal-header">
            <h4 class="modal-title">Tạo công việc <br>
                <small class="text-secondary" style="font-size: 13px">Tạo và đăng công việc cho tôi
                    hoặc các thành viên
                </small>
            </h4>
        </div>
        <div slot="modal-footer">
            <!--            <button type="button" class="btn btn-danger" data-dismiss="modal">Đóng</button>-->
            <button type="button" class="btn btn-primary" @click="insertTask()">Tạo</button>
        </div>


        <!-- Modal body -->

        <!-- Task name -->
        <div class="container my-3">
            <input type="text" class="form-control" placeholder="Tên công việc" v-model="getTask.title"
                   style="border-width: 2px">
        </div>
        <!-- Task description -->
        <div class="container">
            <div class="form-group">
                        <textarea class="form-control" placeholder="Mô tả" rows="3" v-model="getTask.description"
                                  style="resize:none; border-width: 2px"></textarea>
            </div>
        </div>
        <!-- Attach file -->
<!--        <div class="container my-3">-->
<!--            <button class="btn btn-primary py-1 mr-2"-->
<!--                    style="border: none; position: relative; overflow: hidden;">-->
<!--                Đính kèm -->
<!--                <input id="tagFileEmail" type="file">-->
<!--            </button>-->
<!--        </div>-->
        <!-- Time picker -->
        <div class="container">
            <div class="row">
                <div class="col-sm-6">
                    <div class="form-group">
                        <datetime v-model="getTask.deadline" type="datetime" input-style="String"></datetime>
                    </div>
                </div>

            </div>
        </div>
        <!-- People who take the task -->
        <div class="container px-0">
            <div class="container dropdown">
                <!--                <button class="btn btn-white dropdown-toggle" type="button"-->
                <!--                        id="dropdownMenuButton"-->
                <!--                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"-->
                <!--                        style="width:400px;  text-align: left">-->
                <!--                    Người nhận công việc-->
                <!--                </button>-->
                <!--                hiện tại mỗi task giao cho 1 người thôi-->
                Giao cho
                <b-form-select v-model="getTask.assignee_id">
                    <option v-for="user in companyUsers" :value="user.id">{{user.name}}</option>


                </b-form-select>

            </div>
        </div>
        <div class="container" id="assignedPeople"></div>


    </b-modal>


</template>

<script>
    import {mapGetters, mapMutations} from "vuex";
    import {Datetime} from 'vue-datetime';
    import User from "../../models/User";

    export default {
        name: "createTask",
        components: {
            datetime: Datetime
        },
        data() {
            return {
                assignee: this.currentUser,
            }
        },
        mounted() {
            // debugger;

        },
        watch: {
            currentUser(val, oldVal) {
                // debugger;
                if (this.assignee == null) {
                    this.assignee = val;
                }
            }
        },
        computed: {

            // mix the getters into computed with object spread operator
            ...mapGetters([
                'currentUser',
                'currentCompany',
                'getTask',
                'modals/addTask',
                'companyUsers'

                // ...
            ]),
            modalFlag: {
                get() {
                    return this['modals/addTask']
                },
                set(val) {
                    this['modals/showAddTask'](val);
                }
            }
        },
        methods: {
            ...mapMutations([
                'modals/showAddTask',
                'clearCurrentTask'
            ]),
            insertTask() {
                // debugger;

                this.getTask.company_id = this.currentCompany.id;


                this.getTask.upsert().then(task => {
                    console.info("save task successfully");
                    this.modalFlag = false;

                    this.clearCurrentTask()
                });

            }
        }
    }
</script>

<style scoped>
    .form-control::placeholder {
        color: white;
    }
</style>
