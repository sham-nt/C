import React from 'react'
import { useState,useEffect } from 'react';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale} from 'chart.js'
import { Bar } from 'react-chartjs-2'

ChartJS.register(
    BarElement, CategoryScale, LinearScale
);

const BarChart = () => {
    const [chartData, setChart] = useState([]);
    
    const fetchContacts = () => {
        // Simulating an API call delay
        setTimeout(async () => {
            // const raw = await fetch('http://localhost:3000/dashboard/comp_money').then(res => res.json());
            // const chartData = raw.comp_money;
            const response = await fetch('http://localhost:3000/dashboard/comp_money');
            const raw = await response.json();
            const chartData = raw.comp_money;
            console.log(chartData);
    
          setChart(chartData);
        }); // Simulated delay of 1 second
      };
    
      // Load initial contacts when component mounts
      useEffect(() => {
        fetchContacts();
      }, []);
  
    var data = {
      labels: chartData.map(x => x.name),
      datasets: [{
        label: `${chartData.price} Rupees`,
        data: chartData.map(x => x.money_spent),
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }]
    };
  
    var options = {
      maintainAspectRatio: false,
      scales: {
      },
      legend: {
        labels: {
          fontSize: 25,
        },
      },
    }
  
    return (
      <div>
        <Bar
          data={data}
          height={400}
          options={options}
  
        />
      </div>
    )
  }
  
  export default BarChart