<template>
    <div>
        <!-- Modal body -->
        <div>
            <!-- <button type="button" class="close" data-dismiss="modal">&times;</button> -->
            <div class="container-fluid row p-4 m-0 bg-dark text-light">
                <div class="col-md-6 p-0 m-0">
                    <div class="avatar-candidate"></div>
                    <div class="info-candidate">
                        <h1 class="my-0">
                            Albert Hadley
                            <i class="star fa fa-star" style="color: #F9E921"></i>
                        </h1>
                        <ul>
                            <li>
                                <a href="#" class="head">
                                    <i class="fa fa-phone"></i>
                                    01236548125
                                </a>
                            </li>
                            <li>
                                <a href="#" class="head">
                                    <i class="fa fa-envelope"></i>
                                    contact@yourdomain.com
                                </a>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <span class="head">Stage:</span>
                                <span class="body">Disqualified</span>
                            </li>
                            <li>
                                <span class="head">Được thêm bởi:</span>
                                <span class="body">Albert Hadley</span>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <span class="head">Vị trí:</span>
                                <span class="body">Dev</span>
                            </li>
                        </ul>
                        <ul class="tag">
                            <li class="addTag">
                                <a href="#" class="head">
                                    <i class="fa fa-plus"></i>
                                    Add tag
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="action-candidate col-md-6 p-0 m-0">
                    <ul class="action-candidate-first mb-3">
                        <li class="schedule-candidate btn btn-primary">
                            <i class="fa fa-calendar-alt"></i>
                        </li>
                        <li class="sendMail-candidate btn btn-primary">
                            <i class="fa fa-envelope"></i>
                            <span>Send Email</span>
                        </li>
                    </ul>
                    <ul class="action-candidate-second mb-3">
                        <li class="flow-candidate btn btn-primary">
                            <i class="fa fa-arrows-alt-h"></i>
                        </li>
                        <li class="flow-candidate btn btn-primary">
                            <i class="fa fa-times-circle"></i>
                        </li>

                        <li class="flow-candidate btn btn-primary">
                            <i class="fa fa-user-plus"></i>
                        </li>
                        <li class="flow-candidate btn btn-primary">
                            <i class="fa fa-sign-out-alt"></i>
                        </li>

                        <li class="score-candidate btn btn-primary">More</li>
                    </ul>
                    <ul class="action-candidate-third mb-3">
                        <li class="flow-candidate btn btn-primary">
                            <i class="fa fa-rss"></i>
                        </li>

                        <li class="score-candidate btn btn-primary">
                            <i class="fa fa-thumbs-up"></i>
                            <span>Your Scorecard</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="my-modal-footer">
            <div class="content">
                <b-card no-body style="height: 100%" variant="info">
                    <b-tabs pills card vertical>
                        <!-- Details -->
                        <b-tab active>
                            <template slot="title">
                                <i class="fa fa-book"></i>
                                <span>Chi tiết</span>
                            </template>
                            <!-- Content -->
                            <div class="container pl-0">
                                <h1 class="my-2 pl-0">Thông tin chi tiết</h1>
                                <div class="mb-4 d-flex no-wrap align-items-center">
                                    <div class="avatar-candidate-sm"></div>
                                    <h2 class="my-0">Test Candidates</h2>
                                </div>
                                <h3 class="mt-3 mb-0">Nguồn ứng viên</h3>
                                <h4 class="mt-1 mb-4">Chưa có nguồn ứng viên</h4>
                                <h3 class="mt-3 mb-1">Liên hệ</h3>
                                <div class="row">
                                    <div class="col-2">
                                        <h4>Email</h4>
                                    </div>
                                    <div class="col-10">
                                        <a class="active-link" href="contact@yourdomain.com">contact@yourdomain.com</a>
                                    </div>
                                </div>
                                <div class="row mb-4">
                                    <div class="col-2">
                                        <h4>Điện thoại</h4>
                                    </div>
                                    <div class="col-10">
                                        <a class="active-link" href="01236548125">01236548125</a>
                                    </div>
                                </div>
                                <h3 class="mt-3 mb-1">Tài khoản MXH</h3>
                                <div class="row mb-4">
                                    <div class="col-2">
                                        <h4>Trang web</h4>
                                    </div>
                                    <div class="col-10">
                                        <a class="active-link" href="http://www.google.com">http://www.google.com</a>
                                    </div>
                                </div>
                                <h3 class="mt-3 mb-1">Thông tin thêm</h3>
                                <h4 class="mt-1 mb-4">Chưa có thông tin thêm</h4>
                                <a class="active-link" href="#">
                                    <i class="fa fa-edit"></i>
                                    <span>Edit Candidate Details</span>
                                </a>
                            </div>
                        </b-tab>
                        <!-- Resume -->
                        <b-tab>
                            <template slot="title">
                                <i class="fa fa-file-alt"></i>
                                <span>Hồ sơ</span>
                            </template>
                            <!-- Content -->
                            <div class="container pl-0">
                                <div class="row">
                                    <div class="col d-flex">
                                        <h1>Hồ sơ</h1>
                                    </div>
                                    <div class="col d-flex justify-content-end">
                                        <button
                                            class="btn"
                                            style="background: #5ac0e5; color: #ffffff; height: 30px"
                                        >
                                            <i class="fas fa-cloud-upload-alt">&nbsp;&nbsp;Đăng hồ sơ</i>
                                        </button>
                                    </div>
                                </div>
                                <div class="mt-5 d-flex justify-content-center text-secondary">
                                    <i class="fas fa-file-alt fa-4x"></i>
                                </div>
                                <div class="my-3 d-flex justify-content-center">
                                    <p>Ứng viên chưa đăng hồ sơ</p>
                                </div>
                            </div>
                        </b-tab>
                        <!-- Experience -->
                        <b-tab>
                            <template slot="title">
                                <i class="fa fa-briefcase"></i>
                                <span>Kinh nghiệm</span>
                            </template>
                            <!-- Content -->
                            <!-- Summary -->
                            <div class="container pl-0 mb-5">
                                <h2>Tổng quan</h2>
                                <h4>Web Developer @ Company Unknown</h4>
                                <p>.....</p>
                                <a href="#" style="color: #5ac0e5">
                                    <i class="fas fa-edit"></i>
                                    <span>Edit Summary</span>
                                </a>
                            </div>
                            <!-- Work experience -->
                            <ul class="container pl-0 mb-5">
                                <header class="d-flex justify-content-between align-items-center">
                                    <h2>Kinh nghiệm làm việc</h2>
                                    <a href="#" style="color: #5ac0e5">
                                        <i class="fa fa-plus"></i>
                                        <span>Thêm</span>
                                    </a>
                                </header>
                                <ul id="work-experience">
                                    <li>
                                        <div class="name d-flex justify-content-between">
                                            <h3>Lập trình web</h3>
                                            <div class="d-flex">
                                                <div class="mx-1">
                                                    <a href="#" style="color: #5ac0e5">
                                                        <i class="fa fa-edit"></i>
                                                    </a>
                                                </div>
                                                <div class="mx-1">
                                                    <a href="#" style="color: #5ac0e5">
                                                        <i class="fa fa-times"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="company">
                                            <h4>Công ty unknown</h4>
                                        </div>
                                        <div class="time">
                                            <h4 style="color: #B3BBC3">2015 - Hiện tại</h4>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="name d-flex justify-content-between">
                                            <h3>Thiết kế web</h3>
                                            <div class="d-flex">
                                                <div class="mx-1">
                                                    <a href="#" style="color: #5ac0e5">
                                                        <i class="fa fa-edit"></i>
                                                    </a>
                                                </div>
                                                <div class="mx-1">
                                                    <a href="#" style="color: #5ac0e5">
                                                        <i class="fa fa-times"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="company">
                                            <h4>Công ty unknown</h4>
                                        </div>
                                        <div class="time">
                                            <h4 style="color: #B3BBC3">Jan 2010 - Jan 2015</h4>
                                        </div>
                                        <div class="summary">
                                            <p class="pl-2">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                                eiusmod incididunt ut labore et dolore magna
                                                <br>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                                sed do eiusmod tempor incididunt ut labore et
                                                dolore magna Ut enim ad minim veniam, quis nostrud exercitation
                                                ullamco laboris nisi ut aliquip ex ea commodo consequat
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="name d-flex justify-content-between">
                                            <h3>Title Unknown</h3>
                                            <div class="d-flex">
                                                <div class="mx-1">
                                                    <a href="#" style="color: #5ac0e5">
                                                        <i class="fa fa-edit"></i>
                                                    </a>
                                                </div>
                                                <div class="mx-1">
                                                    <a href="#" style="color: #5ac0e5">
                                                        <i class="fa fa-times"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="company">
                                            <h4>Trường THPT Nghệ thuật</h4>
                                        </div>
                                        <div class="time">
                                            <h4 style="color: #B3BBC3">Jan 2005 - Dec 2008</h4>
                                        </div>
                                        <div class="summary">
                                            <p class="pl-2">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                                sed do eiusmod tempor incididunt ut labore et dolore magna
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </ul>
                            <!-- Education -->
                            <div class="container pl-0 mb-5">
                                <header class="d-flex justify-content-between align-items-center">
                                    <h2>Học vấn</h2>
                                    <a href="#" style="color: #5ac0e5">
                                        <i class="fa fa-plus"></i>
                                        <span>Thêm</span>
                                    </a>
                                </header>
                                <h4>Chưa có học vấn được ghi nhận</h4>
                            </div>
                        </b-tab>
                        <!-- Attachment -->
                        <b-tab>
                            <template slot="title">
                                <i class="fa fa-paperclip"></i>
                                <span>Tài liệu đính kèm</span>
                            </template>
                            <!-- Content -->
                            <div class="container pl-0">
                                <div class="row">
                                    <div class="col d-flex">
                                        <h1>Tệp đính kèm</h1>
                                    </div>
                                    <div class="col d-flex justify-content-end">
                                        <button
                                            class="btn"
                                            style="background: #5ac0e5; color: #ffffff; height: 30px"
                                        >
                                            <i class="fas fa-cloud-upload-alt">&nbsp;&nbsp;Đăng tệp</i>
                                        </button>
                                    </div>
                                </div>
                                <div class="mt-5 d-flex justify-content-center text-secondary">
                                    <i class="fas fa-paperclip fa-4x"></i>
                                </div>
                                <div class="my-3 d-flex justify-content-center">
                                    <p>Ứng viên chưa đăng tài liệu</p>
                                </div>
                            </div>
                        </b-tab>
                        <!-- Team discussion -->
                        <b-tab>
                            <template slot="title">
                                <i class="fa fa-comments"></i>
                                <span>Thảo luận nhóm</span>
                            </template>
                            <!-- Content -->

                        </b-tab>
                        <!-- Notes -->
                        <b-tab>
                            <template slot="title">
                                <i class="fa fa-pencil-alt"></i>
                                <span>Ghi chú</span>
                            </template>
                            <!-- Content -->
                            <div class="container pl-0">
                                <div class="row">
                                    <div class="col d-flex">
                                        <h1>Ghi chú</h1>
                                    </div>
                                    <div class="col d-flex justify-content-end">
                                        <button
                                            class="btn"
                                            style="background: #5ac0e5; color: #ffffff; height: 30px"
                                        >
                                            <i class="fas fa-cloud-upload-alt">&nbsp;&nbsp;Đăng ghi chú</i>
                                        </button>
                                    </div>
                                </div>
                                <div class="mt-5 d-flex justify-content-center text-secondary">
                                    <i class="fas fa-pencil-alt fa-4x"></i>
                                </div>
                                <div class="my-3 d-flex justify-content-center">
                                    <p>Bạn chưa có ghi chú</p>
                                </div>
                            </div>
                        </b-tab>
                        <!-- Scorecard -->
                        <b-tab>
                            <template slot="title">
                                <i class="fa fa-thumbs-up"></i>
                                <span>Scorecards</span>
                            </template>
                            <!-- Content -->
                            <div class="container pl-0">
                                <div class="row">
                                    <div class="col d-flex">
                                        <h1>Thẻ điểm</h1>
                                    </div>
                                    <div class="col d-flex justify-content-end">
                                        <button
                                            class="btn"
                                            style="background: #5ac0e5; color: #ffffff; height: 30px"
                                        >
                                            <i class="fas fa-thumbs-up">&nbsp;&nbsp;Yêu cầu thẻ điểm</i>
                                        </button>
                                    </div>
                                </div>
                                <div class="container pl-0 d-flex no-wrap">
                                    <div id="scorecard">2</div>
                                    <div class="vertical-line"></div>
                                    <div>
                                        <h3>Được gửi bởi</h3>
                                        <img
                                            class="avatar-sm"
                                            src="https://breezy-avatars.imgix.net/8b49f/20190325095513.jpg?w=200&amp;h=200&amp;crop=faces&amp;fit=crop"
                                        >
                                    </div>
                                </div>
                                <!-- Overall rating -->
                                <div class="my-5">
                                    <h3>
                                        <strong>Đánh giá tổng quan</strong>
                                    </h3>
                                    <table style="width: 100%">
                                        <tr class="border-bottom" height="50px">
                                            <td>Rất tốt</td>
                                            <td width="100px">1</td>
                                            <td width="300px" style="text-align: center">
                                                <div class="progress d-flex justify-content-center"
                                                     width="300px">
                                                    <div
                                                        class="progress-bar"
                                                        role="progressbar"
                                                        style="width: 100%"
                                                        aria-valuenow="100"
                                                        aria-valuemin="0"
                                                        aria-valuemax="100"
                                                    ></div>
                                                </div>
                                            </td>
                                            <td class="pl-3">100%</td>
                                        </tr>
                                        <tr class="border-bottom" height="50px">
                                            <td>Tốt</td>
                                            <td>0</td>
                                            <td></td>
                                            <td class="pl-3">0%</td>
                                        </tr>
                                        <tr class="border-bottom" height="50px">
                                            <td>Trung bình</td>
                                            <td>0</td>
                                            <td></td>
                                            <td class="pl-3">0%</td>
                                        </tr>
                                        <tr class="border-bottom" height="50px">
                                            <td>Kém</td>
                                            <td>0</td>
                                            <td></td>
                                            <td class="pl-3">0%</td>
                                        </tr>
                                        <tr class="border-bottom" height="50px">
                                            <td>Rất kém</td>
                                            <td>0</td>
                                            <td></td>
                                            <td class="pl-3">0%</td>
                                        </tr>
                                    </table>
                                </div>
                                <!-- Scorecard feedback -->
                                <div class="my-5">
                                    <h3>
                                        <strong>Đánh giá thẻ điểm</strong>
                                    </h3>
                                    <div class="row">
                                        <div class="col-1">
                                            <img
                                                class="avatar-sm"
                                                src="https://breezy-avatars.imgix.net/8b49f/20190325095513.jpg?w=200&amp;h=200&amp;crop=faces&amp;fit=crop"
                                                style="float: left"
                                            >
                                            <div class="time-line">
                                                <div class="end-point"></div>
                                            </div>
                                        </div>
                                        <div class="col-11">
                                            <h4 class="my-0 py-2">Hong Le Viet</h4>
                                            <div class="border rounded py-2">
                                                <p class="my-0">Okay</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- Team notes -->
                                <div class="my-5">
                                    <h3>
                                        <strong>Ghi chú của nhóm</strong>
                                    </h3>
                                    <h4>Chưa có ghi chú</h4>
                                </div>
                            </div>
                        </b-tab>
                        <!-- Email / SMS -->
                        <b-tab>
                            <template slot="title">
                                <i class="fa fa-envelope"></i>
                                <span>Email / SMS</span>
                            </template>
                            <!-- Content -->
                            <h1>Import from middle border of inbox_page</h1>
                        </b-tab>
                        <!-- Tasks -->
                        <b-tab>
                            <template slot="title">
                                <i class="fa fa-check-square"></i>
                                <span>Tasks</span>
                            </template>
                            <!-- Content -->
                            <div class="container pl-0">
                                <div class="row">
                                    <div class="col d-flex">
                                        <select class="form-control" style="border: none; width: 170px">
                                            <option>Công việc của tôi</option>
                                            <option>Công việc đã tạo</option>
                                            <option>Công việc của nhóm</option>
                                        </select>
                                    </div>
                                    <div class="col d-flex justify-content-end">
                                        <button
                                            class="btn"
                                            style="background: #5ac0e5; color: #ffffff; height: 30px"
                                        >
                                            <i class="fas fa-plus">&nbsp;&nbsp;Thêm</i>
                                        </button>
                                    </div>
                                </div>
                                <div class="mt-5 d-flex justify-content-center text-secondary">
                                    <i class="fas fa-check-square fa-4x"></i>
                                </div>
                                <div class="my-3 d-flex justify-content-center">
                                    <p>Bạn chưa có công việc</p>
                                </div>
                            </div>
                        </b-tab>
                        <!-- Questionnaires -->
                        <b-tab>
                            <template slot="title">
                                <i class="fa fa-list"></i>
                                <span>Questionnaires</span>
                            </template>
                            <!-- Content -->
                            <div class="container pl-0">
                                <div class="row">
                                    <div class="col d-flex">
                                        <h1>Các câu hỏi</h1>
                                    </div>
                                    <div class="col d-flex justify-content-end">
                                        <button
                                            class="btn"
                                            style="background: #5ac0e5; color: #ffffff; height: 30px"
                                        >
                                            <i class="fas fa-envelope">&nbsp;&nbsp;Gửi câu hỏi</i>
                                        </button>
                                    </div>
                                </div>
                                <div class="mt-5 d-flex justify-content-center text-secondary">
                                    <i class="fas fa-list fa-4x"></i>
                                </div>
                                <div class="my-3 d-flex justify-content-center">
                                    <p>Bạn chưa gửi cho Albert Hadley câu hỏi nào</p>
                                </div>
                            </div>
                        </b-tab>
                        <!-- Calendar -->
                        <b-tab>
                            <template slot="title">
                                <i class="fa fa-calendar"></i>
                                <span>Lịch</span>
                            </template>
                            <!-- Content -->
                            <div class="container pl-0">
                                <div class="row">
                                    <div class="col d-flex">
                                        <h1>Lịch</h1>
                                    </div>
                                    <div class="col d-flex justify-content-end">
                                        <button
                                            class="btn"
                                            style="background: #5ac0e5; color: #ffffff; height: 30px"
                                        >
                                            <i class="fas fa-calendar-alt">&nbsp;&nbsp;Lịch họp</i>
                                        </button>
                                    </div>
                                </div>
                                <FullCalendar
                                    id="fullcalendar"
                                    :locale="viPlugin"
                                    :events="events"
                                    default-view="dayGridMonth"
                                    :header="calendarHeader"
                                    @eventClick="eventClick"
                                    :selectable="true"
                                    @select="dateSelect"
                                    :plugins="calendarPlugins"
                                ></FullCalendar>
                            </div>
                        </b-tab>
                        <!-- References -->
                        <b-tab>
                            <template slot="title">
                                <i class="fa fa-certificate"></i>
                                <span>References</span>
                            </template>
                            <!-- Content -->
                            <div class="container pl-0">
                                <div class="row">
                                    <div class="col d-flex">
                                        <h1>References</h1>
                                    </div>
                                    <div class="col d-flex justify-content-end">
                                        <button
                                            class="btn"
                                            style="background: #5ac0e5; color: #ffffff; height: 30px"
                                        >
                                            <i class="fas fa-plus">&nbsp;&nbsp;Thêm</i>
                                        </button>
                                    </div>
                                </div>
                                <div class="mt-5 d-flex justify-content-center text-secondary">
                                    <i class="fas fa-certificate fa-4x"></i>
                                </div>
                                <div class="my-3 d-flex justify-content-center">
                                    <p>Chưa có bất cứ references được thêm vào</p>
                                </div>
                            </div>
                        </b-tab>
                        <!-- Background check -->
                        <b-tab>
                            <template slot="title">
                                <i class="fa fa-id-card"></i>
                                <span>Background Checks</span>
                            </template>
                            <!-- Content -->
                            <div class="container pl-0">
                                <div class="row">
                                    <div class="col d-flex">
                                        <h1>Background Checks</h1>
                                    </div>
                                </div>
                                <div class="mt-5 d-flex justify-content-center text-secondary">
                                    <i class="fas fa-id-card fa-4x"></i>
                                </div>
                                <div class="my-3 d-flex justify-content-center">
                                    <p>Chưa có background checks được tạo</p>
                                </div>
                            </div>
                        </b-tab>
                        <!-- Assessments -->
                        <b-tab>
                            <template slot="title">
                                <i class="fa fa-shield-alt"></i>
                                <span>Assessments</span>
                            </template>
                            <!-- Content -->
                            <div class="container pl-0">
                                <div class="row">
                                    <div class="col d-flex">
                                        <h1>Đánh giá</h1>
                                    </div>
                                </div>
                                <div class="mt-5 d-flex justify-content-center text-secondary">
                                    <i class="fas fa-shield-alt fa-4x"></i>
                                </div>
                                <div class="my-3 d-flex justify-content-center">
                                    <p>Bạn chưa gửi Albert Hadley bất cứ đánh giá nào</p>
                                </div>
                            </div>
                        </b-tab>
                    </b-tabs>
                </b-card>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    #work-experience li {
        margin-bottom: 30px;
    }

    #scorecard {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        border: 2px solid #edeff0;
        background: #76d691;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 24px;
        color: #ffffff;
    }

    .vertical-line {
        height: 60px;
        border-left: 1px solid #e4e4e4;
        margin-left: 10px;
        margin-right: 10px;
    }

    .time-line {
        height: 80px;
        border-left: 3px solid #eee;
        margin-left: 10px;
        margin-right: 10px;
    }

    .time-line .end-point {
        position: absolute;
        bottom: 0;
        left: 22px;
        width: 10px;
        height: 10px;
        background: #eee;
        border-radius: 10px;
    }

    .avatar-sm {
        width: 25px;
        height: 25px;
        border-radius: 50%;
        border: 1px solid #e4e4e4;
    }

    .summary {
        border-left: 3px solid #dee5ee;
    }

    .summary p {
        font-size: 13px;
    }

    .card .tabs.row.no-gutters {
        height: 100%;
    }

    .col-auto {
        overflow-y: auto;
        overflow-x: hidden;
        height: 100%;
        width: 180px;
    }

    .col-auto ul {
        display: block;
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
    }

    .col-auto ul li {
        font-size: 12px;
        line-height: 20px;
        font-weight: 200;
        display: block;
        cursor: pointer;
        padding: 0px 5px;
        color: #8a9ba8;
        white-space: nowrap;
    }

    .col-auto ul li i {
        width: 26px;
        height: 26px;
        border-radius: 100%;
        border: 2px solid #8a9ba8;
        padding: 5px;
        margin-right: 10px;
        font-size: 12px;
        text-align: center;
        display: inline-block;
        font-weight: 900px;
    }

    .col-auto ul li i:hover {
        background-color: #76d691;
        color: #ffffff;
    }

    .tab-content.col {
        color: #5e676e;
        overflow-y: auto;
        height: 100%;
    }

    .tab-content.col .container {
        overflow-y: auto;
    }

    .active-link {
        color: #5ac0e5;
    }

    h1 {
        font-size: 24px;
        padding-bottom: 3px;
    }

    h2 {
        font-size: 20px;
        padding-bottom: 3px;
    }

    h3 {
        font-size: 16px;
        padding-bottom: 3px;
    }

    h4 {
        font-size: 13px;
        padding-bottom: 3px;
    }

    h1 i {
        font-size: 18px;
    }

    .content {
        width: 100%;
    }

    .info-candidate .head {
        color: #bbb;
    }

    .info-candidate .head:hover {
        text-decoration: none;
    }

    .modal-dialog {
        width: 840px;
        height: 550px;
        margin: 0px auto;
        max-width: 100%;
        background-color: transparent;
    }

    .modal-content {
        height: 100%;
        margin: 0 auto;
        padding: 0 0px;
        color: white;
        background-color: transparent;
        border: 0;
    }

    .my-modal-body {
        padding: 20px;
        background-color: #384047;
    }

    .my-modal-footer {
        display: flex;
        flex: 1;
        position: relative;
        height: 100%;
        overflow: hidden;
        background-color: #fafafa;
    }

    .avatar-candidate {
        height: 80px;
        width: 80px;
        background-color: #e32256;
        border-radius: 100%;
        border: 2px solid white;
        display: inline-block;
        vertical-align: top;
        margin-right: 10px;
    }

    .avatar-candidate::before {
        content: "A";
        font-size: 42px;
        position: absolute;
        top: 0;
        left: 0;
        width: 80px;
        height: 80px;
        line-height: 76px;
        text-align: center;
    }

    .avatar-candidate::after {
        content: "2";
        background-color: #76d691;
        border: 2px solid #edeff0;
        border-radius: 100%;
        text-align: center;
        position: absolute;
        top: 56px;
        left: 50px;
        padding: 6px 0;
        line-height: 16px;
        width: 29px;
        height: 29px;
        display: inline-block;
    }

    .avatar-candidate-sm {
        height: 50px;
        width: 50px;
        background-color: #e32256;
        border-radius: 100%;
        border: 2px solid white;
        display: flex;
        align-items: center;
        margin-right: 10px;
    }

    .avatar-candidate-sm::before {
        content: "A";
        font-size: 21px;
        top: 0;
        left: 0;
        width: 75px;
        height: 75px;
        line-height: 76px;
        text-align: center;
        color: white;
    }

    .info-candidate {
        display: inline-block;
        padding: 0%;
        margin: 0%;
    }

    .info-candidate ul {
        list-style-type: none;
        padding: 0%;
        margin: 0px;
    }

    .info-candidate ul li {
        font-size: 12px;
        display: inline;
        margin-right: 5px;
        padding: 0%;
        color: #bbb;
    }

    .body {
        font-weight: bold;
    }

    .action-candidate {
        padding: 0%;
        margin: 0%;
        text-align: right;
    }

    .action-candidate ul {
        list-style-type: none;
        padding: 0%;
        margin: 0px;
        margin-bottom: 5px;
    }

    .action-candidate ul li {
        font-size: 12px;
        display: inline;
        margin-left: 5px;
        padding: 6px 12px;
        color: white;
        background-color: #5ac0e5;
        border: 0;
        border-radius: 3px;
        line-height: 1.5;
    }

    .action-candidate ul li i {
        font-size: 11px;
        line-height: 1;
        display: inline-block;
        padding: 0;
        margin: 0;
    }

    ul.action-candidate-third li {
        background-color: #76d691;
    }

    ul.action-candidate-second li {
        background-color: #edeff0;
        color: #68747e;
    }

    .content-candidate {
        margin: 0 0 20px 20px;
        background-color: white;
        position: absolute;
        left: 160px;
        right: 20px;
        top: 20px;
        border: 1px solid #edeff0;
        padding: 20px;
        border-radius: 4px;
        height: calc(100% - 40px);
        overflow: auto !important;
    }

    @import "~@fullcalendar/core/main.css";
    @import "~@fullcalendar/daygrid/main.css";
    @import "~@fullcalendar/timegrid/main.css";
