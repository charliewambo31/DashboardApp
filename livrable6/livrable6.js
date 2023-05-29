const alertsData = [
    { title: "High Severity Alert", description: "Lorem ipsum dolor sit amet." },
    { title: "Medium Severity Alert", description: "Consectetur adipiscing elit." },
    { title: "Low Severity Alert", description: "Praesent eu semper nunc." }
  ];
  
  const statsData = [
    { title: "Total Attacks", value: 1234 },
    { title: "Blocked Attacks", value: 567 },
    { title: "Unresolved Alerts", value: 89 }
  ];
  
  // Function to dynamically populate alerts
  function populateAlerts() {
    const alertsList = document.getElementById("alerts-list");
  
    alertsData.forEach(alert => {
      const listItem = document.createElement("li");
      listItem.innerHTML = `<h3>${alert.title}</h3><p>${alert.description}</p>`;
      alertsList.appendChild(listItem);
    });
  }
  
  // Function to dynamically populate statistics
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
  