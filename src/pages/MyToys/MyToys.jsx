/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import MyData from "./MyData";
import Select from "react-select";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";

const options = [
  { value: "low", label: "Low" },
  { value: "high", label: "High" },
];

const MyToys = () => {
  //* hooks
  const { user } = useContext(AuthContext);
  const [data, setData] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);

  //* function
  const handleDeleteData = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const deleteData = async () => {
          const response = await fetch(`http://localhost:5000/my_toys/${id}`, {
            method: "DELETE",
          });
          const data = await response.json();
          toast.success("You've successfully deleted your product", {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        };
        deleteData();
        const newData = data.filter((d) => d._id !== id);
        setData(newData);
      }
    });
  };

  //* useEffects
  useEffect(() => {
    const loadNewData = async () => {
      const response = await fetch(
        `http://localhost:5000/my_toys?sellerEmail=${user?.email}`
      );
      const data = await response.json();
      setData(data);
    };
    loadNewData();
  }, []);

  useEffect(() => {
    if (selectedOption?.value === "low") {
      const sortedData = data.sort((a, b) => {
        return a.price - b.price;
      });
      setData([...sortedData]);
    } else if (selectedOption?.value === "high") {
      const sortedData = data.sort((a, b) => {
        return b.price - a.price;
      });
      setData([...sortedData]);
    }
  }, [selectedOption]);

  return (
    <section className="my-12 lg:my-20">
      <div className="w-32 my-16 mx-auto">
        <Select
          defaultValue={selectedOption}
          onChange={setSelectedOption}
          options={options}
        />
      </div>
      <div className="overflow-x-auto my-container">
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
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {data.map((singleData, index) => (
              <MyData
                key={singleData._id}
                index={index}
                singleData={singleData}
                handleDeleteData={handleDeleteData}
              />
            ))}
          </tbody>
        </table>
      </div>
      <ToastContainer />
    </section>
  );
};

export default MyToys;
