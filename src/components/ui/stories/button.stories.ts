import { Meta, StoryObj } from '@storybook/react'
import { Button } from '../button'

const meta = {
    title: 'Buttons',
    component: Button,
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: { type: 'select' },
            options: [
                'default',
                'secondary',
                'destructive',
                'ghost',
                'link',
                'outline',
            ],
        },
        size: {
            control: { type: 'select' },
            options: ['default', 'icon', 'sm', 'lg'],
        },
    },
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

//color
export const Default: Story = {
    args: {
        variant: 'default',
        children: 'Click me',
    },
}

export const Secondary: Story = {
    args: {
        variant: 'secondary',
        children: 'Click me',
    },
}

export const Destructive: Story = {
    args: {
        variant: 'destructive',
        children: 'Click me',
    },
}

export const Ghost: Story = {
    args: {
        variant: 'ghost',
        children: 'Click me',
    },
}

export const Link: Story = {
    args: {
        variant: 'link',
        children: 'Click me',
    },
}
export const Outline: Story = {
    args: {
        variant: 'outline',
        children: 'Click me',
    },
}

//size

export const SizeDefault: Story = {
    args: {
        size: 'default',
        children: 'Click me',
    },
}
export const SizeIcon: Story = {
    args: {
        size: 'icon',
        children: 'icon',
    },
}
export const SizeLarge: Story = {
    args: {
        size: 'lg',
        children: 'Click me',
    },
}

export const SizeSmall: Story = {
    args: {
        size: 'sm',
        children: 'Click me',
    },
}
