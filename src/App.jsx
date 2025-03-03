import './App.css'
import ShopPage from './pages/ShopPage';

function App() {
  const products = [
    {id: 1, title: "P1", price: 5000, description: "This is P1"},
    {id: 2, title: "P2", price: 5000, description: "This is P2"},
    {id: 3, title: "P3", price: 5000, description: "This is P3"},
    {id: 4, title: "P4", price: 5000, description: "This is P4"},
    {id: 5, title: "P5", price: 5000, description: "This is P5"},
    {id: 6, title: "P6", price: 5000, description: "This is P6"},
  ]
  return (
    <>
      <ShopPage products={products}/>
    </>
  )
}

export default App
