let inventory = []

function findProductIndex(productName) {
  const lowerCaseName = productName.toLowerCase()
  return inventory.findIndex(product => product.name === lowerCaseName)
}

function addProduct(product) {
  const index = findProductIndex(product.name)
  if (index !== -1) {
    inventory[index].quantity += product.quantity
    console.log(`${product.name.toLowerCase()} quantity updated`)
  } else {
    inventory.push({ name: product.name.toLowerCase(), quantity: product.quantity })
    console.log(`${product.name.toLowerCase()} added to inventory`)
  }
}

function removeProduct(productName, quantity) {
  const index = findProductIndex(productName)
    if (index === -1) {
      console.log(`${productName.toLowerCase()} not found`)
      return
    }

  const product = inventory[index]
    if (product.quantity < quantity) {
      console.log(`Not enough ${productName.toLowerCase()} available, remaining pieces: ${product.quantity}`)
      return
    }
  product.quantity -= quantity
  if (product.quantity === 0) {
    inventory.splice(index, 1)
  } else {
  console.log(`Remaining ${productName.toLowerCase()} pieces: ${product.quantity}`)
  }
}


// console.log(addProduct({name: "FLOUR", quantity: 5}))
// console.log(inventory)
// console.log(removeProduct("FLOUR", 7))