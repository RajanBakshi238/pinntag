
import React from 'react'
import Header from '../Header'
import Sidepanal from '../Sidepanal'

const Layout = ({children}) => {
  return (
    <div>
        <Header />
        <div className='flex mt-[143px] mob:mt-[108px]'>
            <Sidepanal />
            <div className='w-[80%] mob:w-full ml-auto'>
                {children}
            </div>
        </div>
    </div>
  )
}

export default Layout