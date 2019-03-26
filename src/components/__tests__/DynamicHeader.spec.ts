import 'jest';
import {shallowMount} from '@vue/test-utils';
import DynamicHeader from '../DynamicHeader.vue';

describe('DynamicHeader.vue', () => {
    test('Has H1', () => {
        const wrapper = shallowMount(DynamicHeader);
        const h1 = wrapper.find('h1');
        expect(h1.is('h1')).toBe(true)
    });
});
