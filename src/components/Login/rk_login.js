import React from "react"
import './rk_login.css'
import rk from '../../img/rk.jpg'



const Logi = () => {
    return(
        <div className="lo">
 
 <div className="ht"><h1>welcome to rk restaurant</h1></div>
            <div className="fv">
                <img src={rk}  width="700px" height="300px" alt="radhikakitchen"></img></div><br/>
                <div className="f">
<form name="myform2" action="" method="post" >
User Name <br/>
<input type="text" name="username" placeholder="enter username"/><br/><br/>
password<br/>
<input type="password" name = "password" placeholder="enter password"/><br/><br/>

<input class="etr"  type="submit" value="login"/><br/><br/>

<p>if you don't have account?<br/> </p>
<p className="psp">click the signup tool in header</p> 
</form>
</div>

</div>
    );
}
export default Logi;
