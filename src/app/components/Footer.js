import React from 'react'
import UpperFooter from './partials/footer-partials/UpperFooter'
import LowerFooter from './partials/footer-partials/LowerFooter'

const Footer = () => {
  return (
    <footer className='bg-blue-800 pt-[2rem]'>
        <UpperFooter/>
        <LowerFooter/>
    </footer>
  )
}

export default Footer