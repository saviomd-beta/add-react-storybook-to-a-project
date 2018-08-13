import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';
import MainSection from '../components/MainSection';

const stories = storiesOf('MainSection', module);

stories.add('with a single todo item', () => (
  <MainSection
    todos= {[{id: '1', text: 'Learn React'}]}
    actions={{}}
  />
))

stories.add('with a few todo items', () => {
  const todos = [
    {id: '1', text: 'Learn React', completed: true},
    {id: '2', text: 'Use CRA', completed: true},
    {id: '3', text: 'Try Storybook'},
  ];
  return (
    <MainSection
      todos={todos}
      actions={{}}
    />
  );
})
