import React from 'react';

function Footer() {
  return (
    <div className="bg-gray-100 py-8 w-[94%] mx-auto rounded-3xl mt-10 mb-10">
      <div className=" px-4 flex justify-between font-bold mobile__class">
        <p className=" text-gray-600"> &copy; Talup 2023. All rights reserved.</p>
        <div className=" mt-2">
          <a href="#" className="text-gray-600 mx-2 hover:text-red-900 ">Terms & Conditions</a>
          <a href="#" className="text-gray-600 mx-2 hover:text-red-900 ">Privacy Policy</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
