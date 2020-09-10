import React from 'react'

function Greet(){
  const names = ['a','b','c']
  const namelist = names.map(name => <h2>{name}</h2>)
  return( 
      <div>
        {
          namelist
        }
      </div>
  )
}
export default Greet