import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';

export default function Menu() {

  const [list, setList] = useState([]);

  useEffect(() => {
    fetch('./data/HeaderCategory.json')
      .then(res => res.json())
      .then(data => {
        setList(data)
      })
  },[])

  return (
    <div className="overlayContainer">
      <div className="overlay">
        <div className="row">
          <div className="category">
            {list.map((item,index) => {
              return(
                <Link key={index} to={item.major[0].link}>
                  <h2>
                  {item.major[0].title}
                  <i className="fas fa-chevron-right"/>
                  </h2>
                </Link>
              )
            })}
            {list.map((obj)=>{
              return(
                obj.sub?.map((item,index)=>{
                return(
                  <Link key={index} to={item.link}>
                  <h3>
                    {item.title}
                  </h3>
                </Link>
                )
              })
              )
            })}
            <Link to="#">
              <h3>더보기</h3>
              <i className="fas fa-chevron-right"/>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
