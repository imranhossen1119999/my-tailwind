import React from "react";
import trackMonitor from '../../src/assets/Why choose Mobionizer/track & monitor.png';
import safeGuard from '../../src/assets/Why choose Mobionizer/safeguards.png';
import remotelyManage from '../../src/assets/Why choose Mobionizer/remotely manage.png';
import employeeAccountability from '../../src/assets/Why choose Mobionizer/employee accountability.png';
import facilitatesSeamless from '../../src/assets/Why choose Mobionizer/facilitates seamless.png';

const chooseMobionizer = () => {
    return(
        <div className="bg-[#fff] flex items-start md:items-center justify-center text-black font-sans mt-28 mb-11">
            <div className="container">
                <hr className="mb-5" />
                <h2 className="flex justify-center text-2xl font-bold mt-11 mb-14">Why choose Mobionizer ?</h2>
                <div className=" grid grid-cols-2 gap-10">
                    <div className="flex items-start px-3 py-3 bg-[#E7E7E7] shadow-white rounded-lg">
                        <div className="">
                        <img src={trackMonitor} alt="#" className="w-40 h-32" />
                        </div>
                        <div className="mt-4 ml-4 text-2xl font-bold">
                            <p>Mobionizer enables you to
                            effortlessly track & monitor
                            your team's movement</p>
                        </div>
                    </div>
                    <div className="flex items-start px-3 py-3 bg-[#E7E7E7] shadow-white rounded-lg">
                        <div className="">
                        <img src={safeGuard} alt="#" className="w-40 h-32" />
                        </div>
                        <div className="mt-4 ml-4 text-2xl font-bold">
                            <p>Mobionizer safeguards your
                            valuable business data</p>
                        </div>
                    </div>
                    <div className="flex items-start px-3 py-3 bg-[#E7E7E7] shadow-white rounded-lg">
                        <div className="">
                        <img src={remotelyManage} alt="#" className="w-40 h-32" />
                        </div>
                        <div className="mt-4 ml-4 text-2xl font-bold">
                            <p>Mobionizer can remotely
                            manage your device</p>
                        </div>
                    </div>
                    <div className="flex items-start px-3 py-3 bg-[#E7E7E7] shadow-white rounded-lg">
                        <div className="">
                        <img src={employeeAccountability} alt="#" className="w-40 h-32" />
                        </div>
                        <div className="mt-4 ml-4 text-2xl font-bold">
                            <p>Mobionizer enhances
                            employee accountability &
                            boosts productivity</p>
                        </div>
                    </div>
                    <div className="flex items-start px-3 py-3 bg-[#E7E7E7] shadow-white rounded-lg">
                    <div className="">

                        <img src={facilitatesSeamless} alt="#" className="w-40 h-32" />
                        </div>
                        <div className="mt-4 ml-4 text-2xl font-bold">
                            <p>Mobionizer facilitates
                            seamless communication &
                            secure file sharing</p>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}
export default chooseMobionizer;