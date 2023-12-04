import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

//componente para mostrar el carrito de compras
const CartWidget = () => {
  return (
    <div> <FontAwesomeIcon icon={faCartShopping} /> 
    <span style={{color: 'grey', fontWeight: 'bold', margin: '0.5rem'}}>0</span> 
    </div>
  )
}

export default CartWidget