import { ItemCount } from "../ItemCount/ItemCount"

export const ItemDetail = ({ nombre, descripcion, img, precio, stock}) =>{
    const onAdd = (items) => {
        alert (`Se han agregado ${items} al carrito`)
    }
    return (
        <div className="border m-2">
            <div className="card d-flex justify-content-center">
                <div className="card-body">
                    <h4 className="card-title text-dark">{nombre}</h4>
                    <img src={img} alt="Esta es una prenda perteneciente a Sportpage" />
                    <p className="card-text">{descripcion}</p>
                    <p>Precio: ${precio}</p>
                    <ItemCount stock={stock} onAdd ={onAdd} />
                </div>
            </div>
        </div>
    );
};