function isEmpty(obj) {
  let k = 0;
    for (let key in obj){
        ++k;
    }
    if (k > 0){
        return false;
    }else{
        return true;
    }
}
