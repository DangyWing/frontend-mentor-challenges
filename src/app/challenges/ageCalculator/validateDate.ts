import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";

export function validateDate({
  day,
  month,
  year,
}: {
  day: number;
  month: number;
  year: number;
}) {
  dayjs.extend(customParseFormat);

  const isValid =
    dayjs(`${year}-${month}-${day}`, "YYYY-M-D", true).isValid() ||
    dayjs(`${year}-${month}-${day}`, "YYYY-MM-DD", true).isValid();

  return isValid;
}
