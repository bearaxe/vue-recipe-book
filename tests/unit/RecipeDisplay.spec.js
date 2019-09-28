import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import RecipeDisplay from '@/components/RecipeDisplay.vue';

describe('RecipeDisplay.vue', () => {
  it('renders props.msg when passed', () => {
    const testString = 'Test Title';
    const wrapper = shallowMount(RecipeDisplay, {
      propsData: { title: testString },
    });
    expect(wrapper.text()).to.include(testString);
  });
});
