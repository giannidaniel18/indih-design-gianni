const productos = [
  {
    id_product: "01",
    category: "Anillos",
    name: "Anillo Azul",
    description: "Anillo Azul Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, ut autem quas accusamus beatae perferendis voluptas",
    price: "100",
    img: "/assets/img/products/anillos/anillo1.jpeg",
    url: "https://i.ibb.co/58WhWHd/anillo1.jpg",
    stock: 10,
  },
  {
    id_product: "02",
    category: "Collares",
    name: "Collar Azul y blanco",
    description: " Collar Azul y blanco loremx Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, ",
    price: "150",
    img: "/assets/img/products/collares/collarazulyblanco1.jpeg",
    url: "https://i.ibb.co/wYfhP7t/collarazulyblanco1.jpg",
    stock: 10,
  },
  {
    id_product: "03",
    category: "Collares",
    name: "Collar Bostero",
    description: "Collar Bostero",
    price: "150",
    img: "/assets/img/products/collares/collarbostero2.jpeg",
    url: "https://i.ibb.co/zmNFYzY/collarbostero2.jpg",
    stock: 10,
  },
  {
    id_product: "04",
    category: "Pulseras",
    name: "Pulsera Frutilla ",
    description: "Pulsera Frutilla Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, ut autem quas accusamus beatae perferendis voluptas",
    price: "150",
    img: "/assets/img/products/pulseras/pulserafrutilla1.jpeg",
    url: "https://i.ibb.co/n8yHWCB/pulserafrutilla1.jpg",
    stock: 8,
  },
  {
    id_product: "05",
    category: "Pulseras",
    name: "Pulsera Limon",
    description: "Pulsera Limon Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, ut autem quas accusamus beatae perferendis voluptas",
    price: "250",
    img: "/assets/img/products/pulseras/pulseralimon2.jpeg",
    url: "https://i.ibb.co/TKyJCQp/pulseralimon2.jpg",
    stock: 0,
  },
  {
    id_product: "06",
    category: "Pulseras",
    name: "Pulsera Pomelo",
    description: "Pulsera Pomelo Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, ut autem quas accusamus beatae perferendis voluptas",
    price: "250",
    img: "/assets/img/products/pulseras/pulserapomelo3.jpeg",
    url: "https://i.ibb.co/HYtysBx/pulserapomelo3.jpg",
    stock: 9,
  },
  {
    id_product: "07",
    category: "Pulseras",
    name: "Pulsera Roja",
    description: "Pulsera Roja Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, ut autem quas accusamus beatae perferendis voluptas",
    price: "250",
    img: "/assets/img/products/pulseras/pulseraroja4.jpeg",
    url: "https://i.ibb.co/RvMhFSK/pulseraroja4.jpg",
    stock: 10,
  },
  {
    id_product: "08",
    category: "Straps",
    name: "Strap smile",
    description: "Pulsera Roja Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, ut autem quas accusamus beatae perferendis voluptas" ,
    price: "250",
    img: "/assets/img/products/straps/strapblancoycaritas.jpeg",
    url: "https://i.ibb.co/TR18vQz/strapblancoycaritas.jpg",
    stock: 5,
  },
];

export const getFetch = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const query = id ? productos.find((producto) => producto.id === id) : productos;
      resolve(query);
    }, 2000);
  });
};


// useEffect(() => {
  //   if (categoria) {
  //     setLoading(true)
  //     getFetch()
  //       .then(respuesta => setProductos(respuesta.filter((prods) => prods.category === categoria)))
  //       .catch((err) => console.log(err))
  //       .finally(() => setLoading(false));
  //   } else {

  //     getFetch()
  //       .then((respuesta) => setProductos(respuesta))
  //       .catch((err) => console.log(err))
  //       .finally(() => setLoading(false));
  //   }

  // }, [categoria]);