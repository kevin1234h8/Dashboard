import React from "react";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import SearchIcon from "@mui/icons-material/Search";
import DashboardChart from "./DashboardChart";
const Dashboard = ({ handleOpenBar }) => {
  // const [search, setSearch] = useState(false);
  return (
    <div className="flex flex-col justify-between p-8">
      <div className="flex items-center justify-between">
        <div className="text-xl">
          <span className="text-slate-500">Dashboard </span>/ Sales Dashboard
        </div>
        <div className="flex items-center">
          <div className="flex bg-slate-300  p-4 rounded-lg">
            <BookmarkIcon
              onClick={handleOpenBar}
              className="bg-gradient-to-r from"
            />
            <div className="lg:hidden ml-4 duration-200">Today</div>
          </div>
        </div>
      </div>

      <DashboardChart />
    </div>
  );
};

export default Dashboard;
