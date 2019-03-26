import 'jest';
import { shallowMount } from '@vue/test-utils';
import HelloWorld from '../HelloWorld.vue';
import DynamicHeader from '../DynamicHeader.vue'

describe('HelloWorld.vue', () => {
  test('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });

  test('dynamic module load', () => {
    const wrapper = shallowMount(HelloWorld);
    const IsDynamicHeader = wrapper.find(DynamicHeader);
    expect(IsDynamicHeader.is(DynamicHeader)).toBe(true);
  });
});
