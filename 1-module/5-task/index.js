function truncate(str, maxlength) {
  let coll = `${str}`.length;

  let maxlength2 = maxlength - 1

  if (maxlength < coll){
   let str2 =  str.slice(0, maxlength2);
   
   return `${str2}`+'…'
  } else {
      return str
  }
}