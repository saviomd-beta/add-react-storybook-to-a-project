import { configure } from '@storybook/react';
import 'todomvc-app-css/index.css';

function loadStories() {
  require('../src/stories');
}

configure(loadStories, module);
