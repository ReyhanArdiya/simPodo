import type { MouseEventHandler } from "react";

export interface ArrowProps {
	onClick: MouseEventHandler;
	className?: string;
	dark?: boolean;
}