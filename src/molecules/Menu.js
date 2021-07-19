import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import "./Menu.scss"

export default function Menu(props) {

  const [list, setList] = useState([]);

  useEffect(() => {
    fetch('./data/HeaderCategory.json')
      .then(res => res.json())
      .then(data => {
        setList(data)
      })
  },[])

  return (
    <div className="mainContainer" id={props.dropDown ? 'db' : 'bd'}
    onMouseLeave={props.removeDropDown} onMouseEnter={props.createDropDown}  
    style={{
    opacity:props.dropDown ? 1 : 0.4,
    height: props.dropDown ? '380px' : '0px',
    overflow:'hidden',
  }}>
      <div className="overlayContainer"  >
        <div className="overlay">
          <div className="row">
              {list.map((item) => {
                return(
                  <div className="category">
                  {item.major.map((el,index)=>{
                    return(
                      <Link key={index} to={el.link} className="text">
                        <h2>
                        {el.title}
                        <i className="fas fa-chevron-right"/>
                        </h2>
                      </Link>
                    )})}
                  {item.sub?.map((obj,index)=>{
                      return(
                        <Link key={index} to={obj.link} className="text">
                        <h3>
                        {obj.title}
                        </h3>
                        </Link>
                      )
                    })}
                  {item.more && <Link to="#" className="text">
                    <h3>
                      더보기
                      <i className="fas fa-chevron-right"/>
                    </h3>
                  </Link>
                  }
                </div>
                )
              })}
            </div>
        </div>
      </div>
    </div>
  )
}
