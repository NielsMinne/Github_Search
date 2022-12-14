import React from 'react';
import Card from './Card';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Design/Card',
  component: Card,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Card {...args} />;

export const CardEl = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
CardEl.args = {
    user:"gdmgent-nielsminne"
};
