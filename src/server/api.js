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
  Context.setMail(data.mail)
  Context.setRepos(data.repos_url)
  Context.setAvatar(data.avatar_url)
}