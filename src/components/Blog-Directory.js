import React, { useState } from 'react'
import { Container, Card, Header } from 'semantic-ui-react'

import '../css/Blog-Directory.css'

import { blogLibrary } from '../javascript/Blog-Library'

const BlogDirectory = () => {

  const [blogSelected, setBlogSelected] = useState(false)
  const [blogTitle, setBlogTitle] = useState('')
  const [blogDate, setBlogDate] = useState('')
  const [blogText, setBlogText] = useState('')

  const listBlogs = blogLibrary.map((blog, key) => 
    <Card onClick={() => {setBlogSelected(true); setBlogTitle(blog.name); setBlogDate(blog.date); setBlogText(blog.text);}} raised link centered key={blog.id} style={{ width: '600px' }}>
      <Card.Content textAlign='left'>
        <Card.Header className='blogText' content={blog.name} />
        <Card.Description className='blogText' content={blog.date} />
        <Card.Description className='blogText' textAlign='right' style={{ paddingTop: '5px' }}>Read More <span role='img' aria-label='Read More'>👉</span></Card.Description>
      </Card.Content>
    </Card>
  )

  const blogPost = (
    <Container style={{ marginBottom: '50px' }}>
      <Header as='h2' className='blogText' content={blogTitle} style={{ margin: '0' }} />
      <Header as='h4' className='blogText' content={blogDate} style={{ margin: '0' }} />
      <hr style={{ color: '#fff' }} />
      <Header as='h3' className='blogText' content={<div dangerouslySetInnerHTML={{__html: blogText}}/>} />
    </Container>
  )

  return (
    <Container textAlign='center' style={{ marginTop: '50px' }}>
      {!blogSelected && <Header className='blogText' style={{ paddingBottom: '20px' }} as='h2' content='Blogio' />}
      {!blogSelected && <div>{listBlogs}</div>}
      {blogSelected && <Header textAlign='left' as='h3' className='backText' onClick={() => setBlogSelected(false)} content='Go Back' />}
      {blogSelected && <div>{blogPost}</div>}
    </Container>
  )
}

export default BlogDirectory