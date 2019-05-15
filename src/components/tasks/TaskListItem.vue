<template>
    <b-list-group-item  :class="this_class"
                        @click="handleClick(item)">
        <div class="text-secondary">
            <div class="row">
                <div class="col-2 p-0 d-flex justify-content-center align-items-center">
                    <b-button class="task-check" title="Đánh dấu đã hoàn thành">
                        <i class="fas fa-check"></i>
                    </b-button>
                </div>
                <div class="col-10 container">
                    <h6 class="my-0">
                        <b>
                            {{item.title}}
                        </b>
                    </h6>
                    <i class="fas fa-clock"></i>
                    <small>
                        {{ new Date(item.deadline).toLocaleString() }}

                    </small>
                    <i class="fas fa-user"></i>
                    <small>
                        {{ item.assignee.name }}
                    </small>
                </div>
            </div>
        </div>
    </b-list-group-item>
</template>

<style lang="scss">
    .task {
        &-check {
            width: 40px;
            height: 40px;
            font-size: 1.25em;
            padding: 0;
            border: 3px solid #ccc;
            line-height: 40px;
            text-align: center;
            background-color: white;
            color: var(--secondary);
            border-radius: 50%;
            &:hover {
                border-color: var(--success);
                background-color: var(--success);
                color: white;
            }
        }
    }
    .task-list {
        &-item {
            border-left: 6px solid #ccc;
            &.currentActive {
                border-left-color: var(--success);
            }
        }
    }
</style>

<script lang="ts">
    import Vue from 'vue';

    export default Vue.extend({
        name: "TaskListItem",
        props: ['value'],
        computed: {
            item(): any {
                return this.value;
            },
            this_class(): any {
                if (typeof this.$attrs.class === "object") {
                    return {
                        ...(this.$attrs.class as object),
                        'task-list-item': true,
                    }
                } else {
                    return this.$attrs.class + ' task-list-item';
                }
            }
        },
        methods: {
            handleClick(item: any): void {
                this.$emit("click", item);
            }
        }
    })
</script>
