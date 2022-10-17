import React, { useState, useEffect } from 'react';

const CartInfo = (props) => {
  const { currentStyle } = props;
  const currentSkus = currentStyle.skus;
  // const [currentSkus, setCurrentSkus] = useState({})
  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL']
  const [selectedSize, setSelectedSize] = useState(null)
  const [quantity, setQuantity] = useState(0);
  const [selectedQuantity, setSelectedQuantity] = useState(0)

  useEffect(() => {
    for (let key in currentSkus) {
      if (currentSkus[key].size === selectedSize) {
        setQuantity(currentSkus[key].quantity)
      }
    }
  }, [selectedSize])

  return (
    <div className="cart">
      <div className="selectors">
      <select name="size" className="product size" onChange={(e) => {
        e.preventDefault()
        setSelectedSize(e.target.value)
      }}>
        <option value={selectedSize}>Select Size</option>
        {sizes.map((item, i) => {
          return (
            <option key={i + 1000000000} value={item}>{item}</option>
          )
        })}
      </select>
      <select disabled={selectedSize === null} name="quantity" className="product quantity" onChange={(e) => {
        e.preventDefault()
        setSelectedQuantity(e.target.value)
      }}>
        <option value={selectedQuantity}>Quantity</option>
        {Array(quantity).fill(1).map((x, i) => {
          return i < 15 ? (
            <option key={i + 10000000} value={i + 1}>{i + 1}</option>
          ) : null
        })}
      </select>
      </div>
      <div className="add-to-cart">
      <button className="addCart"disabled={!selectedSize} onClick={(e) => {
        e.preventDefault()
        setSelectedSize(null)
        setSelectedQuantity(1)
      }}>Add To Cart</button>
      </div>
    </div>
  )
}

export default CartInfo;