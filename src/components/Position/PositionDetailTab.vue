

<template>
    <div class="main-content">
        <h1>Position Details The fucking shit</h1>
        <div>
            <b-form-input size="sm" class="input-common-css position-title" v-model="text"
                          placeholder="Position Title *">
            </b-form-input>
            <div class="flex-item">
                <b-form-input size="sm" class="input-common-css another-title" v-model="text"
                              placeholder="Department"></b-form-input>
                <b-form-input size="sm" class="input-common-css another-title" v-model="text"
                              placeholder="Interal ID"></b-form-input>
            </div>
            <h3 class="location-title">Location</h3>
            <SelectSearch
                @changeValue="handleChange"
                :value="currentLocation"
                :data-options="listLocation"/>
            <b-form-checkbox
                style="margin-top:10px;"
                id="checkbox-1"
                v-model="status"
                name="checkbox-1"
                value="accepted"
                unchecked-value="not_accepted"
            >
                <span style="font-size:12px">Remote / Telecommute</span>
            </b-form-checkbox>
            <h3 class="location-title">Details</h3>
            <div style="display:flex; margin-bottom:10px;">
                <SelectSearch
                    style="margin-right:10px;"
                    @changeValue="handleChange"
                    :value="currentPositionType"
                    :data-options="listPositionType"/>
                <SelectSearch
                    @changeValue="handleChange"
                    :value="currentPositionType"
                    :data-options="listPositionType"/>
            </div>
            <div style="display:flex">
                <SelectSearch
                    style="margin-right:10px;"
                    @changeValue="handleChange"
                    :value="currentPositionType"
                    :data-options="listPositionType"/>
                <SelectSearch
                    @changeValue="handleChange"
                    :value="currentPositionType"
                    :data-options="listPositionType"/>
            </div>

            <h3 class="location-title">Description</h3>
            <p>Your job description is an important step in attracting the right candidates.
                Don't have one yet? No problem, select one from our searchable library below.
            </p>
            <wysiwyg v-model="signatureHtml"></wysiwyg>
        </div>
    </div>
</template>

<script>
    import SelectSearch from '../select/main.vue';
    import wysiwyg from "vue-wysiwyg";
    import Vue from "vue";

    Vue.use(wysiwyg, {
        hideModules: {
            "removeFormat": true,
            "table": true,
            "justifyLeft": true,
            "justifyRight": true,
            "justifyCenter": true,
            "separator": true,
        },
        maxHeight: "300px"
    });
    export default {
        components: {
            SelectSearch,
        },
        methods: {
            nameWithLang({name, language}) {
                return `${name} — [${language}]`
            },
            handleChange(data){
                console.log(data);
                this.currentLocation = data;
            }
        },
        data() {
            return {
                text:'',
                signatureHtml:'',
                currentLocation:
                    {
                        'title': 'Country *',
                        'value': null,
                    }
                ,
                currentPositionType:
                    {
                        'title': 'Position type *',
                        'value': null,
                    }
                ,
                listLocation:
                    [
                        {
                            'title': 'Việt Nam',
                            'value': 'vn',
                        },
                        {
                            'title': 'Hoa Kỳ',
                            'value': 'us',
                        },
                    ],
                listPositionType:
                    [
                        {
                            'title': 'Full-Time',
                            'value': 'fulltime',
                        },
                        {
                            'title': 'Part-Time',
                            'value': 'parttime',
                        },
                        {
                            'title': 'Contract',
                            'value': 'contract',
                        },
                        {
                            'title': 'Temporary',
                            'value': 'temporary',
                        },
                        {
                            'title': 'Other',
                            'value': 'other',
                        },
                    ],
                options:
                    [
                        {value: null, text: 'Please select an option'},
                        {value: 'a', text: 'This is First option'},
                        {value: 'b', text: 'Selected Option'},
                        {value: {C: '3PO'}, text: 'This is an option with object value'},
                        {value: 'd', text: 'This one is disabled', disabled: true},
                        {value: 'd', text: 'This one is disabled', disabled: true},
                        {value: 'd', text: 'This one is disabled', disabled: true},
                        {value: 'd', text: 'This one is disabled', disabled: true}
                    ],
                status: 'not_accepted'
            }
        }
    }
</script>
<style scoped>
    @import "~vue-wysiwyg/dist/vueWysiwyg.css";
</style>
<style lang="scss" scoped>
    .main-content {
        padding: 20px;
        max-height:600px;

        .location-title {
            font-weight: 400;
            margin: 25px 0 10px;
            font-size: 16px;
        }
    }
    ::v-deep{
        .editr--content{
            height:300px;
        }

        .input-common-css {
            font-size: 18px;
            display: block;
            margin-bottom: 10px;
            line-height: 1.5;
            height: 40px;

            &.position-title {
                width: 410px;
            }

            &.another-title {
                width: 200px;
                margin-right: 10px;
                font-size: 14px;
                display: block;
                height: 34px;
            }
        }

        .flex-item {
            display: flex;
        }
    }
</style>
`
