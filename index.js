//first-class objects
function Monday() {
    exerciseRoutine(liftWeights);
  }
  
  function exerciseRoutine(postRunActivity) {
    runFiveMiles();
    postRunActivity();
  }
Monday();

//inline functions using arrow functions
exerciseRoutine(() => {
    console.log("Stretch! Work that core!");
  });
  exerciseRoutine(() => console.log("Stretch! Work that core!"));

  //Returning functions
  function morningRoutine(exercise) {
    let breakfast;
  
    if (exercise === liftWeights) {
      breakfast = "protein bar";
    } else if (exercise === swimFortyLaps) {
      breakfast = "kale smoothie";
    } else {
      breakfast = "granola";
    }
  
    exerciseRoutine(exercise);
//anonymous function 
    return function () {
      console.log(`Nom nom nom, this ${breakfast} is delicious!`);
    };
  } //=>Nom nom nom, this protein bar is delicious!

  //lab
  //Your codes here ----->
  function receivesAFunction(callback){
    callback();
  }
  function returnsANamedFunction(){
    function collectionOfTshirts(){}
    return collectionOfTshirts
  }
  function returnsAnAnonymousFunction(){
    return function(){}
  }