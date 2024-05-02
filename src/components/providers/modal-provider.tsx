"use client";

import { useEffect, useState } from "react";
import {SettingsModal} from "@/components/modals/settings-modal";
import { CoverImageModal } from "@/components/modals/cover-image-modal";
import { ManageModal } from '@/components/modals/manage-modal';

export const ModalProvider = () => {
    const [isMoundet, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMoundet) {
        return null;
    }

    return (
        <>
            <SettingsModal />
            <CoverImageModal />
            <ManageModal />
        </>
    );
};