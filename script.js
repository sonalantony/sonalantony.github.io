document.addEventListener("DOMContentLoaded", function () {
  // Define the Google Docs document URLs you want to fetch.
  const docUrls = [
    "https://docs.google.com/document/d/14fimPIbEgRQl6c7wDTRq_A_IUJTQhVN8S9zw0KKutPY/export?format=txt",
    "https://docs.google.com/document/d/1PMPoS5wp5xaLiP3wfwJ4xV3QRcV2knPStd2-9euRwu4/export?format=txt",
    "https://docs.google.com/document/d/11T54LH0-l1XOW_vgdG_WwvgoDsveFTmxU7X7enBMS1Q/export?format=txt"
  ];

  // Function to fetch and display progress data from Google Docs documents.
  async function fetchAndDisplayProgressData() {
    const progressContainer = document.getElementById("progress-container");
    progressContainer.innerHTML = "Loading..."; // Display loading message.

    for (const docUrl of docUrls) {
      try {
        const response = await fetch(docUrl);
        if (response.ok) {
          const data = await response.text();
          displayProgressData(progressContainer, data);
        } else {
          console.error(`Failed to fetch data from ${docUrl}`);
        }
      } catch (error) {
        console.error(`Error fetching data from ${docUrl}: ${error}`);
      }
    }
  }

  // Function to display progress data on the webpage.
  function displayProgressData(container, data) {
    // Parse and format the data as needed.
    // For example, you can create HTML elements to display the data.
    const progressDataElement = document.createElement("div");
    progressDataElement.textContent = data;
    container.appendChild(progressDataElement);
  }

  // Call the function to fetch and display progress data when the page loads.
  fetchAndDisplayProgressData();
});