</style>

<script lang="ts">
    import Vue from "vue";
    import FullCalendar from "@fullcalendar/vue";
    import dayGridPlugin from "@fullcalendar/daygrid";
    import timeGridPlugin from "@fullcalendar/timegrid";
    import InteractionPlugin from "@fullcalendar/interaction";
    import viPlugin from "@fullcalendar/core/locales/vi";
    import EventOwnerTypes from "@/components/Calendar/EventOwnerOptions";
    import {fauth} from "@/firebase";
    import {mapGetters} from "vuex";
    // import "@/assets/candidate_info_modal.js";

    export default Vue.extend({
        props: {},
        components: {
            FullCalendar
        },
        data() {
            return {
                calendarPlugins: [dayGridPlugin, timeGridPlugin, InteractionPlugin],
                viPlugin,
                calendarHeader: {
                    left: "today prev,next",
                    center: "title",
                    right: "dayGridMonth,timeGridWeek,timeGridDay"
                },

                event_owner_filters: "",
                event_owner_options: EventOwnerTypes,

                newEvent: {
                    startStr: "",
                    endStr: ""
                },
                allEvents: [
                    {
                        title: "My Event",
                        assigned: {
                            id: "asdasdasd",
                            name: "An",
                            position_id: "123"
                        },
                        start: "2019-04-19 9:00 (GMT+7)",
                        end: "2019-04-23 15:30 (GMT+7)",
                        // allDay: true,
                        color: "blue",
                        textColor: "white",
                        editable: true,
                        id: "asdasd"
                    },
                    {
                        title: "Dinh's Event",
                        assigned: {
                            id: "dsadasdsa",
                            name: "Hong Viet Le",
                            position_id: "456"
                        },
                        start: "2019-04-15 11:30 (GMT+7)",
                        end: "2019-04-15 15:30 (GMT+7)",
                        color: "green",
                        textColor: "white",
                        id: "abcabcbac"
                    }
                ],

                // TEST DATA
                positions: [
                    {
                        id: "123",
                        name: "Dev"
                    },
                    {
                        id: "456",
                        name: "Tester"
                    }
                ],
                position_filters: [] as string[]
            };
        },
        computed: {
            // mix the getters into computed with object spread operator
            ...mapGetters([
                "currentUser",
                "currentCompany"
                // ...
            ])
        },
        created() {
            console.info("candidateModal.vue");
        },
        methods: {}
    });
</script>
