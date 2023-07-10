import Gender from "./Gender"
import Username from "./Username"
import Stack from "./Stack"
import Other from "./Other"
import Stacks from "./Stacks"



const Card = ({ sex, user, stack, back, paid, member, stacked, stacks,burna }) => {

    return (

        <div className='cardwrapper'>
            <div className='card'>
                <div className='leftcard'>
                    <h3>Stack</h3>
                    {stacked ? <Stack stack={stack} /> : <Stacks stacks={stacks} />}


                    <p> View all Chapters</p>
                </div>
                <div className='middlecard'>
                    <p>Full Name</p>
                    <Username user={user} /> 
                {burna? <Other member={member}/> : null}


                </div>
                <div className='rightcard'>
                    <p>Gender</p>
                    {paid ? <Gender sex={sex} back={back} /> : null}

                </div>
            </div>
        </div>
    )
}

export default Card 