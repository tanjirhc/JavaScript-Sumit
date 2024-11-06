async function fetchData() {
  const response = await fetch("demo.txt");

  const data = await response.text();
  console.log(data);
}

fetchData();