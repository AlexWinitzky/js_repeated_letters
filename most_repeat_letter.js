function repeatCount(string) {
   
  var bin = {};
  for (var i = 0; i < string.length; i++) {
      bin[string[i]] = (bin[string[i]] || 0) + 1;
  }
  var max = 0;
  for (var c in bin) {
      max = Math.max(max, bin[c]);
  }
  return max;
}

console.log(repeatCount('Which letter has most repeeeeeated letters'))