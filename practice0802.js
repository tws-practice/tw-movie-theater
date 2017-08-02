function judgePalindromeNumber(inputs) {
  let array=inputs.toString().split("");
  let newArray=[];
  for(let i of array){
      newArray.unshift(i);
  }
  let newNumber=parseInt(newArray.join(""));
    if(newNumber==inputs)return true;
    else return false;
}
console.log(judgePalindromeNumber(12321));