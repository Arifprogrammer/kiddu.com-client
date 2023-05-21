import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useEffect, useState } from "react";
import CategoryProducts from "./CategoryProducts";

const Categories = () => {
  //* hooks
  const [query, setQuery] = useState("basketball toy");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const response = await fetch(
        `http://localhost:5000/toys_category?subCategory=${query}`
      );
      const data = await response.json();
      setProducts(data);
    };
    loadData();
  }, [query]);
  return (
    <>
      <Tabs>
        <TabList>
          <Tab onClick={() => setQuery("basketball toy")}>
            <span className="text-[#F261C2] font-semibold lg:text-lg">
              Basketball
            </span>
          </Tab>
          <Tab onClick={() => setQuery("football toy")}>
            <span className="text-[#F261C2] font-semibold lg:text-lg">
              Football
            </span>
          </Tab>
          <Tab onClick={() => setQuery("golf toy")}>
            <span className="text-[#F261C2] font-semibold lg:text-lg">
              Golf
            </span>
          </Tab>
          <Tab onClick={() => setQuery("soccer toy")}>
            <span className="text-[#F261C2] font-semibold lg:text-lg">
              Soccer
            </span>
          </Tab>
        </TabList>

        <TabPanel>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-12 mt-16">
            {products.map((product) => (
              <CategoryProducts key={product._id} product={product} />
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-12 mt-16">
            {products.map((product) => (
              <CategoryProducts key={product._id} product={product} />
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-12 mt-16">
            {products.map((product) => (
              <CategoryProducts key={product._id} product={product} />
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-12 mt-16">
            {products.map((product) => (
              <CategoryProducts key={product._id} product={product} />
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </>
  );
};

export default Categories;
