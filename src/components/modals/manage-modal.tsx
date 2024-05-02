"use client";

import {
    Dialog,
    DialogContent,
    DialogHeader
} from "@/components/ui/dialog";
import {useManage} from "@/hooks/use-manage";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { SignOutButton, useUser } from "@clerk/clerk-react";
import { Button } from "../ui/button";
import { DropdownMenu, 
    DropdownMenuContent,
    DropdownMenuItem,  
    DropdownMenuLabel,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Item } from "@/app/(main)/_components/item";
import { Camera, Pencil } from "lucide-react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";


export const ManageModal = () => {
    const manage = useManage();
    const {user} = useUser();

    return (
        <Dialog open={manage.isOpen} onOpenChange={manage.onClose}>
            <DialogContent>
                <DialogHeader className="border-b pb-3">
                    <h1 className="text-lg font-bold">
                        Account
                    </h1>
                    <p>Manage your account information</p>
                </DialogHeader>
                <div className="mb-10">
                    <h2 className="text-lg font-medium mb-5">Profile</h2>
                    <div className="flex items-center">
                        <Avatar className="h-20 w-20 mr-5">
                            <AvatarImage className="rounded-full" src={user?.imageUrl} />
                        </Avatar>
                        <Item 
                            label="Change avatar"
                            icon={Camera}
                        />
                    </div>
                </div>
                <div className="mb-10">
                    <h2 className="text-lg font-medium mb-5">Username</h2>
                    <div>
                        <Label className="flex items-center mb-3 text-gray-500"><Pencil className="w-5 mr-3" />Change username:</Label>
                        <Input className="focus-visible:ring-gray-300 bg-secondary" placeholder={`${user?.username}`}/>
                    </div>
                </div>
                <div className="mb-10">
                    <h2 className="text-lg font-medium mb-5">Email address</h2>
                    <div>
                        <Label className="flex items-center mb-3 text-gray-500"><Pencil className="w-5 mr-3" />Change email address:</Label>
                        <Input className="focus-visible:ring-gray-300 bg-secondary" placeholder={user?.emailAddresses[0].emailAddress}/>
                    </div>
                </div>
                <Button size="sm" className="w-20">
                    Confirm
                </Button>
                
            </DialogContent>
        </Dialog>
    );
};