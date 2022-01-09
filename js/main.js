async function joke(){
  const res=await fetch("https://v2.jokeapi.dev/joke/Any?blacklistFlags=religious,racist,sexist&type=single");
  const showIt = await res.json();
  
  document.getElementById("jokehere").innerHTML=showIt.joke;
  //console.log(showIt.joke)
}


document.getElementById("btn").addEventListener("click",joke);