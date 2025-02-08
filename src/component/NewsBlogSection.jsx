import React from "react";

const NewsBlogSection = () => {
    return(
        <div className="bg-gray-50 py-16 px-6 md:px-16 flex flex-col md:flex-row items-center">

      {/* Left Section */}
      <div className="w-full md:w-1/3">
        <button className="bg-purple-600 text-white px-4 py-2 rounded-md text-sm font-semibold">
          Latest News & Blog
        </button>
        <h2 className="text-3xl font-bold mt-4">Get Our Every Single Update Latest News and Blog</h2>
        <button className="mt-6 border border-purple-600 text-purple-600 px-6 py-2 rounded-md font-semibold flex items-center">
          View More News →
        </button>
      </div>
      
      {/* Right Section - Blog Cards */}
      <div className="w-full md:w-2/3 flex flex-col md:flex-row gap-6 mt-8 md:mt-0">
        {/* Blog Card 1 */}
        <div className="border border-purple-600 rounded-lg p-6 w-full md:w-1/2 bg-white shadow-md">
          <p className="text-sm text-gray-500 flex items-center gap-2">
            📅 25 March 2022 &nbsp; 💬 Com(5)
          </p>
          <h3 className="font-bold text-lg mt-2">Enterprise level android device management solutions</h3>
          <p className="text-gray-600 mt-2 text-sm">
            An Android MDM solution is a mobile device management software that allows IT administrators to enroll, manage, con...
          </p>
          <a href="#" className="text-purple-600 font-semibold mt-4 block">Read More →</a>
        </div>

        {/* Blog Card 2 */}
        <div className="rounded-lg p-6 w-full md:w-1/2 bg-white shadow-md">
          <p className="text-sm text-gray-500 flex items-center gap-2">
            📅 25 March 2022 &nbsp; 💬 Com(5)
          </p>
          <h3 className="font-bold text-lg mt-2">It’s Time to Incorporate Mobile Device Management Solution</h3>
          <p className="text-gray-600 mt-2 text-sm">
            Ever wonder why each year organizations who has medium to large sales or field force has to bear a substantial amount of...
          </p>
          <a href="#" className="text-purple-600 font-semibold mt-4 block">Read More →</a>
        </div>
      </div>
    </div>

    )
}
export default NewsBlogSection;