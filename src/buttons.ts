import { ToolbarItem } from 'pspdfkit';

import icon from './assets/logo.svg?raw';

export const loadButton = (): ToolbarItem => ({
  type: 'custom',
  id: 'my-button',
  title: 'Load',
  icon: icon,
  onPress: () => {},
});
