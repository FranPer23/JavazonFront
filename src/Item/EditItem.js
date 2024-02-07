import { useState } from "react";
import axios from "axios";

const EditItem = (props) => {
  const [itemEdit, setItemEdit] = useState(props.item);

  function synchronize(e) {
    let clone = { ...itemEdit };
    clone[e.target.name] = e.target.value;
    setItemEdit(clone);
  }

  function sendForm() {
    axios.put(`/Item/${itemEdit.id}`, itemEdit).then((response) => {
      props.editItem(response.data);
      props.annulla();
    });
  }

  return (
    <>
      <div className="container my-2">
        <div className="card ">
          <label>Image</label>

          <img
            src={itemEdit.img_url}
            className="card-img-top object-fit-contain"
            alt="img Item"
            onChange={synchronize}
          />
          <div className="card-body">
            <div className="input-group mb-3">
              <form>
                <label>Name</label>

                <input
                  name="description"
                  type="text"
                  className="form-control"
                  value={itemEdit.description}
                  onChange={synchronize}
                ></input>
                <label>Surame</label>

                <input
                  name="available"
                  type="text"
                  className="form-control"
                  value={itemEdit.available}
                  onChange={synchronize}
                ></input>
                <label>price</label>

                <input
                  name="price"
                  type="number"
                  className="form-control"
                  value={itemEdit.price}
                  onChange={synchronize}
                ></input>
                <label>producedBy</label>

                <input
                  name="producedBy"
                  type="text"
                  className="form-control"
                  value={itemEdit.producedBy}
                  onChange={synchronize}
                ></input>
                <label>Date of Birth</label>

                <input
                  name="madeIn"
                  type="date"
                  className="form-control"
                  value={itemEdit.madeIn}
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
                  onClick={itemEdit.annulla}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditItem;
