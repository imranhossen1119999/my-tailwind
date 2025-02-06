import React from "react";
import islami from '../../src/assets/Our Valuable Clients/Islami Bank.png';
import IMS from '../../src/assets/Our Valuable Clients/IMS logo.png';
import unilever from '../../src/assets/Our Valuable Clients/Unilever logo.png';
import lalTeer from '../../src/assets/Our Valuable Clients/Lal teer.png';
import Durbar from '../../src/assets/Our Valuable Clients/Durbar.png';

const CompanyLogo = () => {
    return (
        <>
            <div className="bg-[#fff] flex items-start md:items-center justify-center text-black font-sans">
                <div className="container">
                    <hr className="mb-5" />
                    <h2 className="flex justify-center text-2xl font-bold mt-7 mb-7">Our Valuable Clients</h2>
                    <div className=" grid grid-cols-5 gap-[10vw]">
                        <div className="">
                            <img src={islami} alt="" className="w-40 h-32" />
                        </div>
                        <div className="">
                            <img src={IMS} alt="" className="w-40 h-32" />
                        </div>
                        <div className="">
                            <img src={unilever} alt="" className="w-40 h-32" />
                        </div>
                        <div className="">
                            <img src={lalTeer} alt="" className="w-40 h-32" />
                        </div>
                        <div className="">
                            <img src={Durbar} alt="" className="w-40 h-32" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default CompanyLogo;