import { useState, useEffect } from "react";
import Filter from "./FIlter";
import Cards from "./Cards";
import Loader from "./Loader";
import { data, api } from "./Data";
import { toast } from "react-toastify";
function Wrapper() {
  const [courses, setCourses] = useState([]);
  const [category, setCategory] = useState("All");
  const [loading, setLoading] = useState(false);

  async function fetchData() {
    let data = await fetch(api);
    let res = await data.json();
    await setCourses(res.data);
    toast.success("Data fetched");
    setLoading(!loading);
  }


  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="relative">
        <div className="bg-[#484894] text-center text-[2rem] text-[white] font-[500] font-serif mb-[1rem]">
          Top Courses
        </div>
        <div className="w-[100%] h-[100vh]  bg-[#484894] text-center">
          <Filter data={data} setCategory={setCategory} />

          <hr className="border-b-2 border-[#88808060]" />

          <div className=" flex bg-[#484894]">
            {loading ? (
              <Cards
                courses={courses}
                category={category}
              />
            ) : (
              <Loader />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Wrapper;
