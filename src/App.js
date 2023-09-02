import React from "react";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import Loader from "./components/Loader";
import { useState, useEffect } from "react";
import { apiUrl, filterData } from "./data";
import { toast } from "react-toastify";

const App = () => {
  const [loader, setLoader] = useState(true);
  const [courses, setCourses] = useState([]);
  const [category, setCategory] = useState(filterData[0].title);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        // loader hide
        setLoader(false);
        // save data to var;
        setCourses(data);
      } catch (err) {
        setLoader(true);
        setTimeout(() => {
          fetchData();
        }, 5000);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="app">
      <Navbar />
      <section className="bg-slate-500 w-full min-h-screen py-5">
        <Filter setCourses={setCourses} setCategory={setCategory} />
        {loader ? <Loader /> : <Cards courses={courses} category={category} />}
      </section>
    </div>
  );
};

export default App;
