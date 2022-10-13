import React from 'react';

import Container from './Container';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Design/Container',
  component: Container,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Container {...args} />;

export const ContainerEl = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ContainerEl.args = {

};
