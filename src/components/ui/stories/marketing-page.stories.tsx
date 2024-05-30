import { Meta, StoryObj} from '@storybook/react'

import { Footer } from '@/app/(marketing)/_components/footer'
import { Heroes } from '@/app/(marketing)/_components/heroes'
import { Button } from '../button'
import { ArrowRight } from 'lucide-react'
import { Logo } from '@/app/(marketing)/_components/logo'
import { Avatar, AvatarImage, AvatarFallback } from '../avatar';


const meta = {
    args: {
        type: String,
    },
    title: 'Marketing Page',
    render: (args) => (
        <div className="h-full dark:bg-[#1F1F1F]">
             <div className='z-50 bg-background dark:bg-[#1F1F1F] fixed top-0 flex items-center justify-between w-1/2 p-6'>
                <Logo />
                <div className='flex items-center'>
                    <Button variant="ghost" size="sm">
                        Log in
                    </Button>
                    <Button size="sm">
                        Get Jotion free
                    </Button>
                </div>
            </div>
            <main className="h-full pt-40">
                <div className="min-h-full flex flex-col dark:bg-[#1F1F1F]">
                    <div className="flex flex-col items-center justify-center md:justify-start text-center gap-y-8 flex-1 px-6 pb-10">
                        <div className="max-w-3xl space-y-4">
                            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
                                Your Ideas, Documents, & Plans. Unified. Welcome to <span className="underline">Jotion</span>
                            </h1>
                            <h3 className="text-base sm:text-xl md:text-2xl font-medium">
                                Jotion is the connected workspace where <br />
                                better, faster work happens.
                            </h3>
                            <Button>
                                Get Jotion free
                                <ArrowRight className="h-4 w-4 ml-2" />
                            </Button>
                        </div>
                        <Heroes />
                    </div>
                <Footer />
                </div>
            </main>
        </div>
    ),
    parameters: {
        layout: 'centered'
    }
} satisfies Meta<{}>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
    render: (args) => (
        <div className="h-full dark:bg-[#1F1F1F]">
            <div className='z-50 bg-background dark:bg-[#1F1F1F] fixed top-0 flex items-center justify-between w-1/2 p-6'>
                <Logo />
                <div className='flex items-center'>
                    <Button size="sm">
                        Get Jotion free
                    </Button>
                    <Button variant="ghost" size="sm">
                        Log in
                    </Button>
                </div>
            </div>
            <main className="h-full pt-40">
                <div className="min-h-full flex flex-col dark:bg-[#1F1F1F]">
                    <div className="flex flex-col items-center justify-center md:justify-start text-center gap-y-8 flex-1 px-6 pb-10">
                        <div className="max-w-3xl space-y-4">
                            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
                                Your Ideas, Documents, & Plans. Unified. Welcome to <span className="underline">Jotion</span>
                            </h1>
                            <h3 className="text-base sm:text-xl md:text-2xl font-medium">
                                Jotion is the connected workspace where <br />
                                better, faster work happens.
                            </h3>
                            <Button>
                                Get Jotion free
                                <ArrowRight className="h-4 w-4 ml-2" />
                            </Button>
                        </div>
                        <Heroes />
                    </div>
                <Footer />
                </div>
            </main>
        </div>
    ),
}

export const isAuth: Story = {
    render: (args) => (
        <div className="h-full dark:bg-[#1F1F1F]">
            <div className='z-50 bg-background dark:bg-[#1F1F1F] fixed top-0 flex justify-between items-center w-1/2 p-6'>
                <Logo />
                <div className='flex items-center'>
                    <Button size="sm" variant='outline'>
                        Enter Jotion
                    </Button>
                    <Avatar className='ml-5'>
                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                        <AvatarFallback>Username</AvatarFallback>
                    </Avatar>
                </div>
            </div>
            <main className="h-full pt-40">
                <div className="min-h-full flex flex-col dark:bg-[#1F1F1F]">
                    <div className="flex flex-col items-center justify-center md:justify-start text-center gap-y-8 flex-1 px-6 pb-10">
                        <div className="max-w-3xl space-y-4">
                            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
                                Your Ideas, Documents, & Plans. Unified. Welcome to <span className="underline">Jotion</span>
                            </h1>
                            <h3 className="text-base sm:text-xl md:text-2xl font-medium">
                                Jotion is the connected workspace where <br />
                                better, faster work happens.
                            </h3>
                            <Button>
                                Enter Jotion
                                <ArrowRight className="h-4 w-4 ml-2" />
                            </Button>
                        </div>
                        <Heroes />
                    </div>
                <Footer />
                </div>
            </main>
        </div>
    ),
}