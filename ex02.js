function validateNumber(n) {
  const validNumber = typeof n === "number" && Number.isFinite(n);
  return validNumber;
}
function checkNumber(n) {
  if (!validateNumber(n)) {
    return "Invalid";
  }
  if (n % 15 === 0) {
    return "Chia hết cho cả 3 số 3, 5 và 15";
  } else if (n % 3 === 0) {
    return "Chia hết cho 3";
  } else if (n % 5 === 0) {
    return "Chia hết cho 5";
  } else {
    return "Không chia hết";
  }
}
console.log(checkNumber(11));
