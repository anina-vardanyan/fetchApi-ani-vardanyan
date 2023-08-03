const btn = document.querySelector(".btn");
const errorBox = document.querySelector(".error1");
btn.addEventListener("click", generateProfileBlock);
const text = document.querySelector(".text");



function generateProfileBlock() {
  errorBox.innerHTML="";
  const input = document.querySelector('.input').value;

  fetch(`https://api.github.com/users/${input}`)
    .then(response => response.json())
    .then(({ message, ...rest }) => {
      if (message) {
        throw new Error(message)
        
      } else {
        createProfil(rest);
      }
    })
    .catch((message) => {
      userNotFound(message);
    
    });
}

function userNotFound(message) {
  let error = document.createElement("div");
  error.classList.add("error");
  error.innerHTML = message;
  errorBox.appendChild(error);
  text.style.display = "none";
 
}


function createProfil({
  avatar_url,
  followers,
  following,
  company,
  blog,
  bio,
  location,
  updated_at,
  public_repos,
  public_gists,
}) {
  let profil = document.querySelector("#profil");
  profil.style.display = "flex";
  text.style.display = "none";
  profil.innerHTML = `
    <div class="img">
    <img class="search-image" src=${avatar_url}  class="jpeg">
    <div class="profil">VIEW PROFILES</div>
    </div>
    <div class=box>
    <div class="profil_box">
      <div class="profil1">Public Repos:  ${public_repos}</div>
      <div class="profil2">Public Gists:  ${public_gists}</div>
      <div class="profil3">Follwers ${followers}</div>
      <div class="profil4">Following ${following}</div>
    </div>
    <div> Company:  <button class="btn_1">${company}</button>  </div>
    <div>Website/Blog:  <button class="btn_1">${blog}</button> </div>
    <div>Location: ${location}</div>
    <div>Member Since: ${updated_at }</div>
    <div>Want to be Hired: <button class="work">${bio}</button></div>
  </div>
    `;
  }




/*  function range(a, y) {

  if (y - a === 2) {
    return [a + 1]
  }
  else 
  
  {
   let k= range(a, y - 1)
   k.push(y - 1);
           return k

  }
}
console.log(range(2, 9))
 

 */


/* function range(x,y){
    var results = [];
    if(x === y-1){
        return results;
    }
  
  results.push(x+1)
return results.concat(range(x+1,y));
}
console.log(range(1,5)) */