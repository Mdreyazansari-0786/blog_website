import React from 'react'
import Banner from '../Components/Banner';
import BlogPage from './BlogPage';
import About from './About';
import Services from './Services';

const Home = () => {
  return (
    <div>
      <Banner/>
      <div className='mx-w-7xl mx-auto'>
        <BlogPage/>
      </div>
      <About/>
      <Services/>
    </div>
  )
}

export default Home;