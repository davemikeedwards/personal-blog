import React, { Fragment } from 'react'
import { Container, Card, Image, Icon, Grid, Header, Responsive } from 'semantic-ui-react'

import '../css/Blog-About.css'

const BlogAbout = () => (
  <Fragment>
    <Container>
      <Responsive minWidth={800}>
        <Grid>
          <Grid.Row>
            <Grid.Column width={4}>
              <Card style={{ marginTop: '50px' }}>
                <Image src={require('../images/Dave.jpg')} />
                <Card.Content textAlign='left'>
                  <Card.Header content='David Edwards' />
                  <Card.Meta content='AKA Dave' />
                  <Card.Description content='Welsh Software Developer 🏴󠁧󠁢󠁷󠁬󠁳󠁿' />
                  <Card.Description content='ReactJS Enthusiast 👨‍💻' />
                </Card.Content>
                <Card.Content textAlign='left' extra>
                  <a href='https://twitter.com/daveMikeEdwards' target='_blank' rel='noopener noreferrer'>
                    <Icon name='twitter' />
                    I Tweet Stuff Too!
                  </a>
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column width={12}>
              <Header as='h3' className='aboutText' style={{ marginTop: '50px' }}>
                Hello to you on the other side of the screen! Thank you for using some of your social media scrolling, idle game playing,
                possibly napping time to look at my blog.<br />
                My name is Dave as you can see from multiple places on your screen right now and the guy with the badly grown moustache is also
                Dave, circa 2015 - just prior to hacking my way through University.<br />
                <br />
                So, let's get this 'About Me' stuff done.
                <ul style={{ listStyle: 'none', paddingLeft: '15px' }}>
                  <li style={{ paddingBottom: '5px' }}><span role='img' aria-label='Old Man' style={{ paddingRight: '10px' }}>👴 </span> Dad to Madison, 7 and Tobias, 3</li>
                  <li style={{ paddingBottom: '5px' }}><span role='img' aria-label='Man in Tux' style={{ paddingRight: '10px' }}>🤵 </span> Husband to Dominika</li>
                  <li style={{ paddingBottom: '5px' }}><span role='img' aria-label='Man Student' style={{ paddingRight: '10px' }}>👨‍🎓 </span> BSc Hons Computer Science @ Wrexham Glyndwr University</li>
                  <li style={{ paddingBottom: '5px' }}><span role='img' aria-label='Nerd' style={{ paddingRight: '10px' }}>🤓 </span> ReactJS && MongoDB && Node.js for Personal Projects</li>
                  <li style={{ paddingBottom: '5px' }}><span role='img' aria-label='Bank Note' style={{ paddingRight: '10px' }}>💷 </span> C# + SQL + .Net for Work</li>
                  <li style={{ paddingBottom: '5px' }}><span role='img' aria-label='Cowboy' style={{ paddingRight: '10px' }}>🤠 </span> DIY Expert (Just ask my wife)</li>
                  <li style={{ paddingBottom: '5px' }}><span role='img' aria-label='Whiskey' style={{ paddingRight: '10px' }}>🥃 </span> Bourbon Consumer</li>
                  <li style={{ paddingBottom: '5px' }}><span role='img' aria-label='Guitar' style={{ paddingRight: '10px' }}>🎸 </span> Country Music Lover</li>
                </ul>
                <br />
                Thanks for reading, bye for now!
              </Header>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Responsive>

      <Responsive minWidth={420} maxWidth={799}>
        <Grid>
          <Grid.Row>
            <Grid.Column width={6}>
              <Card style={{ marginTop: '50px' }}>
                <Image src={require('../images/Dave.jpg')} />
                <Card.Content textAlign='left'>
                  <Card.Header content='David Edwards' />
                  <Card.Meta content='AKA Dave' />
                  <Card.Description content='Welsh Software Developer 🏴󠁧󠁢󠁷󠁬󠁳󠁿' />
                  <Card.Description content='ReactJS Enthusiast 👨‍💻' />
                </Card.Content>
                <Card.Content textAlign='left' extra>
                  <a href='https://twitter.com/daveMikeEdwards' target='_blank' rel='noopener noreferrer'>
                    <Icon name='twitter' />
                    I Tweet Stuff Too!
                  </a>
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column width={10}>
              <Header as='h3' className='aboutText' style={{ marginTop: '50px' }}>
                Hello to you on the other side of the screen! Thank you for using some of your social media scrolling, idle game playing,
                possibly napping time to look at my blog.<br />
                My name is Dave as you can see from multiple places on your screen right now and the guy with the badly grown moustache is also
                Dave, circa 2015 - just prior to hacking my way through University.<br />
                <br />
                So, let's get this 'About Me' stuff done.
                <ul style={{ listStyle: 'none', paddingLeft: '15px' }}>
                  <li style={{ paddingBottom: '5px' }}><span role='img' aria-label='Old Man' style={{ paddingRight: '10px' }}>👴 </span> Dad to Madison, 7 and Tobias, 3</li>
                  <li style={{ paddingBottom: '5px' }}><span role='img' aria-label='Man in Tux' style={{ paddingRight: '10px' }}>🤵 </span> Husband to Dominika</li>
                  <li style={{ paddingBottom: '5px' }}><span role='img' aria-label='Man Student' style={{ paddingRight: '10px' }}>👨‍🎓 </span> BSc Hons Computer Science @ Wrexham Glyndwr University</li>
                  <li style={{ paddingBottom: '5px' }}><span role='img' aria-label='Nerd' style={{ paddingRight: '10px' }}>🤓 </span> ReactJS && MongoDB && Node.js for Personal Projects</li>
                  <li style={{ paddingBottom: '5px' }}><span role='img' aria-label='Bank Note' style={{ paddingRight: '10px' }}>💷 </span> C# + SQL + .Net for Work</li>
                  <li style={{ paddingBottom: '5px' }}><span role='img' aria-label='Cowboy' style={{ paddingRight: '10px' }}>🤠 </span> DIY Expert (Just ask my wife)</li>
                  <li style={{ paddingBottom: '5px' }}><span role='img' aria-label='Whiskey' style={{ paddingRight: '10px' }}>🥃 </span> Bourbon Consumer</li>
                  <li style={{ paddingBottom: '5px' }}><span role='img' aria-label='Guitar' style={{ paddingRight: '10px' }}>🎸 </span> Country Music Lover</li>
                </ul>
                <br />
                Thanks for reading, bye for now!
              </Header>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Responsive>

      <Responsive maxWidth={419}>
        <Grid>
          <Grid.Row>
            <Grid.Column>
              <Card centered style={{ marginTop: '50px' }}>
                <Image src={require('../images/Dave.jpg')} />
                <Card.Content textAlign='left'>
                  <Card.Header content='David Edwards' />
                  <Card.Meta content='AKA Dave' />
                  <Card.Description content='Welsh Software Developer 🏴󠁧󠁢󠁷󠁬󠁳󠁿' />
                  <Card.Description content='ReactJS Enthusiast 👨‍💻' />
                </Card.Content>
                <Card.Content textAlign='left' extra>
                  <a href='https://twitter.com/daveMikeEdwards' target='_blank' rel='noopener noreferrer'>
                    <Icon name='twitter' />
                    I Tweet Stuff Too!
                  </a>
                </Card.Content>
              </Card>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Header textAlign='center' as='h3' className='aboutText'>
                Hello to you on the other side of the screen! Thank you for using some of your social media scrolling, idle game playing,
                possibly napping time to look at my blog.<br />
                My name is Dave as you can see from multiple places on your screen right now and the guy with the badly grown moustache is also
                Dave, circa 2015 - just prior to hacking my way through University.<br />
                <br />
                So, let's get this 'About Me' stuff done.
                <ul style={{ listStyle: 'none', paddingLeft: '15px' }}>
                  <li style={{ paddingBottom: '5px' }}><span role='img' aria-label='Old Man' style={{ paddingRight: '10px' }}>👴 </span> Dad to Madison, 7 and Tobias, 3</li>
                  <li style={{ paddingBottom: '5px' }}><span role='img' aria-label='Man in Tux' style={{ paddingRight: '10px' }}>🤵 </span> Husband to Dominika</li>
                  <li style={{ paddingBottom: '5px' }}><span role='img' aria-label='Man Student' style={{ paddingRight: '10px' }}>👨‍🎓 </span> BSc Hons Computer Science @ Wrexham Glyndwr University</li>
                  <li style={{ paddingBottom: '5px' }}><span role='img' aria-label='Nerd' style={{ paddingRight: '10px' }}>🤓 </span> ReactJS && MongoDB && Node.js for Personal Projects</li>
                  <li style={{ paddingBottom: '5px' }}><span role='img' aria-label='Bank Note' style={{ paddingRight: '10px' }}>💷 </span> C# + SQL + .Net for Work</li>
                  <li style={{ paddingBottom: '5px' }}><span role='img' aria-label='Cowboy' style={{ paddingRight: '10px' }}>🤠 </span> DIY Expert (Just ask my wife)</li>
                  <li style={{ paddingBottom: '5px' }}><span role='img' aria-label='Whiskey' style={{ paddingRight: '10px' }}>🥃 </span> Bourbon Consumer</li>
                  <li style={{ paddingBottom: '5px' }}><span role='img' aria-label='Guitar' style={{ paddingRight: '10px' }}>🎸 </span> Country Music Lover</li>
                </ul>
                <br />
                Thanks for reading, bye for now!
              </Header>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Responsive>
    </Container>
  </Fragment>
)

export default BlogAbout