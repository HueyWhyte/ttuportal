export const cgpaCalculator = (results) => {
  let totalGradePoint = 0;
  let totalCreditHours = 0;

  results.forEach((result) => {
    if (result.score >= 85 && result.score <= 100) {
      totalGradePoint += 5.0 * parseInt(result.course.creditHours);
      totalCreditHours += parseInt(result.course.creditHours);
    } else if (result.score >= 80 && result.score <= 84) {
      totalGradePoint += 4.5 * parseInt(result.course.creditHours);
      totalCreditHours += parseInt(result.course.creditHours);
    } else if (result.score >= 75 && result.score <= 79) {
      totalGradePoint += 4.0 * parseInt(result.course.creditHours);
      totalCreditHours += parseInt(result.course.creditHours);
    } else if (result.score >= 70 && result.score <= 74) {
      totalGradePoint += 3.5 * parseInt(result.course.creditHours);
      totalCreditHours += parseInt(result.course.creditHours);
    } else if (result.score >= 65 && result.score <= 69) {
      totalGradePoint += 3.0 * parseInt(result.course.creditHours);
      totalCreditHours += parseInt(result.course.creditHours);
    } else if (result.score >= 60 && result.score <= 64) {
      totalGradePoint += 2.5 * parseInt(result.course.creditHours);
      totalCreditHours += parseInt(result.course.creditHours);
    } else if (result.score >= 55 && result.score <= 59) {
      totalGradePoint += 2.0 * parseInt(result.course.creditHours);
      totalCreditHours += parseInt(result.course.creditHours);
    } else if (result.score >= 50 && result.score <= 54) {
      totalGradePoint += 3.5 * parseInt(result.course.creditHours);
      totalCreditHours += parseInt(result.course.creditHours);
    } else if (result.score >= 0 && result.score <= 49) {
      totalGradePoint += 0 * parseInt(result.course.creditHours);
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
