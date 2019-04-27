function forLoop(){
  var string = ''
  for (var i = 0; i <25; i++){
    if (i === 1){
      string += 'I am 1 strange loop. '
    } else {
      string += `I am ${i} strange loop `
    }
  }
}