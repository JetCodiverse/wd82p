let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

// function totalSalary() {
//   let sum = salaries.Ann + salaries.John + salaries.Pete;

//   return sum;
// }

// console.log(totalSalary());

function totalSalary(salaries) {
  let sum = 0;

  for (let key in salaries) {
    sum += salaries[key];
  }

  return sum;
}

console.log(totalSalary(salaries));
