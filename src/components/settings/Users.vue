<template>
    <div class="settings">
        <div class="main-content">
            <!-- ngIf: activeTab == "plan" -->
            <!-- ngIf: activeTab == "planBilling" -->
            <!-- ngIf: activeTab == "planConfirm" -->
            <!-- ngIf: activeTab == "planConfirmComplete" -->
            <!-- ngIf: activeTab == "users" -->
            <div class="team">
                <div class="header">
                    <h1>Quản lý các thành viên</h1>
                    <p>Quản lý nhóm người tham gia vào nỗ lực tuyển dụng tại Cloudjet.</p>
                    <div class="position">
                        <div class="section invite">
                            <button class="show-add-member btn btn-blue" @click="show()">
                                <i class="fa fa-envelope"></i>
                                <span>Mời thành viên</span>
                            </button>
                        </div>
                        <div class="section">
                            <h2>Pending Invitations</h2>
                            <ul class="list member-list">
                                <!-- ngRepeat: invite in team_invited -->
                            </ul>
                        </div>
                        <div class="section">
                            <h2>Thành viên</h2>
                            <b-list-group>
                                <b-list-group-item class="d-flex align-items-center" v-for="user in members" :key="user.id">
                                    <div class="" style="width: 64px">
                                        <img :src="user.avatar || 'https://ui-avatars.com/api/?name=' + user.name" alt=""
                                             class="avatar rounded-circle">
                                    </div>
                                    <div class="flex-grow-1 p-2">
                                        <h4><strong>{{user.name}}</strong></h4>
                                        <small>{{user.email}}</small>
                                    </div>
                                    <div class="p-2">
                                        <i class="fas fa-users"></i>&nbsp;
                                        Team
                                    </div>
                                    <div class="p-2">
                                        <b-dropdown variant="light" text="Company Admin">
                                            <b-dropdown-item>Company Admin</b-dropdown-item>
                                            <b-dropdown-item>Member</b-dropdown-item>
                                        </b-dropdown>
                                    </div>
                                    <div class="p-2">
                                        <a href="#" @click="console.log('delete')">
                                            <i class="fas fa-times"></i>
                                        </a>
                                    </div>
                                </b-list-group-item>
                            </b-list-group>
                        </div>
                    </div>
                </div>
            </div>

            <!-- end ngIf: activeTab == "users" -->
            <!-- ngIf: activeTab == "teams" -->
            <!-- ngIf: activeTab == "billing" -->
            <!-- ngIf: activeTab == "general" -->
        </div>
        <modal name="invite-members" :width="500" :height="420">
            <div class="modal-content">
                <div class="close" @click="hide()">
                    <i class="fa fa-times"></i>
                </div>
                <div class="modal-body">
                    <div class="team-permissions add-membership">
                        <div class="header">
                            <h1>Invite Users</h1>
                            <p>
                                Invite new users by email address.

                            </p>
                            <div class="section invite manage-hiring-teams">
                                <form name="form.formInviteUser" novalidate="novalidate">
                                    <div class="section invitation-container">
                                        <h2>Invite by Email</h2>
                                        <input
                                            class="invite"
                                            type="text"
                                            placeholder="e.g. kyle@company.com, julia@company.com"
                                            required="required"
                                        >
                                        <input
                                            type="password"
                                            class="invite"
                                            placeholder="password"
                                            required="required"
                                        >
                                        <ul class="user-type-selector" id="rad">
                                            <li class="user-type-option">
                                                <label for="radio-admin">
                                                    <input
                                                        v-model="x"
                                                        type="radio"
                                                        name="user-type"
                                                        id="radio-admin"
                                                        value="admin"
                                                        required="required"
                                                    >
                                                    <span>Add as Administrator</span>
                                                </label>
                                                <p v-show="x === 'admin'">
                                                    Company
                                                    administrators can invite new users, create, manage &amp; view
                                                    positions
                                                    &amp; pools as well as email templates, questionnaires &amp; other
                                                    company
                                                    wide resources.
                                                </p>
                                            </li>
                                            <li class="user-type-option">
                                                <label for="radio-member">
                                                    <input
                                                        v-model="x"
                                                        type="radio"
                                                        name="user-type"
                                                        id="radio-member"
                                                        value="member"
                                                        required="required"
                                                    >
                                                    <span>Add as Member</span>
                                                </label>
                                                <p v-show="x === 'member'">
                                                    Members
                                                    only see the positions &amp; pools they're involved with.
                                                </p>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="add-member-actions">
                                        <button class="btn btn-none" type="button">
                                            <span>Cancel</span>
                                        </button>
                                        <button class="btn btn-blue" type="submit">
                      <span>
                        <i class="fa fa-envelope"></i>
                        <span class="form-inactive">
                          Invite
                          User(s)
                        </span>
                        <span class="form-active">Sending...</span>
                      </span>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </modal>
    </div>
</template>


<script lang="ts">
    import Vue from "vue";
    import {mapGetters} from "vuex";
    import Company from "@/models/Company";
    import {User} from "firebase";

    export default Vue.extend({
        data(){
            return {
                x:'member'
            }
        },
        methods: {
            show() {
                this.$modal.show("invite-members");
            },
            hide() {
                this.$modal.hide("invite-members");
            },
            // mix the getters into computed with object spread operator
            ...mapGetters([
                'currentUser',
                'currentCompany',
                // ...
            ]),
        },
        computed: {
            members(): any[]
            {
                return [
                    {
                        name: "Hong",
                        email: "hong@cjs.vn",
                    },
                    {
                        name: "Phuong",
                        email: "phuong@cjs.vn",
                    }
                ];
            }
        }
    });
</script>
