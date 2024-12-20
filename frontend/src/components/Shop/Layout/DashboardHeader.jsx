import React from "react";
import { AiOutlineGift } from "react-icons/ai";
import { MdOutlineLocalOffer } from "react-icons/md";
import { FiPackage, FiShoppingBag } from "react-icons/fi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { BiMessageSquareDetail } from "react-icons/bi";
import { backend_url } from "../../../server";

const DashboardHeader = () => {
    const { seller } = useSelector((state) => state.seller);
    return (
        <div className="w-full h-[80px] bg-white shadow sticky top-0 left-0 z-30 flex items-center justify-between px-4">
            <div>
                <Link className="link" to="/dashboard">
                    {/* <img
                        src="https://shopo.quomodothemes.website/assets/images/logo.svg"
                        alt=""
                    /> */}
                     <h1 className="logo-fot-style">Knitting Nest</h1>
                </Link>
            </div>
            <div className="flex items-center">
                <div className="flex items-center mr-4">
                    {/* <Link className="link" to="/dashboard/cupouns" className="800px:block hidden">
                        <AiOutlineGift
                            color="#555"
                            size={30}
                            className="mx-5 cursor-pointer"
                        />
                    </Link> */}
                    {/* <Link className="link" to="/dashboard-events" className="800px:block hidden">
                        <MdOutlineLocalOffer
                            color="#555"
                            size={30}
                            className="mx-5 cursor-pointer"
                        />
                    </Link> */}
                    <Link className="link" to="/dashboard-products" className="800px:block hidden">
                        <FiShoppingBag
                            color="#555"
                            size={30}
                            className="mx-5 cursor-pointer"
                        />
                    </Link>
                    <Link className="link" to="/dashboard-orders" className="800px:block hidden">
                        <FiPackage color="#555" size={30} className="mx-5 cursor-pointer" />
                    </Link>
                    <Link className="link" to="/dashboard-messages" className="800px:block hidden">
                        <BiMessageSquareDetail
                            color="#555"
                            size={30}
                            className="mx-5 cursor-pointer"
                        />
                    </Link>
                    <Link className="link" to={`/shop/${seller._id}`}>
                        <img
                            src={`${backend_url}${seller.avatar}`}
                            alt=""
                            className="w-[50px] h-[50px] rounded-full object-cover"
                        />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default DashboardHeader;