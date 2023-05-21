import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useContext } from "react";

const MyData = ({ singleData, index, handleDeleteData }) => {
  //* hooks
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const {
    _id,
    sellerName,
    toyName,
    subCategory,
    price,
    quantity,
    sellerEmail,
    ratings,
  } = singleData;

  const showMessage = () => {
    if (!user) {
      Swal.fire(
        "Ooooops!!!",
        "You have to log in first to view details",
        "error"
      ).then(() => {
        navigate(`/toy/${_id}`);
      });
    } else {
      navigate(`/toy/${_id}`);
    }
  };

  return (
    <>
      <tr className="custom-table">
        <th>{index + 1}</th>
        <td>{sellerName}</td>
        <td>{sellerEmail}</td>
        <td>{toyName}</td>
        <td>{subCategory}</td>
        <td className="pl-6">{price}</td>
        <td className="pl-16">{quantity}</td>
        <td className="pl-6">{ratings}</td>
        <td>
          <button
            onClick={showMessage}
            className="rounded-2xl px-2 border-2 border-slate-400 text-sm"
          >
            View Details
          </button>
        </td>
        <td>
          <Link to={`/my_toys/${_id}`}>
            <button className="rounded-2xl px-2 border-2 border-slate-400 text-sm">
              Update
            </button>
          </Link>
        </td>
        <td>
          <button
            onClick={() => handleDeleteData(_id)}
            className="rounded-2xl px-2 border-2 border-slate-400 text-sm"
          >
            Delete
          </button>
        </td>
      </tr>
    </>
  );
};

export default MyData;
