const productsArray = [{
    name: 'Wireless Headphones',
    urlImage: 'https://cdn.mos.cms.futurecdn.net/fsDKHB3ZyNJK6zMpDDBenB-1200-80.jpg.webp',
    price: 79.99,    
    description: 'Premium over-ear wireless headphones with noise cancellation.'
  },
  {
    name: 'Smartphone Stand',
    urlImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ_vNBU298NvdUsqnIbXztvnEYIUDP4wjm9Q&usqp=CAU',
    price: 14.99,
    description: 'Adjustable and foldable smartphone stand for hands-free use.'
  },
  {
    name: 'Coffee Maker',
    urlImage: 'https://m.media-amazon.com/images/I/61GRnqDOvaL._AC_UF894,1000_QL80_.jpg',
    price: 129.99,
    description: 'Programmable coffee maker with built-in grinder for fresh coffee every morning.'
  },
  {
    name: 'Fitness Tracker',
    urlImage: 'https://www.sundried.com/cdn/shop/articles/fitness-tracker.jpg?v=1499350233',
    price: 49.99,
    description: 'Waterproof fitness tracker with heart rate monitor and sleep tracking.'
  },
  {
    name: 'Portable Bluetooth Speaker',
    urlImage: 'https://assets.epicurious.com/photos/628d4fd0e5338cda0db4db1b/master/pass/EpiStamp-2.jpg',
    price: 39.99,
    description: 'Compact and portable Bluetooth speaker with high-quality sound.'
  },
  {
    name: 'Laptop Backpack',
    urlImage: 'https://cdn.thewirecutter.com/wp-content/media/2022/12/laptopbackpacks-2048px-7000-2x1-1.jpg?auto=webp&quality=75&crop=2:1&width=1024',
    price: 59.99,
    description: 'Durable and spacious backpack with a dedicated laptop compartment.'
  },
  {
    name: 'Digital Camera',
    urlImage: 'https://i.pcmag.com/imagery/reviews/02wXwvXTDUOJQjGasSStPB3-1..v1648144429.jpg',
    price: 299.99,
    description: 'Mirrorless digital camera with 24MP sensor and 4K video recording.'
  },
  {
    name: 'Wireless Mouse',
    urlImage: 'https://www.pcworld.com/wp-content/uploads/2024/01/pcw-best-wireless-mice-primary-100866905-orig.jpg?quality=50&strip=all',
    price: 19.99,
    description: 'Ergonomic wireless mouse with customizable buttons and precision tracking.'
  },
  {
    name: 'Smart LED Bulbs (Set of 4)',
    urlImage: 'https://i.ebayimg.com/images/g/4VcAAOSw0tNfIZTi/s-l1200.webp',
    price: 34.99,
    description: 'Smart LED bulbs compatible with voice assistants and customizable lighting.'
  },
  {
    name: 'Electric Toothbrush',
    urlImage: 'https://i.ebayimg.com/images/g/dtUAAOSwoU5hdtSy/s-l1600.jpg',
    price: 49.99,
    description: 'Rechargeable electric toothbrush with multiple brushing modes and timer.'
  }
];

const btn = document.querySelector('.button');


// Sortare alfabetica
function sortAlfabeticName(firstName, nextName) {
  return firstName.name.localeCompare(nextName.name)
}

btn.addEventListener('click' , () => {
  productsArray.sort(sortAlfabeticName);
  createProductList();
});

const sortPrice = document.querySelector('.sortprice')


// Sortare numerica
function sortByPrice(firstNumber, nextNumber){
  return firstNumber.price - nextNumber.price;
}



sortPrice.addEventListener('click', () => {
  productsArray.sort(sortByPrice);
  createProductList();
});



function createProductList() {
  const productContainer = document.querySelector('#product-list');
  productContainer.innerHTML = "";


  productsArray.forEach(element => {
    const productCard = document.createElement('div');
    // pentru noul div creem o clasa
    productCard.classList.add('product-card');
    // adaugam acest div
    productContainer.append(productCard);
    // crearea elementeleor in product-card
    const titleProduct = document.createElement('h2'),
      descriptionProduct = document.createElement('p'),
      priceContainer = document.createElement('div'),
      priceProduct = document.createElement('p'),
      priceDiscountProduct = document.createElement('p'),
      prodImage = document.createElement('div'),
      productImg = document.createElement('img'),
      productIcon = document.createElement('a');

    // conectam variabilele cu productArray si adaugam clasele
    titleProduct.textContent = element.name;
    descriptionProduct.textContent = element.description;
    descriptionProduct.classList.add('desc-product');
    priceContainer.classList.add('price-container');
    priceProduct.classList.add('price');
    priceDiscountProduct.classList.add('price-new');
    prodImage.classList.add('photo-elements');
    productImg.classList.add('product');
    productIcon.classList.add('icon');

    productImg.src = element.urlImage;

    priceProduct.textContent = `${element.price} mdl`;
    priceDiscountProduct.textContent = `${Math.round(element.price * (35/100))} mdl`;
    // adaugam elementele in div creat
    productCard.append(prodImage);
    productCard.append(productImg);
    productCard.append(titleProduct);
    productCard.append(descriptionProduct);
    productCard.append(priceContainer);
    productCard.append(priceProduct);
    productCard.append(priceDiscountProduct);
    productCard.append(productIcon);


  });
}

createProductList();