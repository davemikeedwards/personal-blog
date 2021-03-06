export const blogLibrary = [
  {
    id: 2,
    name: 'Building a Calendar / Diary',
    date: '4th May 2020',
    text: `
      An up-to-date developer portfolio is in my opinion, worth more than an excellent CV packed with experience. The classic "TODO App" is
      a great addition to your portfolio, it may seem basic at first, but you can make it your own - put your mark on it, with animations or 
      a slick design - which is great if you're a front end developer.
      <br/><br/>
      For my portfolio I began with this blog site, then I was inspired by the software I develop for a living to build my own calendar / 
      diary. The app I built is made up of three tables, the first table I styled to look like a regular calendar made up of six rows. I 
      used conditional rendering using the logical && operator to display the fifth and sixth row if they were needed, these are dependant 
      on which day of the month is the first and how many days are in it. Each table cell is an object which has a 'value' - a string
      which represents the date of the cell - and a 'hasData' boolean value which will display a purple circle - indicating the user 
      that the date has entries. 
      <br/><br/>
      The second table is the daily diary type view, which would display any entries in the calendar for that day. This currently displays
      the full details of the diary entry, however, I plan to add a short description instead, then have the full entry open in a new modal
      for reading / editing / removing etc. These entries are currently filterable by "Work" and "Personal" category types which are assigned
      when creating a new entry via a dropdown menu.
      <br/><br/>
      The final table is the search results table which populates on key entry, if nothing matches the current string it will say so. I guess
      I need to add the ability to look up partial matches (yet that could get messy with a full diary).
      <br/>
      <img class='responsive' src=${require('../images/ReactDiary.png')} />
      <br/>
      The above image is the current look of the diary. The next feature I will add is a colour picker, which will give the user control 
      of the look of the diary, I don't envisage it being "choose any two colours" as that could go terribly wrong, so I will make a colour 
      palette for users to select two colours which will complement each other.
      <br/><br/>
      Each table has an array of objects in the app's state. The tables are rendered with data simply by performing a forEach method on the 
      array of objects like below (DISCLAIMER - This is not the actual code).
      <br/>
      <img class='responsive' src=${require('../images/CalendarCode.png')} />
      <br/>
      If you have any cool ideas you would like to suggest I implement to the calendar / diary feel free to drop me an email or tweet me!
      <br/><br/>
      Thanks for reading!
      <br/>
      Dave
      <br/><br/>
    `
  },
  {
    id: 1,
    name: 'My First Blog 😍',
    date: '22nd April 2020',
    text: `
      So, I made a blog site. Was it easy? Yes, but also no. This blog is the first published product after just over two years learning 
      ReactJS. In that time there have been many ideas which have amounted to a near useless library of components scattered around my
      computer. This site itself took around half a day to create, without any major glitches - so yes it was easy, but it came at the cost
      of many head-scratching, hair-pulling, head-banging-on-desk frustrating times. Let's hope this is worth it!
      <br/><br/>
      Thanks for the short read!
      <br/>
      Dave
      <br/><br/>
    `
  }
]

export default { blogLibrary }