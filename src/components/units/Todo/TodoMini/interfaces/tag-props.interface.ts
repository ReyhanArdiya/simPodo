import type { MouseEventHandler } from "react";

export interface TagProps{
    edit?: boolean;
    onTagClick: MouseEventHandler;
    tagColor: string;
}
