import React, { Fragment } from 'react'
import { Container, Header, Image } from 'semantic-ui-react'

import '../css/Blog-Home.css'

import EO1 from '../images/gallery/EO1.jpeg'
import EO2 from '../images/gallery/EO2.jpeg'
import EO3 from '../images/gallery/EO3.jpeg'
import EO4 from '../images/gallery/EO4.jpeg'
import EO5 from '../images/gallery/EO5.jpeg'
import EO6 from '../images/gallery/EO6.jpeg'
import EO7 from '../images/gallery/EO7.jpeg'
import EO8 from '../images/gallery/EO8.jpeg'
import EO9 from '../images/gallery/EO9.jpeg'
import EO10 from '../images/gallery/EO10.jpeg'
import EO11 from '../images/gallery/EO11.jpeg'
import EO12 from '../images/gallery/EO12.jpeg'
import EO13 from '../images/gallery/EO13.jpeg'

const images = [EO1, EO2, EO3, EO4, EO5, EO6, EO7, EO8, EO9, EO10, EO11, EO12, EO13]

const BlogHome = () => {
  const image = images[Math.floor(Math.random() * images.length)]

  return (
    <Fragment>
      <Container style={{ paddingTop: '50px', paddingBottom: '50px' }} textAlign='center'>
        <Header as='h2' className='blogText' content='Helo Ffrindiau! 👋' />
        <Header as='h4' className='blogText' content={`☝️ That's Welsh for "Hello Friends!" 🏴󠁧󠁢󠁷󠁬󠁳󠁿`} />
        <Header as='h3' className='blogText' content='Welcome to my portfolio / blog site. This site was built with ReactJS and the SemanticUI component library. All my other work you will find here is purely HTML, CSS, ReactJS, NodeJS and MongoDB.' />
        <Header as='h3' className='blogText' content='Nothing else to see on this page - so enjoy the randomly generated grayscale image below by the talentend Ellie Oldland!' />
        <Header as='h3' className='blogText' content='Please contact me to have your photography featured on my page.' />
        <Image style={{ paddingTop: '20px' }} src={image} centered />
      </Container>
    </Fragment>
  )
}

export default BlogHome