export function calculateAge({
  day,
  month,
  year,
}: {
  day: number;
  month: number;
  year: number;
}) {
  const birthDate = new Date(`${year}-${month}-${day}`);
  const currentDate = new Date();

  let ageYears = currentDate.getFullYear() - birthDate.getFullYear();
  let ageMonths = currentDate.getMonth() - birthDate.getMonth();
  let ageDays = currentDate.getDate() - birthDate.getDate();

  if (
    currentDate.getMonth() < birthDate.getMonth() ||
    (currentDate.getMonth() === birthDate.getMonth() &&
      currentDate.getDate() < birthDate.getDate())
  ) {
    ageYears--;
    ageMonths += 12;
  }

  if (ageMonths < 0) {
    ageMonths += 12;
  }

  if (ageDays < 0) {
    const daysInLastMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      0
    ).getDate();
    ageMonths--;
    ageDays += daysInLastMonth;
  }
  return {
    years: ageYears,
    months: ageMonths,
    days: ageDays,
  };
}
