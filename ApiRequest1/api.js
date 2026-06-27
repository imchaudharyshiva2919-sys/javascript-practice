const requestUrl = "https://api.github.com/users/shivamChaudhary19";

const card = document.querySelector(".card");
const profile = document.querySelector(".profile");
const info = document.querySelector(".info");

const showBtn = document.querySelector(".button");
const hideBtn = document.querySelector(".hide");

showBtn.addEventListener("click", function () {

    card.style.display = "block";

    const xhr = new XMLHttpRequest();

    xhr.open("GET", requestUrl);

    xhr.onreadystatechange = function () {

        if (xhr.readyState === 4 && xhr.status === 200) {

            const data = JSON.parse(xhr.responseText);

            profile.innerHTML = `
                <img src="${data.avatar_url}" alt="${data.login}">
            `;

            info.innerHTML = `
                <h3>${data.name || data.login}</h3>
                <p>Username: ${data.login}</p>
                <p>Public Repos: ${data.public_repos}</p>
            `;
        }
    };

    xhr.send();
});

hideBtn.addEventListener("click", function () {
    card.style.display = "none";
});