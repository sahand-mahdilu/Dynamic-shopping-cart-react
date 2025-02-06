
export default function Cart(props) {

   
    let {image, name, description}=props

  return (
    <div className="Cart_container max-w-56 bg-gray-200 rounded-xl ">

        <h1 className="title text-center pb-1 text-gray-800 text-lg font-semibold">Product Cart</h1>

        <div className="cart flex flex-col items-center justify-center">

                <div className="imgContainer w-48 h-48">
                    <img className="w-full h-full" src={image} alt="img" />
                </div>
               <div className="px-2">
               <h2 className="text-xl font-bold text-center pt-3">{name}</h2>
               <p className="pt-5 text-center">{description}</p>
               </div>

                <button className="bg-blue-600 text-white p-2 w-full mt-8 hover:bg-blue-400" >Add to Cart</button>



        </div>

    </div>
  )
}
