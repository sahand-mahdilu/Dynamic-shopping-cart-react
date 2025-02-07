import "./App.css";
import Cart from "./Cart-component/Cart";

function App() {
  const products = [
    {
      name: "Xiaomi",
      description:
        "ALI ipsum dolor sit amet consectetur adipisicing elit. Distinctio exercit",
      image: "./public/img/phone-1.jpg",
    },

    {
      name: "Samsaung",
      description:
        "REZA ipsum dolor sit amet consectetur adipisicing elit. Distinctio exercit",
        image: "./public/img/phone-2.jpg",
    },

    {
      name: "Nokia",
      description:
        "MAHDI ipsum dolor sit amet consectetur adipisicing elit. Distinctio exercit",
      image: "./public/img/phone-3.jpg",
    },
  ];

  return (
    <>
      <div className="flex justify-evenly items-center pt-5 ">
        <Cart {...products[0]}>
          <h2 className="text-xl font-bold text-red-500">30% Off</h2>
        </Cart>
        <Cart {...products[1]}></Cart>
        <Cart {...products[2]}></Cart>
      </div>
    </>
  );
}

export default App;
