import { Link } from "react-router-dom";

export const Item = ({id, nombre, img, precio,descripcion }) => {
    return (
    <div className="d-flex flex-wrap justify-content-center">
        <div className="border m-2">
            <div className="card ">
            <div className="card-body ">
                <h4 className="card-title">{nombre}</h4>
                <img src={img} alt="" />
                <p className="card-text"> {descripcion} </p>
                <p className="card-price">${precio}</p>
                <Link to={`/item/${id}`}>
                <button className="btn btn-outline-warning">Detalles</button>
                </Link>
            </div>
            </div>
        </div>
    </div>
    );
};