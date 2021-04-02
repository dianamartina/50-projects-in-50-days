const APIURL = "https://api.github.com/users/";

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

// getUser("bradtraversy");

async function getUser(username) {
  //varianta cu axios  si then
  //   axios(APIURL + username)
  //     .then((res) => res.data)
  //     .catch((err) => console.log(err));

  //varianta cu axios si async .. await
  try {
    const { data } = await axios(APIURL + username);
    // console.log(data);
    createUserCard(data);
    getRepos(username);
  } catch (err) {
    console.log(err);
    if (err.response.status == 404) {
      createErrorCard("No profile with this username");
    }
  }
}

function createUserCard(user) {
  const cardHTML = `
  <div class="card">
    <div>
        <img src="${user.avatar_url}" class="avatar" alt="${user.name}">
    </div>
    <div class="user-info">
        <h2>${user.name}</h2>
        <p>${user.bio}</p>
        <ul>
            <li>${user.followers}<strong>Followers</strong></li>
            <li>${user.following}<strong>Following</strong></li>
            <li>${user.public_repos}<strong>Repos</strong></li>
        </ul>

        <div id="repos">Latest repos:<br>
        </div>
    </div>
</div>`;
  main.innerHTML = cardHTML;
}

async function getRepos(username) {
  try {
    const { data } = await axios(APIURL + username + "/repos?sort=created");
    // console.log(data);
    addReposToCard(data);
  } catch (err) {
    console.log(err);
    createErrorCard("Problem fetching repos");
  }
}

function createErrorCard(msg) {
  const cardHTML = `
  <div class="card">
    <h1>${msg}</h1>

  
  </div>`;
  main.innerHTML = cardHTML;
}

function addReposToCard(repos) {
  const reposEl = document.getElementById("repos");

  repos.slice(0, 10).forEach((repo) => {
    const repoEl = document.createElement("a");
    repoEl.classList.add("repo");
    repoEl.href = repo.html_url;
    repoEl.target = "_blank";
    repoEl.innerText = repo.name;

    reposEl.appendChild(repoEl);
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const user = search.value;

  if (user) {
    getUser(user);

    search.value = "";
  }
});
