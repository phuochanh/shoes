import React, { Component } from "react";

import data from "../../component/data/Data.json";
import ChiTietSanPham from "./ChiTietSanPham";
import Product from "./Product";

export default class BaiTapGiay extends Component {
  state = {
    shoeDetail: data[0],
  };

  showDescription = (description) => {
    alert(description);
  };
  renderShoes = () => {
    return data.map((element) => {
      return (
        <div className="col-4" key={element.id}>
          <Product element={element} getShoeDetail={this.getShoeDetail} />
        </div>
      );
    });
  };

  getShoeDetail = (shoe) => {
    // console.log(shoe);
    this.setState({
      shoeDetail: shoe,
    });
  };

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-3 mt-5">
            <p>Home</p>
            <p>Shop</p>
          </div>
          <div className="col-9">
            <h3 className="mt-3">Shoes shop</h3>
            <div className="row mr-2">{this.renderShoes()}</div>
            <ChiTietSanPham shoeDetail={this.state.shoeDetail} />
          </div>
        </div>
      </div>
    );
  }
}
