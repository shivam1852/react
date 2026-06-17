import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'

const App = () => {
  const users = [
    {
      img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmVzc2lvbmFsfGVufDB8MXwwfHx8MA%3D%3D',
      color:'royalblue',
      intro: 'Prime customers, that have access to bank credit and are satisfied with the current product',
      tag: 'Satisfied',
    },
    {
      img: 'https://images.unsplash.com/photo-1615840287214-7ff58936c4cf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.wxMjA3fDB8MHxzZWFyY2h8MTl8fHBlb3BsZSUyMHBob25lfGVufDB8MXwwfHx8MA%3D%3D',
      color: 'lightseagreen',
      intro: 'Prime customers, that have access to bank credit and are not satisfied with the current services',
      tag: 'Underserved',
    },
    {
      img: 'https://images.unsplash.com/flagged/photo-1574164908900-6275ca361157?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVvcGxlJTIwcGhvbmV8ZW58MHwxfDB8fHww',
      color: 'pink',
      intro: 'Customers from near-prime and sub-prime segments with no access to bank credit',
      tag: 'Underbanked',
    },
    {
      img: 'https://images.unsplash.com/photo-1600275669439-14e40452d20b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZmVzaW9uYWx8ZW58MHwxfDB8fHww',
      color: 'orange',
      intro: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor, vitae.',
      tag: 'Underworld'
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1661630621969-6d9faac03f9f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cHJvZmVzaW9uYWx8ZW58MHwxfDB8fHww',
      color: 'navy',
      intro: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor, vitae.',
      tag: 'Undertaking'
    },
    {
      img: 'https://images.unsplash.com/photo-1532272278764-53cd1fe53f72?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2Zlc2lvbmFsfGVufDB8MXwwfHx8MA%3D%3D',
      color: 'black',
      intro: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor, vitae.',
      tag: 'Undersource'
    },
  ]


  return (
    <div>
      <Section1 users={users} />
      <Section2 />
    </div>
  )
}

export default App