import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Header from '../components/Header';

const stories = storiesOf('Header', module);

stories.add('default view', () => (
  <Header
    addTodo={action('add todo item')}
  />
));
