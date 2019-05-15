<template>
    <div class="p-3">
        <!-- Header -->
        <div class="float-right">
            <b-button v-bind:variant="sendType !== 'sms' ? 'info' : 'light'" @click="sendType = 'message'">Soạn tin nhắn</b-button>
        </div>

        <h3>Các cuộc trò chuyện</h3>
        <div class="px-0">
            <strong>Vị trí:</strong>&nbsp;
            <span class="ml-2">
                <i class="icon fa fa-circle fa-sm text-info"></i>&nbsp;
                <small>{{position}}</small>
            </span>
        </div>

        <!-- Compose email -->
        <div id="ComposeMessage" v-show="sendType === 'message'">
            <div class="container px-0">
                <div class="row d-flex align-items-center">
                    <div class="col-3 d-flex justify-content-start">
                        <small class="text-secondary">
                            <strong>Đến:</strong>
                        </small>
                    </div>
                    <div class="col-9">
                        <small>{{candidate.email}}</small>
                    </div>
                </div>
            </div>
            <div class="d-flex justify-content-end">
                <a href="#" onclick="addCC()" id="addCCBtn">+Bản sao</a>
                <a href="#" onclick="addBCC()" id="addBCCBtn">+Bản sao tạm</a>
            </div>
            <div class="container px-0" id="mailSubject">
                <div class="row py-1">
                    <div class="col-3 pr-0 d-flex justify-content-start align-items-center">
                        <small class="text-secondary">
                            <strong>Chủ đề:</strong>
                        </small>
                    </div>
                    <div class="col-9">
                        <b-form-input type="text" style="height: 30px; font-size: 13px" v-model="message.topic"/>
                    </div>
                </div>
            </div>
            <div class="px-0 my-2">
                <b-form-textarea id="emailTexter" rows="3" class="rounded text-secondary"
                    v-model="message.text">
                </b-form-textarea>
            </div>
            <div class="d-flex justify-content-end">
                <b-button tag="label" for="tagFileEmail" variant="secondary" class="m-0">
                    <i class="fas fa-paperclip"></i>
                    <input id="tagFileEmail" type="file" style="visibility: hidden">
                </b-button>
                <!-- Send email buttons -->
                <div class="d-flex">
                    <button class="btn btn-primary btn-sm"
                        style="height: 100%"
                        onclick="sendEmail()">
                        <i class="fas fa-envelope"></i>&nbsp;
                        <small>Gửi thư</small>
                    </button>
                    <div class="position-relative">
                        <button class="btn btn-primary" @click="datepicker.show = !datepicker.show">
                            <i class="fas fa-clock"></i>
                            {{messageSchedule}}
                        </button>
                        <div class="position-absolute shadow p-3" style="right: 0" v-if="datepicker.show">
                            <Datepicker v-model="message.date" @dp-change="datepicker.show = false"
                                        ref="datepicker" :config="{inline: true}"></Datepicker>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <InboxMessages v-model="conversation"></InboxMessages>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    // @ts-ignore
    import Datepicker from "vue-bootstrap-datetimepicker";
    import 'pc-bootstrap4-datetimepicker/build/css/bootstrap-datetimepicker.min.css';
    import InboxMessages from "@/components/Inbox/InboxMessages.vue";

    export default Vue.extend({
        name: 'InboxDetailColumn',
        props: ['value'],
        components: {
            Datepicker,
            InboxMessages,
        },
        data() {
            return {
                sendType: '',
                message: {
                    topic: 'Re: Cloudjet opportunity',
                    text: '',
                    date: null as Date | null,
                },
                datepicker: {
                    show: false,
                }
            }
        },
        computed: {
            conversation(): any
            {
                return this.value.conversation;
            },

            position(): any
            {
                return this.value.candidate ? this.value.candidate.position : 'Unknown';
            },

            candidate(): any
            {
                return this.value.candidate || {};
            },

            messageSchedule(): string
            {
                if (this.message.date)
                {
                    return new Date(this.message.date).toLocaleString();
                } else {
                    return '';
                }
            }
        },
    })
</script>
