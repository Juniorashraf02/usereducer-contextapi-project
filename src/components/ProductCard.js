import React from "react";
import { BiListPlus } from "react-icons/bi";
import { actionTypes } from "../state/productState/actionTypes";
import { useProducts } from "./../context/ProductProvider";

const ProductsCard = ({ products }) => {
  const { dispatch } = useProducts();

  return (
    <div className=" w-full">
      <div
        className="shadow-lg rounded-3xl border flex flex-col p-3  text-indigo-900"
      >
        <div className="h-52 w-52 mx-auto">
          <img src={products.image} alt={products.model} />
        </div>
        <h1 className="font-bold text-center">{products.model}</h1>
        <p className="text-center font-semibold mb-3">
          Rating: {products.rating}
        </p>
        <div className=" flex-1">
          <ul className="space-y-2">
            {products.keyFeature.map((feature) => {
              return <li className="text-sm " key={feature}>{feature}</li>;
            })}
          </ul>
        </div>
        <div className="flex gap-2 mt-5">
          <button
            className="bg-indigo-500 rounded-full py-1 px-2 flex-1 text-white text-bold"
            onClick={() =>
              dispatch({ type: actionTypes.ADD_TO_CART, payload: products })
            }
          >
            Add to cart
          </button>
          <button
            title="Add to wishlist"
            className="bg-indigo-500  py-1 px-2 rounded-full"
            onClick={()=>{dispatch({type: actionTypes.ADD_TO_WISHLIST, payload: products})}}
          >
            <BiListPlus className="text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
