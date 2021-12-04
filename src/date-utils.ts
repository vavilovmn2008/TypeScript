/** Сдвиг даты
 * @param date {Date} - дата для сдвига
 * @param deltaDays {number} - на какое количество дней сдвинуть
 * @returns {Date} - сдвинутая на deltaDays дней дата
 */
export const shiftDate = (date: Date, deltaDays: number): Date =>
  new Date(date.getFullYear(), date.getMonth(), date.getDate() + deltaDays);

/** Получить последний день месяца
 * @param date - дата, в месяце которой нужно получить последний день
 * @returns {Date} - дата последнего дня в следующем месяце
 */
export const getLastDayOfNextMonth = (date: Date): Date =>
  new Date(date.getFullYear(), date.getMonth() + 2, 0);

/** */
export const pad = (v: string | number): string =>
  `0${v}`.slice(-2);

/** Форматировать дату
 * @param date {Date} - дата, которую нужно форматировать
 * @returns {string} - строка, с отформатированной датой
 */
export const formatDate = (date: Date): string =>
  `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;