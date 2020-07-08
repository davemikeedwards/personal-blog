import React, { Fragment } from 'react'
import { Container, Header, Image } from 'semantic-ui-react'

import '../css/Blog-Home.css'

const BlogHome = () => (
  <Fragment>
    <Container style={{ paddingTop: '50px' }} textAlign='center'>
      <Header as='h2' className='blogText' content='Helo Ffrindiau! 👋' />
      <Header as='h4' className='blogText' content={`☝️ That's Welsh for "Hello Friends!" 🏴󠁧󠁢󠁷󠁬󠁳󠁿`} />
      <Header as='h3' className='blogText' content='Welcome to my portfolio / blog site. This site was built with ReactJS and the SemanticUI component library. All my other work you will find here is purely HTML, CSS, ReactJS, NodeJS and MongoDB.' />
      <Header as='h3' className='blogText' content='Nothing else to see on this page - so enjoy the randomly generated grayscale image below...' />
      <Image style={{ paddingTop: '20px' }} src='https://picsum.photos/1000/500?grayscale' centered />
    </Container>
  </Fragment>
)

export default BlogHome