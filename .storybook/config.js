import { configure, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import PropsTable from './infoTable';

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /.stories.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addDecorator((story, context) => withInfo({
  TableComponent: PropsTable
})(story)(context))
configure(loadStories, module)
