<template>
  <div class="border p-2" style="background: #ffffff;">
    <div class="d-flex justify-content-between align-items-start">
      <p>
        <i class="fas fa-circle text-success mr-2"></i>
        <span class="ng-binding">{{positionName}}</span>
      </p>
      <button
        class="btn btn-secondary btn-sm py-0 px-1"
        data-toggle=" tooltip"
        data-placement="bottom"
        title="Thay đổi vị trí"
        onclick=" newTask()">
        <i class="fas fa-cog"></i>
      </button>
    </div>
    <div class="d-flex">
      <small v-if="location">
        <i class="fa fa-map-marker-alt text-secondary mr-1"></i>
        <span class="ng-binding mr-2">{{location}}</span>
      </small>
      <small v-if="orgType">
        <i class="fa fa-user-circle text-secondary mr-1"></i>
        <span class="ng-binding mr-2">{{orgType}}</span>
      </small>
    </div>
    <div class="d-flex justify-content-between">

        <div class="d-flex align-items-center">
            <div v-for="(person, idx) in team" :key="idx">
                <img :src="person.avatar" alt="" :title="person.name" class="team-avatar" srcset="">
            </div>
            <i class="fas fa-plus-circle"></i>
        </div>

        <div class="d-flex">
            <small class='mx-2' v-for="(status, idx) in statuses" :key="idx">
                {{status}}
            </small>
        </div>

    </div>
  </div>
</template>

<style lang="scss">

    .team-avatar {
        width: 1em;
        height: 1em;
        object-fit: cover;
        border-radius: 50%;
    }

</style>


<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name: 'Position-item',
    props: ['value'],
    computed: {
        positionName(): string
        {
            return this.value.name;
        },
        location(): string
        {
            return this.value.location || '';
        },
        orgType(): string
        {
            return this.value.org_type || '';
        },
        team(): any
        {
            return this.value.team ;
        },
        statuses(): Array<string> {
            return this.value.statuses;
        }
    }
})
</script>
