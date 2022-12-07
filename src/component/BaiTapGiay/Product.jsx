import React, { Component } from 'react'

export default class Product extends Component {
  render() {

    return (
        <div className="card mt-4">
        <img className="card-img-top" src={this.props.element.image} alt="#" />
        <div className="card-body">
          <h5 className="card-title">{this.props.element.name}</h5>
          <p className="card-price">{this.props.element.price}</p>
          <button onClick={() => this.props.getShoeDetail(this.props.element)} className='btn btn-primary'>Xem chi tiết</button>
        </div>
      </div>
    )
  }
}
