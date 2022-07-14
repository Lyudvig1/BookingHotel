export class Utils {
  dateNow() {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, "0");
    let mm = String(today.getMonth() + 1).padStart(2, "0");
    let yyyy = today.getFullYear();
    today = yyyy + "-" + mm + "-" + dd;
    return today;
  }
  dateRangeSeven() {
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1; 
    let yyyy = today.getFullYear();
    if (dd === 22 && mm === 2) {
      mm++;
      dd = dd - 21;
    } else if (dd === 24 && mm % 2 !== 0) {
      mm++;
      dd = dd - 23;
    } else if (dd === 25 && mm % 2 === 0) {
      mm++;
      dd = dd - 24;
    } else {
      dd = dd + 7;
    }
    today =
      yyyy +
      "-" +
      String(mm).padStart(2, "0") +
      "-" +
      String(dd).padStart(2, "0");
    return today;
  }
}
