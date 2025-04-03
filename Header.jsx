import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
      <div className="container">
          <div className="row">
              <div className="col-md-12">
                   
                      <ul className='my-header'>
                         <li><Link to="/">Home</Link></li>
                         <li><Link to="/userlist">Userlist</Link></li>
                        
                      </ul>
                  
              </div>
          </div>
      </div>
    </div>
  )
}

export default Header