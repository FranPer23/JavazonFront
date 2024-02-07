import axios from "axios";
import { useEffect, useState } from "react";
import ItemOverview from "./ItemOverview";

export default function AllItem(props) {
  const [items, setItems] = useState([]);

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
        alert("No, ha dei figli, chi penserà ai bambini");
      });
  }

  return (
    <>
      <div className="row">
        {items.map((i) => (
          <ItemOverview {...i} deleteMe={deleteItem} />
        ))}
      </div>
    </>
  );
}
