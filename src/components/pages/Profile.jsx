import React from "react";

function Profile() {
  return (
    <div>
      <form className="form " style={{ height: "450px" }}>
        <div className="mb-3">
          <label htmlFor="inputEmail" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="inputEmailRegister"
          />
        </div>
        <button className="btn btn-primary" >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Profile;
