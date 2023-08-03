import { create } from '@storybook/theming';
import Logo from './assets/tru-logo.svg'
export default create({
  base: 'light',
  brandTitle: 'Tru Components',
  brandUrl: 'https://www.tru.agency/',
  brandImage: Logo,
  brandTarget: '_self',
});
