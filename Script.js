function openModal(countryID) {
    var modal = document.getElementById("modal");
    var countryName = document.getElementById("country-name");
    var countryCapital = document.getElementById("country-capital");
    var countryTerritorialArea = document.getElementById("country-territorial-area");
    var countryPopulation = document.getElementById("country-population");

    var countryData = [
        {Name: "Rússia", Capital: "Moscou", TerritorialArea: "17,1 milhões de quilômetros quadrados", Population: "145 milhões de habitantes"},
        {Name: "Canadá", Capital: "Ottawa", TerritorialArea: "9,98 milhões de quilômetros quadrados", Population: "38 milhões de habitantes"},
        {Name: "China", Capital: "Pequim", TerritorialArea: "9,6 milhões de quilômetros quadrados", Population: "1,4 bilhões de habitantes"},
        {Name: "Estados Unidos da América", Capital: "Washington", TerritorialArea: "9,5 milhões de quilômetros quadrados", Population: "331 milhões de habitantes"},
        {Name: "Brasil", Capital: "Brasília", TerritorialArea: "8,5 milhões de quilômetros quadrados", Population: "213 milhões de habitantes"}
    ];

    if (countryID >= 1 && countryID <= countryData.length) {
        var country = countryData[countryID - 1];

        countryName.textContent = country.Name;
        countryCapital.textContent = country.Capital;
        countryTerritorialArea.textContent = country.TerritorialArea;
        countryPopulation.textContent = country.Population;
    }

    modal.style.display = 'block';
}

function closeModal() {
    let modal = document.getElementById("modal");

    modal.style.display = 'none';
}




// Função para abrir o modal com a imagem e as informações
/*function openModal(loadModal) {
    var modal = document.getElementById("myModal");
    var modalImage = document.getElementById("modalImage");
    var captionText = document.getElementById("caption");
    
    modal.style.display = "block";
    modalImage.src = imageSrc;
    captionText.innerHTML = caption;
  }
  
  // Função para fechar o modal
  function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
  }
  
  // Fechar o modal quando o usuário clicar fora da imagem
  window.onclick = function(event) {
    var modal = document.getElementById("myModal");
    if (event.target == modal) {
      closeModal();
    }
  }*/