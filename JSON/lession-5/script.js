async function fetchData() {
  const response = await fetch("demo.txt");

  console.log(response);
}

fetchData();