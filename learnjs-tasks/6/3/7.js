function makeArmy() {
    let shooters = [];
  
    let i = 0;
    while (i < 10) {
      let n = i
      let shooter = function() {
        alert( n );
      };
      shooters.push(shooter);
      i++;
    }
  
    return shooters;
  }
  
  let army = makeArmy();
  
  army[0]();
  army[5]()