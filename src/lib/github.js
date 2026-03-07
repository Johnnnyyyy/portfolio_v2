export async function getRepos() {
    const res = await fetch(
        "https://api.github.com/users/YOUR_GITHUB_USERNAME/repos"
    );

    return res.json();
}