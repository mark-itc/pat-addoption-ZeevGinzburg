import Navbar from "../components/navbar";
import DashboardList from "../components/dashboard-list";

function Dashboard() {
    return(
        <div className="admin-page-dashboard">
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