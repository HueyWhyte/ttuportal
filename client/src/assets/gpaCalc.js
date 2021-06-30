export const cgpaCalculator = (results) => {
  let totalGradePoint = 0;
  let totalCreditHours = 0;

  results.forEach((result) => {
    if (result.score >= 80) {
      totalGradePoint += 4.0 * parseInt(result.course.creditHours);
      totalCreditHours += parseInt(result.course.creditHours);
    } else if (result.score >= 69) {
      totalGradePoint += 3.5 * parseInt(result.course.creditHours);
      totalCreditHours += parseInt(result.course.creditHours);
    } else if (result.score >= 59) {
      totalGradePoint += 3.0 * parseInt(result.course.creditHours);
      totalCreditHours += parseInt(result.course.creditHours);
    } else if (result.score >= 49) {
      totalGradePoint += 2.5 * parseInt(result.course.creditHours);
      totalCreditHours += parseInt(result.course.creditHours);
    }
  });

  let gpa = totalGradePoint / totalCreditHours;
  return gpa;
};

export const cwaCalculator = (results) => {
  let totalWA = 0;
  let totalCreditHours = 0;

  results.forEach((result) => {
    totalWA += parseInt(result.course.creditHours) * result.score;
    totalCreditHours += parseInt(result.course.creditHours);
  });

  let cwa = totalWA / totalCreditHours;
  return cwa;
};
