// them san pham
export const addProducts = product => {
    let opt = {
        method: "post",
        body: JSON.stringify(product),
        headers: { "Content-Type": "application/json" },
    };
    return fetch('http://localhost:3000/product', opt)
                .then((response) => response.json())
                .then(d => d)
}

// lay san pham
export const laylloai = (id) => {
    return fetch(`http://localhost:3000/product/${id}`)
       .then((response) => response.json())
       .then(d => d)
}

// sua san pham
export const editProduct = (id, product) => {
    let opt = {
      method: "put",
      body: JSON.stringify(product),
      headers: { "Content-Type": "application/json" },
    };
    return fetch(`http://localhost:3000/product/${id}`, opt)
      .then((res) => res.json())
      .then((d) => d);
  };

