import { Link } from 'react-router-dom'
import './navmenu.css'
import alvo from '../../img/alvo.svg'
import Premio from '../../img/Premio.svg'
import foguete from '../../img/foguete.svg'


function Navmenu () {
    return (
        <div className='Navmenu'> 
            <li className='botoesdenavegacao'>
             <Link to= "/Missoes">Missões <img className= "icon" src={alvo} /> </Link>
            </li>

             <li className='botoesdenavegacao'>
              <Link to= "/Desafios">Desafios <img className= "icon"  src={foguete} /> </Link>
             </li>

             <li className='botoesdenavegacao'>
              <Link to= "/Recompensas">
                         
                     Recompensas <img className= "icon" src={Premio} /></Link>
             </li>
        </div>
    )
}

export default Navmenu