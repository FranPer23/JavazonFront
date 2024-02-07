import { Link } from "react-router-dom";

export default function ItemOverview({
  id,
  name,
  description,
  price,
  img_url,
}) {
  return (
    <>
      <div className="col-3 d-flex justify-content-center text-center mt-2">
        <div class="card" style={{ width: "18rem" }}>
          <img
            classsName="img-thumbnail"
            src={img_url}
            alt="immagine"
            style={{ height: "200px", objectFit: "contain" }}
          />
          <div class="card-body">
            <h5 class="card-title">{name}</h5>
            <p class="card-text">{description}</p>
            <h6 className="card-subtitle mb-2 text-muted">Price: {price}</h6>
            <Link className="card-link" to={"/itemdetail/" + id}>
              Maggiorni informazioni
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

// export default function ItemOverview(props)
// {
//     return(
//         <>
//         <div className="col-4 d-flex justify-content-center text-center">
//             <div class="card" style={{"width":"18rem"}}>
//                 <div class="card-body">
//                     <h5 class="card-title">{props.name} {props.description}</h5>
//                     <h6 class="card-subtitle mb-2 text-muted">Price: {props.price}</h6>
//                     {/* <a href="#" class="card-link">Card link</a>
//                     <a href="#" class="card-link">Another link</a> */}
//                 </div>
//             </div>
//         </div>
//         </>
//     );
// }
