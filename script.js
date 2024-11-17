// Example profiles
const profiles = [
  {
    name: "Celebrity A",
    info: "This is information about Celebrity A.",
    imageUrl: "https://via.placeholder.com/150", // Replace with a real image URL
  },
  {
    name: "Politician B",
    info: "This is information about Politician B.",
    imageUrl: "https://via.placeholder.com/150", // Replace with a real image URL
  },
  // Add more profiles as needed
];

// Function to display profiles
function displayProfiles(filteredProfiles) {
  const profilesSection = document.getElementById('profiles');
  profilesSection.innerHTML = ''; // Clear current profiles

  filteredProfiles.forEach(profile => {
    const profileDiv = document.createElement('div');
    profileDiv.classList.add('profile');
    profileDiv.innerHTML = `
      <img src="${profile.imageUrl}" alt="${profile.name}" />
      <h2>${profile.name}</h2>
      <p>${profile.info}</p>
    `;
    profilesSection.appendChild(profileDiv);
  });
}

// Function to filter profiles based on search input
function searchProfiles() {
  const query = document.getElementById('search-bar').value.toLowerCase();

  // Filter profiles that match the query (name or info)
  const filteredProfiles = profiles.filter(profile => {
    return profile.name.toLowerCase().includes(query) || profile.info.toLowerCase().includes(query);
  });

  // Display filtered profiles
  displayProfiles(filteredProfiles);
}

// Call the function to display all profiles initially
displayProfiles(profiles);
