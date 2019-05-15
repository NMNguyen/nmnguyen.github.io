<template>
    <div class="settings portal">
        <div class="main-content">
            <div class="profile nigvlxscope">
                <div class="header">
                    <h1>Phúc lợi</h1>
                </div>
                <div name="form" novalidate="novalidate"
                     class="nigvlxpristine nigvlxinvalid nigvlxinvalid-required nigvlxvalid-maxlength">
                    <div class="company">
                        <div class="section">
                            <h2>Thêm phúc lợi bên dưới</h2>
                            <p>Có một bàn bóng bàn? Xem phim cuối tuần? Ăn trưa miễn phí hay chăm sóc sức khỏe? Điền chi tiết và chọn icon phù hợp bên dưới</p>
                            <input
                                class="form-control"
                                v-model="perkIntro"
                                type="text" placeholder="có ô tô đưa rước"
                                required="required">
                            <p>Chọn icon phù hợp nhất</p>
                            <ul class="perk-icons">
                                <li class="perk-icon" v-for="perk in def_perks">
                                    <a @click="addToPerkCollection(perk)"><i :class="'fa ' + perk.icon"></i></a>
                                </li>
                            </ul>
                            <!--<div class="form-divider"></div>-->
                            <!--<input v-model="newPerk"-->
                            <!--class="form-control"-->
                            <!--type="text" placeholder="fa-gift">-->
                            <!--<a class="add logo btn btn-blue btn-xs" @click="addPerk">-->
                            <!--<i class="fa fa-plus"></i>-->
                            <!--<span>Thêm icon khác</span>-->
                            <!--</a>-->
                        </div>
                        <div class="section">
                            <h2>Bộ phúc lợi</h2>
                            click vào icon để xóa
                            <p v-if="currentCompany.perks.length == 0">Bạn chưa thêm phúc lợi nào cả.</p>
                            <ul class="perks" v-if="currentCompany.perks.length">
                                <li class="perk-icon" v-for="(perk, index) in currentCompany.perks" data-toggle="popover" :title="perk.name">
                                    <a @click="removeToPerkCollection(index)"><i :class="'fa ' + perk.icon"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="footer align-right">
                        <button @click="updateCompany" class="btn btn-blue default"
                                type="submit">
                            <i class="default fa fa-save"></i>
                            <span class="default">Lưu</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script lang="ts">
    import Vue from "vue";
    import {fauth} from '@/firebase';
    import {mapGetters} from 'vuex';


    export default Vue.extend({
        props: {},
        computed: {
            // mix the getters into computed with object spread operator
            ...mapGetters([
                'currentUser',
                'currentCompany',
                // ...
            ]),
        },
        data() {
            return {
                perkIntro: '',
                def_perks: [
                    {icon: 'fa-gift'},
                    {icon: 'fa-taxi'},
                    {icon: 'fa-gamepad'},
                    {icon: 'fa-film'},
                    {icon: 'fa-desktop'},
                    {icon: 'fa-laptop'},
                    {icon: 'fa-money-bill'},
                    {icon: 'fa-graduation-cap'},
                    {icon: 'fa-futbol'},
                    {icon: 'fa-wheelchair'},
                    {icon: 'fa-futbol'},
                    {icon: 'fa-coffee'},
                    {icon: 'fa-medkit'},
                    {icon: 'fa-paw'},
                    {icon: 'fa-birthday-cake'},
                    {icon: 'fa-child'},
                    {icon: 'fa-users'},
                    {icon: 'fa-user'},
                    {icon: 'fa-utensils'},
                    {icon: 'fa-chart-bar'},
                    {icon: 'fa-ticket'},
                    {icon: 'fa-plane'},
                    {icon: 'fa-heart'},
                    {icon: 'fa-heartbeat'},
                    {icon: 'fa-rebel'},
                    {icon: 'fa-pied-piper-alt'},
                    {icon: 'fa-hand-spock'},
                ]
            }
        },
        methods: {
            updateCompany: function () {
                this.currentCompany.update();
                this.$toasted.show('Saved!')
            },
            addToPerkCollection: function (perk) {
                if (this.perkIntro == '') this.$toasted.error('Enter description for this icon in textbox above !!!');
                else {
                    this.currentCompany.perks.push({
                        icon: perk.icon,
                        name: this.perkIntro
                    });
                    this.perkIntro = '';
                }
            },
            removeToPerkCollection: function (index) {
                this.currentCompany.perks.splice(index, 1);
            }
        },
    });
</script>
