const linksSocialMedia = {
  github: "johneverton01",
  youtube: "UCYJfnPVgA5kOaS3kuhG__3Q",
  facebook: "johneverton01",
  instagram: "johneverton01",
  twitter: "johnevertton"
}

function changeSocialMediaLinks(links) {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class');
    li.children[0].href = `https://${social}.com/${links[social]}`

  }
}

function  getGitHubProfileInfos(githubUser) {
  const url = `https://api.github.com/users/${githubUser}`;
  fetch(url)
  .then(response => response.json())
  .then(data => {
    userName.textContent = data.name
    userBio.textContent = data.bio
    userLink.href = data.html_url
    userLink.href = data.html_url
    userLogin.textContent = data.login
  })
}

changeSocialMediaLinks(linksSocialMedia);

getGitHubProfileInfos(linksSocialMedia.github)


