

const Gender = ({ sex, back, paid }) => {

    return (
        <button className='gender' style={{ backgroundColor: back }}>{sex}{paid}</button>
    )

}

export default Gender 