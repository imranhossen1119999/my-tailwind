import React from "react";
import trackMonitor from '../../src/assets/Why choose Mobionizer/track & monitor.png';
import safeGuard from '../../src/assets/Why choose Mobionizer/safeguards.png';
import remotelyManage from '../../src/assets/Why choose Mobionizer/remotely manage.png';
import employeeAccountability from '../../src/assets/Why choose Mobionizer/employee accountability.png';
import facilitatesSeamless from '../../src/assets/Why choose Mobionizer/facilitates seamless.png';

const chooseMobionizer = () => {
    return (
        <div className="flex items-start md:items-center justify-center text-black font-sans mt-10 md:mt-28 mb-11 md:px-16 px-6">
            <div className="container">
                <hr className="mb-5" />
                <h2 className="flex justify-center text-[28px] md:text-3xl font-bold mt-11 mb-14">Why choose Mobionizer ?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 md:gap-10">
                    <div className="flex items-center md:items-start px-3 py-3 bg-[#ffffff] drop-shadow-md border-2 border-gray rounded-lg">
                        <div className="">
                            <img src={trackMonitor} alt="#" className="w-40 h-32" />
                        </div>
                        <div className="mt-4 ml-4 text-2xl font-bold">
                            <p>Mobionizer enables you to
                                effortlessly track & monitor
                                your team's movement</p>
                        </div>
                    </div>
                    <div className="flex items-start  px-3 py-3 bg-[#ffffff] drop-shadow-md border-2 border-gray rounded-lg">
                        <div className="">
                            <img src={safeGuard} alt="#" className="w-40 h-32" />
                        </div>
                        <div className="mt-4 ml-4 text-2xl font-bold">
                            <p>Mobionizer safeguards your
                                valuable business data</p>
                        </div>
                    </div>
                    <div className="flex items-start px-3 py-3 bg-[#ffffff] drop-shadow-md border-2 border-gray rounded-lg">
                        <div className="">
                            <img src={remotelyManage} alt="#" className="w-40 h-32" />
                        </div>
                        <div className="mt-4 ml-4 text-2xl font-bold">
                            <p>Mobionizer can remotely
                                manage your device</p>
                        </div>
                    </div>
                    <div className="flex items-start px-3 py-3 bg-[#ffffff] drop-shadow-md border-2 border-gray rounded-lg">
                        <div className="">
                            <img src={employeeAccountability} alt="#" className="w-40 h-32" />
                        </div>
                        <div className="mt-4 ml-4 text-2xl font-bold">
                            <p>Mobionizer enhances
                                employee accountability &
                                boosts productivity</p>
                        </div>
                    </div>
                    <div className="w-full flex justify-center md:col-span-2">
                        <div className="flex items-start px-3 py-3 bg-[#ffffff] drop-shadow-md border-2 border-gray rounded-lg w-[100%] md:w-[calc(50%-0.5rem)]">
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
        </div>
    )
}
export default chooseMobionizer;