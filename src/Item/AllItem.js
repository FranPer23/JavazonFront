import axios from "axios";
import { useEffect, useState, useRef } from "react";
import ItemOverview from "./ItemOverview";

export default function AllItem(props) {
  const [items, setItems] = useState([]);

  const [flicker, setFlicker] = useState(false);

  const [minPr, setMin] = useState(1);
  const [maxPr, setMax] = useState(100);
  const nomIn = useRef(null);
  const minIn = useRef(null);
  const maxIn = useRef(null);

  useEffect(() => {
    axios.get("/items").then((response) => {
      setItems(response.data);
    });
  }, []);

  function deleteItem(id) {
    axios
      .delete("/items/" + id)
      .then(() => {
        let clone = [...items];
        let pos = clone.findIndex((i) => i.id == id);
        clone.splice(pos, 1);
        setItems(clone);
      })
      .catch(() => {
        alert("Non è possibile eliminare prodotti con recensioni");
      });
  }

  function isShowable(i, nom, minPrice, maxPrice) {
    if (nom && !i.name.toLowerCase().includes(nom.toLowerCase())) return false;

    if (i.price < minPrice || i.price > maxPrice) return false;

    return true;
  }

  return (
    <>
      <div className="row gy-5">
        <div className="col-3 p-4">
          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">
              Nominativo
            </span>
            <input
              type="text"
              ref={nomIn}
              class="form-control"
              onChange={() => setFlicker(!flicker)}
            />
          </div>
          <label for="customRange1" class="form-label">
            Prezzo min {minPr}
          </label>
          <input
            type="range"
            ref={minIn}
            min={1}
            max={100}
            defaultValue={1}
            class="form-range"
            id="customRange1"
            onChange={(e) => setMin(e.target.value)}
          />
          <label for="customRange1" class="form-label">
            Prezzo max {maxPr}
          </label>
          <input
            type="range"
            ref={maxIn}
            min={1}
            max={100}
            class="form-range"
            id="customRange1"
            onChange={(e) => setMax(e.target.value)}
          />
          <br />
          <br />
        </div>
      </div>

      <div className="row">
        {items
          .filter((p) =>
            isShowable(
              p,
              nomIn.current.value,
              minIn.current.value,
              maxIn.current.value
            )
          )
          .map((i) => (
            <ItemOverview {...i} deleteMe={deleteItem} />
          ))}
      </div>
    </>
  );
}
