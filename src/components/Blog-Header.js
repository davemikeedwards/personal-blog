import React, { useContext } from 'react'
import { Grid, Header, Responsive, Container } from 'semantic-ui-react'

import { NavigationContext } from '../Context'

import '../css/Blog-Header.css'

const BlogHeader = () => {

  const [ setHomeVisible, setAboutVisible, setBlogVisible ] = useContext(NavigationContext)

  return (
    <Container fluid>
      <Responsive minWidth={420}>
        <Grid>
          <Grid.Row className='blogHeader' verticalAlign='middle'>
            <Grid.Column width={8}>
              <Header onClick={() => {setHomeVisible(true); setAboutVisible(false); setBlogVisible(false)}} className='blogTitle' content='A Blog by Dave' inverted />
            </Grid.Column>
            <Grid.Column width={8} textAlign='right'>
              <Header onClick={() => {setHomeVisible(true); setAboutVisible(false); setBlogVisible(false)}} className='menuItem' content='Home' inverted />
              <Header onClick={() => {setHomeVisible(false); setAboutVisible(true); setBlogVisible(false)}} className='menuItem' content='About Dave' inverted />
              <Header onClick={() => {setHomeVisible(false); setAboutVisible(false); setBlogVisible(true)}} className='menuItem' content='Blogs' inverted />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Responsive>

      <Responsive maxWidth={419}>
        <Grid>
          <Grid.Row className='blogHeaderMobile' verticalAlign='middle'>
            <Grid.Column width={16} textAlign='center'>
              <Header onClick={() => {setHomeVisible(true); setAboutVisible(false); setBlogVisible(false)}} className='blogTitleMobile' content='A Blog by Dave' inverted />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row className='blogHeaderMobile' verticalAlign='middle'>
            <Grid.Column width={16} textAlign='center'>
              <Header onClick={() => {setHomeVisible(true); setAboutVisible(false); setBlogVisible(false)}} className='menuItem' content='Home' inverted />
              <Header onClick={() => {setHomeVisible(false); setAboutVisible(true); setBlogVisible(false)}} className='menuItem' content='About Dave' inverted />
              <Header onClick={() => {setHomeVisible(false); setAboutVisible(false); setBlogVisible(true)}} className='menuItem' content='Blogs' inverted />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Responsive>
    </Container>
  )
}

export default BlogHeader