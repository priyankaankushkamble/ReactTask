import React from "react";
import reactDOM from "react";
export default class App extends React.Component{

constructor(){
super();
this.state={
  products:[{id:1,name:"ABC",price:10000},
        {id:2,name:"MNO",price:15000},
        {id:3,name:"PQR",price:5000},
        {id:4,name:"XYZ",price:11000}
  ],
  cart:[]
}
}
addToCart=(product)=>{
  this.setState((prevState)=>({
    cart:[...prevState.cart,product]
  }));
}
getTotal=()=>{
return this.state.cart.reduce((total,item)=>total+item.price,0);
}
render(){
    return<>
     <div className="container bg-info p-5">
      <h1 className="text-white ">Product List Here</h1>
      <table className="table table-striped">
        <thead>
<tr>
<th>Product Id</th>
<th>Product Name</th>
<th>Product Price</th>
<th>Add To Cart</th>

</tr>
   </thead>
    {
this.state.products.map((product)=>(<tr className="text-white">
<td>{product.id}</td>
<td>{product.name}</td>
<td>{product.price}</td>
<td><button className="btn btn-success" onClick={()=>this.addToCart(product)}>Add To Cart</button></td>

    </tr>))
}
</table>
<h2>All Cart Data</h2>
<table className="table table-striped">
        <thead>
<tr>
<th>Product Id</th>
<th>Product Name</th>
<th>Product Price</th>


</tr>
   </thead>
{
  this.state.cart.map((product)=>(<tr className="text-white">
<td>{product.id}</td>
<td>{product.name}</td>
<td>{product.price}</td>
    </tr>))
 }
</table>
<h1>Total Bill is {this.getTotal()}</h1>
     </div>
    </>
  }
}
