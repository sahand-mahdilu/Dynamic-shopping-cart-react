
import './App.css'
import Cart from './Cart-component/Cart'

function App() {

  const products=[
    {name:"Xiaomi", description:"ALI ipsum dolor sit amet consectetur adipisicing elit. Distinctio exercit", image:"./public/img/phone-1.jpg"},

    {name:"Samsaung", description:"REZA ipsum dolor sit amet consectetur adipisicing elit. Distinctio exercit", },

    {name:"Nokia", description:"MAHDI ipsum dolor sit amet consectetur adipisicing elit. Distinctio exercit", image:"./public/img/phone-3.jpg"},
  ]

  return (
    <>
    <div className='flex justify-evenly items-center pt-5 '>
   <Cart {...products[0]} />
   <Cart {...products[1]} />
   <Cart {...products[2]} />
      

    </div>
    </>
  )
}

export default App
