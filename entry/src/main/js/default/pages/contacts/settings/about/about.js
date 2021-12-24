/**
 * @file 关于
 */
/**
 * Copyright (c) 2021 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http:// www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import router from '@system.router';
import app from '@system.app';

export default {
    data: {
        appVersion: '1.0'
    },

// 初始化页面
    onInit() {
        this.appVersion = app.getInfo().versionName;
    },

// 返回上层页面
    back: function () {
        router.back();
    },

// 点击开源代码许可
    openSourceClick: function () {
        router.push({
            uri: 'pages/contacts/settings/about/license/license',
            params: {},
        });
    }
};