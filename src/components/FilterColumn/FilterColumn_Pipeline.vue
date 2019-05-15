<template>
    <div :class="classes" style="max-height: 100%">
        <div class="flex-grow-1 overflow-auto px-4 py-2">
            <!-- Search filter -->
            <div class="px-0">
                <input type="text" class="form-control my-3" style="font-size: 13px"
                       placeholder="Username">
                <h5 class="my-4">Tùy chọn bộ lọc</h5>
            </div>
            <!-- Filter options -->
            <div class="px-0">
                <!-- PipelineStage / Stages -->
                <div class="form-check py-1" >
                    <input class="form-check-input" type="checkbox" value id="state-Check">
                    <label class="form-check-label text-secondary" for="defaultCheck1">
                        <i class="fas fa-list-ol px-1"></i>&nbsp;Giai đoạn
                    </label>
                </div>
                <!-- Tags -->
                <div class="form-check py-1" >
                    <input class="form-check-input" type="checkbox" value id="state-Check">
                    <label class="form-check-label text-secondary" for="defaultCheck1">
                        <i class="fas fa-tag px-1"></i>&nbsp;Đánh dấu
                    </label>
                </div>
                <!-- Added date -->
                <div class="form-check py-1" >
                    <input class="form-check-input" type="checkbox" value id="state-Check">
                    <label class="form-check-label text-secondary" for="defaultCheck1">
                        <i class="fas fa-clock px-1"></i>&nbsp;Ngày thêm vào
                    </label>
                </div>
                <!-- Last activity date -->
                <div class="form-check py-1" >
                    <input class="form-check-input" type="checkbox" value id="state-Check">
                    <label class="form-check-label text-secondary" for="defaultCheck1">
                        <i class="fas fa-bolt px-1"></i>&nbsp;Ngày hoạt động gần nhất
                    </label>
                </div>
                <!-- Candidate type -->
                <div class="form-check py-1" >
                    <input class="form-check-input" type="checkbox" value id="state-Check">
                    <label class="form-check-label text-secondary" for="defaultCheck1">
                        <i class="fas fa-user-circle px-1"></i>&nbsp;Loại ứng viên
                    </label>
                </div>
                <!-- Candidate Source -->
                <div class="form-check py-1" >
                    <input class="form-check-input" type="checkbox" value id="state-Check">
                    <label class="form-check-label text-secondary" for="defaultCheck1">
                        <i class="fas fa-map px-1"></i>&nbsp;Nguồn ứng viên
                    </label>
                </div>
                <!-- Assigned to -->
                <div class="form-check py-1" >
                    <input class="form-check-input" type="checkbox" value id="state-Check">
                    <label class="form-check-label text-secondary" for="defaultCheck1">
                        <i class="fas fa-user-plus px-1"></i>&nbsp;Đăng ký
                    </label>
                </div>
                <!-- Sourced by -->
                <div class="form-check py-1" >
                    <input class="form-check-input" type="checkbox" value id="state-Check">
                    <label class="form-check-label text-secondary" for="defaultCheck1">
                        <i class="fas fa-upload px-1"></i>&nbsp;Nguồn
                    </label>
                </div>
                <!-- Referred by -->
                <div class="form-check py-1" >
                    <input class="form-check-input" type="checkbox" value id="state-Check">
                    <label class="form-check-label text-secondary" for="defaultCheck1">
                        <i class="fas fa-handshake px-1"></i>&nbsp;Referred by
                    </label>
                </div>
                <!-- Recruited by -->
                <div class="form-check py-1" >
                    <input class="form-check-input" type="checkbox" value id="state-Check">
                    <label class="form-check-label text-secondary" for="defaultCheck1">
                        <i class="fas fa-id-card px-1"></i>&nbsp;Được tuyển bởi
                    </label>
                </div>
                <!-- Unseen -->
                <div class="form-check py-1" >
                    <input class="form-check-input" type="checkbox" value id="state-Check">
                    <label class="form-check-label text-secondary" for="defaultCheck1">
                        <i class="fas fa-eye-slash px-1"></i>&nbsp;Ẩn
                    </label>
                </div>
                <!-- Starred -->
                <div class="form-check py-1" >
                    <input class="form-check-input" type="checkbox" value id="state-Check">
                    <label class="form-check-label text-secondary" for="defaultCheck1">
                        <i class="fas fa-star px-1"></i>&nbsp;Đánh dấu sao
                    </label>
                </div>
                <!-- Include archive -->
                <div class="form-check py-1" >
                    <input class="form-check-input" type="checkbox" value id="state-Check">
                    <label class="form-check-label text-secondary" for="defaultCheck1">
                        <i class="fas fa-archive px-1"></i>&nbsp;Thành tựu
                    </label>
                </div>
            </div>
        </div>

        <!-- Filter buttons -->
        <div id="filter-column-control" class="btn-group p-3 flex-shrink-0">
            <b-button variant="info" id="filter-apply-button">
                <i class="fas fa-filter"></i>&nbsp;
                Lọc
            </b-button>
            <b-button variant="info" id="filter-apply-save">
                <i class="fas fa-save"></i>
            </b-button>
        </div>
    </div>
</template>

<style lang="scss">
    #filter-apply-button {
        flex: 1;
    }
    #filter-apply-save {
        border-left: 1px solid cyan;
        flex: 0 0 auto;
    }
    .filterNav {
        transition: max-width 200ms;
        max-width: 500px;
        overflow-y: auto;
        overflow-x: hidden;
        &.closed {
            max-width: 0;
        }
    }
</style>

<script lang="ts">
    import Vue from 'vue';

    export default Vue.extend({
        name: 'FilterColumn',
        props: ['open'],
        computed: {
            classes(): any
            {
                return {
                    "flex-shrink-0": true,
                    "d-flex": true,
                    "flex-column": true,
                    "filterNav": true,
                    "closed": !this.open,
                }
            }
        }
    })
</script>
