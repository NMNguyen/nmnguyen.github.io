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
            <!-- ngIf: activeTab == "media" -->
            <!-- ngIf: activeTab == "social" -->
            <!-- ngIf: activeTab == "perks" -->
            <!-- ngIf: activeTab == "messaging" -->
            <!-- ngIf: activeTab == "meta" -->
            <div class="meta nigvlxscope" nigvlxif="activeTab == &quot;meta&quot;">
                <div class="header">
                    <h1>Chia sẻ Mạng xã hội</h1>
                    <p>Theo mặc định, chúng tôi thực hiện một công việc khá tốt là hiển thị các phần mở của bạn khi bạn chia sẻ chúng qua phương tiện truyền thông xã hội. Nhưng đôi khi bạn muốn biến chúng thành của riêng bạn.</p>
                    <p>Sử dụng mẫu dưới đây để thay đổi ngôn ngữ và hình ảnh được sử dụng khi bạn chia sẻ liên kết Breezy trực tuyến.</p>
                </div>
                <form name="form" novalidate="novalidate"
                      class="nigvlxpristine nigvlxvalid">
                    <div class="company">
                        <div class="header">
                            <h2>Trang vị trí tuyển dụng</h2>
                        </div>
                        <div class="columns">
                            <div class="column">
                                <div class="section">
                                    <h3>Tiêu đề</h3><input type="text" class="form-control">
                                </div>
                                <div class="section">
                                    <h3>Chi tiết</h3>
                                    <div class="template-variable ui-select-bootstrap dropdown nigvlxvalid"
                                    >
                                        <button type="button"
                                                class="btn btn-default form-control ui-select-match" tabindex="-1"
                                                placeholder="Template Variables"><span
                                            nigvlxshow="$select.searchEnabled &amp;&amp; $select.isEmpty()"
                                            class="text-muted nigvlxbinding">Template Variables</span> <span
                                            nigvlxhide="$select.isEmpty()" nigvlxtransclude="" class="nigvlxhide"><span
                                            class="nigvlxbinding nigvlxscope"></span></span> <span
                                            class="caret"></span></button>
                                        <input type="text" autocomplete="off"
                                               tabindex="-1"
                                               class="form-control ui-select-search nigvlxpristine nigvlxuntouched nigvlxvalid nigvlxhide"
                                               placeholder="Template Variables" nigvlxmodel="$select.search"
                                               nigvlxshow="$select.searchEnabled &amp;&amp; $select.open">
                                        <ul class="ui-select-choices ui-select-choices-content dropdown-menu nigvlxscope"
                                            role="menu" aria-labelledby="dLabel" nigvlxshow="$select.items.length > 0"
                                            repeat="template in templateVariables | filter:{for:'positions'}">
                                            <li class="ui-select-choices-group">
                                                <div class="divider nigvlxhide" nigvlxshow="$select.isGrouped &amp;&amp; $index > 0">
                                                </div>
                                                <div nigvlxshow="$select.isGrouped"
                                                     class="ui-select-choices-group-label dropdown-header nigvlxbinding nigvlxhide">
                                                </div><!-- ngRepeat: template in $select.items -->
                                                <div class="ui-select-choices-row nigvlxscope active"
                                                ><a href="javascript:void(0)"
                                                    class="ui-select-choices-row-inner" uis-transclude-append=""><span
                                                    nigvlxbind-html="template.name" class="nigvlxbinding nigvlxscope">Company
                                                    Name</span></a></div>
                                                <!-- end ngRepeat: template in $select.items -->
                                                <div class="ui-select-choices-row nigvlxscope"><a href="javascript:void(0)"
                                                                                                  class="ui-select-choices-row-inner" uis-transclude-append=""><span
                                                    nigvlxbind-html="template.name" class="nigvlxbinding nigvlxscope">Company
                                                    Header</span></a></div>
                                                <!-- end ngRepeat: template in $select.items -->
                                                <div class="ui-select-choices-row nigvlxscope"><a href="javascript:void(0)"
                                                                                                  class="ui-select-choices-row-inner" uis-transclude-append=""><span
                                                    nigvlxbind-html="template.name" class="nigvlxbinding nigvlxscope">Company
                                                    Sub-header</span></a></div>
                                                <!-- end ngRepeat: template in $select.items -->
                                                <div class="ui-select-choices-row nigvlxscope"><a href="javascript:void(0)"
                                                                                                  class="ui-select-choices-row-inner" uis-transclude-append=""><span
                                                    nigvlxbind-html="template.name" class="nigvlxbinding nigvlxscope">Company
                                                    Description</span></a></div>
                                                <!-- end ngRepeat: template in $select.items -->
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="redactor-hide-toolbar">

                                            <textarea id="redactor" nigvlxmodel="portal.meta.positions.description"
                                                      placeholder="Enter a message template" redactor="portalMetaConfigPositions"
                                                      class="nigvlxpristine nigvlxuntouched nigvlxvalid redactor-source" name="content-4"
                                                      data-redactor-uuid="4" style="display: none;">The Talent will be growupWe are the place to showup your talent</textarea>
                                        <ul dir="ltr" class="redactor-statusbar"></ul>
                                    </div>
                                </div>
                            </div>
                            <div class="column">
                                <div class="section">
                                    <h3>Xem trước</h3>
                                    <div class="preview">
                                        <div class="meta-image">
                                            <!-- ngIf: !portal.meta.positions.image -->
                                            <div class="company-hero-container nigvlxscope" nigvlxif="!portal.meta.positions.image">
                                                <div class="hero-wrap">
                                                    <div class="hero-preview"
                                                         style="background-image: linear-gradient(rgba(117,111,125,0.48), rgba(117,111,125,0.48)), url('https://gallery-cdn.breezy.hr/9a12577f-5374-4086-8331-778cdc87d768/ab20f8a18653-1047-4abb-b0c0-7d4e86228052.png');">
                                                        <h1 class="nigvlxbinding">Work Hard, Try hard, Challenge your self</h1>
                                                        <p class="nigvlxbinding">The Talent will be growupWe are the place to
                                                            showup your talent</p>
                                                    </div>
                                                </div>
                                            </div><!-- end ngIf: !portal.meta.positions.image -->
                                            <!-- ngIf: portal.meta.positions.image -->
                                        </div>
                                        <div class="meta-text">
                                            <div class="meta-title"><span class="nigvlxbinding">Work Hard, Try hard, Challenge your
                                            self</span></div>
                                            <div class="meta-description"><span class="nigvlxbinding">The Talent will be growupWe
                                            are the place to showup your talent</span></div>
                                            <div class="meta-link"><span class="nigvlxbinding">app.cloudjet.work</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="section">
                            <h3>Tùy chỉnh hình ảnh</h3>
                            <p>Mặc định chúng tôi hỗ trợ tự động tạo ra hình ảnh trên trang tuyển dụng. Bạn có thể tùy chỉnh.</p><!-- ngIf: portal.meta.positions.image -->
                            <button
                                class="btn btn-xs btn-blue attach-file" type="file" nigvlxfile-select="nigvlxfile-select"
                                nigvlxfile-change="uploadSocialImage($files, 'positions')" style="overflow: hidden;"><i
                                class="fa fa-plus"></i><span> Tải lên hình ảnh</span><input type="file" tabindex="-1"
                                                                                        nigvlxfile-generated-elem="true"
                                                                                        style="width: 1px; height: 1px; opacity: 0; position: absolute; padding: 0px; margin: 0px; overflow: hidden;"></button>
                        </div>
                        <div class="header">
                            <h2>Trang vị trí</h2>
                        </div>
                        <div class="columns">
                            <div class="column">
                                <div class="section">
                                    <h3>Tiêu đề</h3><input type="text" class="form-control">
                                </div>
                                <div class="section">
                                    <h3>Chi tiết</h3>
                                    <textarea class="form-control">Come and play</textarea>
                                </div>
                            </div>
                            <div class="column">
                                <div class="section">
                                    <h3>Xem trước</h3>
                                    <div class="preview">
                                        <div class="meta-image">
                                            <!-- ngIf: !portal.meta.position.image -->
                                            <div class="company-hero-container nigvlxscope" nigvlxif="!portal.meta.position.image">
                                                <div class="hero-wrap">
                                                    <div class="hero-preview"
                                                         style="background-image: linear-gradient(rgba(117,111,125,0.48), rgba(117,111,125,0.48)), url('https://gallery-cdn.breezy.hr/9a12577f-5374-4086-8331-778cdc87d768/ab20f8a18653-1047-4abb-b0c0-7d4e86228052.png');">
                                                        <h1>Example Position</h1>
                                                        <p><i class="fa fa-map-marker"></i><span>Example city, USA</span></p>
                                                    </div>
                                                </div>
                                            </div><!-- end ngIf: !portal.meta.position.image -->
                                            <!-- ngIf: portal.meta.position.image -->
                                        </div>
                                        <div class="meta-text">
                                            <div class="meta-title"><span class="nigvlxbinding">We need your to Dev, Qc</span>
                                            </div>
                                            <div class="meta-description"><span class="nigvlxbinding">Come and play</span></div>
                                            <div class="meta-link"><span class="nigvlxbinding">cjs.breezy.hr</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="section">
                            <h3>Tùy chỉnh hình ảnh</h3>
                            <p>Mặc định chúng tôi hỗ trợ tự động tạo ra hình ảnh trên trang tuyển dụng. Bạn có thể tùy chỉnh.</p><!-- ngIf: portal.meta.position.image -->
                            <button
                                class="btn btn-xs btn-blue attach-file" type="file" nigvlxfile-select="nigvlxfile-select"
                                nigvlxfile-change="uploadSocialImage($files, 'position')" style="overflow: hidden;"><i
                                class="fa fa-plus"></i><span> Tải lên hình ảnh</span><input type="file" tabindex="-1"
                                                                                        nigvlxfile-generated-elem="true"
                                                                                        style="width: 1px; height: 1px; opacity: 0; position: absolute; padding: 0px; margin: 0px; overflow: hidden;"></button>
                        </div>
                    </div>
                    <div class="footer align-right">
                        <button class="btn btn-blue default"><i class="default fa fa-save"></i><span class="default">Lưu</span></button>
                    </div>
                </form>
            </div><!-- end ngIf: activeTab == "meta" -->
            <!-- ngIf: activeTab == "custom-css-js" -->
        </div>
    </div>

</template>
