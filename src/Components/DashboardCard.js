import React from 'react';

const MediaDashboard = () => {
  return (
    <div className="bg-bg min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <header className="max-w-7xl mx-auto mb-12">
        <div className="flex justify-between items-center">
          <div className="title-container">
            <h1 className="text-text-secondary text-2xl font-bold">Social Media Dashboard</h1>
            <p className="text-text">Total Followers: 23,004</p>
          </div>
          <div className="toggle-container">
            <label htmlFor="dark" className="text-text">Dark Mode</label>
            <input type="checkbox" id="dark" className="hidden" />
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto">
        {/* Your main content here */}
      </main>
    </div>
  );
}

export default MediaDashboard;
