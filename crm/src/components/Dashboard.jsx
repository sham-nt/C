import React from "react";

import BarChart from './chart_components/BarChart';
import PieChart1,{PieChart2} from './chart_components/PieChart';

function Dash() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>CRM Dashboard</h1>
      <div style={{ width: '600px', height: '450px', margin: '30px auto 50px' }}>
        <h3 style={{ fontSize: '14px' }}>Income gained from company</h3>
        <BarChart />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '50px' }}>
        <div style={{ width: '400px', height: '300px' }}>
          <h3 style={{ fontSize: '14px' }}>Industries distribution</h3>
          <PieChart1 />
        </div>
        <div style={{ width: '400px', height: '300px' }}>
          <h3 style={{ fontSize: '14px' }}>Lead source distribution</h3>
          <PieChart2 />
        </div>
      </div>
    </div>
  );
}

export default Dash