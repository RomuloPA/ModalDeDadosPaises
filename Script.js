function biggestCountriesPage() {
  var firstPage = document.getElementById("first-page");
  firstPage.style.display = 'none';

  var biggestCountries = document.getElementById("biggest-countries");
  biggestCountries.style.display = 'block';
}

function smallestCountriesPage() {
  var firstPage = document.getElementById("first-page");
  firstPage.style.display = 'none';

  var smallestCountries = document.getElementById("smallest-countries");
  smallestCountries.style.display = 'block';
}

function backFirstPage() {
  var firstPage = document.getElementById("first-page");
  firstPage.style.display = 'block';
  firstPage.style.display = 'flex';

  var biggestCountries = document.getElementById("biggest-countries");
  biggestCountries.style.display = 'none'; 

  var smallestCountries = document.getElementById("smallest-countries");
  smallestCountries.style.display = 'none'; 
}

function openModal(countryID) {

  var modal = document.getElementById("modal");
  var countryName = document.getElementById("country-name");
  var countryCapital = document.getElementById("country-capital");
  var countryTerritorialArea = document.getElementById("country-territorial-area");
  var countryPopulation = document.getElementById("country-population");
  var countryContinent = document.getElementById("country-continent");

  var countryData = [
    {Name: "Rússia", Capital: "Moscou", TerritorialArea: "17,1 milhões de quilômetros quadrados", Population: "145 milhões de habitantes", Continent: "Europa / Ásia"},
    {Name: "Canadá", Capital: "Ottawa", TerritorialArea: "9,98 milhões de quilômetros quadrados", Population: "38 milhões de habitantes", Continent: "América do Norte"},
    {Name: "China", Capital: "Pequim", TerritorialArea: "9,6 milhões de quilômetros quadrados", Population: "1,4 bilhões de habitantes", Continent: "Ásia"},
    {Name: "Estados Unidos da América", Capital: "Washington", TerritorialArea: "9,5 milhões de quilômetros quadrados", Population: "331 milhões de habitantes", Continent: "América do Norte"},
    {Name: "Brasil", Capital: "Brasília", TerritorialArea: "8,5 milhões de quilômetros quadrados", Population: "213 milhões de habitantes", Continent: "América do Sul"},
    {Name: "Vaticano", Capital: "Cidade do Vaticano", TerritorialArea: "0,44 quilômetros quadrados", Population: "825 habitantes", Continent: "Europa"},
    {Name: "Mônaco", Capital: "Monte Carlo", TerritorialArea: "2,02 quilômetros quadrados", Population: "39 mil habitantes", Continent: "Europa"},
    {Name: "Nauru", Capital: "Yaren", TerritorialArea: "21 quilômetros quadrados", Population: "10,9 mil habitantes", Continent: "Oceania"},
    {Name: "Tuvalu", Capital: "Funafuti", TerritorialArea: "26 quilômetros quadrados", Population: "11,6 mil habitantes", Continent: "Oceania"},
    {Name: "São Cristóvão e Nevis", Capital: "Basseterre", TerritorialArea: "261 quilômetros quadrados", Population: "53 mil habitantes", Continent: "América do Norte"}
  ];

  if (countryID >= 1 && countryID <= countryData.length) {
    var country = countryData[countryID - 1];

    countryName.textContent = country.Name;
    countryCapital.textContent = country.Capital;
    countryTerritorialArea.textContent = country.TerritorialArea;
    countryPopulation.textContent = country.Population;
    countryContinent.textContent = country.Continent;
  }

  modal.style.display = 'block';

  var globe = document.getElementById("globe");
  globe.style.opacity = '0.3';
  globe.style.filter = 'blur(10px)';

  var biggestCountries = document.getElementById("biggest-countries");
  biggestCountries.style.opacity = '0.3';
  biggestCountries.style.filter = 'blur(10px)';

  var smallestCountries = document.getElementById("smallest-countries");
  smallestCountries.style.opacity = '0.3';
  smallestCountries.style.filter = 'blur(10px)';
}

function closeModal() {
  var modal = document.getElementById("modal");
  modal.style.display = 'none';

  var globe = document.getElementById("globe");
  globe.style.opacity = '1';
  globe.style.filter = 'none';

  var biggestCountries = document.getElementById("biggest-countries");
  biggestCountries.style.opacity = '1';
  biggestCountries.style.filter = 'none';

  var smallestCountries = document.getElementById("smallest-countries");
  smallestCountries.style.opacity = '1';
  smallestCountries.style.filter = 'none';
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