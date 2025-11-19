import React from "react";

const MeetingScheduler: React.FC = () => {
  const handleOpenMeeting = () => {
    window.open(
      "https://app.usemotion.com/meet/rohit-purohit/meet",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div className="max-w-md mx-auto mt-12 p-8 rounded-2xl shadow-2xl bg-white border border-gray-200 text-gray-800">
      <h2 className="text-3xl font-bold mb-6 text-center" style={{color: '#e53e3e'}}>
        Book Your Consultation
      </h2>

      <div className="text-center space-y-1">
        <p className="font-medium text-lg">Meeting with <span style={{color: '#e53e3e'}}>Rohit Purohit</span></p>
        <p className="text-sm text-gray-600">Managing Director, ARKSimplific Pvt Ltd</p>
        <p className="text-sm text-gray-600">🕒 30–60 minutes consultation</p>
        <p className="text-sm text-gray-600">📁 Construction Estimating & Project Management</p>
      </div>

      <div className="text-center mt-8">
        <button
          onClick={handleOpenMeeting}
          className="text-white font-semibold py-3 px-8 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg inline-flex items-center gap-2 hover:-translate-y-0.5"
          style={{
            background: 'linear-gradient(135deg, #e53e3e, #ff6b35)'
          }}
        >
          📅 Schedule Meeting
        </button>
      </div>

      <div className="mt-8 border-t pt-4 text-center text-sm">
        <p className="font-semibold text-gray-600 mb-2">Other Ways to Connect:</p>
        <div className="flex flex-col items-center gap-1">
          <a href="tel:+918668457181" className="flex items-center gap-2 hover:underline" style={{color: '#e53e3e'}}>
            📞 +91 8668457181
          </a>
          <a
            href="mailto:contact@arksimplific.com"
            className="flex items-center gap-2 hover:underline"
            style={{color: '#e53e3e'}}
          >
            ✉️ contact@arksimplific.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default MeetingScheduler;