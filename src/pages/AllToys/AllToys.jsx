import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const AllToys = () => {
  //* hooks
  const loadData = useLoaderData();
  const [data, setData] = useState(loadData);
  const [text, setText] = useState("");

  //* functions
  const hanleSearch = (e) => {
    e.preventDefault();
    const loadNewData = async () => {
      const response = await fetch(
        `https://kiddu-com-server.vercel.app/searchByToyName/${text}`
      );
      const data = await response.json();
      setData(data);
    };
    loadNewData();
  };

  //* useEfect
  useEffect(() => {
    if (text.length === 0) {
      setData(loadData);
    }
    const loadNewData = async () => {
      const response = await fetch(
        `https://kiddu-com-server.vercel.app/searchByToyName/${text}`
      );
      const data = await response.json();
      setData(data);
    };
    loadNewData();
  }, [text]);

  return (
    <section className="my-12 lg:my-20">
      <div className="my-container">
        <div className="text-center mb-6">
          <form onSubmit={hanleSearch}>
            <input
              onChange={(e) => setText(e.target.value)}
              type="text"
              placeholder="Search by toy name..."
              className="input input-bordered input-info w-full max-w-xs rounded-3xl"
              required
            />
            <button
              type="submit"
              className="ml-3 px-7 py-3 rounded-3xl bg-[#C2E0EB]"
            >
              Search
            </button>
          </form>
        </div>
        <div className="overflow-x-auto">
          <table className="table table-compact w-full custom-table">
            <thead>
              <tr>
                <th>SL</th>
                <th>Seller</th>
                <th>Toy Name</th>
                <th>Sub-category</th>
                <th>Price</th>
                <th>Available Quantity</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              {data.length > 0 ? (
                data.map((singledata, index) => (
                  <>
                    <tr key={singledata._id}>
                      <th>{index + 1}</th>
                      <td>{singledata.sellerName}</td>
                      <td>{singledata.toyName}</td>
                      <td>{singledata.subCategory}</td>
                      <td className="pl-6">{singledata.price}</td>
                      <td className="pl-16">{singledata.quantity}</td>
                      <td>
                        <Link to={`/toy/${singledata._id}`}>
                          <button className="rounded-2xl px-2 border-2 border-slate-400 text-sm">
                            View Details
                          </button>
                        </Link>
                      </td>
                    </tr>
                  </>
                ))
              ) : (
                <>
                  <tr>
                    <th className="mt-2 font-semibold text-red-600 bg-transparent">
                      No match found
                    </th>
                  </tr>
                </>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default AllToys;
