//deli counter
let counter = 0
function takeANumber(arr){
  counter++;
  arr.push(counter);
  let str = `Welcome, You are number ${counter} in line.`;
  return str;
}

function nowServing(arr){
  if(arr.length === 0){
    return "There is nobody waiting to be served!";
  }
  let name = arr.splice(0,1);
  return `Currently serving ${name}.`
}

function currentLine(arr){
  if(arr.length === 0){
    return "The line is currently empty.";
  }
  let str = "The line is currently: ";
  for(let i =0; i <arr. length; i++){
      if(i === arr.length-1){
        str += `${i+1}. ${arr[i]}`;
      }else{
        str += `${i+1}. ${arr[i]}, `;}
      }
      return str;
}
