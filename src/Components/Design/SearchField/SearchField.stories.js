import React from 'react';

import SearchField from './SearchField';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Design/SearchField',
  component: SearchField,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    isActive: {
        options: ['disabled', 'active'],
        control: { type: 'radio' },
      },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <SearchField {...args} />;

export const SearchForm = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
SearchForm.args = {

};
