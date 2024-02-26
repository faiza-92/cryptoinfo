document.getElementById("fetch-info-btn").addEventListener("click", function() {
    fetchCryptoInfo();
});

function fetchCryptoInfo() {
    // Placeholder function to fetch crypto information from Google or any other source
    // You need to implement this function to fetch data dynamically
    const cryptoInfo = "Crypto information fetched from Google";
    displayCryptoInfo(cryptoInfo);
}

function displayCryptoInfo(info) {
    const cryptoInfoContainer = document.getElementById("crypto-info");
    cryptoInfoContainer.textContent = info;
}
