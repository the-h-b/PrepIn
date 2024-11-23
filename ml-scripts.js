document.addEventListener("DOMContentLoaded", function () {
    loadDatasets();
    switchSection("explore");
});

function switchSection(sectionId) {
    document.querySelectorAll(".section").forEach((section) => {
        section.classList.add("hidden");
    });
    document.getElementById(sectionId).classList.remove("hidden");

    document.querySelectorAll(".tab-button").forEach((button) => {
        button.classList.remove("active");
    });
    document
        .querySelector(`.tab-button[onclick="switchSection('${sectionId}')"]`)
        .classList.add("active");
}

function uploadDataset() {
    const name = document.getElementById("datasetName").value;
    const description = document.getElementById("datasetDescription").value;
    const file = document.getElementById("fileUpload").files[0];

    if (!name || !description || !file) {
        alert("Please fill out all fields and upload a file.");
        return;
    }

    const uploadMessage = document.getElementById("uploadMessage");
    uploadMessage.textContent = "Uploading...";

    setTimeout(() => {
        uploadMessage.textContent = "Dataset uploaded successfully!";
        saveDataset(name, description);
        loadDatasets();
        switchSection("explore");
    }, 1000);
}

function saveDataset(name, description) {
    let datasets = JSON.parse(localStorage.getItem("datasets")) || [];
    datasets.push({ name, description });
    localStorage.setItem("datasets", JSON.stringify(datasets));
}

function loadDatasets() {
    const datasetList = document.getElementById("datasetList");
    datasetList.innerHTML = "";

    let datasets = JSON.parse(localStorage.getItem("datasets")) || [];
    datasets.forEach((dataset) => {
        const card = document.createElement("div");
        card.className = "dataset-card";
        card.innerHTML = `
            <div class="dataset-info">
                <h3>${dataset.name}</h3>
                <p>${dataset.description}</p>
            </div>
        `;
        datasetList.appendChild(card);
    });
}
