import React from 'react'
import './exp-description.style.scss'

const ExpDescription = ({ title, year, company, tasks}) => { 
  return (
    <>
      <div className="work-exp-header">
            <div className="title-wrapper">
              <img className='exp-bullet' alt="rocket-icon" width='30px' height='30px' src="https://img.icons8.com/emoji/48/000000/rocket-emji.png"/>
              <p className="work-exp-title">{ title }</p>
            </div>
          <p className="work-exp-year">{ year }</p>
      </div>
      
      <p className="work-exp-company">{ company }</p>
        <ul className="work-exp-task">
          { tasks.map((value) => { 
            return <li>
              { value }
            </li>
          })}
        </ul>
    </>
)
}

export default ExpDescription