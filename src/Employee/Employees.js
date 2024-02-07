import { useEffect, useState } from "react";
import axios from "axios";
import OneEmployee from "./OneEmployee";

import EditEmployee from "./EditEmployee";

const Employees = (props) => {
  const [employees, setEmployees] = useState([]);

  const [indexToEdit, setIndex] = useState(-1);
  const [employeesToShow, setEmployeesToShow] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  //init()
  useEffect(() => {
    axios.get("/employee").then((response) => {
      setEmployees(response.data);
      setEmployeesToShow(response.data);
    });
  }, []);

  function editEmployee(empl) {
    let clone = [...employees];
    let pos = clone.findIndex((e) => e.id == empl.id);
    clone[pos] = empl;
    setEmployees(clone);
    setEmployeesToShow(clone);
  }

  function deleteEmployee(id) {
    let clone = [...employees];
    let pos = clone.findIndex((e) => e.id == id);
    axios.delete(`/employee/${id}`);
    clone.splice(pos, 1); //rimuove, a partire dall'indice ind, 1 elemento
    setEmployees(clone);
    setEmployeesToShow(clone);
    setSearchKey("");
  }

  function employeeEditatoSecondoLaPosizione(ind) {
    setIndex(ind);
  }

  function annullaModifiche() {
    setIndex(-1);
  }

  function filterEmployees(e) {
    let key = e.target.value;
    setSearchKey(key);
    filterEmployeeByKey(key);
  }

  function filterEmployeeByKey(key) {
    if (key || key === "")
      setEmployeesToShow(
        employees.filter(
          (em) =>
            em.name.toLowerCase().includes(searchKey.toLowerCase()) ||
            em.surname.toLowerCase().includes(searchKey.toLowerCase())
        )
      );
    else
      setEmployeesToShow(
        employees.filter(
          (em) =>
            em.name.toLowerCase().includes(key.toLowerCase()) ||
            em.surname.toLowerCase().includes(key.toLowerCase())
        )
      );
  }

  function clearFilter() {
    setEmployeesToShow(employees);
    setSearchKey("");
  }

  return (
    <>
      {/* BARRA DI RICERCA */}
      <div className="container-search mb-3 d-flex justify-content-center">
        <div className="input-group mb-3 " style={{ width: "50%" }}>
          <input
            value={searchKey}
            onChange={filterEmployees}
            type="text"
            className="form-control"
            placeholder="Cerca per Nome e Cognome"
            aria-label="name surname"
            aria-describedby="button-addon2"
          />
          <button
            onClick={clearFilter}
            className="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
          >
            x
          </button>
        </div>
      </div>
      {/* FINE BARRA DI RICERCA */}

      {/* LISTA IMPIEAGTI DA MOSTRARE */}
      <div className="container">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {employeesToShow.map((empl, i) =>
            i === indexToEdit ? (
              <EditEmployee
                key={empl.id}
                editEmployee={editEmployee}
                annullaModifiche={annullaModifiche}
                employee={empl}
              />
            ) : (
              <OneEmployee
                key={empl.id}
                employee={empl}
                index={i}
                update={employeeEditatoSecondoLaPosizione}
                delete={deleteEmployee}
              />
            )
          )}
        </div>
      </div>
      {/* FINE LISTA IMPIEAGTI DA MOSTRARE */}
    </>
  );
};

export default Employees;
