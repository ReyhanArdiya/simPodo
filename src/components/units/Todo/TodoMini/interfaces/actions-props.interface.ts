import type { MouseEventHandler } from "react";

export interface ActionsProps {
	edit?: boolean;
	onEdit: MouseEventHandler;
	onEditDiscard: MouseEventHandler;
	onEditDone: MouseEventHandler;
    dark?: boolean;
    onDelete: MouseEventHandler;
    onTodoFinish: MouseEventHandler;
}