<template>
    <div id="reportNo03" class="container" style="height: 100%; display: block;">
        <div class="container mx-0 px-0 d-flex justify-content-between">
            <h5>Báo cáo ứng viên đã đăng ký</h5>
            <h6>Apr 1st, 2019 - Apr 14th, 2019</h6>
        </div>
        <!-- Table -->
        <div class="container mx-0 px-0 pb-3 my-3 border rounded" style="background: #F9FAFA">
            <!-- Header -->
            <div class="container mt-3 d-flex justify-content-between align-items-center">
                <h6>Candidate Sourcer Overview</h6>
                <button class="btn py-1 px-1" style="background: #edeff0">
                    <i class="fas fa-cloud-download-alt text-secondary"></i>
                    <small class="text-secondary">Xuất file</small>
                </button>
            </div>
            <!-- Table content -->
            <div class="container my-3">
                <table style="width: 100%" border="1" frame="void" rules="rows">
                    <tbody><tr style="font-size: 13px">
                        <td class="text-secondary" height="50">Nguồn</td>
                        <td class="text-secondary" height="50">Tổng cộng đã đăng ký</td>
                        <td class="text-secondary" height="50">Tổng cộng lần trước</td>
                        <td class="text-secondary" height="50">Thay đổi</td>
                        <td class="text-secondary" height="50">Điểm trung bình</td>
                        <td class="text-secondary" height="50">Trung bình lần trước</td>
                        <td class="text-secondary" height="50">Thay đổi</td>
                    </tr>
                    <tr>
                        <td class="text-secondary" height="40">Hong Le Viet</td>
                        <td class="text-secondary" style="text-align: center" height="40">1</td>
                        <td class="text-secondary" style="text-align: center" height="40">0</td>
                        <td class="text-secondary" style="text-align: center" height="40">-</td>
                        <td class="text-secondary" style="text-align: center" height="40">2</td>
                        <td class="text-secondary" style="text-align: center" height="40"></td>
                        <td class="text-secondary" style="text-align: center" height="40">-</td>
                    </tr>
                    </tbody></table>
            </div>
        </div>
        <!-- Line chart -->
        <div class="container mx-0 px-0 pb-3 my-3 border rounded" style="background: #F9FAFA">
            <!-- Header -->
            <div class="container mt-3 d-flex justify-content-between align-items-center">
                <h6>Candidate Volume History by Sourcer</h6>
                <button class="btn py-1 px-1" style="background: #edeff0">
                    <i class="fas fa-cloud-download-alt text-secondary"></i>
                    <small class="text-secondary">Xuất file</small>
                </button>
            </div>
            <!-- Chart's note -->
            <div class="container mt-3 d-flex justify-content-between align-items-center">
                <ul class="legend pl-0">
                    <li>
                        <i class="fa fa-square" style="color: rgba(255,99,132,0.8);"></i>
                        <span>Hong Le Viet</span>
                    </li>
                </ul>
            </div>
            <!-- Chart content -->
            <!-- Chart -->
            <div class="container border rounded py-3 py-2" style="width: 95%; background: #ffffff">
                <img src="https://dinhhn2000.github.io/breezy.github.io/pictures/sourced_candidates_line_chart_3.1.png" alt="Đã có lỗi xảy ra" style="width: 100%; height: auto;object-fit: contain">
            </div>
        </div>
        <!-- Pie chart -->
        <div class="container mx-0 px-0 pb-3 my-3 border rounded" style="background: #F9FAFA">
            <!-- Chart 02 -->
            <!-- Header -->
            <div class="container mt-3 d-flex justify-content-between align-items-center">
                <h6>Candidate Volume by Sourcer</h6>
                <button class="btn py-1 px-1" style="background: #edeff0">
                    <i class="fas fa-cloud-download-alt text-secondary"></i>
                    <small class="text-secondary">Xuất file</small>
                </button>
            </div>
            <!-- Chart content -->
            <div class="container border rounded py-3 my-2 d-flex justify-content-between" style="width: 95%; background: #ffffff">
                <img src="https://dinhhn2000.github.io/breezy.github.io/pictures/sourced_candidates_pie_chart_3.1.png" alt="Đã có lỗi xảy ra" style="width: 196px; height: auto;object-fit: contain">
                <div class="container d-flex justify-content-end">
                    <table>
                        <tbody>
                        <tr>
                            <td class="px-3"><span>Hong Le Viet</span></td>
                            <td class="px-3"><span>1</span></td>
                            <td class="px-3" style="width: 200px">
                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" style="width: 100%; background: #ff6384" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </td>
                            <td>100%</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <!-- Line chart -->
        <div class="container mx-0 px-0 pb-3 my-3 border rounded" style="background: #F9FAFA">
            <!-- Header -->
            <div class="container mt-3 d-flex justify-content-between align-items-center">
                <h6>Candidate Score History by Sourcer</h6>
                <button class="btn py-1 px-1" style="background: #edeff0">
                    <i class="fas fa-cloud-download-alt text-secondary"></i>
                    <small class="text-secondary">Xuất file</small>
                </button>
            </div>
            <!-- Chart's note -->
            <div class="container mt-3 d-flex justify-content-between align-items-center">
                <ul class="legend pl-0">
                    <li>
                        <i class="fa fa-square" style="color: rgba(255,99,132,0.8);"></i>
                        <span>Hong Le Viet</span>
                    </li>
                </ul>
            </div>
            <!-- Chart content -->
            <!-- Chart -->
            <div class="container border rounded py-3 py-2" style="width: 95%; background: #ffffff">
                <img src="https://dinhhn2000.github.io/breezy.github.io/pictures/sourced_candidates_line_chart_3.2.png" alt="Đã có lỗi xảy ra" style="width: 100%; height: auto;object-fit: contain">
            </div>
        </div>
        <!-- Pie chart -->
        <div class="container mx-0 px-0 pb-3 my-3 border rounded" style="background: #F9FAFA">
            <!-- Chart 02 -->
            <!-- Header -->
            <div class="container mt-3 d-flex justify-content-between align-items-center">
                <h6>Candidate Score by Sourcer</h6>
                <button class="btn py-1 px-1" style="background: #edeff0">
                    <i class="fas fa-cloud-download-alt text-secondary"></i>
                    <small class="text-secondary">Xuất file</small>
                </button>
            </div>
            <!-- Chart content -->
            <div class="container border rounded py-3 my-2 d-flex justify-content-between" style="width: 95%; background: #ffffff">
                <img src="https://dinhhn2000.github.io/breezy.github.io/pictures/sourced_candidates_pie_chart_3.2.png" alt="Đã có lỗi xảy ra" style="width: 196px; height: auto;object-fit: contain">
                <div class="container d-flex justify-content-end">
                    <table>
                        <tbody>
                        <tr>
                            <td class="px-3"><span>Hong Le Viet</span></td>
                            <td class="px-3"><span>2</span></td>
                            <td class="px-3" style="width: 200px">
                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" style="width: 100%; background: #ff6384" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>
