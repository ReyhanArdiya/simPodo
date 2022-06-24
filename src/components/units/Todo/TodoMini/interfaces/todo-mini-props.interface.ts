import type { CSSProperties, MouseEventHandler } from "react";
import type { ActionsProps } from "./actions-props.interface";
import type { TagProps } from "./tag-props.interface";
import type { TimeProps } from "./time-props.interface";
import type { TitleProps } from "./title-props.interface";

export interface TodoMiniProps extends
	ActionsProps,
	TimeProps,
	TitleProps,
	TagProps {
	className?: string;
	dark?: boolean;
	edit?: boolean;
	tagColor: string;
	tagName: string;

	// CMT These props is used for ReactDraggable only
	readonly onMouseDown?: MouseEventHandler;
	readonly style?: CSSProperties;
}
