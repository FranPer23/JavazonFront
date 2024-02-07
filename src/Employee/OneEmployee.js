const OneEmployee = (props) => {
  function editEmployee() {
    props.update(props.index);
  }

  function deleteEmployee() {
    props.delete(props.employee.id);
  }

  return (
    <>
      <div className="container my-2">
        <div className="card ">
          <img
            src={props.employee.imgUrl}
            className="card-img-top object-fit-contain"
            alt="img employee"
          />
          <div className="card-body">
            <h5 className="card-title">
              {props.employee.name} {props.employee.surname}
            </h5>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">{props.employee.address}</li>
              <li className="list-group-item">{props.employee.role}</li>
              <li className="list-group-item">{props.employee.dob}</li>
              <li className="list-group-item">{props.employee.hiredOn}</li>
              <li className="list-group-item">
                {props.employee.securityLevel}
              </li>
              <li className="list-group-item">{props.employee.salary}</li>
            </ul>
            <button
              type="button"
              className="btn btn-outline-warning"
              onClick={editEmployee}
            >
              EDIT
            </button>
            <button className="btn btn-outline-danger" onClick={deleteEmployee}>
              DELETE
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default OneEmployee;
