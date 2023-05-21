import { Link } from "react-router-dom";

const MyData = ({ singleData, index }) => {
  const { _id, sellerName, toyName, subCategory, price, quantity } = singleData;
  return (
    <>
      <tr>
        <th>{index + 1}</th>
        <td>{sellerName}</td>
        <td>{toyName}</td>
        <td>{subCategory}</td>
        <td className="pl-6">{price}</td>
        <td className="pl-16">{quantity}</td>
        <td>
          <Link to={`/my_toys/${_id}`}>
            <button className="rounded-2xl px-2 border-2 border-slate-400 text-sm">
              Update
            </button>
          </Link>
        </td>
        <td>
          <button className="rounded-2xl px-2 border-2 border-slate-400 text-sm">
            Delete
          </button>
        </td>
      </tr>
    </>
  );
};

export default MyData;
