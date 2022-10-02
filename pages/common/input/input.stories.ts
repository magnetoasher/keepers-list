import React from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import { RadioSelect, RadioSelectProps } from './input'

export default {
  title: 'Radio Select',
  component: RadioSelect,
} as ComponentMeta<typeof RadioSelect>

export const Primary: ComponentStory<typeof RadioSelect> = RadioSelect
