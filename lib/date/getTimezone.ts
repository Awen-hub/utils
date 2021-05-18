import { trunc } from "lib/number/trunc";
import { abs } from "lib/number/abs";

/**
 * @memberof Date
 * @name getTimezone
 * @description 返回当前时区
 * @returns {Object} 返回一个对象，包含当前时区的相关信息
 * @example {hours: 8, minutes: 15} //hours为正代表东时区，负为西时区
 */

const getTimezone = (): { hours: number; minutes: number } => {
  const date: Date = new Date();
  //东区返回负数
  const minutesDistance: number = -date.getTimezoneOffset();
  const hours: number = trunc(minutesDistance / 60);
  const minutes: number = abs(minutesDistance % 60);
  return {
    hours,
    minutes,
  };
};

export { getTimezone };
