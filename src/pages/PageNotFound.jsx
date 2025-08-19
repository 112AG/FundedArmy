import React from "react";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#02040E] text-center px-4">
      {/* Logo / Branding */}
      <h1 className="text-6xl font-extrabold text-[#00FF66] mb-4">
        404
      </h1>
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
        Oops! Page Not Found
      </h2>
      <p className="text-gray-300 max-w-lg mb-8">
        The page you’re looking for doesn’t exist or has been moved.  
        But don’t worry, you can always go back to safety.
      </p>

      {/* Styled Button */}
      <Link
        to="/"
        className="px-8 py-3 text-lg font-bold text-[#00FF66] border-2 border-[#00FF66] rounded-lg hover:bg-[#00FF66] hover:text-black transition-colors"
      >
        GO BACK HOME
      </Link>

      {/* Extra UI Touch */}
      {/* <div className="mt-10 flex gap-6">
        <div className="px-4 py-2 border border-gray-600 rounded-md text-gray-300">
          🚀 World Class Learning
        </div>
        <div className="px-4 py-2 border border-gray-600 rounded-md text-gray-300">
          💡 Expert Mentorship
        </div>
      </div> */}
    </div>
  );
}

export default PageNotFound;
