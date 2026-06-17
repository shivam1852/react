import RightCard from './RightCard'

const RightContent = (props) => {
  return (
    <div id='right' className='h-full rounded-4xl overflow-x-auto flex flex-nowrap gap-5 p-6 w-2/3' >
      {
        props.users.map((item, id) => {
          return <RightCard key={id} id={id} color={item.color} img={item.img} tag={item.tag} intro={item.intro} />

        })
      }
    </div>
  )
}

export default RightContent