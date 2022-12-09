import React, { Component } from "react";

import data from "../../component/data/Data.json";
import ChiTietSanPham from "./ChiTietSanPham";
import Product from "./Product";

export default class BaiTapGiay extends Component {
  state = {
    shoeDetail: data[0],
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
    this.setState({
      shoeDetail: shoe,
    });
  };

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-3 mt-5">
            <a style={{ color: "black" }} href="#shop">
              Home
            </a>
            <br />
            <a style={{ color: "black" }} href="#shop">
              Shop
            </a>
          </div>
          <div id="shop" className="col-9">
            <h3 className="mt-3">Shoes shop</h3>
            <div className="row mr-2">{this.renderShoes()}</div>
            <ChiTietSanPham shoeDetail={this.state.shoeDetail} />
          </div>
        </div>
      </div>
    );
  }
}
