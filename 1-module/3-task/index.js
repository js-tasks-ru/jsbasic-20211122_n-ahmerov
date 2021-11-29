function ucFirst(str) {
  if (str == ''){
    return str
 }else{
let str2 = str.slice(1)
return `${str}`[0].toUpperCase() + str2
}
}