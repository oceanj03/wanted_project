import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import './MobileNav.scss';

export default function MobileNav() {

  const [sidebarOpen, setSidebarOpen ] = useState(false);
  return (
    <>
    <div className="mobileContainer">
      <div className="mobileWrapper">
        <div className="spaceContainer">
          <ul>
            <li className="homeList">
              <Link to="/" className="listText">홈</Link>
            </li>
            <li>
              <Link to="/" className="listText">탐색</Link>
            </li>
            <li>
              <Link to="/" className="listText">커리어 성장</Link>
            </li>
          </ul>
          <aside>
            <ul>
              <li>
                <button>
                  <img src="/Images/Search.svg" alt="search"/>
                </button>
              </li>
              <li>
              <button>
                  <img src="/Images/Notification.svg" alt="notification"/>
                </button>
              </li> 
              <li className="closeIcon" onClick ={()=> setSidebarOpen(true)}>☰</li>
            </ul>
          </aside>
        </div>
      </div>
    </div>
    {sidebarOpen && <Sidebar setSidebarOpen={setSidebarOpen} /> }
    </>
  )
}
