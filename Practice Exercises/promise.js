function dieToss() {
    return Math.floor(Math.random() * 6) + 1;  
  }
  
  function tossASix() {
    return new Promise(function(fulfill, reject) {
      var n = Math.floor(Math.random() * 6) + 1;
      if (n === 6) {
        fulfill(n);
      } else {
        reject(n);
      }
    });
  }
  
  function logAndTossAgain(toss) {
    console.log("Tossed a " + toss + ", need to try again.");
    return tossASix();
  }
  
  function logSuccess(toss) {
    console.log("Yay, managed to toss a " + toss + ".");
  }
  
  function logFailure(toss) {
    console.log("Tossed a " + toss + ". Too bad, couldn't roll a six");
  }
  
  tossASix()
    .then(null, logAndTossAgain)   //Roll first time
    .then(null, logAndTossAgain)   //Roll second time
    .then(logSuccess, logFailure); //Roll third and last time