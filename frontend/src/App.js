import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useState, useEffect } from "react";
// import { Data } from "./Data";
import PieChart from "./PieChart";
//import "./styles.css";

Chart.register(CategoryScale);

// function putDataIntoArrays(){
//   const names = [];
//   const money = [];

//   for (let i = 0; i < Data.comp_money.length; i++) {
//       names.push(Data.comp_money[i].name);
//       money.push(Data.comp_money[i].money_spent);
//   }
//   console.log(names);
//   console.log(money);
//   return {
//     names,
//     money
//   };
// }

async function fetchData() {
  try {
    const response = await fetch('http:/localhost:3000/dashboard/comp_money');
    const data = await response.json();
    console.log(Array.isArray(data.comp_money));
    return data.comp_money;
  } catch (error) {
    console.log('Error:', error);
  }
}

// const Data =[
//   { name: 'Google', money_spent: 1000000 },
//   { name: 'Jio', money_spent: 800000 },
//   { name: 'Shell', money_spent: 650000 },
//   { name: 'ITC', money_spent: 900000 },
//   { name: 'Microsoft', money_spent: 1200000 },
//   { name: 'Adobe', money_spent: 600000 },
//   { name: 'Airtel', money_spent: 450000 },
//   { name: 'Parle', money_spent: 450000 }
// ];


function App() {
  const Data = fetchData();
  const [chartData, setChartData] = useState({
    labels: Data.map((data) => data.name), 
    datasets: [
      {
        label: "Pie chart of companies and their money spent",
        data: Data.map((data) => data.money_spent),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#f0331a",
          "#f3ba2f",
          "#2a71d0"
        ],
        borderColor: "black",
        borderWidth: 2
      }
    ]
  });
 
  return (
    <div className="App">
      <PieChart chartData={chartData}/>
    </div>
  );
}

export default App;

// function App() {
//   const [chartData, setChartData] = useState({
//     labels: [],
//     datasets: [
//       {
//         label: 'Pie chart of companies and their money spent',
//         data: [],
//         backgroundColor: ['rgba(0,192,192,1),rgba(75,0,192,1),rgba(75,192,192,1)'],
//         borderColor: 'black',
//         borderWidth: 2
//       }
//     ]
//   });

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const response = await fetch('http:/localhost:3000/dashboard/comp_money');
//         const data = await response.json();
//         setChartData(prevChartData => ({
//           ...prevChartData,
//           labels: data.comp_money.map((item) => item.name),
//           datasets: [
//             {
//               ...prevChartData.datasets[0],
//               data: data.comp_money.map((item) => item.money_spent)
//             }
//           ]
//         }));
//       } catch (error) {
//         console.log('Error:', error);
//       }
//     }
//     fetchData();
//   }, []);

//   // return (
//   //   <div className="App">
//   //     <PieChart chartData={chartData} />
//   //   </div>
//   // );

//   return (
//     <div className="App">
//       {chartData.labels.length > 0 && <PieChart data={chartData} />}
//     </div>
//   );
  
// }

// export default App;
