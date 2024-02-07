import { useState } from "react";
import axios from "axios";

const EmployeeForm = (props) => {
  // private Integer name;
  // private String name, surname, address, role, imgUrl;
  // private LocalDate dob, hiredOn;
  // private int securityLevel, salary;

  const [employee, setEmployee] = useState({
    name: "",
    surname: "",
    address: "",
    role: "",
    imgUrl: "",
    dob: "",
    hiredOn: "",
    securityLevel: "",
    salary: "",
  });

  function sendForm() {
    axios.post("/employee/" + employee.id, employee).then((response) => {
      setEmployee({
        name: "",
        surname: "",
        address: "",
        role: "",
        imgUrl: "",
        dob: "",
        hiredOn: "",
        securityLevel: "",
        salary: "",
      });
    });
  }

  function synchronize(e) {
    let clone = { ...employee };
    clone[e.target.name] = e.target.value;
    setEmployee(clone);
  }

  return (
    <>
      <div className="container">
        <form>
          <div className="mb-3">
            <label>Immagine</label>
            <input
              name="imgUrl"
              className="form-control "
              type="text"
              value={employee.imgUrl}
              onChange={synchronize}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Surname</label>
            <input
              type="text"
              className="form-control"
              name="surname"
              value={employee.surname}
              onChange={synchronize}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={employee.name}
              onChange={synchronize}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Address</label>
            <input
              type="text"
              className="form-control"
              name="address"
              value={employee.address}
              onChange={synchronize}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Role</label>
            <input
              type="text"
              className="form-control"
              name="role"
              value={employee.role}
              onChange={synchronize}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Date of birth:</label>
            <input
              type="date"
              className="form-control"
              name="dob"
              value={employee.dob}
              onChange={synchronize}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Hired On</label>
            <input
              type="date"
              className="form-control"
              name="hiredOn"
              value={employee.hiredOn}
              onChange={synchronize}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Security Level</label>
            <input
              type="number"
              className="form-control"
              name="securityLevel"
              value={employee.securityLevel}
              onChange={synchronize}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Salary</label>
            <input
              type="number"
              className="form-control"
              name="salary"
              value={employee.salary}
              onChange={synchronize}
            />
          </div>

          <button
            type="button"
            className="btn btn-primary"
            value="Save"
            onClick={sendForm}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default EmployeeForm;
