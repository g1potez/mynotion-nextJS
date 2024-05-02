import { Meta, StoryObj } from '@storybook/react';
import { Dialog, DialogHeader, DialogContent, DialogTrigger, DialogFooter, DialogDescription, DialogTitle, DialogClose } from '../dialog';
import { Button } from '../button';
import {  } from '@radix-ui/react-dialog';
import { Label } from '../label';
import { Input } from '../input';

const meta = {
    title: 'Dialog',
    component: () => (
        <Dialog>
            <DialogTrigger asChild>
                    <Button>Click me</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader className="border-b pb-3">
                    <DialogTitle>Title</DialogTitle>
                    <DialogDescription>This is description</DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                            Name
                        </Label>
                        <Input
                            id="name"
                            defaultValue="Pedro Duarte"
                            className="col-span-3"
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="username" className="text-right">
                            Username
                        </Label>
                        <Input
                            id="username"
                            defaultValue="@peduarte"
                            className="col-span-3"
                        />
                    </div>
                </div>
                <DialogClose>Close</DialogClose>
                <DialogFooter>
                    Footer
                </DialogFooter>
            </DialogContent>
        </Dialog>
    ),
    parameters: {
        layout: 'centered'
    },
} satisfies Meta<{}>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {}
}