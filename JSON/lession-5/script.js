async function fetchData() {
  const response = await fetch("demo.txt");

  const data = await response.json();
  console.log(data);
}

fetchData();