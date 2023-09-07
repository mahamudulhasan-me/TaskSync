import React, { useContext, useEffect, useRef, useState } from "react";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { BiSearchAlt } from "react-icons/bi";
import { FaSignOutAlt, FaTasks } from "react-icons/fa";
import { IoMdPeople } from "react-icons/io";
import { toast } from "react-toastify/dist";
import profilePic from "../../../assets/images/icons/man.png";
import { AuthContext } from "../../../provider/AuthProvider";

const Header = () => {
  const [profileModal, setProfileModal] = useState(false);
  const profileModalRef = useRef(null);
  const { logOut } = useContext(AuthContext);
  const handleLogout = () => {
    logOut()
      .then(() => toast.warning("Logged out"))
      .catch((err) => toast.error(err.message));
  };
  // Add a click event listener to detect clicks outside the profileModal
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        profileModalRef.current &&
        !profileModalRef.current.contains(event.target)
      ) {
        setProfileModal(false);
      }
    };

    window.addEventListener("click", handleClickOutside);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="w-full flex justify-between box-shadow: 0 3px 10px rgb(0,0,0,0.2);">
      <div className="bg-[#EEEEEE] flex items-center w-fit pl-4 gap-4 rounded-lg">
        <p>
          <BiSearchAlt size={24} />
        </p>
        <input
          type="text"
          name=""
          id=""
          className="bg-[#EEEEEE] px-4 py-3 border border-transparent focus:bg-white outline-none focus:border-black rounded-r-lg"
          placeholder="Search"
        />
      </div>
      <div>
        <div className="flex items-center gap-2">
          <span>
            <h2 className="font-semibold">Mahamudul Hasan</h2>
            <p>Designation</p>
          </span>
          <div
            onClick={() => setProfileModal(!profileModal)}
            ref={profileModalRef}
          >
            <img
              src={profilePic}
              alt=""
              className="w-12 h-12 ring ring-secondary rounded-full cursor-pointer"
            />
            {profileModal && (
              <div className="absolute right-5 top-20 bg-white p-3 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg">
                <div className="flex gap-2 border-b py-4">
                  <img
                    src={profilePic}
                    alt=""
                    className="w-12 h-12 ring ring-secondary rounded-full"
                  />
                  <div>
                    <h1 className="font-semibold">Mahamudul Hasan</h1>
                    <p>View Profile</p>
                  </div>
                </div>
                <div className="border-b py-4 space-y-2">
                  <p className="flex items-center gap-2 ">
                    <FaTasks /> My Task
                  </p>
                  <p className="flex items-center gap-2 ">
                    <IoMdPeople /> Members
                  </p>
                  <p className="flex items-center gap-2 ">
                    <AiOutlineUsergroupAdd /> Add Another Account
                  </p>
                </div>
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 text-lg pt-2"
                >
                  <FaSignOutAlt /> Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
