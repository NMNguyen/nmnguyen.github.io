<template>
    <div id="reportNo07" class="container" style="height: 100%; display: block;">
        <div class="container mx-0 px-0 d-flex justify-content-between">
            <h5>Báo cáo thời gian để điền</h5>
            <h6>Apr 1st, 2019 - Apr 14th, 2019</h6>
        </div>
        <!-- Table -->
        <div class="container mx-0 px-0 pb-3 my-3 border rounded" style="background: #F9FAFA">
            <!-- Header -->
            <div class="container mt-3 d-flex justify-content-between align-items-center">
                <h6>Position Time To Fill Statistics</h6>
                <button class="btn py-1 px-1" style="background: #edeff0">
                    <i class="fas fa-cloud-download-alt text-secondary"></i>
                    <small class="text-secondary">Xuất file</small>
                </button>
            </div>
            <!-- Table content -->
            <div class="container my-3">
                <table style="width: 100%" border="1" frame="void" rules="rows">
                    <tbody><tr style="font-size: 13px; text-align: center">
                        <td height="50">Vị trí</td>
                        <td height="50">Người tạo</td>
                        <td height="50">Địa điểm</td>
                        <td height="50">Ngày taọ</td>
                        <td height="50">Ngày điền</td>
                        <td height="50">Thời gian để điền</td>
                        <td height="50">Thời gian trung bình để tuyển dụng</td>
                    </tr>
                    </tbody></table>
            </div>
        </div>
        <!-- Table -->
        <div class="container mx-0 px-0 pb-3 my-3 border rounded" style="background: #F9FAFA">
            <!-- Header -->
            <div class="container mt-3 d-flex justify-content-between align-items-center">
                <h6>Category Time To Fill Statistics</h6>
                <button class="btn py-1 px-1" style="background: #edeff0">
                    <i class="fas fa-cloud-download-alt text-secondary"></i>
                    <small class="text-secondary">Xuất file</small>
                </button>
            </div>
            <!-- Table content -->
            <div class="container my-3">
                <table style="width: 100%" border="1" frame="void" rules="rows">
                    <tbody><tr style="font-size: 13px">
                        <td height="50">Phân loại</td>
                        <td height="50">Thời gian trung bình để điền</td>
                        <td height="50">Thời gian trung bình để tuyển dụng</td>
                    </tr>
                    <tr>
                        <td class="text-secondary" height="40">Tổng trung bình</td>
                        <td class="text-secondary" height="40"></td>
                        <td class="text-secondary" height="40"></td>
                    </tr>
                    </tbody></table>
            </div>
        </div>

    </div>
</template>
