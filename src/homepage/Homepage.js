const Homepage = (props) => {
  return (
    <>
      {" "}
      <div className="container">
        <div className="m-3">
          <h1 className="text-center">BENVENUTO!</h1>
        </div>
        <div className="row">
          <div className="col">
            <div className="card-body">
              <h5>WE ARE HERE:</h5>
            </div>
            <img
              src="https://www.toscana.info/wp-content/uploads/sites/123/mappa-firenze.jpg"
              className="card-img-top"
              alt="..."
            />
          </div>
          <div className="col ms-3">
            <div style={{ paddingTop: "75.000%", position: "relative" }}>
              <iframe
                src="https://gifer.com/embed/DXKg"
                style={{
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                  top: "0",
                  left: "0",
                }}
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
