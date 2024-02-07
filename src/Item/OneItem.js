const OneItem = (props) => {
  function edieItem() {
    props.update(props.index);
  }

  function deleteItem() {
    props.delete(props.item.id);
  }

  return (
    <>
      <div className="container my-2">
        <div className="card ">
          <img
            src={props.item.imgUrl}
            className="card-img-top object-fit-contain"
            alt="imgeItem"
          />
          <div className="card-body">
            <h5 className="card-title">{props.item.name}</h5>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">{props.item.description}</li>
              <li className="list-group-item">{props.item.price}</li>
              <li className="list-group-item">{props.item.producedBy}</li>
              <li className="list-group-item">{props.item.madeIn}</li>
            </ul>
            <button
              type="button"
              className="btn btn-primary"
              onClick={edieItem}
            >
              EDIT
            </button>

            <button
              type="button"
              className="btn btn-danger"
              onClick={deleteItem}
            >
              DELETE
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default OneItem;
