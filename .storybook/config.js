import { configure, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /.stories.jsx$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addDecorator((story, context) => withInfo({})(story)(context))
configure(loadStories, module)
