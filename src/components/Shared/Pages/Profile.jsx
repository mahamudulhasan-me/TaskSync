import React, { useContext } from "react";
import { BiSolidLocationPlus } from "react-icons/bi";
import { BsFillEnvelopeAtFill } from "react-icons/bs";
import { FaBirthdayCake, FaEdit, FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const { displayName, email, uid, photoURL, phoneNumber } = user;
  return (
    <div>
      <div>
        <header className="flex justify-between items-center border-b mt-5 pb-2">
          <h1 className="text-4xl flex items-center">User Profile</h1>
          <Link className="flex gap-2 items-center bg-primary text-gray-200 px-3 py-2 rounded-md ">
            <FaEdit size={24} /> Update Profile
          </Link>
        </header>
        <div className="bg-white px-10 mt-6 py-4 rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)] space-y-3 grid grid-cols-12 items-center">
          <div className="col-span-4   border-r flex flex-col items-center">
            <img
              src={
                photoURL
                  ? photoURL
                  : "https://source.unsplash.com/100x100/?portrait"
              }
              alt=""
              className="rounded-full ring-2 p-1 mb-4 w-28 h-28"
            />

            <h1 className="font-semibold">Designation</h1>
            <p className="text-gray-600 text-sm">User ID: DHK05467</p>
          </div>
          <div className="col-span-8 pl-4">
            <h3 className="font-semibold text-lg">{displayName}</h3>
            <p className="text-gray-600 font-semibold">userName</p>
            <h1 className="mt-5 font-semibold text-lg">Bio</h1>
            <div className="w-full min-h-16 border rounded-md"></div>
            <div className="grid grid-cols-2 mt-5 gap-4">
              <div className="flex items-center gap-2 text-gray-600">
                <FaPhoneAlt size={20} /> {phoneNumber || "null"}
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <BsFillEnvelopeAtFill size={24} /> {email || "null"}
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <FaBirthdayCake size={22} /> {"null"}
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <BiSolidLocationPlus size={24} /> {"null"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
