import React from 'react'
import MyNavLink from './MyNavLink'

const CampusLink = () => {
  return (
    <li className="nav-list">
        <MyNavLink text='Campus Life' path='/campusLife'/>
    </li>
  )
}

export default CampusLink