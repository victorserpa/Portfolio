export async function apiRepos(Context) {
  const repositories = await fetch('https://api.github.com/users/victorserpa/repos')
  const datas = await repositories.json();
  
  Context.setRepos(datas.repos_url);
  
}