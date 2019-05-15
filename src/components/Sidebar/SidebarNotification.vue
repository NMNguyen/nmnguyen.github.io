<template>
    <b-dropdown id="sidebar_notifications" variant="dark" no-caret class="p-0">
        <template slot="button-content">
            <i class="fas fa-bell position-relative">
                <span class="position-absolute" style="right: 0; bottom: 0">
                    <div class="rounded-circle bg-danger"></div>
                </span>
            </i>
        </template>

        <b-dropdown-text class="p-0" style="width: 300px">
            <b-tabs content-class="mt-3" style="width: 100%">
                <b-tab active>
                    <template slot="title">
                        <i class="fa fa-at"></i>
                        <span class="ml-2">Mentions</span>
                    </template>
                    <p class="status">
                        <i class="fa fa-at"></i>
                        <span>You don't have any mentions notifications yet.</span>
                    </p>
                </b-tab>
                <b-tab>
                    <template slot="title">
                        <i class="fa fa-users"></i>
                        <span class="ml-2">Candidates</span>
                    </template>
                    <ul>
                        <!-- ngRepeat: notification in shared.activeCompany.notifications.candidate -->
                        <li ng-repeat="notification in shared.activeCompany.notifications.candidate"
                            class="ng-scope">
                            <!-- ngInclude: undefined -->
                            <div src="getTemplate()" class="ng-scope">
                                <!-- ngIf: ::notification.type == "candidateAssignedPosted" -->
                                <div class="notification candidateAssignedPosted py-0">
                                    <div class="avatar">
                                        <div class="avatarCircle"
                                            style="width: 30px; height: 30px; background: #e32256">
                                            A
                                        </div>
                                    </div>
                                    <div class="activity-content">
                                        <div class="body my-0">
                                            <a href="#" class="ng-binding">Albert Hadley</a>
                                            <p>was assigned to you by Hong Le Viet</p>
                                        </div>
                                        <p class="timestamp"
                                            time-ago="time-ago"
                                            from-time="2019-04-18T02:37:09.421Z"
                                            tooltip-placement="bottom"
                                            uib-tooltip="Apr 18th @ 9:37 am"
                                            data-container="body my-0">3d Ago</p>
                                    </div>
                                </div>
                                <!-- end ngIf: ::notification.type == "candidateAssignedPosted" -->
                            </div>
                        </li>
                        <!-- end ngRepeat: notification in shared.activeCompany.notifications.candidate -->
                        <li
                            ng-repeat="notification in shared.activeCompany.notifications.candidate"
                            class="ng-scope"
                        >
                            <!-- ngInclude: undefined -->
                            <div src="getTemplate()" class="ng-scope">
                                <!-- ngIf: ::notification.type == "candidateAssignedPosted" -->
                                <div class="notification candidateAssignedPosted py-0">
                                    <div class="avatar">
                                        <div
                                            class="avatarCircle"
                                            style="width: 30px; height: 30px; background: #e32256"
                                        >A
                                        </div>
                                    </div>
                                    <div class="activity-content">
                                        <div class="body my-0">
                                            <a href="#" class="ng-binding">Albert Hadley</a>
                                            <p>
                                                <span>was assigned to you by</span>
                                                <span class="ng-binding">Hong Le Viet</span>
                                            </p>

                                        </div>
                                        <p
                                            class="timestamp"
                                            time-ago="time-ago"
                                            from-time="2019-04-16T07:46:02.695Z"
                                            tooltip-placement="bottom"
                                            uib-tooltip="Apr 16th @ 2:46 pm"
                                            data-container="body my-0"
                                        >5d Ago</p>
                                    </div>
                                </div>
                                <!-- end ngIf: ::notification.type == "candidateAssignedPosted" -->
                            </div>
                        </li>
                        <!-- end ngRepeat: notification in shared.activeCompany.notifications.candidate -->
                        <li
                            ng-repeat="notification in shared.activeCompany.notifications.candidate"
                            class="ng-scope"
                        >
                            <!-- ngInclude: undefined -->
                            <div src="getTemplate()" class="ng-scope">
                                <!-- ngIf: ::notification.type == "candidateAdded" -->
                                <div class="notification candidateAdded">
                                    <div class="avatar">
                                        <div
                                            class="avatarCircle"
                                            style="width: 30px; height: 30px; background: #e32256"
                                        >A
                                        </div>
                                    </div>
                                    <div class="activity-content">
                                        <p class="body my-0">
                                            <a href="#" class="ng-binding">Albert Hadley</a>
                                            <!-- ngIf: ::!notification.object.candidate.sourced_by && !notification.object.candidate.referred_by && !notification.object.candidate.recruited_by -->
                                            <!-- ngIf: ::notification.object.candidate.sourced_by -->
                                            <span class="ng-scope">
        added
        to
        </span>
                                            <!-- end ngIf: ::notification.object.candidate.sourced_by -->
                                            <!-- ngIf: ::notification.object.candidate.referred_by -->
                                            <!-- ngIf: ::notification.object.candidate.recruited_by -->
                                            <a href="#" class="ng-binding">Dev</a>
                                            <!-- ngIf: ::notification.object.candidate.sourced_by -->
                                            <span>
        by Hong Le
        Viet
        </span>
                                            <!-- end ngIf: ::notification.object.candidate.sourced_by -->
                                            <!-- ngIf: ::notification.object.candidate.referred_by -->
                                            <!-- ngIf: ::notification.object.candidate.recruited_by -->
                                        </p>
                                        <p
                                            class="timestamp"
                                            time-ago="time-ago"
                                            from-time="2019-04-16T06:58:58.362Z"
                                            tooltip-placement="bottom"
                                            uib-tooltip="Apr 16th @ 1:58 pm"
                                            data-container="body my-0"
                                        >5d Ago</p>
                                    </div>
                                </div>
                                <!-- end ngIf: ::notification.type == "candidateAdded" -->
                            </div>
                        </li>
                        <!-- end ngRepeat: notification in shared.activeCompany.notifications.candidate -->
                        <li
                            ng-repeat="notification in shared.activeCompany.notifications.candidate"
                            class="ng-scope"
                        >
                            <!-- ngInclude: undefined -->
                            <div src="getTemplate()" class="ng-scope">
                                <!-- ngIf: ::notification.type == "candidateAdded" -->
                                <div class="notification candidateAdded">
                                    <div class="avatar">
                                        <div class="avatarCircle" style="width: 30px; height: 30px">S</div>
                                    </div>
                                    <div class="activity-content">
                                        <p class="body my-0">
                                            <a href="#" class="ng-binding">SƠ YẾU LÝ</a>
                                            <!-- ngIf: ::!notification.object.candidate.sourced_by && !notification.object.candidate.referred_by && !notification.object.candidate.recruited_by -->
                                            <!-- ngIf: ::notification.object.candidate.sourced_by -->
                                            <span>added to </span>
                                            <!-- end ngIf: ::notification.object.candidate.sourced_by -->
                                            <!-- ngIf: ::notification.object.candidate.referred_by -->
                                            <!-- ngIf: ::notification.object.candidate.recruited_by -->
                                            <a href="#" class="ng-binding">Dev</a>
                                            <!-- ngIf: ::notification.object.candidate.sourced_by -->
                                            <span>by Hong Le Viet</span>
                                            <!-- end ngIf: ::notification.object.candidate.sourced_by -->
                                            <!-- ngIf: ::notification.object.candidate.referred_by -->
                                            <!-- ngIf: ::notification.object.candidate.recruited_by -->
                                        </p>
                                        <p
                                            class="timestamp"
                                            time-ago="time-ago"
                                            from-time="2019-04-14T14:25:36.222Z"
                                            tooltip-placement="bottom"
                                            uib-tooltip="Apr 14th @ 9:25 pm"
                                            data-container="body my-0"
                                        >7d Ago</p>
                                    </div>
                                </div>
                                <!-- end ngIf: ::notification.type == "candidateAdded" -->
                            </div>
                        </li>
                        <!-- end ngRepeat: notification in shared.activeCompany.notifications.candidate -->
                        <li>
                            <!-- ngInclude: undefined -->
                            <div src="getTemplate()" class="ng-scope">
                                <!-- ngIf: ::notification.type == "candidateAdded" -->
                                <div class="notification candidateAdded">
                                    <div class="avatar">
                                        <div class="avatarCircle" style="width: 30px; height: 30px">H</div>
                                    </div>
                                    <div class="activity-content">
                                        <p class="body my-0">
                                            <a href="#" class="ng-binding">Hong</a>
                                            <!-- ngIf: ::!notification.object.candidate.sourced_by && !notification.object.candidate.referred_by && !notification.object.candidate.recruited_by -->
                                            <!-- ngIf: ::notification.object.candidate.sourced_by -->
                                            <span>added to</span>
                                            <!-- end ngIf: ::notification.object.candidate.sourced_by -->
                                            <!-- ngIf: ::notification.object.candidate.referred_by -->
                                            <!-- ngIf: ::notification.object.candidate.recruited_by -->
                                            <a href="#" class="ng-binding">Dev</a>
                                            <!-- ngIf: ::notification.object.candidate.sourced_by -->
                                            <span>by Hong Le Viet</span>
                                            <!-- end ngIf: ::notification.object.candidate.sourced_by -->
                                            <!-- ngIf: ::notification.object.candidate.referred_by -->
                                            <!-- ngIf: ::notification.object.candidate.recruited_by -->
                                        </p>
                                        <p
                                            class="timestamp"
                                            time-ago="time-ago"
                                            from-time="2019-04-14T03:58:40.248Z"
                                            tooltip-placement="bottom"
                                            uib-tooltip="Apr 14th @ 10:58 am"
                                            data-container="body my-0"
                                        >
                                            7d
                                            Ago
                                        </p>
                                    </div>
                                </div>
                                <!-- end ngIf: ::notification.type == "candidateAdded" -->
                            </div>
                        </li>
                        <!-- end ngRepeat: notification in shared.activeCompany.notifications.candidate -->
                    </ul>
                </b-tab>
            </b-tabs>
        </b-dropdown-text>

    </b-dropdown>
    <!---->
    <!--<div class="dropdown">-->
    <!--<a-->
    <!--class="btn pl-0 py-0"-->
    <!--href="#"-->
    <!--id="dropdownNotification"-->
    <!--data-toggle="dropdown"-->
    <!--aria-haspopup="true"-->
    <!--aria-expanded="false"-->
    <!--&gt;-->
    <!--<i class="fas fa-bell text-secondary"></i>-->
    <!--</a>-->
    <!--<div class="sidebar-notifications dropdown-menu py-0" aria-labelledby="toggle-notification">-->

    <!--</div>-->
    <!--</div>-->
