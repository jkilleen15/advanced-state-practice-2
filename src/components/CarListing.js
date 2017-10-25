import React from "react";
import PropTypes from "prop-types";

function CarListing(props) {
  const {id,imgUrl,year,make,model,price,km,miles,fuel,city,isNew} = props.car;
  let condition = "";
  if (!isNew) {
    condition = "Used";
  } else condition="New";

    return (<div className="col-md-4 grid_listing">
            <div className="product-listing-m gray-bg">
              <div className="product-listing-img"> <a href="http://themes.webmasterdriver.net/carforyou/demo/listing-grid.html#">
              <img src={imgUrl} className="img-responsive" alt="image" /> </a>
                <div className="label_icon">{condition}</div>
                <div className="compare_item">
                  <div className="checkbox">
                    <input type="checkbox" value="" id="compare10" />
                    <label htmlFor="compare10">Compare</label>
                  </div>
                </div>
              </div>
              <div className="product-listing-content">
                <h5><a href="http://themes.webmasterdriver.net/carforyou/demo/listing-grid.html#">{make}  {model}</a></h5>
                <p className="list-price">{price}</p>
                <div className="car-location"><span><i className="fa fa-map-marker" aria-hidden="true"></i> {city}, USA</span></div>
                <ul className="features_list">
                  <li><i className="fa fa-road" aria-hidden="true"></i>{km} km</li>
                  <li><i className="fa fa-tachometer" aria-hidden="true"></i>{miles} miles</li>
                  <li><i className="fa fa-calendar" aria-hidden="true"></i>{year} model</li>
                  <li><i className="fa fa-car" aria-hidden="true"></i>{fuel}</li>
                </ul>
              </div>
            </div>
          </div>);
}

/*
carsForSale:[{
  "id": 1,
  "imgUrl": "./featured-img-1.jpg",
  "year": "2004",
  "make": "HONDA",
  "model": "Accord",
  "price": "$7456.40",
  "km": 34720,
  "miles": 10615,
  "fuel": "Gas",
  "city": "Colca",
  "isNew": false
}
*/

CarListing.propTypes = {
  car: PropTypes.object.isRequired
};

export default CarListing;
