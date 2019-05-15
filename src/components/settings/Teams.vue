<template>
  <div class="settings">
    <div class="main-content">
        <!-- ngIf: activeTab == "plan" -->
        <!-- ngIf: activeTab == "planBilling" -->
        <!-- ngIf: activeTab == "planConfirm" -->
        <!-- ngIf: activeTab == "planConfirmComplete" -->
        <!-- ngIf: activeTab == "users" -->
        <!-- ngIf: activeTab == "teams" -->
        <div class="team">
            <div class="header">
                <h1>Quản lý nhóm</h1>
                <p>Tổ chức các thành viên thành các nhóm để quản lý dễ dàng hơn.</p>
                <div class="position">
                    <div class="section invite"><button class="show-add-member btn btn-blue"><i
                                class="fa fa-plus"></i><span>Thêm nhóm</span></button></div>
                    <div class="section">
                        <h2>Các nhóm</h2><!-- ngIf: teams.length > 0 -->
                        <ul class="list member-list">
                            <!-- ngRepeat: team in teams -->
                            <li class="list-item member no-photo small">
                                <!-- ngIf: team._id !== "all_members" -->
                                <ul class="actions-list">
                                    <li class="action edit"><a href="#"
                                            tooltip-placement="bottom" uib-tooltip="Edit" data-container="body"><i
                                                class="fa fa-edit"></i></a></li>
                                    <li class="action remove"><a href="#" 
                                            tooltip-placement="bottom" uib-tooltip="Remove" data-container="body"><i
                                                class="fa fa-times"></i></a></li>
                                </ul><!-- end ngIf: team._id !== "all_members" -->
                                <div class="member-info">
                                    <div class="member-header">
                                        <h3>Nhóm 2</h3><!-- ngIf: team.member_ids.length === 0 -->
                                        <p class="role">Nhóm này không có thành viên</p><!-- end ngIf: team.member_ids.length === 0 -->
                                        <!-- ngIf: team.member_ids.length > 0 -->
                                    </div>
                                </div>
                            </li><!-- end ngRepeat: team in teams -->
                            <li class="list-item member no-photo small">
                                <!-- ngIf: team._id !== "all_members" -->
                                <div class="member-info">
                                    <div class="member-header">
                                        <h3>Tất cả thành viên</h3>
                                        <!-- ngIf: team.member_ids.length === 0 -->
                                        <!-- ngIf: team.member_ids.length > 0 -->
                                        <div class="members">
                                            <!-- ngRepeat: member in shared.activeCompany.members | teamMembers:team.member_ids | limitTo:10 -->
                                            <avatar
                                                person="member" tooltip-placement="bottom" tooltip-append-to-body="true"
                                                uib-tooltip="Hong Le Viet"
                                                class="avatar color4" initial="H"><img
                                                    src="https://breezy-avatars.imgix.net/8b49f/20190325095513.jpg?w=200&amp;h=200&amp;crop=faces&amp;fit=crop">
                                            </avatar>
                                            <!-- end ngRepeat: member in shared.activeCompany.members | teamMembers:team.member_ids | limitTo:10 -->
                                            <!-- ngIf: team.member_ids.length > 10 -->
                                        </div><!-- end ngIf: team.member_ids.length > 0 -->
                                    </div>
                                </div>
                            </li><!-- end ngRepeat: team in teams -->
                        </ul><!-- end ngIf: teams.length > 0 -->
                        <!-- ngIf: teams.length == 0 -->
                    </div>
                </div>
            </div>
        </div><!-- end ngIf: activeTab == "teams" -->
        <!-- ngIf: activeTab == "billing" -->
        <!-- ngIf: activeTab == "general" -->
    </div>
  </div>
</template>