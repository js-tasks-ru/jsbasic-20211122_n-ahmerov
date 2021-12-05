function sumSalary(salaries) {
  let k = 0;
  for (let key in salaries){
     if (typeof salaries[key] === 'number' && salaries[key] > -Infinity && salaries[key] < Infinity){
    k = k + salaries[key]; 
    }
}
return k;
}
