import React from 'react'
import './rk_hp.css'
import olm from '../../img/onlinelogomaker-080620-1320-6770.png'
import { Link, Routes,Route } from 'react-router-dom';
import Logi from '../../components/Login/rk_login';
import Loc from '../Location/rk_l';
import Homed from '../Homedelivery/rk_hd';
import Browsem from '../Browsemenu/rk_bm';
import Home from './Frontpage';
import { useCart } from 'react-use-cart';
import Signup from '../../components/SignUp/rk_signup';



const Homepage = () => {
    const {totalItems}=useCart()
    return(
<div className='h'>
    <div className='nav'>
        <div className='logo'>
        <img src={olm} width={100} height={100} alt="logo"></img>
       
<h1 className='hi'> RK RESTAURANT </h1>
</div>

<div className='opt'>
    <Link className='lin'  exact to='/'>home</Link>
    <Link className='lin' to='bm'>browsemenu</Link>
    <Link className='lin' to='hd'>location</Link>
    <Link className='lin' to='l'>Cart({totalItems})</Link>
    <Link className='lin' to='li'><button>LOGIN</button></Link>
    <Link className='splin' to='sp'>Signup</Link>
 </div>
</div>

<Routes>
<Route  exact path='/' element={<Home/>}/>
    <Route  path='bm' element={<Browsem/>}/>
    <Route  path='hd' element={<Loc/>}/>
    <Route  path='l' element={<Homed/>}/>
    <Route  path='li' element={<Logi/>}/>
    <Route path='sp' element={<Signup/>}/>
    
</Routes> 


</div>
    );
}
export default Homepage;


