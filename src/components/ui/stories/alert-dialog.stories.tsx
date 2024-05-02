import { Meta, StoryObj } from '@storybook/react'
import { AlertDialog, AlertDialogTrigger, AlertDialogHeader, AlertDialogContent, AlertDialogTitle, AlertDialogDescription, AlertDialogFooter, AlertDialogCancel, AlertDialogAction } from '../alert-dialog'

const meta = {
    title: 'Alert-Dialog',
    component: () => (
        <AlertDialog>
                    <AlertDialogTrigger data-testid="trigger">
                        Click me
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                        <AlertDialogHeader>
                            <AlertDialogTitle data-testid="title">
                                Title?
                            </AlertDialogTitle>
                            <AlertDialogDescription data-testid="description">
                                This is description
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogCancel data-testid="cancel">
                                Cancel
                            </AlertDialogCancel>
                            <AlertDialogAction data-testid="Action">
                                Continue
                            </AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
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