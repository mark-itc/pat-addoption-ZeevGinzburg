import Navbar from "../components/navbar";
import DashboardList from "../components/dashboard-list";

import '../UIkit/pages/page.css';

function Dashboard() {
    return(
        <div className="page dashboard">
                <Navbar/>
        <h2>List of Users</h2>
        <DashboardList listOfWhat = "admins"/>
        <DashboardList listOfWhat = "owners"/>
        <h2>List of Pets</h2>
        <DashboardList  listOfWhat = "pets"/>
      </div>
  
    );

}
export default Dashboard;