import { Link, useLoaderData } from "react-router-dom";


const Details = () => {
  const data = useLoaderData()
  console.log(data)
  return (
    <div className="text-center mt-5">
      <div className="flex justify-center">
      <img  src={data.images[0]} alt="" />
      </div>
      <h1>{data.brand}</h1>
      <h1 className="mb-6">{data.rating}</h1>
      <Link className="py-2 px-4 bg-yellow-300 text-white rounded-lg" to='/products'>Back to Products</Link>
    </div>
  );
};

export default Details;