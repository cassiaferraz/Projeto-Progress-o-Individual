import { Link } from 'react-router-dom'
import './navmenu.css'
import alvo from '../../img/alvo.svg'
import Premio from '../../img/Premio.svg'
import foguete from '../../img/foguete.svg'


function Navmenu () {
    return (
        <div className='Navmenu'> 
            <li className='botoesdenavegacao'>
            
             <Link to= "/Missoes" style={{ textDecoration: 'none' }}> <img className= "icon" src={alvo} />Missões </Link>
            </li>

             <li className='botoesdenavegacao'>
            
              <Link to= "/Desafios" style={{ textDecoration: 'none' }}> <img className= "icon"  src={foguete} />Desafios </Link>
             </li>

             <li className='botoesdenavegacao'>
              <Link to= "/Recompensas" style={{ textDecoration: 'none' }}>
              <img className= "icon" src={Premio} />   Recompensas </Link>
                     
             </li>
        </div>
    )
}

export default Navmenu