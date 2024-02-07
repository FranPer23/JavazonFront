import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function ReviewOverview(props) {
  const [tempRev, setTempRev] = useState(props.rev);

  function synchronize(e) {
    setTempRev({ ...tempRev, [e.target.name]: e.target.value });
  }

  if (!props.isUpdating)
    return (
      <>
        <div className="p-3">
          <div className="card" style={{ width: "20rem" }}>
            <div className="card-body">
              <h5 className="card-title">{props.rev.sender}</h5>

              <FontAwesomeIcon icon={faStar} style={{ color: "#f4ed47" }} />
              {props.rev.score}
              <h6 className="card-subtitle mb-2 text-muted">
                Made in: {props.rev.date}
              </h6>

              <button
                className="btn btn-danger"
                onClick={() => props.delete(props.rev)}
              >
                DELETE
              </button>
              <button
                className="btn btn-warning ms-2"
                onClick={() => props.setUpdatable(props.rev, true)}
              >
                EDIT
              </button>
            </div>
          </div>
        </div>
      </>
    );
  else
    return (
      <>
        <div className="col-4 d-flex justify-content-center text-center">
          <div className="card" style={{ width: "20rem" }}>
            <div className="card-body">
              <div className="input-group mb-3 card-title">
                <span className="input-group-text">Sender</span>
                <input
                  type="text"
                  className="form-control"
                  name="sender"
                  value={tempRev.sender}
                  onChange={synchronize}
                />
              </div>
              <div className="input-group mb-3 card-title">
                <span className="input-group-text">Score</span>
                <input
                  type="number"
                  className="form-control"
                  name="score"
                  value={tempRev.score}
                  onChange={synchronize}
                />
              </div>
              <div className="input-group mb-3 card-title">
                <span className="input-group-text">Pubblicata il:</span>
                <input
                  type="date"
                  className="form-control"
                  name="date"
                  value={tempRev.date}
                  onChange={synchronize}
                />
              </div>

              <div>
                <button
                  className="btn btn-danger"
                  onClick={() => props.setUpdatable(props.rev, false)}
                >
                  CANCEL
                </button>
                <button
                  className="btn btn-success ms-2"
                  onClick={() => props.update(tempRev)}
                >
                  SAVE
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}
