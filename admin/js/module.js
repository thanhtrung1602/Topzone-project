const category = () => {
    return fetch('http://localhost:3000/category')
        .then((response) => response.json())
        .then(d => d)
}
export { category };


export const addCategory = category => {
    let opt = {
        method: "post",
        body: JSON.stringify(category),
        headers: { "Content-Type": "application/json" },
    };
    return fetch('http://localhost:3000/category', opt)
                .then((response) => response.json())
                .then(d => d)
}

export const laylloai = (id) => {
    return fetch(`http://localhost:3000/category/${id}`)
       .then((response) => response.json())
       .then(d => d)
}


export const editloai = (id, category) => {
    let opt = {
      method: "put",
      body: JSON.stringify(category),
      headers: { "Content-Type": "application/json" },
    };
    return fetch(`http://localhost:3000/category/${id}`, opt)
      .then((res) => res.json())
      .then((d) => d);
  };

export const xoaloai = (id) => {
    return fetch(`http://localhost:3000/category/${id}`, { method: "delete" })
      .then((res) => res.json())
      .then((d) => d);
  };