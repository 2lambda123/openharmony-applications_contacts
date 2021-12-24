/**
 * Copyright (c) 2021 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http:// www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import {describe, beforeAll, beforeEach, afterEach, afterAll, it, expect} from 'deccjsunit/index'
import Constants from '../../../main/js/default/common/constants/Constants.js';
import contactsDataBase from '../../../main/js/default/model/SelectContactsListModel.js';

describe('SelectContactsListModelTest', function (){
    it('checkedDelete', 0, function (){
        var isOperationAll = true;
        var unCheckedContactIds = ['1'];

        var DAHelper = this.$app.$def.getDAHelper(Constants.uri.CONTACT_DB_URI);
        contactsDataBase.checkedDelete(DAHelper, isOperationAll, unCheckedContactIds, (result) =>{
            expect(result).assertEqual('0');
        })
    })

    it('queryContactList', 0, function (){
        var actionData = {
            'page':0,
            'limit':20
        }

        var DAHelper = this.$app.$def.getDAHelper(Constants.uri.CONTACT_DB_URI);
        contactsDataBase.queryContactList(DAHelper, actionData, (result) => {
            expect(result.code).assertEqual('0');
        })
    })

})