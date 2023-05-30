const alertsData = [
    { title: "Alerte de niveau de securite eleve", description: "Code rouge." },
    { title: "Alerte de niveau de securite moyen", description: "Code jaune." },
    { title: "Alerte de niveau de securite faible", description: "Code vert." }
  ];
  
  const statsData = [
    { title: "Total des attaques", value: 1234 },
    { title: "Attaques bloquees", value: 567 },
    { title: "Alertes non resolues", value: 89 }
  ];
  
  function populateAlerts() {
    const alertsList = document.getElementById("alerts-list");
  
    alertsData.forEach(alert => {
      const listItem = document.createElement("li");
      listItem.innerHTML = `<h3>${alert.title}</h3><p>${alert.description}</p>`;
      alertsList.appendChild(listItem);
    });
  }
  
 
  function populateStatistics() {
    const statsContainer = document.getElementById("stats-container");
  
    statsData.forEach(stat => {
      const statBox = document.createElement("div");
      statBox.classList.add("stat-box");
      statBox.innerHTML = `<h3>${stat.title}</h3><p>${stat.value}</p>`;
      statsContainer.appendChild(statBox);
    });
  }
  
  // Call functions to populate the dashboard on page load
  window.onload = function() {
    populateAlerts();
    populateStatistics();
  };
  