
function printRange(start, end, skip=1) {
  if(end === undefined) {
    end = start;
    start = 0;
  }

  if(start < end) {
    for(var i = start; i < end; i=i+skip) {
        console.log(i);
      }
  }
  else {
    skip = skip * -1;
    for(var i = start; i > end; i=i+skip) {
        console.log(i);
      }
  }
}



printRange(2, 13, 2);
