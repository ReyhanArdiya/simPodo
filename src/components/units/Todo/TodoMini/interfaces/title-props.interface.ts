import type { FormEventHandler } from "react";

export interface TitleProps {
    title: string;
    onTitleChange: FormEventHandler;
    edit?: boolean;
    dark?: boolean;
}