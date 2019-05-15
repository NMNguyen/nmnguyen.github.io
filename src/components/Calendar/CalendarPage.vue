<!--/////////////////////////////////////////-->

<!--         SU DUNG THU VIEN FULL-CALENDAR -->
<!--         https://fullcalendar.io/docs/event-parsing -->

<!--===========================================-->



<template>
    <div class="d-flex flex-grow-1 overflow-auto" style="height: 100%;">
        <!--FILTER COLUMN-->
        <div class="flex-shrink-0"
             style="min-width: 250px">
            <div class="p-3">
                <h3>Các bộ lọc</h3>
            </div>
            <div class="p-2">
                <OptionDropdown v-model="event_owner_filters"
                                :options="event_owner_options"
                                icon="fas fa-user"
                                variant="light">
                </OptionDropdown>
            </div>
            <div class="p-2">
                <b-dropdown variant="light"
                            class="custom-dropdown">
                    <template slot="button-content">
                        <i class="fas fa-briefcase"></i>&emsp;
                        Vị trí
                    </template>

                    <!--EACH DRAFTS, PUBLISHED, ...-->
                    <template>
                        <b-dropdown-header>Draft</b-dropdown-header>
                        <b-form-checkbox-group v-model="position_filters" name="nothing">
                            <b-dropdown-text v-for="position in positions" :key="position.id">
                                <b-form-checkbox :value="position.id">{{position.name}}</b-form-checkbox>
                            </b-dropdown-text>
                        </b-form-checkbox-group>
                        <b-dropdown-divider></b-dropdown-divider>
                    </template>

                </b-dropdown>
            </div>
        </div>
        <div class="flex-grow-1 overflow-auto m-4 p-4 border rounded default-bg-color" style="max-height: 100%">
            <div style="height: 100%">
                <FullCalendar id="fullcalendar"
                              default-view="dayGridMonth"
                              height="parent"
                              :locale="viPlugin"
                              :events="events"
                              :header="calendarHeader"
                              :selectable="true"
                              :plugins="calendarPlugins"
                              @eventClick="eventClick"
                              @select="dateSelect">
                </FullCalendar>
            </div>
        </div>
        <b-modal ref="addEventModal">
            Add event modal {{ newEvent.startStr }} {{ newEvent.endStr }}
        </b-modal>
    </div>
</template>

<style lang='scss'>
    @import '~@fullcalendar/core/main.css';
    @import "~@fullcalendar/daygrid/main.css";
    @import "~@fullcalendar/timegrid/main.css";
</style>

<script lang="ts">
    import Vue from "vue";
    import FullCalendar from '@fullcalendar/vue';
    import dayGridPlugin from '@fullcalendar/daygrid';
    import timeGridPlugin from '@fullcalendar/timegrid';
    import InteractionPlugin from '@fullcalendar/interaction';

    import viPlugin from "@fullcalendar/core/locales/vi";
    import OptionDropdown from "@/components/OptionDropdown/OptionDropdown.vue";
    import EventOwnerTypes from '@/components/Calendar/EventOwnerOptions';
    import {Component, Prop} from "vue-property-decorator";

    @Component({
        components: {
            FullCalendar,
            OptionDropdown,
        },
    })
    export default class CalendarPage extends Vue {
        @Prop({default: null}) position_id: string | null;

        calendarPlugins = [
            dayGridPlugin,
            timeGridPlugin,
            InteractionPlugin,
        ];
        viPlugin = viPlugin;
        calendarHeader = {
            left: "today prev,next",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay",
        };

        event_owner_filters = '';
        event_owner_options = EventOwnerTypes;

        newEvent = {
            startStr: "",
            endStr: "",
        };
        allEvents = [
            {
                title: "My Event",
                assigned: {
                    id: 'asdasdasd',
                    name: "An",
                    position_id: "123"
                },
                start: "2019-04-19 9:00 (GMT+7)",
                end: "2019-04-23 15:30 (GMT+7)",
                // allDay: true,
                color: 'blue',
                textColor: 'white',
                editable: true,
                id: 'asdasd',
            },
            {
                title: "Dinh's Event",
                assigned: {
                    id: 'dsadasdsa',
                    name: "Hong Viet Le",
                    position_id: "456",
                },
                start: "2019-04-15 11:30 (GMT+7)",
                end: "2019-04-15 15:30 (GMT+7)",
                color: 'green',
                textColor: 'white',
                id: 'abcabcbac',
            }
        ];

        // TEST DATA
        positions = [
            {
                id: "123",
                name: "Dev",
            },
            {
                id: "456",
                name: "Tester",
            }
        ];
        position_filters = [] as string[];


        get events(): any[]
        {
            return this.allEvents.filter((ev) => {
                return ( // owner filter
                    this.event_owner_filters == 'all'
                    || (this.event_owner_filters == 'own' && ev.assigned.name === 'An')
                    || (this.event_owner_filters == 'other' && ev.assigned.name !== 'An')
                ) && ( // position filter
                    this.position_filters.includes(ev.assigned.position_id)
                    || this.position_filters.length === 0
                );
            })
        }

        eventClick(objEvent: any): void {
            this.$router.push(`/event/${objEvent.event.id}`);
        }

        dateSelect(objEvent: any): void {
            this.newEvent = objEvent;
            (this.$refs.addEventModal as any).show();
        }
    }
</script>
