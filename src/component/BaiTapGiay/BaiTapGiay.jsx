import React, { Component } from "react";

import data from "../../component/data/Data.json";
import ChiTietSanPham from "./ChiTietSanPham";
import GioHang from "./GioHang";
import Product from "./Product";

export default class BaiTapGiay extends Component {
  state = {
    shoeDetail: data[0],
    cart: [],
  };
  // Thêm sp vào giỏ hàng
  addToCart = (shoe) => {
    const data = [...this.state.cart];
    const index = data.findIndex((element) => element.id === shoe.id);

    if (index === -1) {
      data.push({ ...shoe, soLuong: 1 });
    } else {
      data[index].soLuong += 1;
    }
    this.setState({
      cart: data,
    });
  };

  //Tăng giảm số lương
  handleQuantity = (shoe, isIncrease) => {
    const data = [...this.state.cart];
    const index = data.findIndex((ele) => ele.id === shoe.id);
    if (isIncrease) {
      data[index].soLuong += 1;
    } else {
      if (data[index].soLuong > 1) {
        data[index].soLuong -= 1;
      } else if (window.confirm("Bạn có muốn xóa không?")) {
        data.splice(index, 1);
      }
    }
    this.setState({
      cart: data,
    });
  };
  // Xóa sp
  handleDelete = (shoe) => {
    const data = [...this.state.cart];
    const index = data.findIndex((element) => element.id === shoe.id);

    data.splice(index, 1);
    this.setState({
      cart: data,
    });
  };

  renderShoes = () => {
    return data.map((element) => {
      return (
        <div className="col-4" key={element.id}>
          <Product
            element={element}
            getShoeDetail={this.getShoeDetail}
            addToCart={this.addToCart}
          />
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
            <GioHang
              cart={this.state.cart}
              handleQuantity={this.handleQuantity}
              handleDelete={this.handleDelete}
            />
            <div className="row mr-2">{this.renderShoes()}</div>
            <ChiTietSanPham shoeDetail={this.state.shoeDetail} />
          </div>
        </div>
      </div>
    );
  }
}
