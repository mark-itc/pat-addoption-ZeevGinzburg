import Navbar from "../components/navbar";

function AddPet() {
    return(
    <div className="admin-page-adding-pets">
      <Navbar/>
      <form className="form-for-adding-pets">
        <h2>New Pet Details</h2>
            <label name="type" >Pet's Type</label>
            <input type="text" name="type" placeholder="insert type of animal"></input>
            <label name="name" >Pet's Name</label>
            <input type="text" name="name" placeholder="Bobby.."></input>
            <label name="status" >Adoption Status</label>
            <input type="text" name="status" placeholder="Adoption Status - Foster / Adopted / Waitnig to adoption.."></input>
            <p>How to add a picture??</p>
            <label name="height" >Pet's Height</label>
            <input type="number" name="height" placeholder="Height in cm"></input>
            <label name="weight" >Pet's Weight</label>
            <input type="number" name="weight" placeholder="Weight in Kg"></input>
            <button>Add Pet!</button>
          </form>
        </div>
    );
}
export default AddPet;