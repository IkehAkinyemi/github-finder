class UI {
  constructor() {
    this.clientProfile = document.querySelector(".client-profile-container");
  }

  showClientProfile(profile) {
    this.clientProfile.innerHTML = `
      <div class="profile-container">
        <div class="profile-img-container">
          <div class="image-container"><img src="${profile.avatar_url}" alt="profile"></div>
          <div class="github-link"><a href="${profile.html_url}" target="_blank" rel="noopener noreferrer">Visit Github Account</a></div>
        </div>

        <div class="profile-details">
          <div class="repos-details">
            <span class="public-repos">Public Repos: ${profile.public_repos}</span>
            <span class="public-gists">Public Gists: ${profile.public_gists}</span>
            <span class="followers">Followers: ${profile.followers}</span>
            <span class="following">Following: ${profile.following}</span>
          </div>
          <div class="contact-details">
            <ul class="collections">
              <li class="collection-items">Company: ${profile.company}</li>
              <li class="collection-items">Website/blog: ${profile.blog}</li>
              <li class="collection-items">Location: ${profile.location}</li>
              <li class="collection-items">Member Since: ${profile.created_at}</li>
            </ul>
          </div>
        </div>
      </div> 
      <br>

      <div class="repo-container">

      </div>
    `
  }

  showErrorAlert() {
    this.clearErrorMsg();
    const errorDiv = document.createElement("p");
    errorDiv.className = "danger-alert";
    errorDiv.appendChild(document.createTextNode("User Not Found"));

    document.querySelector("#search").insertBefore(
      errorDiv, 
      document.querySelector(".search-header-container")
    );

    setTimeout(() => {
      this.clearErrorMsg();
    }, 3000);
  }

  clearErrorMsg() {
    const errorDiv = document.querySelector(".danger-alert");

    if (errorDiv) {
      errorDiv.remove();
    }
  }

  clearClientProfile() {
    this.clientProfile.innerHTML = "";
  }
}