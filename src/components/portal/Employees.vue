<template>
    <div class="settings portal">
        <div class="main-content">
            <!-- ngIf: activeTab == "simpleGeneral" -->
            <!-- ngIf: activeTab == "type" -->
            <!-- ngIf: activeTab == "simpleAppearance" -->
            <!-- ngIf: activeTab == "appearance" -->
            <!-- ngIf: activeTab == "testimonials" -->
            <!-- ngIf: activeTab == "layout" -->
            <!-- ngIf: activeTab == "employees" -->
            <div class="profile nigvlxscope" nigvlxif="activeTab == &quot;employees&quot;">
                <div class="header">
                    <h1>Nhân viên</h1>
                </div><!-- ngIf: updateFailed -->
                <div class="company">
                    <div class="section">
                        <h2>Thêm nhân viên</h2>
                        <p class="nigvlxbinding">Cung cấp cho các ứng viên xem nhóm trong Cloudjet.</p>
                        <div class="testimonial-container">
                            <div class="headshot-placeholder nigvlxpristine nigvlxuntouched nigvlxinvalid nigvlxinvalid-required"
                                 type="file" accept="image/*"
                                 required="required" style="overflow: hidden;">
                                <!-- ngIf: !employee.headshot_url -->
                                <div class="headshot nigvlxscope" nigvlxif="!employee.headshot_url"><i class="fa fa-camera-retro"></i>
                                </div><!-- end ngIf: !employee.headshot_url -->
                                <!-- ngIf: employee.headshot_url --><input type="file" accept="image/*" tabindex="-1"
                                                                           nigvlxfile-generated-elem="true"
                                                                           style="width: 1px; height: 1px; opacity: 0; position: absolute; padding: 0px; margin: 0px; overflow: hidden;">
                            </div>
                            <input class="emp-name half nigvlxpristine nigvlxuntouched nigvlxinvalid nigvlxinvalid-required"
                                   type="text" placeholder="Tên nhân viên" nigvlxmodel="employee.name" nigvlxrequired="true"
                                   nigvlxclass="employeeSubmitted &amp;&amp; !employee.name ? &quot;error&quot; : &quot;&quot;"
                                   required="required">
                            <div class="form-divider"></div>
                            <input
                                class="title half nigvlxpristine nigvlxuntouched nigvlxinvalid nigvlxinvalid-required" type="text"
                                placeholder="Vị trí / Chức vụ" nigvlxmodel="employee.role" nigvlxrequired="true"
                                nigvlxclass="employeeSubmitted &amp;&amp; !employee.role ? &quot;error&quot; : &quot;&quot;"
                                required="required">
                        </div>
                        <div class="form-divider"></div>
                        <a class="logo add btn btn-blue btn-xs"
                           nigvlxclick="addEmployee(employee)"><i class="fa fa-plus"></i><span> Thêm nhân viên</span></a>
                    </div>
                    <div class="section">
                        <h2>Nhân viên của bạn</h2><!-- ngIf: portal.employees.list.length === 0 -->
                        <ul class="testimonials">
                            <!-- ngRepeat: employee in portal.employees.list -->
                            <li class="testimonial employee nigvlxscope" nigvlxrepeat="employee in portal.employees.list">
                                <avatar person="employee" class="nigvlxisolate-scope avatar"><img
                                    src="https://breezy-avatars.imgix.net/2b9b6/5367934014428278758735257351643409724997632o.jpg?w=200&amp;h=200&amp;crop=faces&amp;fit=crop">
                                </avatar>
                                <div class="content">
                                    <h4 class="nigvlxbinding">Emily Rose</h4>
                                    <h5 class="nigvlxbinding">Operation</h5><a class="remove" href="#"
                                                                               nigvlxclick="removeEmployee($index)"><i class="fa fa-times"></i><span> Xóa</span></a>
                                </div>
                            </li><!-- end ngRepeat: employee in portal.employees.list -->
                        </ul>
                    </div>
                    <div class="section">
                        <h2>Tiêu đề chính (tùy chọn)</h2><input
                        class="header full nigvlxpristine nigvlxuntouched nigvlxvalid nigvlxvalid-required nigvlxvalid-maxlength"
                        type="text" nigvlxmodel="portal.employees.header" placeholder="e.g. Our Team" nigvlxrequired="true"
                        maxlength="100" required="required">
                    </div>
                    <div class="section">
                        <h2>Tiêu đề phụ (tùy chọn)</h2><input
                        class="tagline full nigvlxpristine nigvlxuntouched nigvlxvalid nigvlxvalid-maxlength" type="text"
                        nigvlxmodel="portal.employees.subheader" placeholder="e.g. Meet the team here at Cloudjet"
                        maxlength="250">
                    </div><!-- ngIf: employeesChanged -->
                </div>
            </div><!-- end ngIf: activeTab == "employees" -->
            <!-- ngIf: activeTab == "media" -->
            <!-- ngIf: activeTab == "social" -->
            <!-- ngIf: activeTab == "perks" -->
            <!-- ngIf: activeTab == "messaging" -->
            <!-- ngIf: activeTab == "meta" -->
            <!-- ngIf: activeTab == "custom-css-js" -->
        </div>
    </div>
</template>
