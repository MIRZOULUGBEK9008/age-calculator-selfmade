const elLoader = document.querySelector(".js-loader"),
elForm = document.querySelector(".js-form"),
elYear = document.querySelector(".js-year-result"),
elMonth = document.querySelector(".js-month-result"),
elDate = document.querySelector(".js-date-result");

// LOADER
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    elLoader.classList.add("loader-wrapper--none");
  }, 1000);
});

let yearResult, monthResult, dateResult

function calculate() {
  // Foydalanuvchidan qiymatlarni olish
  let date = parseInt(document.querySelector(".js-date").value);
  let month = parseInt(document.querySelector(".js-month").value);
  let year = parseInt(document.querySelector(".js-year").value);
  // Joriy sanani hisoblash
  let currentDate = new Date();

  // Tug'ilgan sanani hisoblash
  let birthDate = new Date(year, month - 1, date);

  // Farqni hisoblash
  let difference = currentDate.getTime() - birthDate.getTime();
  yearResult = Math.floor(difference / (1000 * 60 * 60 * 24 * 365));
  monthResult = Math.floor((difference % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
  dateResult = Math.floor((difference % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
}


elForm.addEventListener("submit", (e) => {
  e.preventDefault();
  calculate();
  elYear.innerHTML = yearResult;
  elMonth.innerHTML = monthResult;
  elDate.innerHTML = dateResult;
});