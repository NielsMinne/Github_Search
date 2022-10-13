import React from 'react';

import Button from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Design/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    color: {
        options: ['primary', 'secondary','close'],
        control: { type: 'radio' },
      },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  color:"primary",
  name:"Search",
};

export const Secondary = Template.bind({});
Secondary.args = {
    color:"secondary",
    name:"Reset",
};

export const Close = Template.bind({});
Close.args = {
    color:"close",
    name:"X",
};
