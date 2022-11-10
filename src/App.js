
import { Fragment, useState} from 'react'
import Header from './components/Layout/Header'
import Meals from './components/Meals/Meals'
import Cart from './components/Cart/Cart'


function App() {

const [cartIsShown, setCartIShown] =  useState(false);

const showCartHandler = () => {
  setCartIShown(true);
}


const hideCartHandler = () => {
  setCartIShown(false)
}


  return (
    <Fragment>
   { cartIsShown &&  <Cart />   }
     <Header onShowCart={showCartHandler} />
<main>
<Meals />
</main>

    </Fragment>
  );
}


export default App;
