import React, { Fragment, useEffect, useState } from 'react'
import './App.css'

import BlogHeader from './components/Blog-Header'
import BlogHome from './components/Blog-Home'
import BlogAbout from './components/Blog-About'
import BlogDirectory from './components/Blog-Directory'

import { NavigationContext } from './Context'

const App = () => {

  const [homeVisible, setHomeVisible] = useState(true)
  const [aboutVisible, setAboutVisible] = useState(false)
  const [blogVisible, setBlogVisible] = useState(false)

  useEffect(() => {
    window.document.title = 'Dave Edwards Blog'
  }, [])

  return (
    <Fragment>
      <NavigationContext.Provider value={[ setHomeVisible, setAboutVisible, setBlogVisible ]}>
        <BlogHeader />
      </NavigationContext.Provider>
        {homeVisible && <BlogHome />}
        {aboutVisible && <BlogAbout />}
        {blogVisible && <BlogDirectory />}
    </Fragment>
  )
}

export default App