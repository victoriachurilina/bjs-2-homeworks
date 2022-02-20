function solveEquation(a, b, c) {
  let discriminant = (Math.pow(b, 2)-4*a*c);
  if (discriminant < 0) {
  return []; // array
} else if (discriminant === 0) {
  return [-b/(2*a)];
} else if (discriminant > 0) {
  return [(-b + Math.sqrt(d) )/(2*a), (-b - Math.sqrt(d) )/(2*a)];;
}
}
solveEquation(1, 5, 4);
function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  return totalAmount;
}
