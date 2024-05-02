import { Meta, StoryObj } from '@storybook/react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '../dropdown-menu'

const meta = {
    title: 'Dropdown Menu',
    component: () => (
        <DropdownMenu>
            <DropdownMenuTrigger>
                Click me
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                Content
            </DropdownMenuContent>
        </DropdownMenu>
    ),
    parameters: {
        layout: 'centered'
    }
} satisfies Meta<{}>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {}
}

