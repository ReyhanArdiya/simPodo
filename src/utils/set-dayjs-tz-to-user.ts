import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone.js";
import utc from "dayjs/plugin/utc.js";

/**
 * Helps set the default dayjs tz to use the user's tz. Remember to use `dayjs.tz`
 * method instead of regular `dayjs` if you want to use the user's timezone.
 */
const setDayjsTzToUser = () => {
	dayjs.extend(utc);
	dayjs.extend(timezone);
	dayjs.tz.setDefault(dayjs.tz.guess());
};

setDayjsTzToUser();
