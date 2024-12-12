export const calculateAge = (birthday: Date) => {
  const birthDate = new Date(birthday);

  const today = new Date();

  let age = today.getFullYear() - birthDate.getFullYear();

  const monthDiff = today.getMonth() - birthDate.getMonth();

  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  return age;
};

export const getMonthsDifference = (birthday: Date) => {
  const birthDate = new Date(birthday);

  const today = new Date();

  const monthsDiff = today.getMonth() - birthDate.getMonth();

  return monthsDiff;
};

export const getWeeksDifference = (birthday: Date) => {
  const birthDate = new Date(birthday);

  // Set the time component of the birthDate to midnight
  birthDate.setHours(0, 0, 0, 0);

  const today = new Date();
  // Set the time component of today to midnight
  today.setHours(0, 0, 0, 0);

  const timeDiff = today.getTime() - birthDate.getTime();
  const weeksDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 7));

  return weeksDiff;
};
