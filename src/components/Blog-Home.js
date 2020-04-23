import React, { Fragment } from 'react'
import { Container, Header, Image } from 'semantic-ui-react'

import '../css/Blog-Home.css'

const BlogHome = () => (
  <Fragment>
    <Container style={{ paddingTop: '50px' }} textAlign='center'>
      <Header as='h2' className='blogText' content='Helo Ffrindiau! 👋' />
      <Header as='h3' className='blogText' content='Here you will find my blog about how I develop software, the madness behind my methods and my failures along the way.' />
      <Header as='h3' className='blogText' content='Nothing else to see on this page - so enjoy the randomly generated grayscale image below...' />
      <Image style={{ paddingTop: '20px' }} src='https://picsum.photos/1000/500?grayscale' centered />
    </Container>
  </Fragment>
)

export default BlogHome