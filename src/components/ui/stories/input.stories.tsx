import { Meta, StoryObj } from '@storybook/react';
import { Input } from '../input';

const meta = {
    title: 'Input',
    component: Input,
    parameters: {
        layout: 'centered'
    }

} satisfies Meta<typeof Input>

export default meta

type Story = StoryObj<typeof meta>

export const Text: Story = {
    args: {
        type: 'text',
        placeholder: 'Text'
    }
}
export const Password: Story = {
    args: {
        type: 'password',
        placeholder: 'Password'
    }
}
export const Email: Story = {
    args: {
        type: 'email',
        placeholder: 'Email'
    }
}