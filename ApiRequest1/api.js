const requestUrl = "https://api.github.com/users/shivamChaudhary19";

const card = document.querySelector(".card");
const profile = document.querySelector(".profile");
const info = document.querySelector(".info");

const showBtn = document.querySelector(".button");
const hideBtn = document.querySelector(".hide");

showBtn.addEventListener("click", function () {
    card.style.display = "block";

    fetch(requestUrl)
        .then(response => response.json())
        .then(data => {
            profile.innerHTML = `<img src="${data.avatar_url}" alt="${data.login}">`;

            info.innerHTML = `
                <h3>${data.name || data.login}</h3>
                <p>Public Repos: ${data.public_repos}</p>
            `;
        })
        .catch(error => {
            profile.innerHTML = "";
            info.innerHTML = `
                <p>❌ Failed to load profile.</p>
                <p>${error.message}</p>
            `;
        });
});

hideBtn.addEventListener("click", function () {
    card.style.display = "none";
});