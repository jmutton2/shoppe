import React, { useEffect, useState } from "react";
import close from "../assets/close.svg";

const sortAsc = (arr, field) => {
  return [
    ...arr.sort((a, b) => {
      if (a[field] > b[field]) {
        return 1;
      }
      if (b[field] > a[field]) {
        return -1;
      }
      return 0;
    }),
  ];
};

// Saving this so we can alternate between which sort is used
// const sortDesc = (arr, field) => {
//   return arr.sort((a, b) => {
//     if (a[field] > b[field]) {
//       return -1;
//     }
//     if (b[field] > a[field]) {
//       return 1;
//     }
//     return 0;
//   });
// };

const ItemCard = ({
  category,
  description,
  id,
  image,
  price,
  material,
  rating,
  title,
}) => {
  return (
    <div className="s:w-[250px] min-w-[400px] front">
      <div className="w-full p-[1px]">
        <div className="bg-secondary py-5 px-5 h-[500px] w-[410px] flex justify-evenly items-center flex-col">
          <img src={image[0]} />
        </div>
        <h5 className="text-black text-[15px]">{title}</h5>
        <h6 className="text-gray-400">{material}</h6>
        <p className="">
          {price}&nbsp;
          <span className="text-black text-[11px]">CAD</span>
        </p>
      </div>
    </div>
  );
};

const Showcase = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [content, setContent] = useState();
  const [originalContent, setOriginalcontent] = useState();

  const [sortBoxVisible, setSortBoxVisible] = useState(false);
  const [filterBoxVisible, setFilterBoxVisible] = useState(false);

  useEffect(() => {
    fetch("https://my-json-server.typicode.com/jmutton2/shoe_data/data")
      .then((res) => res.json())
      .then((json) => {
        setContent(json);
        setOriginalcontent(json);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="sm:ml-0 mt-20 flex flex-col justify-center items-center p-10">
      <div className=" pt-[200px] pl-[80px] bg-no-repeat bg-cover h-[400px] w-full bg-[url('/men_shoe_banner.jpg')]">
        {/* {isLoading ? "Loading... " : content[0].category} */}
        <h1 className="text-white text-bold text-[35px]">Men's Sneakers</h1>
        <p className="max-w-[500px] text-white">
          Shop men's sneakers. Discover casual leather and suede styles perfect
          for your laid-back wardrobe.
        </p>
      </div>
      <>
        <hr />
        <nav
          className={
            "w-full flex flex-row justify-between items-center py-[5em] bg-primary"
          }
        >
          <button
            type="button"
            className="bg-white hover:bg-secondary text-black text-[20px] font-semibold py-6 px-10 border border-gray-400 shadow h-full"
            id="menu-button"
            aria-expanded="true"
            aria-haspopup="true"
            onClick={() => {
              setFilterBoxVisible(!filterBoxVisible);
            }}
          >
            Filter
          </button>
          <div
            className="fixed left-0 top-0 z-30 h-[100vh] origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            hidden={!filterBoxVisible}
          >
            <div className="flex flex-col justify-between p-5 h-full">
              <div className="flex flex-row justify-between items-center">
                <h1 className="text-[20px]">Filters</h1>
                <img
                  src={close}
                  onClick={() => setFilterBoxVisible(false)}
                ></img>
              </div>
              <div>Size</div>
              <div>Price</div>
              <div>Color</div>
              <div>Material</div>
              <div className="p-3">
                <button
                  type="button"
                  className="bg-white hover:bg-secondary w-[200px] text-black text-[20px] font-semibold py-6 px-10 border border-gray-400 shadow h-full"
                  id="menu-button"
                  aria-expanded="true"
                  aria-haspopup="true"
                  onClick={() => {
                    setFilterBoxVisible(!filterBoxVisible);
                  }}
                >
                  Clear all
                </button>
                <button
                  type="button"
                  className="bg-black hover:bg-secondary w-[200px] text-white text-[20px] font-semibold py-6 px-10 border border-gray-800 shadow h-full"
                  id="menu-button"
                  aria-expanded="true"
                  aria-haspopup="true"
                  onClick={() => {
                    setFilterBoxVisible(!filterBoxVisible);
                  }}
                >
                  Apply
                </button>
              </div>
            </div>
          </div>
          <div className="relative inline-block text-left">
            <div>
              <button
                type="button"
                className="bg-white hover:bg-secondary text-black text-[20px] font-semibold py-6 px-10 border border-gray-400 shadow"
                id="menu-button"
                aria-expanded="true"
                aria-haspopup="true"
                onClick={() => {
                  setSortBoxVisible(!sortBoxVisible);
                }}
              >
                Sort
              </button>
            </div>
            <div
              className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
              hidden={!sortBoxVisible}
            >
              <div className="py-1" role="none">
                <button
                  className="text-gray-700 block px-4 py-2 text-sm"
                  onClick={() => {
                    setContent(sortAsc(content, "price"));
                  }}
                >
                  Sort by price
                </button>
                <button
                  className="text-gray-700 block px-4 py-2 text-sm"
                  onClick={() => {
                    setContent(sortAsc(content, "title"));
                  }}
                >
                  Sort by name
                </button>
                <button
                  className="text-gray-700 block px-4 py-2 text-sm"
                  onClick={() => {
                    setContent(sortAsc(content, "material"));
                  }}
                >
                  Sort by material
                </button>
              </div>
            </div>
          </div>
        </nav>
      </>

      <div className="flex flex-wrap gap-10 justify-between">
        {isLoading
          ? "Loading... "
          : content.map((content, index) => (
              <ItemCard key={content.id} index={index} {...content} />
            ))}
      </div>
    </div>
  );
};

export default Showcase;
Showcase;
