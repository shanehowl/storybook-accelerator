import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
// eslint-disable-next-line import/no-unresolved
import { Story, Meta } from '@storybook/react/types-6-0'
import { withDesign } from 'storybook-addon-designs'

import { Button, ButtonProps } from './Button'

export default {
  title: 'Example/Button',
  component: Button,
  decorators: [withDesign],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta

const Template: Story<ButtonProps> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  primary: true,
  label: 'Button',
  disabled: false,
}
Primary.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/k1eUtEFmf177bihKWeLYXA/Storybook-Demo?node-id=1%3A1441',
  },
}

export const Secondary = Template.bind({})
Secondary.args = {
  label: 'Button',
}

export const Large = Template.bind({})
Large.args = {
  size: 'large',
  label: 'Button',
}

export const Small = Template.bind({})
Small.args = {
  size: 'small',
  label: 'Button',
}
