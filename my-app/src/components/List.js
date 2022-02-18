import React from 'react'

const List = ({list}) => {
  return (
    <div><ul style={{padding:'30px'}} className="list-group">
    {list.map((i,idx,array)=>(  <li key={idx} className="list-group-item">Word: {i.word} <br></br> Count: {i.count}</li>
))}
  </ul></div>
  )
}

export default List;
