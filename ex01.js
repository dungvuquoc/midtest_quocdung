function validateKm(km) {
  const validKm =
    typeof km === "number" && !isNaN(km) && km >= 0 && km !== Infinity;
  return validKm;
}
function taxiFare(km) {
  if (!validateKm(km)) {
    return "invalid";
  }
  if (km <= 1) {
    return 5000;
  } else if (km <= 30) {
    return 1 * 5000 + (km - 1) * 4000;
  } else {
    return 1 * 5000 + (30 - 1) * 4000 + (km - 30) * 3000;
  }
}
console.log(taxiFare(31) + "đ");
