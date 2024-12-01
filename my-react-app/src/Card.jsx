import profilePic from './assets/profile.jfif'
function Card(){

    return(

        <div className="card">
            <img className='card-image' src={profilePic} alt="profile picture"/>
            <h2 className='card-title'>
            Issa Sroor
            </h2>
            <p className='card-text'>I learning React</p>
        </div>

    );

}

export default Card