import React from 'react';
import List from './List';
import ListItem from './ListItem';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Design/List',
  component: List,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <List {...args} />;

export const ListElement = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ListElement.args = {
    children: [
    
        <ListItem
        name="Item #1"
        img= "https://loremflickr.com/320/240"
        />,
        <ListItem
        name="Item #2"
        img= "https://loremflickr.com/320/240/dog"
        />,
        <ListItem
        name="Item #3"
        img= "https://loremflickr.com/320/240"
        />
        
    ]
};
