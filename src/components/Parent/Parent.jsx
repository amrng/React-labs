import React, { Component } from 'react'
import Child from '../Child/Child'

export default class Parent extends Component {
  state = {
    products: [
      {
        id: 1,
        brand: "Apple",
        item: "Iphone 15pro max",
        price: 99000,
        stock: 304
      },
      {
        id: 2,
        brand: "Apple",
        item: "Macbook pro",
        price: 76900,
        stock: 12
      },
      {
        id: 3,
        brand: "Asus",
        item: "Vivobook 14pro",
        price: 33000,
        stock: 2
      },
      {
        id: 4,
        brand: "Nokia",
        item: "6610",
        price: 500,
        stock: 29994
      },
    ]
  }

  componentDidMount() {
		const storedProducts = localStorage.getItem('products');
		if (storedProducts) {
			this.setState({ products: JSON.parse(storedProducts) });
		}
	}

  //Update Price
  updatePrice = (itemIndex)=>{
    let products = [...this.state.products];
		products[itemIndex].price += 10;
		this.setState({ products });
		localStorage.setItem('products', JSON.stringify(products));
  }
  //Delete item
  deleteProduct = (index) => {
		let afterDeletProduct = [...this.state.products];
		afterDeletProduct.splice(index, 1);
		this.setState({ products: afterDeletProduct });
		localStorage.setItem('products', JSON.stringify(afterDeletProduct));
	};

  //Add new item
  addProduct = () => {
		const newProduct = {
			id: this.state.products.length + 1,
        brand: "Generic",
        item: "unkown product",
        price: 102030,
        stock: 12345

		};
    const products = [...this.state.products, newProduct];
		this.setState({ products });
		localStorage.setItem('products', JSON.stringify(products));
  }
    
  render() {
    return (
      <div className='bg-dark my-5 text-white container py-4'>
        <h3 className='text-center'>Products</h3>

        <div className='row d-flex align-items-center justify-content-center'>
          {
            this.state.products.map((product,index) => {
              return <Child items={product} 
              key={product.id}
              updatePriceHandler={this.updatePrice}
              index={index}
              deleteProduct={this.deleteProduct}
              addProduct={this.addProduct}/>
            })}
        </div>

        <div className="row">
          <button className='btn btn-success w-50 my-4 fw-bold mx-auto'
          onClick={this.addProduct}>Add product</button>
        </div>
      </div>

    )
  }
}
