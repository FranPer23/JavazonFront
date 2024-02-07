import { useState } from "react";
import axios from "axios";

const EditEmployee = (props) => {
  const [empEdit, setEmpEdit] = useState(props.employee);

  function synchronize(e) {
    let clone = { ...empEdit };
    clone[e.target.name] = e.target.value;
    setEmpEdit(clone);
  }

  function sendForm() {
    axios.put(`/employee/${empEdit.id}`, empEdit).then((response) => {
      props.editEmployee(response.data);
      props.annulla();
    });
  }

  return (
    <>
      <div className="container my-2">
        <div className="card ">
          <label>Image</label>

          <img
            src={empEdit.imgUrl}
            className="card-img-top object-fit-contain"
            alt="img employee"
            onChange={synchronize}
          />
          <div className="card-body">
            <div className="input-group mb-3">
              <form>
                <label>Name</label>

                <input
                  name="name"
                  type="text"
                  className="form-control"
                  value={empEdit.name}
                  onChange={synchronize}
                ></input>
                <label>Surame</label>

                <input
                  name="surname"
                  type="text"
                  className="form-control"
                  value={empEdit.surname}
                  onChange={synchronize}
                ></input>
                <label>Address</label>

                <input
                  name="address"
                  type="text"
                  className="form-control"
                  value={empEdit.address}
                  onChange={synchronize}
                ></input>
                <label>Role</label>

                <input
                  name="role"
                  type="text"
                  className="form-control"
                  value={empEdit.role}
                  onChange={synchronize}
                ></input>
                <label>Date of Birth</label>

                <input
                  name="dob"
                  type="date"
                  className="form-control"
                  value={empEdit.dob}
                  onChange={synchronize}
                ></input>
                <label>Hired on</label>

                <input
                  name="hiredOn"
                  type="date"
                  className="input-group-text"
                  value={empEdit.hiredOn}
                  onChange={synchronize}
                ></input>
                <label>Security level n.</label>

                <input
                  name="securityLevel"
                  type="number"
                  className="input-group-text"
                  value={empEdit.securityLevel}
                  onChange={synchronize}
                ></input>
                <label>Salary</label>

                <input
                  name="salary"
                  type="number"
                  className="input-group-text"
                  value={empEdit.salary}
                  onChange={synchronize}
                ></input>

                <input
                  className="btn btn-primary"
                  type="button"
                  value="Salva"
                  onClick={sendForm}
                />
                <input
                  className="btn btn-warning"
                  type="button"
                  value="Annulla"
                  onClick={empEdit.annulla}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditEmployee;
