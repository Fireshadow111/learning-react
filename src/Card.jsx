
import profilePic from './assets/image.png'
function Card(){

return(

<div className="card">

<img className = "card-image" src={profilePic} alt="Profile Picture" />

<h2 className='card-title'>Muhammad</h2>

<p className='card-text'>Web Developer and eat people</p>

</div>


)



}


export default Card