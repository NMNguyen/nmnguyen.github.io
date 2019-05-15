<template>
    <div class="d-flex flex-column" style="height: 100%;">
        <header class="flex-shrink-0">
            <div class="p-4">
                <b-dropdown text="Công việc được giao cho tôi" variant="custom-bg-color" class="mr-5">
                    <b-dropdown-item>Công việc được giao cho tôi</b-dropdown-item>
                    <b-dropdown-item>Công việc tôi đã giao</b-dropdown-item>
                </b-dropdown>
                <b-dropdown no-caret variant="custom-bg-color">
                    <template slot="button-content">
                        <i class="fas fa-cog"></i>
                    </template>
                    <b-dropdown-item>Công việc chưa hoàn thành</b-dropdown-item>
                    <b-dropdown-item>Công việc đã hoàn thành</b-dropdown-item>
                    <b-dropdown-item>Tất cả các công việc</b-dropdown-item>
                </b-dropdown>
                <b-button variant="blue" @click="showAddTask">
                    <i class="fas fa-plus"></i>
                </b-button>
            </div>
        </header>
        <!-- Task content -->
        <div class="d-flex flex-grow-1 overflow-auto p-4 tasks-stream">
            <!-- Left border -->
            <div v-if="loading" class="tasks-content">
                <vcl-code></vcl-code>
            </div>
            <div v-else class="tasks-content flex-shrink-0">
                <div class="tasks-section" v-for="(group, idx) in taskGroupOrder" :key="idx"
                     v-show="tasks[group].length > 0">
                    <h2 :class="group">{{group.toUpperCase()}}</h2>
                    <ul class="activity-stream task-list">
                        <li class="activity-container"
                            v-for="task in tasks[group]"
                            :class="{selected: task.id === currentTask.id, [`task-${group}`]: true}">
                            <div @click="showCurrentTask(task)">
                                <div class="activity task" :id="task.id">
                                    <div class="activity-type" v-show="task.is_done">
                                        <i class="fas fa-check inactive"></i>
                                    </div>
                                    <div class="activity-type" v-show="!task.is_done" @click="completeTask(task)">
                                        <i class="ng-hide fas fa-check inactive"></i>
                                        <i class="ng-hide fas fa-refresh fa-spin active"></i>
                                    </div>
                                    <div>
                                        <div class="activity-object ng-scope">
                                            <div class="activity-info">
                                                <div class="activity-body">
                                                    <p class="title">{{task.title}}</p>
                                                    <ul class="actions">
                                                        <li class="action">
                                                            <span class="datetime">
                                                                <i class="fa fa-clock"></i>
                                                                <span>Due </span>
                                                                <span class="ng-binding">{{new Date(task.deadline).toLocaleString()}}</span>
                                                            </span>
                                                        </li>
                                                        <li class="action">
                                                            <span>
                                                                <i class="fa fa-user"></i>
                                                                <span v-if="task.assignee">{{task.assignee.name}}</span>
                                                            </span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div><!-- end ngRepeat: group in taskGroupOrder -->
            </div>
            <!-- Right border -->
            <div class="flex-grow-1 overflow-auto ml-4 bg-light">
                <div style="background-color: white; padding: 20px;" v-if="!currentTask.id">
                    <vcl-facebook></vcl-facebook>
                </div>

                <!-- Upcoming task 1 -->
                <div v-if="currentTask.id" style="height: 100%" class="border p-3 text-secondary rounded">
                    <!-- Header -->
                    <div class="d-flex align-items-center">
                        <div class="task-check mx-2 flex-shrink-0" title="Đánh dấu đã hoàn thành">
                            <i class="fas fa-check"></i>
                        </div>
                        <div class="flex-grow-1">
                            <h5 class="my-0">
                                <b>{{ currentTask.title }}</b>
                            </h5>
                            <small>
                                <strong>Giao cho:</strong> {{ currentTask.assignee.name }}
                            </small>
                            <i class="fas fa-clock ml-2"></i>
                            <small>
                                <strong> Thời hạn:</strong> {{ new Date(currentTask.deadline).toLocaleString() }}
                            </small>
                            <!--                                <a class="mr-10" href="#">Xem Ứng Viên</a>-->
                        </div>
                        <div class="col-1">
                            <b-dropdown no-caret variant="custom-bg-color">
                                <template slot="button-content">
                                    <i class="fas fa-ellipsis-v"></i>
                                </template>
                                <b-dropdown-item @click="updateCurrentTask(currentTask)">Chỉnh sửa</b-dropdown-item>
                                <b-dropdown-item @click="deleteTask(currentTask)">Xóa</b-dropdown-item>
                            </b-dropdown>
                        </div>
                    </div>
                    <hr>
                    <!-- Content -->
                    <div class="container">
                        <h6>{{ currentTask.description}}</h6>
                        <div class="row">
                            <div class="col-1 d-flex align-items-center">
                                <i class="fas fa-hospital-symbol fa-2x text-success"></i>
                            </div>
                            <div class="col-10 container px-0">
                                <h6 class="my-0">
                                    <b>{{currentTask.assignee.name}}</b>
                                    <small> tạo công việc</small>
                                </h6>
                                <br>
                                <small>22h trước</small>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<style lang="scss">
    @import "~styles/_task.scss";
    @import "~styles/position_activity";
    @import "~styles/stream";
