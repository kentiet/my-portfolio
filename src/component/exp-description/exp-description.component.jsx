import React from 'react'

const ExpDescription = ({ title, year, company, tasks}) => { 
  return (
    <div className="work-exp-wrapper">
      <div className="work-exp-header">
            <div className="title-wrapper">
              <img className='exp-bullet' width='30px' height='30px' src="https://img.icons8.com/emoji/48/000000/rocket-emji.png"/>
              <p className="work-exp-title">{ title }</p>
            </div>
          <p className="work-exp-year">{ year }</p>
      </div>
      
      <p className="work-exp-company">{ company }</p>
        <ul className="work-exp-task">
          { tasks.map((value, key) => { 
            return <li>
              { value }
            </li>
          })}
        </ul>

    </div>
)
}

export default ExpDescription