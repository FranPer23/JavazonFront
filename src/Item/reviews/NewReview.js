import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function NewReview(props) {
  const [tempRev, setTempRev] = useState({
    sender: "",
    score: "",
    date: "",
  });

  function synchronize(e) {
    setTempRev({ ...tempRev, [e.target.name]: e.target.value });
  }

  function clear() {
    setTempRev({
      sender: "",
      score: "",
      date: "",
    });
  }

  function insert() {
    props.insert(tempRev);
    clear();
  }

  return (
    <>
      <div className="d-flex justify-content-center text-center">
        <div class="card">
          <div class="card-body">
            <div class="input-group mb-3 card-title">
              <span class="input-group-text">Sender</span>
              <input
                type="text"
                class="form-control"
                name="sender"
                value={tempRev.sender}
                onChange={synchronize}
              />
            </div>
            <div class="input-group mb-3 card-title">
              <span class="input-group-text">Score</span>
              <input
                type="text"
                class="form-control"
                name="score"
                value={tempRev.score}
                onChange={synchronize}
              />
            </div>
            <div class="input-group mb-3 card-title">
              <span class="input-group-text">Date</span>
              <input
                type="date"
                class="form-control"
                name="date"
                value={tempRev.date}
                onChange={synchronize}
              />
            </div>
            <div>
              <FontAwesomeIcon
                className="btn btn-danger me-4"
                onClick={clear}
                icon={faTrash}
              />
              <FontAwesomeIcon
                className="btn btn-success "
                onClick={insert}
                icon={faCheck}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
