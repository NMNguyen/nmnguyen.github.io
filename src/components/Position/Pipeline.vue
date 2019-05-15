<template>
    <div class="about d-flex flex-column" style="height: 100%">
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
                    <!-- Roomy dropdown -->
                    <b-dropdown class="mx-3" variant="light">
                        <template slot="button-content">
                            <i class="fas fa-bars"></i>
                            Không gian
                        </template>
                        <b-dropdown-item href="#">Ấm cúng</b-dropdown-item>
                        <b-dropdown-item href="#">Rộng rãi</b-dropdown-item>
                    </b-dropdown>
                </div>
                <!-- Right buttons -->
                <div class="d-flex">
                    <!-- Add candidate button -->
                    <b-button class="mx-2" variant="primary" @click="addCandidate">
                        <i class="fas fa-plus"></i>&nbsp;
                        Thêm ứng viên
                    </b-button>
                </div>
            </div>
        </header>
        <!-- Task content -->
        <div class="d-flex flex-grow-1 overflow-auto">
            <!-- Left border -->
            <FilterColumn class="flex-shrink-0" :open="filterNav.open"/>
            <!-- Right border -->
            <div class="lists-container flex-grow-1 overflow-auto pb-2" style="height: 100%">
                <ul class="lists-container roomy overflow-auto"
                    style="width: 100%; height: 100%;"
                    id="lists-container" scroll-on-drag="scroll-on-drag">
                    <div class="list-column-wrapper orphaned">
                        <div class="list-column">
                            <div class="list-column-header">
                                <ul class="stage-actions">
                                    <li>
                                        <div class="btn-group dropdown">
                                            <button
                                                class="btn dropdown-toggle"
                                                type="button"
                                                aria-haspopup="true"
                                                aria-expanded="false"
                                            >
                                                <i class="fas fa-ellipsis-v"></i>
                                            </button>
                                            <ul class="dropdown-menu" role="menu">
                                                <li>
                                                    <a href="#">
                                                        Move
                                                        Candidates
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        Delete
                                                        Candidates
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                                <i class="icon fas fa-question-circle"></i>
                                <h5 title="Orphaned">
                                    Missing Stage
                                    <span class="column-count">1</span>
                                </h5>
                            </div>
                            <ul class="list candidate-list">
                                <li class="card small still">
                                    <div>
                                        <div class="card-box candidate">
                                            <div
                                                class="unseen-marker"
                                                tooltip-placement="bottom"
                                                uib-tooltip="Unseen"
                                                data-container="body"
                                                tooltip-append-to-body="true"
                                            ></div>
                                            <div class="candidate-container">
                                                <div class="candidate-color-bar-container">
                                                    <ul class="color-bars"></ul>
                                                </div>
                                                <div
                                                    person="candidate"
                                                    size="sm"
                                                    show-score-sm="show-score-sm"
                                                    class="sm avatar color1"
                                                >S
                                                </div>
                                                <div class="candidate-info">
                                                    <div class="candidate-header-actions">
                            <span class="actions dropdown">
                              <a
                                  class="fas fa-chevron-down"
                                  data-toggle="dropdown"
                                  href="#"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                              ></a>
                              <ul class="dropdown-menu">
                                <li class="dropdown-item">
                                  <a>Team Message</a>
                                </li>
                                <li class="dropdown-item">
                                  <a>Follow</a>
                                </li>
                                <li class="dropdown-item">
                                  <a>Copy</a>
                                </li>
                                <li class="dropdown-item">
                                  <a>Delete</a>
                                </li>
                              </ul>
                            </span>
                                                    </div>
                                                    <div class="candidate-header">
                                                        <h5>
                                                            <span>SƠ YẾU LÝ</span>
                                                        </h5>
                                                    </div>
                                                    <div class="candidate-body">
                                                        <p class="headline">
                                                            Added by
                                                            Hong Le Viet
                                                        </p>
                                                    </div>
                                                    <div class="candidate-footer">
                                                        <ul class="statuses">
                                                            <li
                                                                tooltip-placement="bottom"
                                                                uib-tooltip="Sourced"
                                                                data-container="body"
                                                            >
                                                                <span class="fas fa-upload"></span>
                                                                <span class="source-name">
                                  Added by:
                                  Hong Le Viet
                                </span>
                                                            </li>
                                                            <li>
                                                                <a class="fas fa-star" href="#"></a>
                                                            </li>
                                                        </ul>
                                                        <ul class="timestamps">
                                                            <li
                                                                tooltip-placement="bottom"
                                                                uib-tooltip="Apr 14th @ 9:25 pm"
                                                                tooltip-append-to-body="true"
                                                                data-container="body"
                                                            >
                                                                <i class="fas fa-clock"></i>
                                                                <span
                                                                    class="timestamp lowercase"
                                                                    time-ago="time-ago"
                                                                    from-time="2019-04-14T14:25:31.200Z"
                                                                >
                                  9d
                                  Ago
                                </span>
                                                            </li>
                                                            <li
                                                                tooltip-placement="bottom"
                                                                uib-tooltip="Apr 14th @ 9:25 pm"
                                                                tooltip-append-to-body="true"
                                                                data-container="body"
                                                            >
                                                                <i class="fas fa-bolt"></i>
                                                                <span
                                                                    class="timestamp lowercase"
                                                                    time-ago="time-ago"
                                                                    from-time="2019-04-14T14:25:34.650Z"
                                                                >
                                  9d
                                  Ago
                                </span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="card-loader" fas fa->
                                    <div class="bouncywrap">
                                        <div class="dotcon dc1">
                                            <div class="dot"></div>
                                        </div>
                                        <div class="dotcon dc2">
                                            <div class="dot"></div>
                                        </div>
                                        <div class="dotcon dc3">
                                            <div class="dot"></div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div
                        class="list-column-wrapper"
                        dnd-list="candidates[stage.id]"
                        dnd-drop="onDrop(stage.id, item)"
                    >
                        <div class="list-column">
                            <div class="list-column-header">
                                <ul class="stage-actions">
                                    <li>
                                        <button class="btn add-candidate">
                                            <i class="fas fa-plus"></i>
                                        </button>
                                        <div class="btn-group dropdown">
                                            <button
                                                class="btn dropdown-toggle"
                                                type="button"
                                                aria-haspopup="true"
                                                aria-expanded="false"
                                            >
                                                <i class="fas fa-ellipsis-v"></i>
                                            </button>
                                            <ul class="dropdown-menu" role="menu">
                                                <li>
                                                    <a href="#">
                                                        Edit
                                                        Stage Actions
                                                    </a>
                                                </li>
                                                <li class="divider"></li>
                                                <li>
                                                    <a href="#">
                                                        Move
                                                        to Stage
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        Delete
                                                        Candidates
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                                <i class="icon fas fa-user"></i>
                                <h5 title="Applied">
                                    Applied
                                    <span class="column-count">2</span>
                                </h5>
                            </div>
                            <ul class="list candidate-list">
                                <li class="card small still">
                                    <div>
                                        <div class="card-box candidate assigned">
                                            <div
                                                class="unseen-marker"
                                                tooltip-placement="bottom"
                                                uib-tooltip="Unseen"
                                                data-container="body"
                                                tooltip-append-to-body="true"
                                            ></div>
                                            <div class="candidate-container">
                                                <div class="candidate-color-bar-container">
                                                    <ul class="color-bars">
                                                        <li class="assigned-bar">
                                                            <div
                                                                class="bar assigned"
                                                                tooltip-placement="bottom"
                                                                uib-tooltip="Assigned to You"
                                                                data-container="body"
                                                            ></div>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div
                                                    person="candidate"
                                                    size="sm"
                                                    show-score-sm="show-score-sm"
                                                    class="sm avatar color2"
                                                >A
                                                </div>
                                                <div class="candidate-info">
                                                    <div class="candidate-header-actions">
                            <span class="actions dropdown">
                              <a
                                  class="fas fa-chevron-down"
                                  data-toggle="dropdown"
                                  href="#"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                              ></a>
                              <ul class="dropdown-menu">
                                <li>
                                  <a>
                                    Send
                                    Email
                                  </a>
                                </li>
                                <li>
                                  <a>
                                    Send
                                    Questionnaire
                                  </a>
                                </li>
                                <li>
                                  <a>
                                    Schedule
                                    Meeting
                                  </a>
                                </li>
                                <li>
                                  <a>
                                    Team
                                    Message
                                  </a>
                                </li>

                                <li>
                                  <a>Follow</a>
                                </li>
                                <li>
                                  <a>Copy</a>
                                </li>
                                <li>
                                  <a>Delete</a>
                                </li>
                              </ul>
                            </span>
                                                    </div>
                                                    <div class="candidate-header">
                                                        <h5>
                                                            <span>Albert Hadley</span>
                                                        </h5>
                                                    </div>
                                                    <div class="candidate-body">
                                                        <p class="headline">
                                                            Web
                                                            Developer @ Company Unknown
                                                        </p>
                                                    </div>
                                                    <div class="candidate-footer">
                                                        <ul class="statuses">
                                                            <li
                                                                tooltip-placement="bottom"
                                                                uib-tooltip="Sourced"
                                                                data-container="body"
                                                            >
                                                                <span class="fas fa-upload"></span>
                                                                <span class="source-name">
                                  Added by:
                                  Hong Le Viet
                                </span>
                                                            </li>
                                                            <li>
                                                                <a class="fas fa-star starred" href="#"></a>
                                                            </li>
                                                        </ul>
                                                        <ul class="timestamps">
                                                            <li
                                                                tooltip-placement="bottom"
                                                                uib-tooltip="Apr 16th @ 1:58 pm"
                                                                tooltip-append-to-body="true"
                                                                data-container="body"
                                                            >
                                                                <i class="fas fa-clock"></i>
                                                                <span
                                                                    class="timestamp lowercase"
                                                                    time-ago="time-ago"
                                                                    from-time="2019-04-16T06:58:53.327Z"
                                                                >
                                  7d
                                  Ago
                                </span>
                                                            </li>
                                                            <li
                                                                tooltip-placement="bottom"
                                                                uib-tooltip="Apr 21st @ 3:41 pm"
                                                                tooltip-append-to-body="true"
                                                                data-container="body"
                                                            >
                                                                <i class="fas fa-bolt"></i>
                                                                <span
                                                                    class="timestamp lowercase"
                                                                    time-ago="time-ago"
                                                                    from-time="2019-04-21T08:41:33.026Z"
                                                                >
                                  2d
                                  Ago
                                </span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="card small still">
                                    <div>
                                        <div class="card-box candidate good">
                                            <div
                                                class="unseen-marker"
                                                tooltip-placement="bottom"
                                                uib-tooltip="Unseen"
                                                data-container="body"
                                                tooltip-append-to-body="true"
                                            ></div>
                                            <div class="candidate-container">
                                                <div class="candidate-color-bar-container">
                                                    <ul class="color-bars">
                                                        <li class="score-bar">
                                                            <div
                                                                class="bar good"
                                                                tooltip-placement="bottom"
                                                                uib-tooltip="Scored"
                                                                data-container="body"
                                                            ></div>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div
                                                    person="candidate"
                                                    size="sm"
                                                    show-score-sm="show-score-sm"
                                                    class="sm avatar color1 good"
                                                    score-sm="2"
                                                >H
                                                </div>
                                                <div class="candidate-info">
                                                    <div class="candidate-header-actions">
                            <span class="actions dropdown">
                              <a
                                  class="fas fa-chevron-down"
                                  data-toggle="dropdown"
                                  href="#"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                              ></a>
                              <ul class="dropdown-menu">
                                <li>
                                  <a>
                                    Team
                                    Message
                                  </a>
                                </li>
                                <li>
                                  <a>Unfollow</a>
                                </li>
                                <li>
                                  <a>Copy</a>
                                </li>
                                <li>
                                  <a>Delete</a>
                                </li>
                              </ul>
                            </span>
                                                    </div>
                                                    <div class="candidate-header">
                                                        <h5>
                                                            <span>Hong</span>
                                                        </h5>
                                                    </div>
                                                    <div class="candidate-body">
                                                        <p class="headline">
                                                            Added by
                                                            Hong Le Viet
                                                        </p>
                                                    </div>
                                                    <div class="candidate-footer">
                                                        <ul class="statuses">
                                                            <li
                                                                tooltip-placement="bottom"
                                                                uib-tooltip="Sourced"
                                                                data-container="body"
                                                            >
                                                                <span class="fas fa-upload"></span>
                                                                <span class="source-name">
                                  Added by:
                                  Hong Le Viet
                                </span>
                                                            </li>
                                                            <li
                                                                tooltip-placement="bottom"
                                                                uib-tooltip="Following"
                                                                data-container="body"
                                                            >
                                                                <a class="fas fa-rss-square" href="#"></a>
                                                            </li>
                                                            <li>
                                                                <a class="fas fa-star" href="#"></a>
                                                            </li>
                                                        </ul>
                                                        <ul class="timestamps">
                                                            <li
                                                                tooltip-placement="bottom"
                                                                uib-tooltip="Apr 14th @ 10:58 am"
                                                                tooltip-append-to-body="true"
                                                                data-container="body"
                                                            >
                                                                <i class="fas fa-clock"></i>
                                                                <span
                                                                    class="timestamp lowercase"
                                                                    time-ago="time-ago"
                                                                    from-time="2019-04-14T03:58:35.226Z"
                                                                >
                                  9d
                                  Ago
                                </span>
                                                            </li>
                                                            <li
                                                                tooltip-placement="bottom"
                                                                uib-tooltip="Apr 21st @ 11:31 am"
                                                                tooltip-append-to-body="true"
                                                                data-container="body"
                                                            >
                                                                <i class="fas fa-bolt"></i>
                                                                <span
                                                                    class="timestamp lowercase"
                                                                    time-ago="time-ago"
                                                                    from-time="2019-04-21T04:31:08.073Z"
                                                                >
                                  2d
                                  Ago
                                </span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="card-loader" fas fa->
                                    <div class="bouncywrap">
                                        <div class="dotcon dc1">
                                            <div class="dot"></div>
                                        </div>
                                        <div class="dotcon dc2">
                                            <div class="dot"></div>
                                        </div>
                                        <div class="dotcon dc3">
                                            <div class="dot"></div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div
                        class="list-column-wrapper"
                        dnd-list="candidates[stage.id]"
                        dnd-drop="onDrop(stage.id, item)"
                    >
                        <div class="list-column">
                            <div class="list-column-header">
                                <ul class="stage-actions">
                                    <li>
                                        <button class="btn add-candidate">
                                            <i class="fas fa-plus"></i>
                                        </button>
                                        <div class="btn-group dropdown">
                                            <button
                                                class="btn dropdown-toggle"
                                                type="button"
                                                aria-haspopup="true"
                                                aria-expanded="false"
                                            >
                                                <i class="fas fa-ellipsis-v"></i>
                                            </button>
                                            <ul class="dropdown-menu" role="menu">
                                                <li>
                                                    <a href="#">
                                                        Edit
                                                        Stage Actions
                                                    </a>
                                                </li>
                                                <li class="divider"></li>
                                                <li>
                                                    <a href="#" class="disabled">
                                                        Move to
                                                        Stage
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" class="disabled">Delete Candidates</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                                <i class="icon fas fa-comments"></i>
                                <h5 title="Interview">
                                    Interview
                                    <span class="column-count">0</span>
                                </h5>
                            </div>
                            <ul class="list candidate-list">
                                <li class="card-loader" fas fa->
                                    <div class="bouncywrap">
                                        <div class="dotcon dc1">
                                            <div class="dot"></div>
                                        </div>
                                        <div class="dotcon dc2">
                                            <div class="dot"></div>
                                        </div>
                                        <div class="dotcon dc3">
                                            <div class="dot"></div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="list-column-wrapper"
                         dnd-list="candidates[stage.id]"
                         dnd-drop="onDrop(stage.id, item)">
                        <div class="list-column">
                            <div class="list-column-header">
                                <ul class="stage-actions">
                                    <li>
                                        <button class="btn add-candidate">
                                            <i class="fas fa-plus"></i>
                                        </button>
                                        <div class="btn-group dropdown">
                                            <button
                                                class="btn dropdown-toggle"
                                                type="button"
                                                aria-haspopup="true"
                                                aria-expanded="false"
                                            >
                                                <i class="fas fa-ellipsis-v"></i>
                                            </button>
                                            <ul class="dropdown-menu" role="menu">
                                                <li>
                                                    <a href="#">
                                                        Edit
                                                        Stage Actions
                                                    </a>
                                                </li>
                                                <li class="divider"></li>
                                                <li>
                                                    <a href="#" class="disabled">
                                                        Move to
                                                        Stage
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" class="disabled">Delete Candidates</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                                <i class="icon fas fa-list-ul"></i>
                                <h5 title="Training">
                                    Training
                                    <span class="column-count">0</span>
                                </h5>
                            </div>
                            <ul class="list candidate-list">
                                <li class="card-loader" fas fa->
                                    <div class="bouncywrap">
                                        <div class="dotcon dc1">
                                            <div class="dot"></div>
                                        </div>
                                        <div class="dotcon dc2">
                                            <div class="dot"></div>
                                        </div>
                                        <div class="dotcon dc3">
                                            <div class="dot"></div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </ul>
                <div class="quickdrop hidden" breezy-quickdrop="breezy-quickdrop">
                    <h2>Quickdrop Pipeline</h2>
                    <ul>
                        <li
                            breezy-quickdrop-stage="breezy-quickdrop-stage"
                            dnd-list
                            dnd-drop="onQuickDrop(stage, item)"
                            title="Applied"
                        >
                            <div class="quick-stage">
                                <i class="icon fas fa-user"></i>
                            </div>
                        </li>
                        <li
                            breezy-quickdrop-stage="breezy-quickdrop-stage"
                            dnd-list
                            dnd-drop="onQuickDrop(stage, item)"
                            title="Interview"
                        >
                            <div class="quick-stage">
                                <i class="icon fas fa-comments"></i>
                            </div>
                        </li>
                        <li
                            breezy-quickdrop-stage="breezy-quickdrop-stage"
                            dnd-list
                            dnd-drop="onQuickDrop(stage, item)"
                            title="Training"
                        >
                            <div class="quick-stage">
                                <i class="icon fas fa-list-ul"></i>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="position-pipeline-loader" fas fa->
                    <div class="center">
                        <div class="bouncywrap">
                            <div class="dotcon dc1">
                                <div class="dot"></div>
                            </div>
                            <div class="dotcon dc2">
                                <div class="dot"></div>
                            </div>
                            <div class="dotcon dc3">
                                <div class="dot"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @import "~styles/position_pipeline";
</style>

<script lang="ts">
    import Vue from "vue";
    import CandidateTypeDropdown from "@/components/Candidate/CandidateTypeDropdown.vue";
    import CandidateColumnFilterDropdown from "@/components/Candidate/CandidateColumnFilterDropdown.vue";
    import FilterColumn from "@/components/FilterColumn/FilterColumn_Pipeline.vue";
    import CandidateColumnFilter from "@/components/Candidate/CandidateColumnFilter";
    import Candidate from "@/models/Candidate";
    import {mapMutations} from 'vuex';

    export default Vue.extend({
        name: "PipelinePage",
        components: {
            CandidateTypeDropdown,
            CandidateColumnFilterDropdown,
            FilterColumn,
        },
        data() {
            return {
                filterNav: {
                    open: true
                },
                candidateType: "",
                column_filters: {...CandidateColumnFilter},
                row_check: [] as string[],
            };
        },
        methods: {
            ...mapMutations(['modals/showAddCandidate']),
            addCandidate(): void {
                this['modals/showAddCandidate'](true);
            },
        }
    });
</script>
