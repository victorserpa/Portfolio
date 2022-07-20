
export async function api(Context) {
  const response = await fetch('https://api.github.com/users/victorserpa')
  const data = await response.json();
  
  Context.setName(data.name);
  Context.setBio(data.bio);
  Context.setLocation(data.location);
  Context.setCompany(data.company);
  Context.setLogin(data.login);
  Context.setBlog(data.blog);
  Context.setTtUser(data.twitter_username);
  Context.setMail(data.mail);
  Context.setAvatar(data.avatar_url)
}

export async function getApiGitHub(name) {
  try {
    const datas = await fetch(`https://api.github.com/repos/victorserpa/${name}`)
    const data = await datas.json();
    // console.log(data.name);
    
    return data
  } catch (error) {
    // console.log(error)
    return '';  
  }
}

export async function getApiGit(name) {
  try {
    const datas = await fetch(`https://api.github.com/repos/victorserpa/${name}`)
    const data = await datas.json();
    // console.log(data.name);
    
    return data
  } catch (error) {
    // console.log(error)
    return '';  
  }
}