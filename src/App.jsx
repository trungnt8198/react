import './App.css'
import data from './data';
import ShopPage from './pages/ShopPage';

function App() {
  return (
    <>
      <ShopPage products={data}/>
    </>
  )
}

export default App
