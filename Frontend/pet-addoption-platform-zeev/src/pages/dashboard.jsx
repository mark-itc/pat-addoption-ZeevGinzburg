import Navbar from "../components/navbar";
import DashboardList from "../components/dashboard-list";

import '../UIkit/pages/page.css';

function Dashboard() {
    return(
        <div className="page dashboard">
                <Navbar/>
        <h2>List of Users</h2>
        <DashboardList listOfWhat = "admins" listHeader="admins"/>
        <DashboardList listOfWhat = "owners"  listHeader="owners"/>
        <h2>List of Pets</h2>
        <DashboardList  listOfWhat = "pets"  listHeader="pets"/>
      </div>
  
    );

}
export default Dashboard;