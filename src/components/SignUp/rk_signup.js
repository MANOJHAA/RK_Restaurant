import React from 'react'
import './rk_signup.css'
import rk1 from '../../img/rk.jpg'

const Signup = () =>{
    return(
<>
<div className='ht'>
    <h1>welcome to rk restaurant</h1>
    </div>
<div className='fv'>
    <img src={rk1} width="700px" height="300px" alt=''></img>
    </div><br/>
    <div className='f'>
<form name="myform1" action=" " method="post">
<label>User Name</label> <br/>
<input type="text" name="uname1" placeholder="Enter User Name" required=""/><br/><br/>
<label>EmailID</label><br/>
<input type="text" name="email" placeholder="Enter email id" required=""/><br/><br/>
<label>password</label><br/>
<input type="password" name = "upswd1" placeholder="Enter password" required=""/><br/><br/>
<label>re-type password</label><br/>
<input type="password" name="upswd2" placeholder="re-enter password" required=""/><br/><br/>

<input class="etr"  type="submit" value="signup"/>

</form>
</div>
</>
    );
}

export default Signup;


