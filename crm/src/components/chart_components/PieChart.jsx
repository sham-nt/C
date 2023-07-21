import React from 'react'
import { useState,useEffect } from 'react';
import { Chart as ChartJS,CategoryScale,ArcElement,Tooltip, Legend } from 'chart.js'
import { Pie,Doughnut } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  ArcElement,
  Tooltip, 
  Legend 
);

const PieChart1 = () => {
    const [chartData, setChart] = useState([])
    
    const fetchContacts = () => {
        // Simulating an API call delay
        setTimeout(async () => {
            const raw = await fetch('http://localhost:3000/dashboard/comp_industry').then(res => res.json());
            const chartData = raw.comp_industry;
            console.log(chartData);
    
          setChart(chartData);
        }); // Simulated delay of 1 second
      };
    
      // Load initial contacts when component mounts
      useEffect(() => {
        fetchContacts();
      }, []);
  
    var data = {
      labels: chartData.map(x => x.industry),
      datasets: [{
        label: `Companies in Industry`,
        data: chartData.map(x => x.count),
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: "black",
        borderWidth: 2
      }]
    };
  
    var options = {
      maintainAspectRatio: true,
      scales: {
      },
      legend: {
        position: 'right',
        labels: 
        {
          fontSize: 25,
        },
      },
    }
  
    return (
      <div>
        <Doughnut
          data={data}
          options={options}
        />
      </div>
    )
  }
  
  
const PieChart2 = () => {
  const [chartData, setChart] = useState([])
  
  const fetchContacts = () => {
      // Simulating an API call delay
      setTimeout(async () => {
          const raw = await fetch('http://localhost:3000/dashboard/lead_source').then(res => res.json());
          const chartData = raw.lead_source;
          console.log(chartData);
  
        setChart(chartData);
      }); // Simulated delay of 1 second
    };
  
    // Load initial contacts when component mounts
    useEffect(() => {
      fetchContacts();
    }, []);

  var data = {
    labels: chartData.map(x => x.lead_source),
    datasets: [{
      label: `Leads in Industry`,
      data: chartData.map(x => x.count),
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: "black",
      borderWidth: 2
    }]
  };

  var options = {
    maintainAspectRatio: true,
    scales: {
    },
    legend: {
      position: 'right',
      labels: 
      {
        fontSize: 25,
      },
    },
  }

  return (
    <div>
      <Doughnut
        data={data}
        options={options}
      />
    </div>
  )
}


export default PieChart1;
export {PieChart2};
