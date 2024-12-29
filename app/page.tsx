import React from 'react'
import Navbar from './Navbar'
import Introduction from './Introduction'
import Projects from './Projects'
import Content from './Content'
import Footer from './Footer'


const Homepage = () => {
  return (
    <>
    <Navbar/>
    <Introduction/>
    <Projects/>
    <Content/>
    <Footer/>
    </>
  )
}

export default Homepage