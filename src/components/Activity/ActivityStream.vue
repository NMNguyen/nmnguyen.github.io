<template>
    <div class="candidates-activity-full position">
        <div class="activity-stream-container"><h1>Activity Stream</h1>
            <ul class="activity-stream" ng-show="isViewInitialized" style=""><!-- ngRepeat: activity in stream -->
                <li class="activity-container ng-scope" ng-repeat="activity in stream"
                    ng-class="activity.postPageload ? &quot;new&quot;: &quot;&quot;">
                    <!-- ngInclude: '/templates/v2/app/stream/stream.html' -->
                    <div ng-include="'/templates/v2/app/stream/stream.html'" class="ng-scope">
                        <!-- ngIf: ::activity.type == "companyNotePosted" -->
                        <!-- ngIf: ::activity.type == "candidateDeleted" -->
                        <!-- ngIf: ::activity.type == "candidateAdded" -->
                        <!-- ngIf: ::activity.type == "candidateStatusUpdated" -->
                        <!-- ngInclude: '/templates/v2/app/stream/_activity.candidate.status.update.html' -->
                        <div ng-include="'/templates/v2/app/stream/_activity.candidate.status.update.html'"
                             ng-if="::activity.type == &quot;candidateStatusUpdated&quot;" class="ng-scope">
                            <div class="activity candidate-status-update candidateStatusUpdated" id="1b45f103b72d">
                                <div class="activity-object low-priority">
                                    <div class="activity-type"><i class="fas fa-arrows-h"></i></div>
                                    <div class="activity-info">
                                        <div class="activity-timestamp">
                                            <span class="timestamp ng-binding"
                                                  time-ago="time-ago"
                                                  from-time="2019-05-06T05:21:02.172Z"
                                                  tooltip-placement="bottom"
                                                  uib-tooltip="May 6th @ 12:21 pm"
                                                  data-container="body">3d Ago</span>
                                        </div>
                                        <div class="activity-header">
                                            <p class="author-name ng-binding">
                                                Hong Le Viet<span> updated </span>
                                                <a href="#" ng-click="navigateToCandidate(activity.object.candidate._id, activity.object.candidate.position_id, $event)"
                                                   class="ng-binding">
                                                    Nguyễn Minh Nguyên
                                                </a><span> </span>
                                                <span class="ng-binding">Not Available&nbsp;
                                                    <i class="fas fa-arrow-right"></i>
                                                </span>
                                                <span class="capitialize ng-binding"> Default</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div><!-- end ngIf: ::activity.type == "candidateStatusUpdated" -->
                        <!-- ngIf: ::activity.type == "companyPositionStateUpdated" -->
                        <!-- ngIf: ::activity.type == "candidateConsentRequested" -->
                        <!-- ngIf: ::activity.type == "candidateConsentUpdated" -->
                        <!-- ngIf: ::activity.type == "messageFromCandidatePosted" -->
                        <!-- ngIf: ::activity.type == "messageFromExternalUserPosted" -->
                        <!-- ngIf: ::activity.type == "messageToCandidatePosted" -->
                        <!-- ngIf: ::activity.type == "candidateDocumentAdded" -->
                        <!-- ngIf: ::activity.type == "candidateDocumentDeleted" -->
                        <!-- ngIf: ::activity.type == "candidateInterviewCancel" -->
                        <!-- ngIf: ::activity.type == "candidateInterviewAdded" -->
                        <!-- ngIf: ::activity.type == "candidateMeetingTimesProposed" -->
                        <!-- ngIf: ::activity.type == "candidateAssignedPosted" -->
                        <!-- ngIf: ::activity.type == "companyPositionAdded" -->
                        <!-- ngIf: ::activity.type == "companyPositionUpdated" -->
                        <!-- ngIf: ::activity.type == "taskAdded" --><!-- ngIf: ::activity.type == "taskUpdated" -->
                        <!-- ngIf: ::activity.type == "taskAssigneeUpdated" -->
                        <!-- ngIf: ::activity.type == "taskDueDateUpdated" -->
                        <!-- ngIf: ::activity.type == "taskDeleted" --><!-- ngIf: ::activity.type == "taskCompleted" -->
                        <!-- ngIf: ::activity.type == "candidateReminder" --></div>
                </li><!-- end ngRepeat: activity in stream -->
                <li class="activity-container ng-scope" ng-repeat="activity in stream"
                    ng-class="activity.postPageload ? &quot;new&quot;: &quot;&quot;">
                    <!-- ngInclude: '/templates/v2/app/stream/stream.html' -->
                    <div ng-include="'/templates/v2/app/stream/stream.html'" class="ng-scope">
                        <!-- ngIf: ::activity.type == "companyNotePosted" -->
                        <!-- ngIf: ::activity.type == "candidateDeleted" -->
                        <!-- ngIf: ::activity.type == "candidateAdded" -->
                        <!-- ngIf: ::activity.type == "candidateStatusUpdated" -->
                        <!-- ngInclude: '/templates/v2/app/stream/_activity.candidate.status.update.html' -->
                        <div ng-include="'/templates/v2/app/stream/_activity.candidate.status.update.html'"
                             ng-if="::activity.type == &quot;candidateStatusUpdated&quot;" class="ng-scope">
                            <div class="activity candidate-status-update candidateStatusUpdated" id="48cee92c2ba1">
                                <div class="activity-object low-priority">
                                    <div class="activity-type"><i class="fas fa-arrows-h"></i></div>
                                    <div class="activity-info">
                                        <div class="activity-timestamp"><span class="timestamp ng-binding"
                                                                              time-ago="time-ago"
                                                                              from-time="2019-05-06T05:20:55.101Z"
                                                                              tooltip-placement="bottom"
                                                                              uib-tooltip="May 6th @ 12:20 pm"
                                                                              data-container="body">3d Ago</span></div>
                                        <div class="activity-header"><p class="author-name ng-binding">Hong Le
                                            Viet<span> updated </span><a href="#"
                                                                         ng-click="navigateToCandidate(activity.object.candidate._id, activity.object.candidate.position_id, $event)"
                                                                         class="ng-binding">Nguyễn Minh
                                                Nguyên</a><span> </span><span class="ng-binding">Available <i
                                                class="fas fa-arrow-right"></i></span><span
                                                class="capitialize ng-binding"> Not Available</span></p></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li><!-- end ngRepeat: activity in stream -->
                <li class="activity-container ng-scope" ng-repeat="activity in stream"
                    ng-class="activity.postPageload ? &quot;new&quot;: &quot;&quot;">
                    <div ng-include="'/templates/v2/app/stream/stream.html'" class="ng-scope">
                        <div ng-include="'/templates/v2/app/stream/_activity.candidate.added.html'"
                             ng-if="::activity.type == &quot;candidateAdded&quot;" class="ng-scope">
                            <div class="activity candidate-added candidateAdded" id="f976da2e4196">
                                <div class="activity-object low-priority">
                                    <div class="activity-type"><i class="fas fa-user"></i></div>
                                    <div class="activity-info">
                                        <div class="activity-timestamp"><span class="timestamp ng-binding"
                                                                              time-ago="time-ago"
                                                                              from-time="2019-05-06T05:16:48.514Z"
                                                                              tooltip-placement="bottom"
                                                                              uib-tooltip="May 6th @ 12:16 pm"
                                                                              data-container="body">3d Ago</span></div>
                                        <div class="activity-header"><p class="author-name"><a href="#"
                                                                                               ng-click="navigateToCandidate(activity.object.candidate._id, activity.object.position._id)"
                                                                                               class="ng-binding">Nguyễn
                                            Minh Nguyên</a>
                                            <!-- ngIf: ::!activity.object.candidate.sourced_by && !activity.object.candidate.referred_by && !activity.object.candidate.recruited_by -->
                                            <!-- ngIf: ::activity.object.candidate.sourced_by --><span
                                                ng-if="::activity.object.candidate.sourced_by" class="ng-scope"> was added to </span>
                                            <!-- end ngIf: ::activity.object.candidate.sourced_by -->
                                            <!-- ngIf: ::activity.object.candidate.referred_by -->
                                            <!-- ngIf: ::activity.object.candidate.recruited_by --><a href="#"
                                                                                                      class="ng-binding">123</a>
                                            <!-- ngIf: ::activity.object.candidate.sourced_by --><span
                                                ng-if="::activity.object.candidate.sourced_by"
                                                class="ng-binding ng-scope"> by Hong Le Viet</span>
                                        </p></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li><!-- end ngRepeat: activity in stream -->
                <li class="activity-container ng-scope" ng-repeat="activity in stream"
                    ng-class="activity.postPageload ? &quot;new&quot;: &quot;&quot;">
                    <!-- ngInclude: '/templates/v2/app/stream/stream.html' -->
                    <div ng-include="'/templates/v2/app/stream/stream.html'" class="ng-scope">
                        <div class="ng-scope">
                            <div class="activity companyPositionUpdated" id="67ffc467c14c">
                                <div class="activity-object low-priority">
                                    <div class="activity-type"><i class="fas fa-briefcase"></i></div>
                                    <div class="activity-info">
                                        <div class="activity-timestamp">
                                            <span class="timestamp ng-binding"
                                                  time-ago="time-ago"
                                                  from-time="2019-05-06T05:07:26.021Z"
                                                  tooltip-placement="bottom"
                                                  uib-tooltip="May 6th @ 12:07 pm"
                                                  data-container="body">3d Ago</span>
                                        </div>
                                        <div class="activity-header"><p class="author-name ng-binding">Hong Le
                                            Viet<span> updated the position: </span><strong
                                                class="ng-binding">123</strong></p></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li><!-- end ngRepeat: activity in stream -->
                <li class="activity-container ng-scope" ng-repeat="activity in stream"
                    ng-class="activity.postPageload ? &quot;new&quot;: &quot;&quot;">
                    <!-- ngInclude: '/templates/v2/app/stream/stream.html' -->
                    <div ng-include="'/templates/v2/app/stream/stream.html'" class="ng-scope">
                        <div ng-include="'/templates/v2/app/stream/_activity.position.added.html'"
                             ng-if="::activity.type == &quot;companyPositionAdded&quot;" class="ng-scope">
                            <div class="activity position-added ng-scope" id="49d72e2d2c64">
                                <div class="activity-object low-priority">
                                    <div class="activity-type"><i class="fas fa-briefcase"></i></div>
                                    <div class="activity-info">
                                        <div class="activity-timestamp">
                                            <span class="timestamp ng-binding"
                                              time-ago="time-ago"
                                              from-time="2019-05-06T05:07:17.988Z"
                                              tooltip-placement="bottom"
                                              uib-tooltip="May 6th @ 12:07 pm"
                                              data-container="body">3d Ago</span>
                                        </div>
                                        <div class="activity-header"><p class="author-name ng-binding">Hong Le Viet
                                            <!-- ngIf: activity.object.position.org_type === "pool" --><span
                                                ng-if="activity.object.position.org_type === &quot;pool&quot;"
                                                class="ng-scope"> added candidate pool: </span>
                                            <!-- end ngIf: activity.object.position.org_type === "pool" -->
                                            <!-- ngIf: activity.object.position.org_type !== "pool" --><strong
                                                class="ng-binding">123</strong></p></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="activity-last-item">
                    <div class="dot"></div>
                </li>
            </ul>
            <div class="timeline" ng-show="isViewInitialized" style=""></div>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';

    export default Vue.extend({
        name: "ActivityStream",
    })
</script>
