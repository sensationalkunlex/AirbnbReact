import "./Card.css";
import love from "../../../../../assets/svg/love.svg";
export default function Card({ name, imageUrl, price, rating, address }) {
  return (
    <div className="col-md-4 col-lg-3">
      <div className="card-info d-flex flex-column position-relative">
        <div className="favorite-layer">
          <img src={love} alt="" className="small-icon" />
        </div>
        <div className="top-layer">
          <img src={imageUrl} alt={name} className="card-img" />
        </div>
        <div className="bottom-layer d-flex flex-column justify-content-between p-3">
          <div className="text-display d-flex flex-column">
            <div className="header-text mb-1">{name}</div>
            <div className="sub-text">{address} </div>
          </div>
          <div className="price-rate d-flex  justify-content-between">
            <div className="price">{`$${price
              .toFixed(2)
              .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}`}</div>
            <div className="rating">
              <img src={love} alt="" className="small-icon" /> {rating}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
