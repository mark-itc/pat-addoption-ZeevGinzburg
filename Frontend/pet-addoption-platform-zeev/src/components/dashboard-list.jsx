const temopraryAdminsArray = ["Yoni", "Doron", "Meirav"];
const temopraryOwnersArray = ["Zeev", "Assaf", "Yasmin"];
const temopraryPetsArray = ["Lassi", "Bamba", "dudu"];

function DashboardList(props) {
    const { listOfWhat, listHeader } = props;

    // need to change it to more elegant - arrow function 
    let listForDashboard;
    // let listHeader;
    
    if ( listOfWhat === "admins") {
        listForDashboard = temopraryAdminsArray;
        }
    else if ( listOfWhat === "owners") {
        listForDashboard = temopraryOwnersArray;
        }
    else if ( listOfWhat === "pets") {
        listForDashboard = temopraryPetsArray;
        }

    return(
        <div>
            <h3>{listHeader}</h3>
            <ul>
                <li>{listForDashboard[0]}</li>
                <li>{listForDashboard[1]}</li>
                <li>{listForDashboard[2]}</li>
            </ul>
      </div>
  
    );

}
export default DashboardList;