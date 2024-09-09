const frog = document.getElementById("frog")
const grass = document.getElementById("grass")

document.addEventListener("keydown", function(event){
  jump();
});

function jump(){
  if (frog.classList != "jump") {
    frog.classList.add("jump")
  }
  setTimeout(function(){
    frog.classList.remove("jump")
  }, 500)
}

let isAlive = setInterval(function(){
  let frogTop = parseInt(window.getComputedStyle(frog).getPropertyValue("top"));
  let grassLeft = parseInt(window.getComputedStyle(grass).getPropertyValue("left"));

  if(grassLeft < 50 && grassLeft > 0 && frogTop >=140){
    alert("Лягушка запуталась в траве!")
  }
}, 10);
