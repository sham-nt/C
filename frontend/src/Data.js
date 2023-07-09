// async function fetchData() {
//   try {
//     const response = await fetch('http:/localhost:3000/dashboard/comp_money');
//     const data = await response.json();
//     console.log(data);
//     return data;
//   } catch (error) {
//     console.log('Error:', error);
//   }
// }

// export const Data = fetchData();
const Data = {
  comp_money: [
    { name: 'Google', money_spent: 1000000 },
    { name: 'Jio', money_spent: 800000 },
    { name: 'Shell', money_spent: 650000 },
    { name: 'ITC', money_spent: 900000 },
    { name: 'Microsoft', money_spent: 1200000 },
    { name: 'Adobe', money_spent: 600000 },
    { name: 'Airtel', money_spent: 450000 },
    { name: 'Parle', money_spent: 450000 }
  ]
};