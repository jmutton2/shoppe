import React from "react";

const Contacts = () => {
  return (
    <>
      <hr />
      <nav
        className={
          "w-full flex flex-row justify-between py-12 pb-[5em] bottom-0 z-20 bg-primary"
        }
      >
        <div className="w-1/3">
          <div className="pb-4 max-w-[500px] pl-10 items-center">
            <h3>Contact Us</h3>
            <p className="text-gray-500">Call: +48 509 302 481</p>
            <p className="text-gray-500">Email: sayhello@shoppe.com</p>
          </div>
          <div className="max-w-[500px] m-auto justify-left items-center">
            <h3>Closets Store</h3>
            <p className="text-gray-700">Bonarka City Center</p>{" "}
            <p className="text-gray-500">904 E. 4th Ave.Colton, CA 92324</p>
          </div>
        </div>
        <div className="flex flex-row w-2/3 pr-10 justify-between">
          <ul>
            <li className="pb-2">
              <h3>Shop By</h3>
            </li>
            <li className="text-gray-500 pb-2">Shoes</li>
            <li className="text-gray-500 pb-2">Jackets</li>
            <li className="text-gray-500 pb-2">Hoodies</li>
            <li className="text-gray-500 pb-2">Shirts</li>
            <li className="text-gray-500">Accessories</li>
          </ul>
          <ul>
            <li className="pb-2">
              <h3>Support</h3>
            </li>
            <li className="text-gray-500 pb-2">Shipping & Delivery</li>
            <li className="text-gray-500 pb-2">Returns & Exchanges</li>
            <li className="text-gray-500 pb-2">Perfect Fit Guides</li>
            <li className="text-gray-500 pb-2">FAQ</li>
          </ul>
          <ul>
            <li className="pb-2">
              <h3>Services</h3>
            </li>
            <li className="text-gray-500 pb-2">Plan Your Visit</li>
            <li className="text-gray-500 pb-2">Gift Cards</li>
          </ul>
          <ul>
            <li className="pb-2">
              <h3>About</h3>
            </li>
            <li className="text-gray-500 pb-2">Our Stores</li>
            <li className="text-gray-500 pb-2">Careers</li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Contacts;
