// Generate Function generates three  
// different numbers in three calls 
function* fun() { 
    yield 10; 
    yield 20; 
    yield 30; 
} 
  
// Calling the Generate Function 
let gen = fun(); 
console.log(gen.next().value); 
console.log(gen.next().value); 
console.log(gen.next().value);
//passing argu in gen
function* logGenerator() {
    console.log(0);
    console.log(1, yield);
    console.log(2, yield);
    console.log(3, yield);
  }
  
  const gen1 = logGenerator();
  
  gen1.next(); // 0
  gen1.next("preyl"); 
  gen1.next("cali"); 
  gen1.next("mayo");
//return in gen:
  function* yieldAndReturn() {
    yield "Y";
    return "R";
    yield "unreachable";
  }
  
  const gen2 = yieldAndReturn();
  console.log(gen2.next());
  console.log(gen2.next()); 
  console.log(gen2.next()); 