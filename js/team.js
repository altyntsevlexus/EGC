const teamRefs = {
  teamlist: document.getElementById("team-list"),
  teamPhoto: document.getElementById("teamPhoto"),
  teamName: document.getElementById("teamName"),
  teamDescription: document.getElementById("teamDescription"),
};

teamRefs.teamlist.addEventListener("click", (e) => {
  if (e.target.tagName !== "IMG") return;
  const currentSrc = teamRefs.teamPhoto.src;
  const currentName = teamRefs.teamName.innerHTML;
  const currentDescription = teamRefs.teamDescription.innerHTML;

  teamRefs.teamPhoto.src = e.target.src;
  e.target.src = currentSrc;

  teamRefs.teamName.innerHTML = e.target.previousElementSibling.innerHTML;
  e.target.previousElementSibling.innerHTML = currentName;

  teamRefs.teamDescription.innerHTML = e.target.dataset.description;
  e.target.dataset.description = currentDescription;
});
