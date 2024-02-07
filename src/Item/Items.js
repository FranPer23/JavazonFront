import { useEffect, useState } from "react";
import axios from "axios";
import OneItem from "./OneItem";

import EditItem from "./EditItem";

const Items = (props) => {
  const [items, setItems] = useState([]);

  const [indexToEdit, setIndex] = useState(-1);
  const [itemsToShow, setItemsToShow] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  //init()
  useEffect(() => {
    axios.get("/items").then((response) => {
      setItems(response.data);
      setItemsToShow(response.data);
    });
  }, []);

  function editItem(it) {
    let clone = [...items];
    let pos = clone.findIndex((i) => i.id == it.id);
    clone[pos] = it;
    setItems(clone);
    setItemsToShow(clone);
  }

  function deleteItem(id) {
    let clone = [...items];
    let pos = clone.findIndex((i) => i.id == id);
    axios.delete(`/items/${id}`);
    clone.splice(pos, 1); //rimuove, a partire dall'indice ind, 1 elemento
    setItems(clone);
    setItemsToShow(clone);
    setSearchKey("");
  }

  function ItemEditatoSecondoLaPosizione(ind) {
    setIndex(ind);
  }

  function annullaModifiche() {
    setIndex(-1);
  }

  function filterItems(e) {
    let key = e.target.value;
    setSearchKey(key);
    filterItemByKey(key);
  }

  function filterItemByKey(key) {
    if (key || key === "")
      setItemsToShow(
        Items.filter((it) =>
          it.name.toLowerCase().includes(searchKey.toLowerCase())
        )
      );
    else
      setItemsToShow(
        Items.filter((it) => it.name.toLowerCase().includes(key.toLowerCase()))
      );
  }

  function clearFilter() {
    setItemsToShow(Items);
    setSearchKey("");
  }

  return (
    <>
      {/* BARRA DI RICERCA */}
      <div className="container-search mb-3 d-flex justify-content-center">
        <div className="input-group mb-3 " style={{ width: "50%" }}>
          <input
            value={searchKey}
            onChange={filterItems}
            type="text"
            className="form-control"
            placeholder="Cerca per nome articolo"
            aria-label="name"
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
          {itemsToShow.map((it, i) =>
            i === indexToEdit ? (
              <EditItem
                key={it.id}
                editItem={editItem}
                annulla={annullaModifiche}
                item={it}
              />
            ) : (
              <OneItem
                key={it.id}
                item={it}
                index={i}
                update={ItemEditatoSecondoLaPosizione}
                delete={deleteItem}
              />
            )
          )}
        </div>
      </div>
      {/* FINE LISTA IMPIEAGTI DA MOSTRARE */}
    </>
  );
};

export default Items;
