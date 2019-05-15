<template>
    <div class="d-flex">
        <div class="flex-shrink-0 border p-2" id="navbar">
            <ul class="">
                <li class="breezy-nav-item" role="tab">
                    <router-link :to="{name: 'SettingsGeneral'}">
                        <i class="fa fa-cog"></i><span>General</span>
                    </router-link>
                </li>
                <li class="breezy-nav-item">
                    <router-link :to="{ name: 'SettingsMembers' }">
                        <i class="fa fa-user"></i><span>Manage Members</span>
                    </router-link>
                </li>
                <li class="breezy-nav-item">
                    <router-link :to="{ name: 'SettingsTeams' }">
                        <i class="fa fa-users"></i><span>Manage Teams</span>
                    </router-link>
                </li>
            </ul>
        </div>
        <div class="flex-grow-1 overflow-auto px-4 pt-3">
            <keep-alive>
            <router-view name="modal_child"></router-view>
            </keep-alive>
        </div>
    </div>
</template>
