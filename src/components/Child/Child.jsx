import React, { Component } from 'react'

export default class Child extends Component {


    
    
    
    render() {
      let {brand, item, price, stock} = this.props.items

    return (
      <div className='bg-dark-subtle col-md-3 rounded rounded-2 text-dark p-3 m-3 '>
        <h4>Brand: <span className='fw-normal'>{brand}</span></h4>
        <h4>Product: <span className='fw-normal'>{item}</span></h4>
        <h4>Price: <span className='fw-normal'>{price}</span></h4>
        <h4>Stock: <span className='fw-normal'>{stock}</span></h4>
        <div className='m-4 fw-bold d-flex align-items-center justify-content-center '>
          <button className='btn btn-primary  me-2 text-white' 
          onClick={()=> this.props.updatePriceHandler(this.props.index)}>Update price</button>

          <button className='btn btn-danger text-white'
          onClick={() => this.props.deleteProduct(this.props.index)}>Delete item</button>
        </div>
        </div>
    )
  }
}
