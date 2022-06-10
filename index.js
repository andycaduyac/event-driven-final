const btn = document.querySelector('.btn');
const div = document.querySelector('div');
const img = document.querySelector('img');


let msg = document.getElementById("msg")

document.addEventListener("mouseup", (event) => {
    if (event.button == 0) {
        console.log('Left mouse click');
    }else if(event.button == 2 ){
        console.log('Right mouse click');
    }
  })

  document.onkeydown=function(e){
      console.log(e.key);
  }