import type { MouseEventHandler } from "react";

export interface TimeProps {
    amPm: string;
    dark?: boolean;
    edit?: boolean;
    hours: number;
    minutes: number;
    onAmPmClick: MouseEventHandler;
	onHourClick: MouseEventHandler;
	onMinuteClick: MouseEventHandler;
}
