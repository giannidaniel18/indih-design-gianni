const productos = [
  {
    id_product: "01",
    category: "Anillos",
    name: "Anillo Azul",
    description: "Anillo Azul Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, ut autem quas accusamus beatae perferendis voluptas",
    price: "100",
    img: "/src/resources/img/products/anillos/anillo1.jpeg",
    stock: 10,
  },
  {
    id_product: "02",
    category: "Collares",
    name: "Collar Azul y blanco",
    description: " Collar Azul y blanco loremx Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, ",
    price: "150",
    img: "/src/resources/img/products/collares/collarazulyblanco1.jpeg",
    stock: 10,
  },
  {
    id_product: "03",
    category: "Collares",
    name: "Collar Bostero",
    description: "Collar Bostero",
    price: "150",
    img: "/src/resources/img/products/collares/collarbostero2.jpeg",
    stock: 10,
  },
  {
    id_product: "04",
    category: "Pulseras",
    name: "Pulsera Frutilla Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, ut autem quas accusamus beatae perferendis voluptas",
    description: "Pulsera Frutilla",
    price: "150",
    img: "/src/resources/img/products/pulseras/pulserafrutilla1.jpeg",
    stock: 8,
  },
  {
    id_product: "05",
    category: "Pulseras",
    name: "Pulsera Limon",
    description: "Pulsera Limon Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, ut autem quas accusamus beatae perferendis voluptas",
    price: "250",
    img: "/src/resources/img/products/pulseras/pulseralimon2.jpeg",
    stock: 0,
  },
  {
    id_product: "06",
    category: "Pulseras",
    name: "Pulsera Pomelo",
    description: "Pulsera Pomelo Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, ut autem quas accusamus beatae perferendis voluptas",
    price: "250",
    img: "/src/resources/img/products/pulseras/pulserapomelo3.jpeg",
    stock: 9,
  },
  {
    id_product: "07",
    category: "Pulseras",
    name: "Pulsera Roja",
    description: "Pulsera Roja Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, ut autem quas accusamus beatae perferendis voluptas",
    price: "250",
    img: "/src/resources/img/products/pulseras/pulseraroja4.jpeg",
    stock: 10,
  },
  {
    id_product: "08",
    category: "Straps",
    name: "Strap smile",
    description: "Pulsera Roja Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, ut autem quas accusamus beatae perferendis voluptas" ,
    price: "250",
    img: "/src/resources/img/products/straps/strapblancoycaritas.jpeg",
    stock: 5,
  },
];

export const getFetch = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const query = id
        ? productos.find((producto) => producto.id === id)
        : productos;
      resolve(query);
    }, 2000);
  });
};
