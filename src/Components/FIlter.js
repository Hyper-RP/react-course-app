import React from "react";
// import { useState } from "react";

function Filter({ data, setCategory }) {
  async function filterHandler(title, index) {
    await setCategory(title);
  }

  return (
    <>
      <div className="">
        {data.map((data, index) => {
          return (
            <button
              className="p-[1rem] text-[1.3rem] font-[600] text-[white]"
              key={data.id || index}
              onClick={() => filterHandler(data.title)}
            >
              {data.title}
            </button>
          );
        })}
      </div>
    </>
  );
}

export default Filter;
