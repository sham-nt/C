// fetch('http:/localhost:3000/dashboard/comp_money',{
//     method: "GET"
// } )
// .then(response => response.json())
// .then(d => {
//     data = d
// })

// console.log(data)

async function fetchData() {
    try {
      const response = await fetch('http:/localhost:3000/dashboard/comp_money');
      const data = await response.json();
      console.log(data.comp_money);
      return data.comp_money;
    } catch (error) {
      console.log('Error:', error);
    }
  }
  

fetchData();

