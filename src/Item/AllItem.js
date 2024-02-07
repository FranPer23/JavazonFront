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

  return (
    <>
      <div className="row">
        {items.map((i) => (
          <ItemOverview {...i} />
        ))}
      </div>
    </>
  );
}
