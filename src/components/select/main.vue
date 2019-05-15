<template>
    <div>
        <div class="input-wrapper">
            <b-form-input ref="input"
                          v-if="!isFocusing"
                          @focus="focusingInput"
                          v-model="value.title">
            </b-form-input>
            <b-form-input ref="input"
                          v-else
                          @blur="blursingInput"
                          @input="searchOption"
                          v-model="cachedValue.title">
            </b-form-input>
            <span
                v-show="!isFocusing"
                class="caret">
            </span>
        </div>
        <ul
            v-if="isFocusing && !isSearching"
            class="container-item">
            <li v-for="(option, index) in dataOptions"
                @click="setSelectedOption(option)"
                :key="index">
                {{ option.title }}
            </li>
        </ul>
        <ul
            v-if="isFocusing && isSearching && listSearched.length > 0"
            class="container-item">
            <li
                v-for="(option, index) in listSearched"
                @click="setSelectedOption(option)"
                :key="index">
                {{ option.title }}
            </li>

        </ul>
    </div>
</template>

<script>
    export default {
        name: "SelectSearch",
        props: {
            dataOptions: {
                type: Array,
                default: () => {
                    return [];
                }
            },
            allowSeach: {
                type: Boolean,
                default: false
            },
            value: {
                type: Object,
                default: () => {
                    return {
                        title: '',
                        value: null
                    }
                }
            }
        },
        data() {
            return {
                selectedValue: null,
                isFocusing: false,
                listSearched: [],
                isSearching: false,
                cachedValue: {
                    title: '',
                    value: null
                }
            }
        },
        methods: {
            emitValue(value) {
                this.$emit('changeValue', value);
            },
            focusingInput() {
                this.isFocusing = true;
            },
            blursingInput() {
                let that = this;
                setTimeout(function () {
                    that.isFocusing = false;
                    that.emitValue(that.selectedValue ? that.selectedValue : that.value)
                }, 200);
            },
            setSelectedOption(option) {
                this.selectedValue = option;
                this.emitValue(option)
            },
            searchOption() {
                this.isSearching = true;
                let result = this.dataOptions.filter((option) => {
                    return option.title.toLowerCase().includes(this.cachedValue.title);
                });
                this.listSearched = result;
            }
        }
    }
</script>

<style lang="scss" scoped>
    .input-wrapper {
        display: inline-block;
        position: relative;
        width: 200px;

        input {
            padding-right: 25px;
        }
    }

    .caret {
        display: inline-block;
        width: 0;
        height: 0;
        margin-left: 2px;
        vertical-align: middle;
        border-top: 4px dashed;
        border-top: 4px solid \9
    ;
        border-right: 4px solid transparent;
        border-left: 4px solid transparent;
        position: absolute;
        top: 45%;
        right: 15px;
    }

    .container-item {
        transition: visibility 0s linear 0.33s, opacity 0.33s linear;
        position: absolute;
        z-index: 1000;
        max-width: 200px;
        padding: 5px 0px;
        margin: 2px 0 0;
        font-size: 14px;
        text-align: left;
        min-width: 200px;
        list-style: none;
        background-color: #fff;
        border: 2px solid #edeff0;
        background-clip: padding-box;
        border-radius: 4px;
        box-shadow: 0 6px 12px rgba(0, 0, 0, .175);
        max-height: 200px;
        overflow-x: hidden;

        li {
            overflow: hidden;
            text-overflow: ellipsis;
            color: #4c555c !important;
            margin: 0 10px;
            padding: 3px 10px !important;
            border-radius: 4px;
            -webkit-transition: .3s;
            -moz-transition: .3s;
            -ms-transition: .3s;
            -o-transition: .3s;
            white-space: nowrap;
            transition: .3s;
            overflow: hidden;
            text-overflow: ellipsis;

            &:hover {
                background-color: #edeff0;
                cursor: pointer;
            }
        }
    }
</style>
