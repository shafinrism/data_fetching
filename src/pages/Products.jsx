import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";




const Products = () => {
  const data = useLoaderData()
  const allProducts = data.products

  // State to hold the search query
  const [searchQuery, setSearchQuery] = useState('');

  // Filter products based on search query
  const filteredProducts = allProducts.filter(product =>
    product.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.category.toLowerCase().includes(searchQuery))
  

  
  return (
    <div>
      <div className="container mx-auto flex justify-between flex-wrap mt-5">
      <input
        type="text"
        placeholder="Search products..."
        className="w-full p-2 mb-4 border border-gray-800 rounded-md mt-4"
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
      />
        {
          filteredProducts.map((product,i)=> {
            return(
              <div key={i} className="w-[30%] mb-4 border border-blue-500 rounded-lg p-5">
                <h1 className="text-black">Title :- {product.title}</h1>
                <h1>Brand :- {product.brand}</h1>
                <h1>Price :- {product.price}</h1>
                <Link to={`/details/${product.id}`} className="py-2 px-4 bg-yellow-400 text-white font-bold w-full mt-3 block text-center">See details{product.id}</Link>
              </div>
            )
          }) 
        }
      </div>
    </div>
  );
};

export default Products;