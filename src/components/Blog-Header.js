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
            <Grid.Column width={4}>
              <Header onClick={() => {setHomeVisible(true); setAboutVisible(false); setBlogVisible(false)}} className='blogTitle' content='A Blog by Dave' inverted />
            </Grid.Column>
            <Grid.Column width={12} textAlign='right'>
              <Header onClick={() => {setHomeVisible(true); setAboutVisible(false); setBlogVisible(false)}} className='menuItem' content='Home' inverted />
              <Header onClick={() => {setHomeVisible(false); setAboutVisible(true); setBlogVisible(false)}} className='menuItem' content='About Dave' inverted />
              <Header onClick={() => {setHomeVisible(false); setAboutVisible(false); setBlogVisible(true)}} className='menuItem' content='Blogs' inverted />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row className='blmCol'>
          <Grid.Column textAlign='center'>
              <p className='blmText'>BLACK LIVES MATTER</p>
              <a className='blm' href='https://secure.actblue.com/donate/ms_blm_homepage_2019' target='_blank' rel='noopener noreferrer'>DONATE HERE</a>
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
          <Grid.Row className='blmCol' verticalAlign='middle'>
            <Grid.Column width={16} textAlign='center'>
              <p className='blmText'>BLACK LIVES MATTER</p>
              <a className='blm' href='https://secure.actblue.com/donate/ms_blm_homepage_2019' target='_blank' rel='noopener noreferrer'>DONATE HERE</a>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Responsive>
    </Container>
  )
}

export default BlogHeader