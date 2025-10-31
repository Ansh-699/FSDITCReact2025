function Profile(props){
    return(
        <div className='container'>
            {props.name}
            {props.class} 
            {props.rollno}
        </div>
    )
}

export default Profile