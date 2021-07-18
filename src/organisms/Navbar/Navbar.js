import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import Menu from '../../molecules/Menu';
import './Navbar.scss';

export default function Navbar() {

  const [dropDown, setDropDown] = useState(false)

  const createDropDown = () => {
    setDropDown(true)
  }

  const removeDropDown = () => {
    setDropDown(false)
  }

  const MENU = ['커리어 성장', '직군별 연봉', '이력서', '매치업', '프리랜서']
  return (
    <>
    <div className="headerContainer">
        <nav className="headerSpace">
          <div className="logoContainer">
            <Link to="/" className="logoWrapper">
              <i className="iconLogo">wanted</i>
            </Link>
          </div>
          <ul className="menuContainer">
            <li className="search">
              <Link to ="#" className="searchLink" onMouseEnter={createDropDown} >탐색</Link>
            </li>
              {MENU.map((item, index) =>{
                return(
                  <li>
                    <Link to='#' className="link" key={index} onMouseEnter={removeDropDown}>{item}</Link>
                  </li>
                )
              })}
          </ul>
          <aside className="sideHeader">
            <ul>
              <li>
                <button className="searchIcon">
                  <img src="/Images/Search.svg"/>
                </button>
              </li>
              <li>
                <button className="bellIcon">
                  <img src="/Images/Notification.svg"/>
                </button>
              </li>
              <li>
                <button className="profileContainer">
                  <div className="profileBorder">
                    <img src="/Images/profile.jpg"/>
                  </div>
                </button>
              </li>
              <li className="serviceContainer">
                <Link to="#" className="service">기업 서비스</Link>
              </li>
            </ul>
          </aside>
        </nav>
      </div>
      {dropDown && <Menu isCheck={dropDown} removeDropDown={removeDropDown} createDropDown={createDropDown}/>}
    </>
  )
}
