import React from 'react'
import { Link } from 'react-router-dom';
import './Sidebar.scss';

export default function Sidebar(props) {

  const handleSidebar = () =>{
    props.setSidebarOpen(false);
  }
  return (
    <div className="sidebarContainer">
      <div className="sidebarWrapper">
        <header>
          <span>wanted</span>
          <button onClick={handleSidebar}>
            <i className="fas fa-times fa-2x" />
          </button>
        </header>
        <ul>
          <li>
            <Link to="#" className="list">MY 원티드</Link>
            <img src="/Images/profile.jpg" alt="profile"/> 
          </li>
          <li>
            <Link to="#" className="list">프로필</Link>
          </li>
          <li className="lineContainer">
            <Link to="#" className="list">이력서</Link>
          </li>
          <li>
            <Link to="#" className="list">매치업</Link>
          </li>
          <li>
            <Link to="#" className="list">추천</Link>
          </li>
          <li>
            <Link to="#" className="list">지원 현황</Link>
          </li>
          <li>
            <Link to="#" className="list">프리랜서</Link>
          </li>
          <li className="lineContainer">
            <Link to="#" className="list">직군별 연봉</Link>
          </li>
          <li>
            <Link to="#" className="list">커리어 성장</Link>
          </li>
          <li className="lineContainer">
            <Link to="#" className="list">기업 서비스</Link>
          </li>
          <li>
            <Link to ="#" className="logoutLink">
              <span className="logout">로그아웃</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
