import type { Meta } from '@storybook/react';

import { Button } from '.';

export default {
  title: 'Atoms/Button',
  component: Button,
} satisfies Meta<typeof Button>;

export const Default = {
  args: {
    children: 'Button',
  },
};
