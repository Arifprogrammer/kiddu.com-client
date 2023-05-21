import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import MyData from "./MyData";
import Select from "react-select";

const options = [
  { value: "low", label: "Low" },
  { value: "high", label: "High" },
];

const MyToys = () => {
  //* hooks
  const { user } = useContext(AuthContext);
  const [data, setData] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);

  //* useEffects
  useEffect(() => {
    const loadNewData = async () => {
      const response = await fetch(
        `http://localhost:5000/my_toys?sellerEmail=john.doe@example.com`
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
              />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default MyToys;
