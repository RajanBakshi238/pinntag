import React, { Suspense, useEffect } from 'react'
import {  Route, Routes } from 'react-router-dom'
import { PATHS, routeslist } from './config/routes'
import Layout from './common/layout'


const App = () => {
  
  useEffect(() =>{
    if(window.location.pathname === "/") {
        window.location.href = PATHS.buisnessDetails
    }
  }, [])
  return (
    <div>
      <Routes>
              {
                routeslist.map(({path, Element}) => {
                    return  <Route  path={path} element={  <Suspense fallback={<div>Loading...</div>}>
                       <Layout>
                         {Element}
                       </Layout>
                  </Suspense>}  />
                })
              }
      </Routes>
    </div>
  )
}

export default App