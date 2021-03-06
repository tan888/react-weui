/**
 * Created by n7best on 16/2/25.
 */

"use strict";

import React from 'react';
import { shallow } from 'enzyme';
import assert from 'assert';
import WeUI from '../src/index';

const {Input} = WeUI;

describe('<Input></Input>', ()=> {
    [undefined, null, 'custom_class'].map(clazz => {
        describe(`<Input className=${clazz}></Input>`, ()=> {
            const wrapper = shallow(
                <Input className={clazz}/>
            );

            it(`should render <Input></Input> component`, ()=> {
                assert(wrapper.instance() instanceof Input);
                assert(wrapper.find('input').hasClass('weui_input'));
            });

            it(`should have custom class name ${clazz} when className is not null or empty`, ()=>{
                if (clazz) {
                    assert(wrapper.find('input').hasClass(clazz));
                }
            });
        });
    });
});