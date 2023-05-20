import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";

const TableData = ({ singleData, index }) => {
  //* hooks
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  //* variables
  const { _id, sellerName, toyName, subCategory, price, quantity } = singleData;

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
      <tr>
        <th>{index + 1}</th>
        <td>{sellerName}</td>
        <td>{toyName}</td>
        <td>{subCategory}</td>
        <td className="pl-6">{price}</td>
        <td className="pl-16">{quantity}</td>
        <td>
          <button
            onClick={showMessage}
            className="rounded-2xl px-2 border-2 border-slate-400 text-sm"
          >
            View Details
          </button>
        </td>
      </tr>
    </>
  );
};

export default TableData;
