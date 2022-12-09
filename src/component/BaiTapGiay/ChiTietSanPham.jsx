import React, { Component } from "react";

export default class ChiTietSanPham extends Component {
  render() {
    return (
      <div id="a" className="row mt-5 mr-2 text-left">
        <div className="col-4 text-center">
          <img className="img-fluid" src={this.props.shoeDetail.image} />
          <h2>{this.props.shoeDetail.name}</h2>
        </div>
        <div className="col-8">
          <table className="table">
            <thead>
              <tr>
                <td colSpan={2}>
                  <h2>Thông tin chi tiết</h2>
                </td>
              </tr>
              <tr>
                <td>Bí danh</td>
                <td>{this.props.shoeDetail.alias}</td>
              </tr>
              <tr>
                <td>Giá</td>
                <td>{this.props.shoeDetail.price} $</td>
              </tr>
              <tr>
                <td>Mô tả</td>
                <td>{this.props.shoeDetail.description}</td>
              </tr>
              <tr>
                <td>Mô tả ngắn</td>
                <td>{this.props.shoeDetail.shortDescription}</td>
              </tr>
              <tr>
                <td>Số lượng</td>
                <td>{this.props.shoeDetail.quantity}</td>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    );
  }
}
