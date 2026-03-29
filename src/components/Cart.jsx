import React from "react";
import { toast } from "react-toastify";

const Cart = ({ carts, setCarts }) => {
  const totalPrice = carts.reduce((sum, item) => sum + item.price, 0)
  const handlePayment = () => {
    setCarts([]);
    toast.success("Payments successful")
  }

  const handleDelete =(item)=>{
    const filteredArray = carts.filter(c => c.id !== item.id)
    setCarts(filteredArray)
    toast.success("Item removed to Cart")
  }
  return (
    <div className="p-10 container mx-auto">
      <h2 className="text-2xl font-bold">Your Cart</h2>

      {carts.length === 0 ? (
        <p className="text-center font-bold text-5xl py-10">Cart is empty</p>
      ) : (
        <>
          <div className="space-y-5 mt-4">
            {carts.map((item) => (
              <div
                key={item.id}
                className="flex justify-between border rounded-lg p-4 items-center"
              >
                <div className="flex items-center gap-2">
                  <div>
                    <img
                      className="h-20 w-20 object-contain"
                      src={item.image}
                      alt=""
                    />
                  </div>

                  <div className="text-xl font-bold">
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                  </div>
                </div>
                <div className="flex gap-3 text-2xl font-bold">${item.price}/month

                  <button onClick={()=>handleDelete(item)} className="btn btn-error rounded-full">X</button>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-between bg-black text-white p-5 mt-5 rounded-lg text-3xl font-bold">
            <div>Total</div>
            <div>{totalPrice}</div>
          </div>

          <button
            onClick={handlePayment}
            className="btn  mt-5 w-full p-8 text-3xl font-bold bg-red-500 text-white rounded-lg"
          >
            Proceed to Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
