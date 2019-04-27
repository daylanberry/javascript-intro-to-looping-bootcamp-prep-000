function forLoop(array){
  var string = ''
  for (var i = 0; i <array.length; i++){
    if (i === 1){
      string += 'I am 1 strange loop.'
    } else {
      string += `I am ${i} strange loop`
    }
  }
}