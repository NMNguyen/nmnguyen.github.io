<template>
    <div class="py-3 pr-3">
        <div class="activity-stream-container with-end-dot">
            <div class="timeline"></div>
            <ul class="activity-stream">
                <!-- ngRepeat: activity in conversation | removePending -->
                <li class="activity-container">
                    <!-- ngInclude: undefined -->
                    <div src="getTemplate()" activity="activity" class="ng-scope">
                        <div class="activity candidate-assigned candidateReminder" id="15aa8d9265a4">
                            <div class="activity-object low-priority">
                                <div class="activity-type">
                                    <i class="fa fa-bell"></i>
                                </div>
                                <div class="activity-info">
                                    <div class="activity-timestamp">
                    <span
                        class="timestamp ng-binding"
                        time-ago="time-ago"
                        from-time="2019-04-20T12:05:00.061Z"
                        tooltip-placement="bottom"
                        uib-tooltip="Apr 20th @ 7:05 pm"
                        data-container="body"
                    >1d Ago</span>
                                    </div>
                                    <div class="activity-header">
                                        <p class="author-name">
                                            Meeting reminder
                                            <span>sent to</span>
                                            <strong>Albert Hadley</strong>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <!-- end ngRepeat: activity in conversation | removePending -->
                <li class="activity-container">
                    <!-- ngInclude: undefined -->
                    <div src="getTemplate()" activity="activity" class="ng-scope">
                        <div
                            class="activity candidate-interview-added candidatePanelInterviewAdded"
                            id="4297d3172ff3"
                        >
                            <div class="activity-object low-priority">
                                <div class="activity-type">
                                    <i class="fa fa-calendar-alt"></i>
                                </div>
                                <div class="activity-info">
                                    <div class="activity-timestamp">
                    <span
                        class="timestamp ng-binding"
                        time-ago="time-ago"
                        from-time="2019-04-18T11:21:02.748Z"
                        tooltip-placement="bottom"
                        uib-tooltip="Apr 18th @ 6:21 pm"
                        data-container="body"
                    >3d Ago</span>
                                    </div>
                                    <!-- ngIf: activity.object.panel_interview.num_interviews === 1 -->
                                    <div
                                        class="activity-header ng-scope"
                                        ng-if="activity.object.panel_interview.num_interviews === 1"
                                    >
                                        <p class="author-name ng-binding">
                                            Hong Le Viet
                                            <span>scheduled a meeting:</span>
                                        </p>
                                    </div>
                                    <!-- end ngIf: activity.object.panel_interview.num_interviews === 1 -->
                                    <!-- ngIf: activity.object.panel_interview.num_interviews > 1 -->
                                    <div class="activity-body">
                                        <!-- ngIf: activity.object.panel_interview.num_interviews > 1 -->
                                        <!-- ngIf: activity.object.panel_interview.num_interviews === 1 -->
                                        <p
                                            class="title ng-binding ng-scope"
                                            ng-if="activity.object.panel_interview.num_interviews === 1"
                                        >Albert Hadley Meeting (Dev)</p>
                                        <!-- end ngIf: activity.object.panel_interview.num_interviews === 1 -->
                                        <p class="datetime">
                                            <i class="fa fa-calendar-alt"></i>
                                            <span class="capitalize ng-binding">Sat, Apr 20 7:15 PM</span>
                                            <span>&nbsp;to&nbsp;</span>
                                            <span class="capitalize ng-binding">8:15 PM</span>
                                        </p>
                                        <ul class="attendees">
                                            <!-- ngRepeat: attendee in ::activity.object.panel_interview.participants -->
                                            <li
                                                class="attendee ng-scope"
                                                ng-repeat="attendee in ::activity.object.panel_interview.participants"
                                            >
                                                <avatar person="attendee"
                                                    size="xs"
                                                    class="ng-isolate-scope xs avatar color4"
                                                    initial="H">
                                                    <img src="https://breezy-avatars.imgix.net/8b49f/20190325095513.jpg?w=200&amp;h=200&amp;crop=faces&amp;fit=crop">
                                                </avatar>
                                            </li>
                                            <!-- end ngRepeat: attendee in ::activity.object.panel_interview.participants -->
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <!-- end ngRepeat: activity in conversation | removePending -->
                <li class="activity-container">
                    <!-- ngInclude: undefined -->
                    <div src="getTemplate()" activity="activity" class="ng-scope">
                        <div class="activity company-message messageToCandidatePosted" id="bd2006c754d5">
                            <div class="activity-object high-priority">
                                <div class="activity-type">
                                    <i class="fa fa-envelope"></i>
                                </div>
                                <avatar
                                    person="activity.object.acting_user"
                                    size="sm"
                                    class="ng-isolate-scope sm avatar color4"
                                    initial="H"
                                >
                                    <img
                                        src="https://breezy-avatars.imgix.net/8b49f/20190325095513.jpg?w=200&amp;h=200&amp;crop=faces&amp;fit=crop"
                                    >
                                </avatar>
                                <div
                                    class="activity-info"
                                    ng-class="{'activity-error': activity.object.state === 'error'}"
                                >
                                    <div class="activity-timestamp">
                                        <!-- ngIf: ::activity.object.delivery_method !== "sms" -->
                                        <i
                                            class="fa fa-envelope ng-scope"
                                            ng-if="::activity.object.delivery_method !== &quot;sms&quot;"
                                            tooltip-placement="bottom"
                                            uib-tooltip="via email"
                                        ></i>
                                        <!-- end ngIf: ::activity.object.delivery_method !== "sms" -->
                                        <!-- ngIf: ::activity.object.delivery_method === "sms" -->
                                        <span
                                            class="timestamp ng-binding"
                                            time-ago="time-ago"
                                            from-time="2019-04-18T11:21:02.739Z"
                                            tooltip-placement="bottom"
                                            uib-tooltip="Apr 18th @ 6:21 pm"
                                            data-container="body"
                                        >3d Ago</span>
                                    </div>
                                    <div class="activity-header">
                                        <p class="author-name ng-binding">
                                            Hong Le Viet
                                            <!-- ngIf: ::position._id !== activity.object.position_id -->
                                        </p>
                                        <!-- ngIf: ::activity.object.cc && activity.object.cc.length > 0 -->
                                        <!-- ngIf: ::activity.object.bcc && activity.object.bcc.length > 0 -->
                                    </div>
                                    <div class="activity-body default-css">
                                        <div
                                            marked="activity.object.body"
                                            truncate-height-to="140"
                                            class="ng-isolate-scope"
                                        >
                                            <p>Hi Albert,</p>
                                            <p>
                                                You're confirmed for the following interview on
                                                <strong>Apr 20th</strong>:
                                            </p>
                                            <p>
                                                <strong>Albert Hadley Meeting (Dev)</strong>
                                                <br>7:15pm - 8:15pm +07 with Hong Le Viet
                                                <br>Location: CJS
                                            </p>
                                            <p>If you have any questions, just let me know.</p>
                                            <p>
                                                Thanks,
                                                <br>Hong Le Viet
                                            </p>
                                        </div>
                                    </div>
                                    <div class="clearfix">
                                        <!-- ngIf: ::activity.object.attachments.length > 0 -->
                                        <div class="activity-footer">
                                            <!-- ngIf: activity.object.state === 'error' -->
                                            <!-- ngIf: activity.mail && activity.mail.state === 'bounce' -->
                                            <div
                                                class="activity-error ng-scope"
                                                ng-if="activity.mail &amp;&amp; activity.mail.state === 'bounce'"
                                            >
                                                <i class="fa fa-exclamation-circle"></i>
                                                <span>Email not delivered (bounced)</span>
                                            </div>
                                            <!-- end ngIf: activity.mail && activity.mail.state === 'bounce' -->
                                            <!-- ngIf: activity.last_message_seen -->
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <!-- end ngRepeat: activity in conversation | removePending -->
                <li class="activity-container">
                    <!-- ngInclude: undefined -->
                    <div src="getTemplate()" activity="activity" class="ng-scope">
                        <div class="activity candidate-interview-added candidatePanelInterviewAdded"
                             id="0af3719c7219">
                            <div class="activity-object low-priority">
                                <div class="activity-type">
                                    <i class="fa fa-calendar-alt"></i>
                                </div>
                                <div class="activity-info">
                                    <div class="activity-timestamp">
                    <span class="timestamp ng-binding"
                          time-ago="time-ago"
                          from-time="2019-04-18T11:18:25.171Z"
                          tooltip-placement="bottom"
                          uib-tooltip="Apr 18th @ 6:18 pm"
                          data-container="body">3d Ago</span>
                                    </div>
                                    <!-- ngIf: activity.object.panel_interview.num_interviews === 1 -->
                                    <div
                                        class="activity-header ng-scope"
                                        ng-if="activity.object.panel_interview.num_interviews === 1"
                                    >
                                        <p class="author-name ng-binding">
                                            Hong Le Viet
                                            <span>scheduled a meeting:</span>
                                        </p>
                                    </div>
                                    <!-- end ngIf: activity.object.panel_interview.num_interviews === 1 -->
                                    <!-- ngIf: activity.object.panel_interview.num_interviews > 1 -->
                                    <div class="activity-body">
                                        <!-- ngIf: activity.object.panel_interview.num_interviews > 1 -->
                                        <!-- ngIf: activity.object.panel_interview.num_interviews === 1 -->
                                        <p
                                            class="title ng-binding ng-scope"
                                            ng-if="activity.object.panel_interview.num_interviews === 1"
                                        >Albert Hadley Meeting (Dev)</p>
                                        <!-- end ngIf: activity.object.panel_interview.num_interviews === 1 -->
                                        <p class="datetime">
                                            <i class="fa fa-calendar-alt"></i>
                                            <span class="capitalize ng-binding">Fri, Apr 19 7:00 PM</span>
                                            <span>&nbsp;to&nbsp;</span>
                                            <span class="capitalize ng-binding">8:00 PM</span>
                                        </p>
                                        <ul class="attendees">
                                            <!-- ngRepeat: attendee in ::activity.object.panel_interview.participants -->
                                            <li
                                                class="attendee ng-scope"
                                                ng-repeat="attendee in ::activity.object.panel_interview.participants"
                                            >
                                                <avatar
                                                    person="attendee"
                                                    size="xs"
                                                    class="ng-isolate-scope xs avatar color4"
                                                    initial="H"
                                                >
                                                    <img
                                                        src="https://breezy-avatars.imgix.net/8b49f/20190325095513.jpg?w=200&amp;h=200&amp;crop=faces&amp;fit=crop"
                                                    >
                                                </avatar>
                                            </li>
                                            <!-- end ngRepeat: attendee in ::activity.object.panel_interview.participants -->
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <!-- end ngRepeat: activity in conversation | removePending -->
                <li class="activity-container">
                    <!-- ngInclude: undefined -->
                    <div src="getTemplate()" activity="activity" class="ng-scope">
                        <div class="activity company-message messageToCandidatePosted" id="2144ff50aefb">
                            <div class="activity-object high-priority">
                                <div class="activity-type">
                                    <i class="fa fa-envelope"></i>
                                </div>
                                <avatar
                                    person="activity.object.acting_user"
                                    size="sm"
                                    class="ng-isolate-scope sm avatar color4"
                                    initial="H"
                                >
                                    <img
                                        src="https://breezy-avatars.imgix.net/8b49f/20190325095513.jpg?w=200&amp;h=200&amp;crop=faces&amp;fit=crop"
                                    >
                                </avatar>
                                <div
                                    class="activity-info"
                                    ng-class="{'activity-error': activity.object.state === 'error'}"
                                >
                                    <div class="activity-timestamp">
                                        <!-- ngIf: ::activity.object.delivery_method !== "sms" -->
                                        <i
                                            class="fa fa-envelope ng-scope"
                                            ng-if="::activity.object.delivery_method !== &quot;sms&quot;"
                                            tooltip-placement="bottom"
                                            uib-tooltip="via email"
                                        ></i>
                                        <!-- end ngIf: ::activity.object.delivery_method !== "sms" -->
                                        <!-- ngIf: ::activity.object.delivery_method === "sms" -->
                                        <span
                                            class="timestamp ng-binding"
                                            time-ago="time-ago"
                                            from-time="2019-04-18T11:18:25.161Z"
                                            tooltip-placement="bottom"
                                            uib-tooltip="Apr 18th @ 6:18 pm"
                                            data-container="body"
                                        >3d Ago</span>
                                    </div>
                                    <div class="activity-header">
                                        <p class="author-name ng-binding">
                                            Hong Le Viet
                                            <!-- ngIf: ::position._id !== activity.object.position_id -->
                                        </p>
                                        <!-- ngIf: ::activity.object.cc && activity.object.cc.length > 0 -->
                                        <!-- ngIf: ::activity.object.bcc && activity.object.bcc.length > 0 -->
                                    </div>
                                    <div class="activity-body default-css">
                                        <div
                                            marked="activity.object.body"
                                            truncate-height-to="140"
                                            class="ng-isolate-scope"
                                        >
                                            <p>Hi Albert,</p>
                                            <p>
                                                You're confirmed for the following interview on
                                                <strong>Apr 19th</strong>:
                                            </p>
                                            <p>
                                                <strong>Albert Hadley Meeting (Dev)</strong>
                                                <br>7:00pm - 8:00pm +07 with Hong Le Viet
                                                <br>Location: CJS
                                                <br>Video Meeting:
                                                <a
                                                    target="_blank"
                                                    href="https://app.breezy.hr/conversation/3d0a72e12cf5/video/11eaa9ff9f81"
                                                >Open Meeting</a>
                                            </p>
                                            <p>If you have any questions, just let me know.</p>
                                            <p>
                                                Thanks,
                                                <br>Hong Le Viet
                                            </p>
                                        </div>
                                    </div>
                                    <div class="clearfix">
                                        <!-- ngIf: ::activity.object.attachments.length > 0 -->
                                        <div class="activity-footer">
                                            <!-- ngIf: activity.object.state === 'error' -->
                                            <!-- ngIf: activity.mail && activity.mail.state === 'bounce' -->
                                            <div
                                                class="activity-error ng-scope"
                                                ng-if="activity.mail &amp;&amp; activity.mail.state === 'bounce'"
                                            >
                                                <i class="fa fa-exclamation-circle"></i>
                                                <span>Email not delivered (bounced)</span>
                                            </div>
                                            <!-- end ngIf: activity.mail && activity.mail.state === 'bounce' -->
                                            <!-- ngIf: activity.last_message_seen -->
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <!-- end ngRepeat: activity in conversation | removePending -->
                <li class="activity-container">
                    <!-- ngInclude: undefined -->
                    <div src="getTemplate()" activity="activity" class="ng-scope">
                        <div
                            class="activity candidate-interview-added candidatePanelInterviewAdded"
                            id="f1b347e02b04"
                        >
                            <div class="activity-object low-priority">
                                <div class="activity-type">
                                    <i class="fa fa-calendar-alt"></i>
                                </div>
                                <div class="activity-info">
                                    <div class="activity-timestamp">
                    <span
                        class="timestamp ng-binding"
                        time-ago="time-ago"
                        from-time="2019-04-18T11:15:27.074Z"
                        tooltip-placement="bottom"
                        uib-tooltip="Apr 18th @ 6:15 pm"
                        data-container="body"
                    >3d Ago</span>
                                    </div>
                                    <!-- ngIf: activity.object.panel_interview.num_interviews === 1 -->
                                    <div
                                        class="activity-header ng-scope"
                                        ng-if="activity.object.panel_interview.num_interviews === 1"
                                    >
                                        <p class="author-name ng-binding">
                                            Hong Le Viet
                                            <span>scheduled a meeting:</span>
                                        </p>
                                    </div>
                                    <!-- end ngIf: activity.object.panel_interview.num_interviews === 1 -->
                                    <!-- ngIf: activity.object.panel_interview.num_interviews > 1 -->
                                    <div class="activity-body">
                                        <!-- ngIf: activity.object.panel_interview.num_interviews > 1 -->
                                        <!-- ngIf: activity.object.panel_interview.num_interviews === 1 -->
                                        <p
                                            class="title ng-binding ng-scope"
                                            ng-if="activity.object.panel_interview.num_interviews === 1"
                                        >Albert Hadley Meeting (Dev)</p>
                                        <!-- end ngIf: activity.object.panel_interview.num_interviews === 1 -->
                                        <p class="datetime">
                                            <i class="fa fa-calendar-alt"></i>
                                            <span class="capitalize ng-binding">Fri, Apr 19 9:00 PM</span>
                                            <span>&nbsp;to&nbsp;</span>
                                            <span class="capitalize ng-binding">10:00 PM</span>
                                        </p>
                                        <ul class="attendees">
                                            <!-- ngRepeat: attendee in ::activity.object.panel_interview.participants -->
                                            <li
                                                class="attendee ng-scope"
                                                ng-repeat="attendee in ::activity.object.panel_interview.participants"
                                            >
                                                <avatar
                                                    person="attendee"
                                                    size="xs"
                                                    class="ng-isolate-scope xs avatar color4"
                                                    initial="H"
                                                >
                                                    <img
                                                        src="https://breezy-avatars.imgix.net/8b49f/20190325095513.jpg?w=200&amp;h=200&amp;crop=faces&amp;fit=crop"
                                                    >
                                                </avatar>
                                            </li>
                                            <!-- end ngRepeat: attendee in ::activity.object.panel_interview.participants -->
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <!-- end ngRepeat: activity in conversation | removePending -->
                <li class="activity-container">
                    <!-- ngInclude: undefined -->
                    <div src="getTemplate()" activity="activity" class="ng-scope">
                        <div
                            class="activity candidate-interview-added candidatePanelInterviewAdded"
                            id="bd92b23ddaeb"
                        >
                            <div class="activity-object low-priority">
                                <div class="activity-type">
                                    <i class="fa fa-calendar-alt"></i>
                                </div>
                                <div class="activity-info">
                                    <div class="activity-timestamp">
                    <span
                        class="timestamp ng-binding"
                        time-ago="time-ago"
                        from-time="2019-04-18T11:14:16.578Z"
                        tooltip-placement="bottom"
                        uib-tooltip="Apr 18th @ 6:14 pm"
                        data-container="body"
                    >3d Ago</span>
                                    </div>
                                    <!-- ngIf: activity.object.panel_interview.num_interviews === 1 -->
                                    <div
                                        class="activity-header ng-scope"
                                        ng-if="activity.object.panel_interview.num_interviews === 1"
                                    >
                                        <p class="author-name ng-binding">
                                            Hong Le Viet
                                            <span>scheduled a meeting:</span>
                                        </p>
                                    </div>
                                    <!-- end ngIf: activity.object.panel_interview.num_interviews === 1 -->
                                    <!-- ngIf: activity.object.panel_interview.num_interviews > 1 -->
                                    <div class="activity-body">
                                        <!-- ngIf: activity.object.panel_interview.num_interviews > 1 -->
                                        <!-- ngIf: activity.object.panel_interview.num_interviews === 1 -->
                                        <p
                                            class="title ng-binding ng-scope"
                                            ng-if="activity.object.panel_interview.num_interviews === 1"
                                        >Albert Hadley Meeting (Dev)</p>
                                        <!-- end ngIf: activity.object.panel_interview.num_interviews === 1 -->
                                        <p class="datetime">
                                            <i class="fa fa-calendar-alt"></i>
                                            <span class="capitalize ng-binding">Thu, May 30 9:00 PM</span>
                                            <span>&nbsp;to&nbsp;</span>
                                            <span class="capitalize ng-binding">10:00 PM</span>
                                        </p>
                                        <ul class="attendees">
                                            <!-- ngRepeat: attendee in ::activity.object.panel_interview.participants -->
                                            <li
                                                class="attendee ng-scope"
                                                ng-repeat="attendee in ::activity.object.panel_interview.participants"
                                            >
                                                <avatar
                                                    person="attendee"
                                                    size="xs"
                                                    class="ng-isolate-scope xs avatar color4"
                                                    initial="H"
                                                >
                                                    <img
                                                        src="https://breezy-avatars.imgix.net/8b49f/20190325095513.jpg?w=200&amp;h=200&amp;crop=faces&amp;fit=crop"
                                                    >
                                                </avatar>
                                            </li>
                                            <!-- end ngRepeat: attendee in ::activity.object.panel_interview.participants -->
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <!-- end ngRepeat: activity in conversation | removePending -->
                <li class="activity-container">
                    <!-- ngInclude: undefined -->
                    <div src="getTemplate()" activity="activity" class="ng-scope">
                        <div class="activity company-message messageToCandidatePosted" id="3ee409fa15aa">
                            <div class="activity-object high-priority">
                                <div class="activity-type">
                                    <i class="fa fa-envelope"></i>
                                </div>
                                <avatar
                                    person="activity.object.acting_user"
                                    size="sm"
                                    class="ng-isolate-scope sm avatar color4"
                                    initial="H"
                                >
                                    <img
                                        src="https://breezy-avatars.imgix.net/8b49f/20190325095513.jpg?w=200&amp;h=200&amp;crop=faces&amp;fit=crop"
                                    >
                                </avatar>
                                <div
                                    class="activity-info"
                                    ng-class="{'activity-error': activity.object.state === 'error'}"
                                >
                                    <div class="activity-timestamp">
                                        <!-- ngIf: ::activity.object.delivery_method !== "sms" -->
                                        <i
                                            class="fa fa-envelope ng-scope"
                                            ng-if="::activity.object.delivery_method !== &quot;sms&quot;"
                                            tooltip-placement="bottom"
                                            uib-tooltip="via email"
                                        ></i>
                                        <!-- end ngIf: ::activity.object.delivery_method !== "sms" -->
                                        <!-- ngIf: ::activity.object.delivery_method === "sms" -->
                                        <span
                                            class="timestamp ng-binding"
                                            time-ago="time-ago"
                                            from-time="2019-04-18T11:14:16.563Z"
                                            tooltip-placement="bottom"
                                            uib-tooltip="Apr 18th @ 6:14 pm"
                                            data-container="body"
                                        >3d Ago</span>
                                    </div>
                                    <div class="activity-header">
                                        <p class="author-name ng-binding">
                                            Hong Le Viet
                                            <!-- ngIf: ::position._id !== activity.object.position_id -->
                                        </p>
                                        <!-- ngIf: ::activity.object.cc && activity.object.cc.length > 0 -->
                                        <!-- ngIf: ::activity.object.bcc && activity.object.bcc.length > 0 -->
                                    </div>
                                    <div class="activity-body default-css">
                                        <div
                                            marked="activity.object.body"
                                            truncate-height-to="140"
                                            class="ng-isolate-scope"
                                        >
                                            <p>Hi Albert,</p>
                                            <p>
                                                You're confirmed for the following interview on
                                                <strong>May 30th</strong>:
                                            </p>
                                            <p>
                                                <strong>Albert Hadley Meeting (Dev)</strong>
                                                <br>9:00pm - 10:00pm +07 with Hong Le Viet
                                                <br>Location: CJS
                                                <br>Video Meeting:
                                                <a
                                                    target="_blank"
                                                    href="https://app.breezy.hr/conversation/3d0a72e12cf5/video/558d9a7b883c"
                                                >Open Meeting</a>
                                                <br>Test thử
                                            </p>
                                            <p>If you have any questions, just let me know.</p>
                                            <p>
                                                Thanks,
                                                <br>Hong Le Viet
                                            </p>
                                        </div>
                                    </div>
                                    <div class="clearfix">
                                        <!-- ngIf: ::activity.object.attachments.length > 0 -->
                                        <div class="activity-footer">
                                            <!-- ngIf: activity.object.state === 'error' -->
                                            <!-- ngIf: activity.mail && activity.mail.state === 'bounce' -->
                                            <div
                                                class="activity-error ng-scope"
                                                ng-if="activity.mail &amp;&amp; activity.mail.state === 'bounce'"
                                            >
                                                <i class="fa fa-exclamation-circle"></i>
                                                <span>Email not delivered (bounced)</span>
                                            </div>
                                            <!-- end ngIf: activity.mail && activity.mail.state === 'bounce' -->
                                            <!-- ngIf: activity.last_message_seen -->
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <!-- end ngRepeat: activity in conversation | removePending -->
                <li class="activity-container">
                    <!-- ngInclude: undefined -->
                    <div src="getTemplate()" activity="activity" class="ng-scope">
                        <div
                            class="activity candidate-interview-added candidatePanelInterviewAdded"
                            id="f9a902f37c76"
                        >
                            <div class="activity-object low-priority">
                                <div class="activity-type">
                                    <i class="fa fa-calendar-alt"></i>
                                </div>
                                <div class="activity-info">
                                    <div class="activity-timestamp">
                    <span
                        class="timestamp ng-binding"
                        time-ago="time-ago"
                        from-time="2019-04-16T07:42:50.132Z"
                        tooltip-placement="bottom"
                        uib-tooltip="Apr 16th @ 2:42 pm"
                        data-container="body"
                    >5d Ago</span>
                                    </div>
                                    <!-- ngIf: activity.object.panel_interview.num_interviews === 1 -->
                                    <div
                                        class="activity-header ng-scope"
                                        ng-if="activity.object.panel_interview.num_interviews === 1"
                                    >
                                        <p class="author-name ng-binding">
                                            Hong Le Viet
                                            <span>scheduled a meeting:</span>
                                        </p>
                                    </div>
                                    <!-- end ngIf: activity.object.panel_interview.num_interviews === 1 -->
                                    <!-- ngIf: activity.object.panel_interview.num_interviews > 1 -->
                                    <div class="activity-body">
                                        <!-- ngIf: activity.object.panel_interview.num_interviews > 1 -->
                                        <!-- ngIf: activity.object.panel_interview.num_interviews === 1 -->
                                        <p
                                            class="title ng-binding ng-scope"
                                            ng-if="activity.object.panel_interview.num_interviews === 1"
                                        >Albert Hadley Meeting (Dev)</p>
                                        <!-- end ngIf: activity.object.panel_interview.num_interviews === 1 -->
                                        <p class="datetime">
                                            <i class="fa fa-calendar-alt"></i>
                                            <span class="capitalize ng-binding">Thu, Apr 18 3:45 PM</span>
                                            <span>&nbsp;to&nbsp;</span>
                                            <span class="capitalize ng-binding">4:45 PM</span>
                                        </p>
                                        <ul class="attendees">
                                            <!-- ngRepeat: attendee in ::activity.object.panel_interview.participants -->
                                            <li
                                                class="attendee ng-scope"
                                                ng-repeat="attendee in ::activity.object.panel_interview.participants"
                                            >
                                                <avatar
                                                    person="attendee"
                                                    size="xs"
                                                    class="ng-isolate-scope xs avatar color4"
                                                    initial="H"
                                                >
                                                    <img
                                                        src="https://breezy-avatars.imgix.net/8b49f/20190325095513.jpg?w=200&amp;h=200&amp;crop=faces&amp;fit=crop"
                                                    >
                                                </avatar>
                                            </li>
                                            <!-- end ngRepeat: attendee in ::activity.object.panel_interview.participants -->
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <!-- end ngRepeat: activity in conversation | removePending -->
                <li class="activity-container">
                    <!-- ngInclude: undefined -->
                    <div src="getTemplate()" activity="activity" class="ng-scope">
                        <div
                            class="activity candidate-interview-added candidatePanelInterviewAdded"
                            id="f3f38bc99e13"
                        >
                            <div class="activity-object low-priority">
                                <div class="activity-type">
                                    <i class="fa fa-calendar-alt"></i>
                                </div>
                                <div class="activity-info">
                                    <div class="activity-timestamp">
                    <span
                        class="timestamp ng-binding"
                        time-ago="time-ago"
                        from-time="2019-04-16T07:42:25.428Z"
                        tooltip-placement="bottom"
                        uib-tooltip="Apr 16th @ 2:42 pm"
                        data-container="body"
                    >5d Ago</span>
                                    </div>
                                    <!-- ngIf: activity.object.panel_interview.num_interviews === 1 -->
                                    <div
                                        class="activity-header ng-scope"
                                        ng-if="activity.object.panel_interview.num_interviews === 1"
                                    >
                                        <p class="author-name ng-binding">
                                            Hong Le Viet
                                            <span>scheduled a meeting:</span>
                                        </p>
                                    </div>
                                    <!-- end ngIf: activity.object.panel_interview.num_interviews === 1 -->
                                    <!-- ngIf: activity.object.panel_interview.num_interviews > 1 -->
                                    <div class="activity-body">
                                        <!-- ngIf: activity.object.panel_interview.num_interviews > 1 -->
                                        <!-- ngIf: activity.object.panel_interview.num_interviews === 1 -->
                                        <p
                                            class="title ng-binding ng-scope"
                                            ng-if="activity.object.panel_interview.num_interviews === 1"
                                        >Albert Hadley Meeting (Dev)</p>
                                        <!-- end ngIf: activity.object.panel_interview.num_interviews === 1 -->
                                        <p class="datetime">
                                            <i class="fa fa-calendar-alt"></i>
                                            <span class="capitalize ng-binding">Wed, Apr 17 3:45 PM</span>
                                            <span>&nbsp;to&nbsp;</span>
                                            <span class="capitalize ng-binding">4:45 PM</span>
                                        </p>
                                        <ul class="attendees">
                                            <!-- ngRepeat: attendee in ::activity.object.panel_interview.participants -->
                                            <li
                                                class="attendee ng-scope"
                                                ng-repeat="attendee in ::activity.object.panel_interview.participants"
                                            >
                                                <avatar
                                                    person="attendee"
                                                    size="xs"
                                                    class="ng-isolate-scope xs avatar color4"
                                                    initial="H"
                                                >
                                                    <img
                                                        src="https://breezy-avatars.imgix.net/8b49f/20190325095513.jpg?w=200&amp;h=200&amp;crop=faces&amp;fit=crop"
                                                    >
                                                </avatar>
                                            </li>
                                            <!-- end ngRepeat: attendee in ::activity.object.panel_interview.participants -->
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <!-- end ngRepeat: activity in conversation | removePending -->
                <li class="activity-container">
                    <!-- ngInclude: undefined -->
                    <div src="getTemplate()" activity="activity" class="ng-scope">
                        <div class="activity company-message messageToCandidatePosted" id="f9b3e519f813">
                            <div class="activity-object high-priority">
                                <div class="activity-type">
                                    <i class="fa fa-envelope"></i>
                                </div>
                                <avatar
                                    person="activity.object.acting_user"
                                    size="sm"
                                    class="ng-isolate-scope sm avatar color4"
                                    initial="H"
                                >
                                    <img
                                        src="https://breezy-avatars.imgix.net/8b49f/20190325095513.jpg?w=200&amp;h=200&amp;crop=faces&amp;fit=crop"
                                    >
                                </avatar>
                                <div
                                    class="activity-info"
                                    ng-class="{'activity-error': activity.object.state === 'error'}"
                                >
                                    <div class="activity-timestamp">
                                        <!-- ngIf: ::activity.object.delivery_method !== "sms" -->
                                        <i
                                            class="fa fa-envelope ng-scope"
                                            ng-if="::activity.object.delivery_method !== &quot;sms&quot;"
                                            tooltip-placement="bottom"
                                            uib-tooltip="via email"
                                        ></i>
                                        <!-- end ngIf: ::activity.object.delivery_method !== "sms" -->
                                        <!-- ngIf: ::activity.object.delivery_method === "sms" -->
                                        <span
                                            class="timestamp ng-binding"
                                            time-ago="time-ago"
                                            from-time="2019-04-16T07:42:25.409Z"
                                            tooltip-placement="bottom"
                                            uib-tooltip="Apr 16th @ 2:42 pm"
                                            data-container="body"
                                        >5d Ago</span>
                                    </div>
                                    <div class="activity-header">
                                        <p class="author-name ng-binding">
                                            Hong Le Viet
                                            <!-- ngIf: ::position._id !== activity.object.position_id -->
                                        </p>
                                        <!-- ngIf: ::activity.object.cc && activity.object.cc.length > 0 -->
                                        <!-- ngIf: ::activity.object.bcc && activity.object.bcc.length > 0 -->
                                    </div>
                                    <div class="activity-body default-css">
                                        <div
                                            marked="activity.object.body"
                                            truncate-height-to="140"
                                            class="ng-isolate-scope"
                                        >
                                            <p>Hi Albert,</p>
                                            <p>
                                                You're confirmed for the following interview on
                                                <strong>Apr 17th</strong>:
                                            </p>
                                            <p>
                                                <strong>Albert Hadley Meeting (Dev)</strong>
                                                <br>3:45pm - 4:45pm +07 with Hong Le Viet
                                                <br>Location: CJS
                                                <br>Video Meeting:
                                                <a
                                                    target="_blank"
                                                    href="https://app.breezy.hr/conversation/3d0a72e12cf5/video/3c0640c51b04"
                                                >Open Meeting</a>
                                            </p>
                                            <p>If you have any questions, just let me know.</p>
                                            <p>
                                                Thanks,
                                                <br>Hong Le Viet
                                            </p>
                                        </div>
                                    </div>
                                    <div class="clearfix">
                                        <!-- ngIf: ::activity.object.attachments.length > 0 -->
                                        <div class="activity-footer">
                                            <!-- ngIf: activity.object.state === 'error' -->
                                            <!-- ngIf: activity.mail && activity.mail.state === 'bounce' -->
                                            <div
                                                class="activity-error ng-scope"
                                                ng-if="activity.mail &amp;&amp; activity.mail.state === 'bounce'"
                                            >
                                                <i class="fa fa-exclamation-circle"></i>
                                                <span>Email not delivered (bounced)</span>
                                            </div>
                                            <!-- end ngIf: activity.mail && activity.mail.state === 'bounce' -->
                                            <!-- ngIf: activity.last_message_seen -->
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <!-- end ngRepeat: activity in conversation | removePending -->
            </ul>
            <!-- ngIf: conversation.length > 0 && conversation.length % 50 == 0 -->
        </div>
    </div>
</template>

<style lang="scss">
    @import "~styles/activity_stream";
</style>


<script lang="ts">
    import Vue from "vue";

    export default Vue.extend({
        name: "InboxMessages",
        props: ["value"],
        components: {},
        data() {
            return {
                sendType: "",
                message: {
                    topic: "Re: Cloudjet opportunity",
                    text: "",
                    date: null as Date | null
                },
                datepicker: {
                    show: false
                }
            };
        },
        computed: {
            conversation(): any {
                return this.value.conversation;
            },

            position(): any {
                return this.value.candidate ? this.value.candidate.position : "Unknown";
            },

            candidate(): any {
                return this.value.candidate || {};
            },

            messageSchedule(): string {
                if (this.message.date) {
                    return new Date(this.message.date).toLocaleString();
                } else {
                    return "";
                }
            }
        }
    });
</script>
