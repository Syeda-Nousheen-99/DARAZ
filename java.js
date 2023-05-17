let icon = [{
    "id": 1,
    "heading": "Mart",
    "image": "./Image/mart.png"
  },
  {
    "id": 2,
    "heading": "Women`s Fashion",
    "image": "./Image/women-fashion.png"
  },
  {
    "id": 3,
    "heading": "Home & Decor",
    "image": "./Image/Home&living.png"
  },
  {
    "id": 4,
    "heading": "Beauty",
    "image": "./Image/beauty.png"
  },
  {
    "id": 5,
    "heading": "Men`s Fashion",
    "image": "./Image/man.png"
  }
  ]


  icon.forEach(element => {
    document.getElementById("icon").innerHTML += `
    <div class="d-flex  category-icon">
      <img
        src="${element.image}"class="categories-img"alt="mart image"/>
      <h3 class="category-text">${element.heading}</h3>
    </div>
    `
  });

  // semi product
  let sp = [{
    "id": 1,
    "image": "./Image/sp1.jpg",
    "text": "BUY 1 GET 1 FREE Mini Bluetooth Ear Bud-Handfree",
    "rate": "Rs. 519",
    "lighter": "Rs. 2,000",
    "discount": "Rs. -74%"
  },
  {
    "id": 2,
    "image": "./Image/sp2.jpg",
    "text": "Gaming Earphones Wth Mic In Ear Wireless Blue...",
    "rate": "Rs. 849",
    "lighter": "Rs. 2,999",
    "discount": "-72%"
  },
  {
    "id": 3,
    "image": "./Image/sp3.jpg",
    "text": "Bluetooth Twins Wireless Earbuds with Upgraded...",
    "rate": "Rs. 899",
    "lighter": "Rs. 1,999",
    "discount": "-55%"
  },
  {
    "id": 4,
    "image": "./Image/sp4.jpg",
    "text": "Original Imported LCD Writing Tablet and drawin...",
    "rate": "Rs. 799",
    "lighter": "Rs. 1,399",
    "discount": "-43%"
  },
  {
    "id": 5,
    "image": "./Image/sp5.jpg",
    "text": "Mishbeeka Pack 3 - Large Storage Bags, Storage Bag Clothes...",
    "rate": "Rs. 329",
    "lighter": "Rs. 888",
    "discount": "-63%"
  },
  {
    "id": 6,
    "image": "./Image/sp6.jpg",
    "text": "High Quality Bluetooth V5.0 Support... ",
    "rate": "Rs. 334",
    "lighter": "Rs. 1,599",
    "discount": "-79%"
  }
  ]


  sp.forEach(element => {
    document.getElementById("sp").innerHTML += `
    <div class="card" style="width: 190px">
      <img src="${element.image}" class="card-img-top" alt="card image" />
      <div class="card-body">
        <p class="card-text">${element.text}</p>
        <h3>${element.rate}</h3>
        <p><span class="lighter-text"> ${element.lighter}</span>
        <span class="discount">${element.discount}</span>
        </p>
      </div>
    </div>
    `
  });
  // categories 
  let cat = [{
    "id": 1,
    "image": "./Image/cat1.jpg",
     "name": "Watch"
  },
  {
    "id": 2,
    "image": "./Image/cat2.jpg",
    "name": "Speaker"
  },
  {
    "id": 3,
    "image": "./Image/cat3.jpg",
    "name": "Dispenser"
  },
  {
    "id": 4,
    "image": "./Image/cat4.jpg",
    "name": "Cloths"
  },
  {
    "id": 5,
    "image": "./Image/cat5.jpg",
    "name": "watch"
  },
  {
    "id": 6,
    "image": "./Image/cat6.jpg",
    "name": "Hair"
  },

  {
    "id": 7,
    "image": "./Image/cat7.jpg",
    "name": "Ring"
  },
  
  {
    "id": 8,
    "image": "./Image/cat8.jpg",
    "name": "watch"
  },
  
  {
    "id": 9,
    "image": "./Image/cat9.jpg",
    "name": "watch"
  },
  
  {
    "id": 10,
    "image": "./Image/cat10.jpg",
    "name": "watch"
  },
  {
    "id": 11,
    "image": "./Image/cat11.jpg",
    "name": "watch"
  },
  {
    "id": 12,
    "image": "./Image/cat12.jpg",
    "name": "watch"
  },
  {
    "id": 13,
    "image": "./Image/cat13.jpg",
    "name": "watch"
  },
  {
    "id": 14,
    "image": "./Image/cat14.jpg",
    "name": "watch"
  },
  {
    "id": 15,
    "image": "./Image/cat15.jpg",
    "name": "watch"
  },
  {
    "id": 16,
    "image": "./Image/cat16.jpg",
    "name": "watch"
  },





  ]
  cat.forEach(element => {
    document.getElementById("cat").innerHTML += `
    <div class="card rounded-0 category-card" style="width: 150px">
        <img src="${element.image}" class="category-mainimg" alt="card image" />
      <div class="card-body py-0 text-center">
      <p class="card-text ">${element.name}</p>
    </div>
    </div>
    `
  });

//   Mall 
let mall = [{
    "id": 1,
    "image": "./Image/mall1.jpg",
    "img2": "./Image/mall1s.jpg",
    "pro`d": "Shan",
    "peo`l": "Shan"
  },
  {
    "id": 2,
    "image": "./Image/mall2.jpg",
    "img2": "./Image/mall2s.png",
    "pro`d": "Safeguard",
    "peo`l": "Safeguard"
  },
  {
    "id": 3,
    "image": "./Image/mall3.jpg",
    "img2": "./Image/mall3s.jpeg",
    "pro`d": "Carat",
    "peo`l": "Carat"
  },
  {
    "id": 4,
    "image": "./Image/mall4.jpeg",
    "img2": "./Image/mall4s.jpeg",
    "pro`d": "Tapal",
    "peo`l": "Truly yours"
  },
  {
    "id": 5,
    "image": "./Image/mall5.jpg",
    "img2": "./Image/mall5s.jpeg",
    "pro`d": "Salon Designers",
    "peo`l": "Salon Designers"
  },
  {
    "id": 6,
    "image": "./Image/mall6.jpg",
    "img2": "./Image/mall6s.jpeg",
    "pro`d": "Khanani`s Collection",
    "peo`l": "Khanani`s Collection"
  }
  ]


  mall.forEach(element => {
    document.getElementById("mall").innerHTML += `
    <div class="card rounded-0" style="width: 190px">
      <div class="img-box-shadow">
        <img
          src="${element.image}"class="card-img-top rounded-0 darazmall-mainimg"alt="card image"/>
      </div>
      <div class="darazmall-img-box">
      <img src="${element.img2}"class="darazmall-img"alt="card-images"/>
      </div>
      <div class="card-body pb-0 mt-4 text-center">
        <p class="card-text discount mb-0">${element["peo`l"]}</p>
        <p><span class="text-decoration-none lighter-text">${element["pro`d"]}</span></p>
      </div>
    `
  });