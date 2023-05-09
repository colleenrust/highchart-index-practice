// setTimeout(function() {
//   console.log('First task done!');
// }, 2000);

// setTimeout(function(){
//   console.log('Second task done!');
// },4000)

// setTimeout(function(){
//   console.log('Third task done!');
// },6000)


function firstTask(){
  console.log('first task completed')
}

function secondTask(){
  console.log('second task completed')
}

function thirdTask(){
  console.log('third task completed')
}

setTimeout(function(){
  console.log('first task');
  setTimeout(function(){
    console.log('second task');
    setTimeout(function(){
      console.log('third task');
    },2000);
  },2000);
},2000);