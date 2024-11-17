// Function to search for profiles on Wikipedia
function searchProfiles() {
  const query = document.getElementById("search-bar").value;
  const profileSection = document.getElementById("profiles");

  // Clear previous search results
  profileSection.innerHTML = '';

  if (query.length > 0) {
    // Fetch data from Wikipedia API
    const url = `https://en.wikipedia.org/w/api.php?action=opensearch&search=${encodeURIComponent(query)}&limit=1&format=json`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        // Check if any results are found
        if (data[1].length > 0) {
          // Get the first result
          const title = data[1][0];
          const description = data[2][0];
          const link = data[3][0];

          // Create a profile card to display the information
          const profileCard = document.createElement("div");
          profileCard.classList.add("profile-card");
          
          // Add title, description, and link to profile card
          profileCard.innerHTML = `
            <h2>${title}</h2>
            <p>${description}</p>
            <a href="${link}" target="_blank">Read more on Wikipedia</a>
          `;

          // Append the profile card to the profile section
          profileSection.appendChild(profileCard);
        } else {
          profileSection.innerHTML = "<p>No results found. Try a different name.</p>";
        }
      })
      .catch(error => {
        console.error("Error fetching Wikipedia data:", error);
        profileSection.innerHTML = "<p>Sorry, there was an error fetching the data.</p>";
      });
  }
}
