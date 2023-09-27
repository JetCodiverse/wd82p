async function displayData(data) {
  const container = document.getElementById("data-container");
  const p = document.createElement("p");
  p.textContent = data.quote;
  container.appendChild(p);
}

function displayError(error) {
  const container = document.getElementById("data-container");
  const p = document.createElement("p");
  p.textContent = error.message;
  container.appendChild(p);
}

/* 
  return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function() {
          if (xhr.readyState === 4) {
              if (xhr.status === 200) {
                  const data = JSON.parse(xhr.responseText);
                  resolve(data);
              } else {
                  const data = JSON.parse(xhr.responseText);
                  reject(data); 
              }
          }
      };
      xhr.open("GET", url, true);
      xhr.send();
  });
*/

// function fetchData(url) {
//     return fetch(url).then((response) => response.json());
// }

// fetchData("https://dummyjson.com/quotes/2").then((data) => displayData(data));

async function fetchDataAndDisplay(url) {
  const response = await fetch(url);
  const data = await response.json();

  displayData(data);
}

fetchDataAndDisplay("https://dummyjson.com/quotes/2");
