import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReviewOverview from "./reviews/ReviewsOverview";

export default function ItemDetail(props) {
  let { id } = useParams(); //vado a prendere dall'url la path variable id
  const [item, setItem] = useState({});
  const [updating, setUpdating] = useState(false);
  const [updatableMap, setUpdatableMap] = useState({});

  useEffect(() => {
    axios.get("/items/" + id).then((response) => {
      setItem(response.data);
      let mappa = {};
      if (response.data.reviews)
        for (let rev of response.data.reviews) mappa[rev.id] = false;

      setUpdatableMap(mappa);
    });
  }, []);

  function addReview(rev) {
    rev.item_id = id;
    axios.post("/items", rev).then((response) => {
      let clone = { ...item };
      clone.documents.push(response);
      setItem(clone);
    });
  }
  function deleteReview(rev) {
    axios.delete("/reviews/" + rev.id).then(() => {
      let clone = { ...item };
      let pos = clone.reviews.findIndex((r) => r.id == rev.id);
      clone.reviews.splice(pos, 1);
      setItem(clone);
    });
  }
  function updateReview(rev) {
    rev.item_id = item.id;
    axios.put("/reviews/" + rev.id, rev).then((response) => {
      let clone = { ...item };
      let pos = clone.reviews.findIndex((r) => r.id == rev.id);
      clone.reviews[pos] = response.data;
      setItem(clone);
      setUpdatable(response.data, false);
    });
  }
  function setUpdatable(rev, value) {
    let clone = { ...updatableMap };
    clone[rev.id] = value;
    setUpdatableMap(clone);
  }

  function save() {
    axios.put("/items/" + id, item).then(() => setUpdating(false));
  }

  function synchronize(e) {
    setItem({ ...item, [e.target.name]: e.target.value });
  }

  let readOnlyCard = (
    <div
      className="card sticky-top d-flex align-items-center pb-3"
      style={{ top: "100px" }}
    >
      <div className="card-body">
        <h4 className="card-subtitle mb-2 ">Price: {item.price}</h4>
        <h4 className="card-subtitle mb-2 ">
          prodotto: {item.producedBy} made in: {item.madeBy}{" "}
        </h4>
        <img
          src={item.img_url}
          alt="immagine"
          style={{ height: "200px", objectFit: "contain" }}
        />
      </div>
      <button className="btn btn-primary" onClick={() => setUpdating(true)}>
        Update
      </button>
    </div>
  );

  let updatableCard = (
    <div className="card sticky-top" style={{ top: "100px" }}>
      <div className="card-body">
        <div className="input-group mb-3 card-title">
          <span className="input-group-text">Name</span>
          <input
            type="text"
            className="form-control"
            value={item.name}
            name="name"
            onChange={synchronize}
          />
        </div>
        <div className="input-group mb-3 card-title">
          <span className="input-group-text">Description</span>
          <input
            type="text"
            className="form-control"
            value={item.description}
            name="description"
            onChange={synchronize}
          />
        </div>
        <div className="input-group mb-3 card-title">
          <span className="input-group-text">Price</span>
          <input
            type="number"
            min={0}
            max={5}
            className="form-control"
            value={item.price}
            name="price"
            onChange={synchronize}
          />
        </div>
        <div className="input-group mb-3 card-title">
          <span className="input-group-text">producedBy</span>
          <input
            type="text"
            className="form-control"
            value={item.producedBy}
            name="producedBy"
            onChange={synchronize}
          />
        </div>
        <div className="input-group mb-3 card-title">
          <span className="input-group-text">madeBy</span>
          <input
            type="text"
            className="form-control"
            value={item.madeBy}
            name="madeBy"
            onChange={synchronize}
          />
        </div>
        <div className="input-group mb-3 card-title">
          <span className="input-group-text">
            Available
            <input
              type="checkbox"
              className="form-check-input ms-2"
              checked={item.available}
              name="available"
              onChange={synchronize}
            />
          </span>
        </div>
      </div>
      <div className="p-3">
        <button className="btn btn-warning" onClick={() => setUpdating(false)}>
          Cancel
        </button>
        <button className="btn btn-success float-end" onClick={save}>
          Save
        </button>
      </div>
    </div>
  );

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="m-3">
            <h2>Dettagli prodotto:</h2>
          </div>

          <div className="col-4 ">
            {!updating && readOnlyCard}
            {updating && updatableCard}
          </div>
          <div className="col-8 bg-light ">
            <h4 className="text-center mt-3">Recensioni</h4>
            <div className="container_reviews d-flex flex-wrap ">
              {item.reviews != null &&
                item.reviews.map((r) => (
                  <ReviewOverview
                    update={updateReview}
                    setUpdatable={setUpdatable}
                    isUpdating={updatableMap[r.id]}
                    key={r.id}
                    rev={r}
                    delete={deleteReview}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
