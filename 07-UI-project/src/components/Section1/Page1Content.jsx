import LeftContent from './LeftContent'
import RightContent from './RightContent'

function Page1Content (props) {
    return (
        <div className='pb-16 pt-6 px-17 items-center flex gap-2 h-[90vh]'>
            <LeftContent />
            <RightContent users={props.users} />
        </div>
    )
}

export default Page1Content
