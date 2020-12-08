const inputField = document.querySelector("input");

const github = new Github;

const webUI = new UI;

inputField.addEventListener("keyup", (e) => {
  const userInput = e.target.value;
  if (userInput != "") {
    github.getClientInfo(userInput)
      .then(data => {
        if (data.profile.message === "Not Found") {
          //show alert indicating that client is not found
          webUI.showErrorAlert();
        } else {
          //show client profile details
          console.log(data.profile);
          webUI.showClientProfile(data.profile);
        }
      })
  } else {
    //clear the .github-info-container content
    webUI.clearClientProfile();
  }
});
