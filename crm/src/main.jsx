import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import CustomerButtons from './CustomerForm'
import Contacts from './Contacts'
import './main.css'
import Dash from './Dashboard'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='main-container'>
    <Contacts />
    <CustomerButtons />
    <Dash />
    </div> 

  </React.StrictMode>,
)
