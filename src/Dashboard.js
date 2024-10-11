import { Link } from "react-router-dom";
import "./output.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Calculator from "./Calculator";

// flex flex-row justify-between items-center mb-4

const Dashboard = () => {
  return (
    <div className="p-6 h-screen bg-gray-200">
      <header className="flex justify-between items-center mb-4 ">
        <h1 className="text-xl font-bold">Dashboard</h1>
        <div className="  ">
          <button className="bg-gray-200    font-bold content-center px-4 py-2">
            Create course
          </button>
          <button className="bg-gray-200   font-bold  rounded px-4 py-2">
            Preview home page
          </button>
          <button className="bg-gray-200   font-bold  rounded px-4 py-2">
            Preview after login page
          </button>
          <button className="bg-gray-200   font-bold  rounded px-4 py-2">
            View welcome screen
          </button>
          <Link to={"/calculator"} >
          <button className="bg-teal-500  text-white rounded-full font-bold   px-4 py-2">
            Mutal Funds Calculator
          </button>
          </Link>
        </div>
        <div className="w-1"></div>
        <button className="text-teal-500 font-bold text-xl">
          <i className="fas fa-question-circle"></i> Help
        </button>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="col-span-2 bg-white p-4 rounded shadow">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold">Your school</h2>
            <div className="flex space-x-4">
              <button className="text-teal-500 border-b-2 border-teal-500">
                New signups
              </button>
              <button className="text-gray-500">Revenue</button>
              <button className="text-gray-500">Product sales</button>
              <button className="text-gray-500">Active learners</button>
              <select className="text-gray-500 bg-gray-200 border border-white rounded-full px-2 py-1">
                <option>Last 7 days</option>
              </select>
            </div>
          </div>
          <div className="h-40 bg-gray-100 rounded flex items-center justify-center">
            <span className="text-gray-500">Graph Placeholder</span>
          </div>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-bold mb-4">
            New users{" "}
            <span className="text-white  cursor-pointer px-3 rounded-full bg-teal-500">see all</span>
          </h2>
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <i className="fas fa-user text-gray-500"></i>
            </div>
            <div>
              <p className="font-medium">hubx</p>
              <p className="text-gray-500 text-sm">24 minutes</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-bold mb-4">
            How to sell courses blog{" "}
            <span className="px-3 rounded-full bg-teal-500 text-white cursor-pointer">see all</span>
          </h2>
          <ul className="space-y-2">
            <li className="flex justify-between">
              <a href="/" className="text-teal-500">
                Blended Learning: What It Is, Why It Matters & How to Apply
              </a>
              <span className="text-gray-500 text-sm">7 days ago</span>
            </li>
            <li className="flex justify-between">
              <a href="/" className="text-teal-500">
                Join the Course Sales Bootcamp [Free Live Workshops]
              </a>
              <span className="text-gray-500 text-sm">12 days ago</span>
            </li>
            <li className="flex justify-between">
              <a href="/" className="text-teal-500">
                12 Steps to Creating Awesome Live Classes in 2021
              </a>
              <span className="text-gray-500 text-sm">20 days ago</span>
            </li>
            <li className="flex justify-between">
              <a href="/" className="text-teal-500">
                Guy Kawasaki on the Future of Business in the Midst of a
                Pandemic
              </a>
              <span className="text-gray-500 text-sm">22 days ago</span>
            </li>
            <li className="flex justify-between">
              <a href="/" className="text-teal-500">
                What is Educational Marketing & How to Use it to Grow with
                Examples
              </a>
              <span className="text-gray-500 text-sm">23 days ago</span>
            </li>
          </ul>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-bold mb-4">
            Events Log{" "}
            <span className="px-3 rounded-full bg-teal-500 text-white cursor-pointer">see all</span>
          </h2>
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <i className="fas fa-user text-gray-500"></i>
            </div>
            <div>
              <p className="font-medium">hubx</p>
              <p className="text-gray-500 text-sm">
                Logged in{" "}
                <span className="text-teal-500 cursor-pointer">more info</span>
              </p>
            </div>
            <p className="text-gray-500 text-sm ml-auto">22 minutes</p>
          </div>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-bold mb-4">Trial period</h2>
          <div className="flex items-center justify-between ">
            <div className="flex items-center space-x-2">
              <div className="  w-32 h-32 bg-teal-500  text-white border-black text-center py-8 rounded-full   shadow-2xl">
                <div className="w-full">
                <span className=" text-xl font-bold">30 </span>
                </div>
              <div >
                <span className=" text-xl font-bold">DAYS LEFT </span>
              </div>
              </div>
            </div>
            <button className=" bg-pink-500 text-sm align-bottom text-white rounded-full  px-4 py-2">
              Upgrade now!
            </button>
          </div>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-bold mb-4">Online users (1)</h2>
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <i className="fas fa-user text-gray-500"></i>
            </div>
            <div>
              <p className="font-medium">hubx</p>
              <p className="text-gray-500 text-sm">contact</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