</style>


<script lang="ts">
    import Vue from 'vue';
    import {Datetime} from 'vue-datetime';
    import Moment from 'moment';
    import Task from '@/models/Task';
    import {mapGetters, mapMutations} from 'vuex';
    import {VclCode, VclFacebook} from 'vue-content-loading';
    import ModalWrapper from "@/components/ModalWrapper.vue";


    export default Vue.extend({
        name: 'home',
        components: {
            datetime: Datetime,
            VclCode,
            VclFacebook,
            ModalWrapper,
        },

        computed: {
            // mix the getters into computed with object spread operator
            ...mapGetters([
                'currentUser',
                'currentCompany',
                'getTask'
                // ...
            ]),

        },
        // watch: {
        //     getTask(val, oldVal) {
        //         // console.log(val);
        //         this.getAllTask();
        //     }
        // },
        data() {
            return {
                loading: true,
                taskGroupOrder: ['overdue', 'today', 'upcoming', 'complete'],
                tasks: {
                    overdue: [] as Task[],
                    today: [] as Task[],
                    upcoming: [] as Task[],
                    complete: [] as Task[],
                },
                currentTask: new Task() as Task,
            }
        },
        created() {
            console.log('get task before');
            this.getAllTask();

            this.$store.subscribe((mutation, state) => {
                if (mutation.type == "clearCurrentTask") {
                    this.getAllTask();
                }
            })

        },

        methods: {
            ...mapMutations(['updateCurrentTask', 'modals/showAddTask']
            ),
            showCurrentTask(task: Task) {
                this.currentTask = task;
            },
            deleteTask(task) {

                let self = this;

                // Trigger a confirmation dialog
                this.$dialog
                    .confirm('Bạn có chắc chắn?', {okText: "Xóa ngay", cancelText: "Thoát"})
                    .then(function (dialog) {
                        task.delete().then(data => {
                            self.getAllTask();

                        })
                    })
                    .catch(function () {
                        console.log('Clicked on cancel');
                    });
            },
            async getAllTask() {
                for (const group in this.tasks) {
                    this.tasks[group] = [];
                }
                const tasks = await Task.instance.getAllTasks();
                tasks.forEach(task=>{
                    const due = Moment(task.deadline);
                    const today = Moment(Date.now());

                    if (task.is_done) {
                        this.tasks.complete.push(task);
                    } else if (due.isBefore(today)) {
                        this.tasks.overdue.push(task);
                    } else if (due.isAfter(today)) {
                        this.tasks.upcoming.push(task);
                    } else {
                        this.tasks.today.push(task);
                    }
                });
                if (tasks.length > 0) {
                    this.currentTask = tasks[0];
                }
                this.loading = false;
            },
            showAddTask(): void {
                this['modals/showAddTask'](true);
            },
        }
    });
</script>