</template>

<style lang="css">
    .avatarCircle {
        color: #ffffff;
        background: #30a6d1;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .sidebar-notifications.dropdown-menu .nav-tabs .nav-item {
        flex-grow: 1;
        height: 50px;
    }

    .sidebar-notifications.dropdown-menu .nav-tabs .nav-item .nav-link {
        height: 50px;
        text-align: center;
    }

    .sidebar-notifications.dropdown-menu .tab-content {
        max-height: 300px;
        overflow-y: auto;
    }

    .dropdown-menu .status,
    .sidebar-notifications.dropdown-menu .status {
        color: #68747e;
        font-size: 12px;
        padding: 20px;
        text-align: center;
    }

    .dropdown-menu .status i,
    .sidebar-notifications.dropdown-menu .status i {
        font-size: 32px;
        display: block;
        margin-bottom: 5px;
    }

    .notification,
    .sidebar-notifications .notification {
        padding: 10px;
        border-bottom: 1px solid #edeff0;
        cursor: pointer;
        -webkit-transition: 0.3s;
        -moz-transition: 0.3s;
        -ms-transition: 0.3s;
        -o-transition: 0.3s;
        transition: 0.3s;
    }

    .notification:hover,
    .sidebar-notifications .notification:hover {
        background-color: #f9fafa;
    }

    .notification .avatar,
    .sidebar-notifications .notification .avatar {
        float: left;
    }

    .notification .activity-content,
    .sidebar-notifications .notification .activity-content {
        margin-left: 50px;
    }

    .notification .activity-content p,
    .sidebar-notifications .notification .activity-content p {
        font-size: 12px;
    }

    .notification .activity-content p strong,
    .sidebar-notifications .notification .activity-content p strong {
        font-weight: 400;
    }

    .notification.note .activity-content p.body my-0,
    .sidebar-notifications .notification.note .activity-content p.body my-0 {
        font-family: "freight-text-pro", "droid-serif", "Georgia", serif;
        background: #f3fdff;
        padding: 4px 10px;
        border-radius: 3px;
    }

    .notification .activity-content a,
    .sidebar-notifications .notification .activity-content a {
        padding: 0 !important;
        margin: 0 !important;
        font-weight: 400;
    }

    .notification .activity-content .timestamp,
    .sidebar-notifications .notification .activity-content .timestamp {
        font-size: 10px;
        color: #84929f;
    }

    .sidebar-notifications {
        width: 300px;
        padding-top: 0;
    }

    .sidebar-notifications.minimized {
        top: auto !important;
        display: block;
        left: 70px !important;
        right: auto;
        bottom: 20px;
    }

    #sidebar_notifications .nav-tabs .nav-item {
        flex-grow: 1;
    }


    .sidebar-notifications .notification-headers {
        overflow: hidden !important;
    }

    .sidebar-notifications .notification-header {
        display: inline-block;
        width: 50%;
        text-align: center;
        background-color: #f9fafa;
        position: relative;
    }

    .sidebar-notifications .notification-header .notification-header-section {
        border-bottom: 1px solid #edeff0;
        cursor: pointer;
        font-size: 14px;
        font-weight: 200;
        overflow: hidden;
        text-overflow: ellipsis;
        margin: 0;
        color: #68747e;
        padding: 10px 0;
    }

    .sidebar-notifications .notification-header.active {
        background-color: #fff;
    }

    .sidebar-notifications
    .notification-header.active
    .notification-header-section {
        border-bottom-color: #fff;
    }

    .sidebar-notifications .notification-header .unread {
        color: red;
        font-size: 7px;
        vertical-align: middle;
    }

    .sidebar-notifications .notification-header i {
        margin-right: 5px;
    }

    .sidebar-notifications .notification-header:nth-child(1) {
        border-right: 1px solid #edeff0;
    }

    .sidebar-notifications .notifications-list-container {
        overflow: auto;
        max-height: 300px;
    }

    .sidebar-notifications
    .notifications-list-container
    li:last-child
    .notification {
        border-bottom: none;
    }

    .sidebar-notifications .dropdown-menu {
        width: 300px;
        margin-top: 30px;
        padding-top: 0px !important;
        right: -10px;
    }

    .sidebar-notifications .dropdown-menu h2 {
        padding-left: 10px;
        line-height: 32px;
    }

    .sidebar-notifications .dropdown-menu ul {
        overflow-y: auto;
        overflow-x: hidden;
        max-height: 300px;
        width: 100%;
    }
</style>

<script lang="ts">
    import Vue from "vue";
    import {fauth} from "../../firebase";
    import {mapGetters} from "vuex";

    export default Vue.extend({
        props: {},
        computed: {
            // mix the getters into computed with object spread operator
            ...mapGetters([
                "currentUser",
                "currentCompany"
                // ...
            ])
        },
        methods: {}
    });
</script>
