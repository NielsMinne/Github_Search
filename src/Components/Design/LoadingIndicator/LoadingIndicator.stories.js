import React from 'react';
import LoadingIndicator from './LoadingIndicator';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Design/Loader',
  component: LoadingIndicator,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <LoadingIndicator {...args} />;

export const Loader = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Loader.args = {

};
