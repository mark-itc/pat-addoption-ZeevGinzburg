import Navbar from "../components/navbar";
function Dashboard() {
    return(
        <div className="admin-page-dashboard">
                <Navbar/>
        <h2>List of Users</h2>
        <h3>Admins</h3>
        <ul>
          <li>admin 1</li>
          <li>admin 2</li>
        </ul>
        <h3>Owners</h3>
        <ul>
          <li>owner 1</li>
          <li>owner 2</li>
        </ul>
        <h3>Pets</h3>
        <ul>
          <li>pet 1</li>
          <li>pet 2</li>
        </ul>
      </div>
  
    );

}
export default Dashboard;