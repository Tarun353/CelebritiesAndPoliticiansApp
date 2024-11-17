async function searchProfiles() {
  const query = document.getElementById("search-bar").value;
  if (query.length < 3) return; // To avoid empty or too short queries

  const url = `https://en.wikipedia.org/w/api.php?action=opensearch&search=${query}&format=json`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    
    const profilesSection = document.getElementById("profiles");
    profilesSection.innerHTML = ""; // Clear previous results

    if (data[1].length > 0) {
      data[1].forEach((name, index) => {
        const profileDiv = document.createElement("div");
        profileDiv.classList.add("profile");

        const profileName = document.createElement("h3");
        profileName.textContent = name;

        const profileLink = document.createElement("a");
        profileLink.href = data[3][index];
        profileLink.textContent = "Learn more";
        profileLink.target = "_blank";

        profileDiv.appendChild(profileName);
        profileDiv.appendChild(profileLink);

        profilesSection.appendChild(profileDiv);
      });
    } else {
      profilesSection.innerHTML = "<p>No profiles found.</p>";
    }
  } catch (error) {
    console.error("Error fetching data: ", error);
    const profilesSection = document.getElementById("profiles");
    profilesSection.innerHTML = "<p>Sorry, there was an error fetching the data.</p>";
  }
}
