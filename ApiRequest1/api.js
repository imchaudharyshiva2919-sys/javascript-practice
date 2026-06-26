const requestUrl = "https://api.github.com/users/shivamChaudhary19";

let info = document.querySelector(".info");
let profile = document.querySelector(".profile");

const xhr = new XMLHttpRequest();

xhr.open("GET" , requestUrl);

xhr.onreadystatechange = function(){
    if(xhr.readyState == 4){
        const data = JSON.parse(this.responseText);

        info.innerHTML = `<h3>Username : ${data.login}</h3><h4>Followers : ${data.followers}</h4>`

        profile.innerHTML = `<img src = "${data.avatar_url}">`
    }
}
xhr.send();
 