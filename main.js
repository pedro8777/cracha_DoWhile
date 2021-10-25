const linksSocialMedia = {
  github: "pedro8777",
  youtube: "dns_t4_6PuLf9nhShrdHCg",
  instragram: "pedrof694",
  twitter: "pedrof496",
  linkedin: "in/joão-pedro-419b0a205"
}

  function changeSocialMediaLinks(){
    for(let li of socialLinks.children) {
     const social = li.getAttribute('class')
      
      li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`   

    } 
}

changeSocialMediaLinks()

function getGitHubProfileInfos(){
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
  .then(response => response.json()) 
  .then(data => {
    userName.textContent = data.name
    userBio.textContent = data.bio
    userLink.href = data.html_url
    usaerImage.src = data.avatar_url
    userLogin.textContent = data.login
  })
  .then()
}

getGitHubProfileInfos()