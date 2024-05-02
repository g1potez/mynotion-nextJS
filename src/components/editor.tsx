"use client";


import {
    Block,
    BlockNoteEditor,
    PartialBlock
} from "@blocknote/core";
import {
    BlockNoteView,
    useCreateBlockNote
} from "@blocknote/react";
import "@blocknote/core/fonts/inter.css";
import "@blocknote/react/style.css";

import {useTheme} from "next-themes";
import {useEdgeStore} from "@/lib/edgestore";

interface EditorProps {
    onChange: (value: string) => void;
    initialContent?: string;
    editable?: boolean;
}

const Editor = ({
   onChange,
   initialContent,
   editable
} : EditorProps) => {
    const { resolvedTheme } = useTheme();
    const { edgestore } = useEdgeStore();

    const handleUpload = async (file: File) => {
        const response = await edgestore.publicFiles.upload({
            file
        });

        return response.url;
    }

    const editor = useCreateBlockNote({
        initialContent: initialContent
            ? JSON.parse(initialContent) as PartialBlock[]
            : undefined,
        uploadFile: handleUpload,
    })

    async function saveToStorage(jsonBlocks: Block[]) {
        onChange(JSON.stringify(jsonBlocks, null, 2));
    }

    if (editor === undefined) {
        return "Loading content...";
    }

    return (
        <div>
            <BlockNoteView
                editor={editor}
                editable={editable}
                onChange = {() => {
                    saveToStorage(editor.document);
                }}
                theme={resolvedTheme === "dark" ? "dark" : "light"}
            />
        </div>
    );
};

export default Editor;