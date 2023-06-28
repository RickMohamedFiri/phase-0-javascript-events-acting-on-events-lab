
const dodger = document.getElementById("dodger");
dodger.style.backgroundColor = "red";



//Move Dodger to the left

document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowLeft") {
        moveDodgerLeft()
    }else if (event.key === "ArrowRight") {
        moveDodgerRight()
     }
  });

 
//Your code here
function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 10}px`;
    }
  }
  
function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left <=360) {
      console.log('The left is : '  + left)
      dodger.style.left = `${left + 10}px`;
    }
  }
  



  