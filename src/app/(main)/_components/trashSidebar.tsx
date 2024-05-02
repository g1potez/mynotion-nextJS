'use client';

import { TrashBox } from "./trash-box";

const TrashSidebar = () => {

    return (
        <div className="trashSidebar hidden dark:bg-[#1F1F1F]">
            <TrashBox />
        </div>
    );
};

export default TrashSidebar;