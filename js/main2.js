const checkbox = document.getElementById("checkbox");
const button = document.getElementById("button");

const professional = document.getElementById("professional");
const _3Month = document.getElementById("3Month");
const _1Month = document.getElementById("1Month");

checkbox.addEventListener("click", () => {
  _1Month.textContent = _1Month.textContent === "500E£" ? "5000E£" : "500E£";
  professional.textContent =
    professional.textContent === "$249.99" ? "$24.99 " : "$249.99";
  _3Month.textContent = _3Month.textContent === "1500E£" ? "1300E£" : "1500E£";
});

button.addEventListener("click", () => {
  _1Month.textContent =
    _1Month.textContent === "199.99E£" ? "19.99E£" : "199.99E£";
  professional.textContent =
    professional.textContent === "$249.99" ? "$24.99 " : "$249.99";
  master.textContent = master.textContent === "$399.99" ? "$39.99" : "$399.99";
});
