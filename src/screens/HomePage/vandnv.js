import React from 'react'
import {Link,Routes,Route} from 'react-router-dom';
import Nonveg from './nonveg';
import Veg  from './veg';
import  './vandnv.css'


function Type() {
  return (
    <div >
<div className='fi'>
        <div className='vi'>
            <button className='vio'><Link className='vion' to='v'>Veg Items</Link></button>
        </div>

<div className='nvi'>
    <button className='nvio'><Link className='nvion' to='NV'>Non-veg Items</Link></button>
</div>
</div>
<Routes>
    <Route path='v' element={<Veg/>}/>
    <Route path='NV' element={<Nonveg/>}/>
</Routes>

    </div>
  )
}

export default Type