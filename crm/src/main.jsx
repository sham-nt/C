import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import CustomerButtons from './CustomerForm'
import Contacts from './Contacts'
import './main.css'
import BarChart from './BarChart'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='main-container'>
    <Contacts />
    <CustomerButtons />
    <BarChart />
    </div> 

  </React.StrictMode>,
)
