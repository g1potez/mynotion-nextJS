import { Meta, StoryObj } from '@storybook/react';
import { Avatar, AvatarImage, AvatarFallback } from '../avatar';

const meta = {
    title: 'Avatar',
    render: (args) => (
        <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>Username</AvatarFallback>
        </Avatar>
    ),
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<{}>

export default meta

type Story = StoryObj<typeof meta>

export const AvatarWithImage: Story = {
    args: {},
    render: (args) => (
        <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>Username</AvatarFallback>
        </Avatar>
    )
}
export const AvatarWithoutImage: Story = {
    args: {},
    render: (args) => (
        <Avatar>
            <AvatarFallback>Us</AvatarFallback>
        </Avatar>
    )
}