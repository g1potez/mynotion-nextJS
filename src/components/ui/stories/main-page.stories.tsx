import { Meta, StoryObj } from '@storybook/react';

import { Item } from '@/app/(main)/_components/item';
import TrashSidebar from '@/app/(main)/_components/trashSidebar';
import { UserItem } from '@/app/(main)/_components/user-item';
import { ChevronsLeft } from 'lucide-react';
import { Search, Settings, PlusCircle, Plus, Trash } from 'lucide-react';

const meta = {
    args: {
        type: String,
    },
    title: 'Main page',
    render: (args) => (
        <div>
            <aside
                className="group/sidebar h-full bg-secondary overflow-y-auto relative flex w-60 flex-col transition-all ease-in-out duration-300">
                <div
                    role="button"
                    className="h-6 w-6 text-muted-foreground rounded-sm hover:bg-neutral-300 dark:hover:bg-neutral-600 \
                    absolute top-3 right-2 opacity-0 group-hover/sidebar:opacity-100 transition"
                >
                    <ChevronsLeft className="h-6 w-6" />
                </div>
                <div>
                    <UserItem />
                    <Item 
                        label = "Search"
                        icon = {Search}
                        isSearch
                    />
                    <Item 
                        label = "Settings"
                        icon = {Settings}        
                    />
                    <Item 
                        label="New page" 
                        icon={PlusCircle} 
                    />
                </div>
                <div className="mt-4">
                    {/* <DocumentList /> */}
                    <Item 
                        icon={Plus}
                        label="Add page"
                    />
                    <div className="mt-4">
                        <Item 
                            label="Trash"
                            icon={Trash}
                        />
                    </div>
                </div>
                <div
                    className="opacity-0 group-hover/sidebar:opacity-100 transition cursor-ew-resize absolute h-full
                                w-1 bg-primary/10 right-0 top-0"
                >

                </div>
            </aside>
            <div
                className="absolute top-0 z-[9999] left-60 w-[calc(100%-240px)] transition-all ease-in-out duration-300"
            >
            </div>
            <TrashSidebar />
        </div>
    ),

} satisfies Meta<{}>

export default meta;

type Story = StoryObj<typeof meta>

export const Default: Story = {
    render: (args) => (
        
    ),
}