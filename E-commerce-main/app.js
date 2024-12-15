let userrevies = [
  {
    "name": "user",
    "img": "https://i.pinimg.com/736x/57/4a/ce/574ace86a760c03783817f3f002c3421.jpg",
    "headline": "good work 4/5",
    "descripation": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, consequuntur!"
  },
  {
    "name": "user",
    "img": "https://i.pinimg.com/736x/68/3e/74/683e74ef3abbb04c288eb3c0715c0d72.jpg",
    "headline": "good work 3/5",
    "descripation": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, consequuntur!"
  },
  {
    "name": "user",
    "img": "https://i.pinimg.com/736x/7a/d9/5e/7ad95e1a3acc2298892f3a38f8d17058.jpg",
    "headline": "good work 2/5",
    "descripation": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, consequuntur!"
  },
  {
    "name": "user",
    "img": "https://i.pinimg.com/736x/67/dd/33/67dd333696cf3b13702f83e97e16167d.jpg",
    "headline": "good work 3/5",
    "descripation": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, consequuntur!"
  },
  {
    "name": "user",
    "img": "https://i.pinimg.com/736x/81/3e/2a/813e2a02aee503b784e350db6e6e1f35.jpg",
    "headline": "good work 5/5",
    "descripation": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, consequuntur!"
  },
  {
    "name": "user",
    "img": "https://i.pinimg.com/736x/4b/28/82/4b28829f554ac817c031ffd0746066f3.jpg",
    "headline": "good work 2/5",
    "descripation": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, consequuntur!"
  },


]
// set userrevies on local storage
localStorage.setItem('userrevies', JSON.stringify(userrevies));
console.log(userrevies)
let popularproducts = [
  {
    "name": " women Sewing yellow top",
    "img": "https://www.soolinen.com/cdn/shop/products/Elegant-v-neck-drawstring-blouses-for-women-Sewing-yellow-top1_750x.jpg?v=1631197078",
    "rating": "good work 4/5",
  },
  {
    "name": "Hiking Cargo Pants",
    "img": "https://wyhsports.com/cdn/shop/products/26b0d5f1b1b27331ca22fa6b13d1de75.jpg?v=1698283183&width=823",
    "rating": "good work 5/5",
  },
  {
    "name": " Men Half Placket Zipper",
    "img": "https://img.ltwebstatic.com/images3_pi/2024/01/08/52/170469074953fad8daa3fe4649d83d55c9b7abb6eb_thumbnail_900x.webp",
    "rating": "good work 4/5",
  },

  {
    "name": "copper style women watch",
    "img": "https://i.pinimg.com/736x/75/59/e6/7559e6477157217044bfb4a22501ba6b.jpg",
    "rating": "good work 5/5",
  },
  {
    "name": "Homme Men Round Neck Ombre",
    "img": "https://i.pinimg.com/736x/b7/e9/38/b7e93833693ac6c77e5e66b0e1e29868.jpg",
    "rating": "good work 3/5",
  },


]
// set popularproducts on local storage
localStorage.setItem('popularproducts', JSON.stringify(popularproducts));
console.log(popularproducts)
let Allproducts = [
  {
    "name": "Homme Men Round Neck Ombre",
    "price": "1,200",
    "rating": "3/5",
    "img": "https://i.pinimg.com/736x/b7/e9/38/b7e93833693ac6c77e5e66b0e1e29868.jpg",
    "headline": "Homme Men Round Neck Ombre Raglan Short",
    "descripation": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, consequuntur!"
  },
  {
    "name": " Men Half Placket Zipper",
    "price": "1,565",
    "rating": "2/5",
    "img": "https://img.ltwebstatic.com/images3_pi/2024/01/08/52/170469074953fad8daa3fe4649d83d55c9b7abb6eb_thumbnail_900x.webp",
    "headline": "Manfinity Homme Men Half Placket Zippe",
    "descripation": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, consequuntur!"
  },
  {
    "name": "Woman Top Autumn Winterr",
    "price": "1,865",
    "rating": "5/5",
    "img": "https://e-trinity.com/cdn/shop/files/Sdb5ab9b1df324965b37e7018a414bcd85.webp?v=1728261619&width=823",
    "headline": "Office Lady Shirts And Blouses",
    "descripation": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, consequuntur!"
  },
  {
    "name": "Automatic Watch for Men",
    "price": "3,500 ",
    "rating": "4/5 ",
    "img": "https://i.pinimg.com/736x/ec/7c/5e/ec7c5e3d6faa5a1acf151740a75881fe.jpg",
    "headline": "The High Standard Automatic Watch for Men: Quality and Style in One",
    "descripation": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, consequuntur!"
  },
  {
    "name": "Dry Stretch Pants",
    "price": "3,500 ",
    "rating": "2/5 ",
    "img": "https://vipsheep.com/cdn/shop/products/251f82b053b917006f2576f4a81dc946.jpg?v=1693283231&width=823",
    "headline": "Men‘s Fast Dry Stretch Pants",
    "descripation": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, consequuntur!"
  },
  {
    "name": "copper style women watch",
    "price": "3,500 ",
    "rating": "1/5 ",
    "img": "https://i.pinimg.com/736x/75/59/e6/7559e6477157217044bfb4a22501ba6b.jpg",
    "headline": "copper style wo men watch",
    "descripation": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, consequuntur!"
  },
  {
    "name": " women Sewing yellow top",
    "price": "2,165",
    "rating": "3/5",
    "img": "https://www.soolinen.com/cdn/shop/products/Elegant-v-neck-drawstring-blouses-for-women-Sewing-yellow-top1_750x.jpg?v=1631197078",
    "headline": "Elegant v neck drawstring blouses for women",
    "descripation": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, consequuntur!"
  },
  {
    "name": " women watch",
    "price": "2,165",
    "rating": "4/5",
    "img": "https://i.pinimg.com/736x/81/75/6c/81756cc2f251cf3557061a9e8b495a6a.jpg",
    "headline": "watchs for women",
    "descripation": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, consequuntur!"
  },
  {
    "name": "Hiking Cargo Pants",
    "price": "1,978",
    "rating": "0/5",
    "img": "https://wyhsports.com/cdn/shop/products/26b0d5f1b1b27331ca22fa6b13d1de75.jpg?v=1698283183&width=823",
    "headline": "Men's Hiking Cargo Pants",
    "descripation": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, consequuntur!"
  },
  {
    "name": " Henley Collar Long Sleeve",
    "price": "1,000",
    "rating": "2/5",
    "img": "https://us03-imgcdn.ymcart.com/93338/2023/09/26/9/5/95880f8517087a23.jpg?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_700,h_1000/format,webp",
    "headline": "Men's Henley Collar Long Sleeve Cotton T Shirt",
    "descripation": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, consequuntur!"
  },
  {
    "name": "1pc Men's Wrist Watch",
    "price": "2,165",
    "rating": "3/5",
    "img": "https://i.pinimg.com/736x/19/2a/7f/192a7f8df513b6f54698112cbb585d77.jpg",
    "headline": "BINBOND 1pc Men's Wrist Watch, 30m Waterproof, Week Calendar Dual Display, Stainless Steel Strap, Fashion",
    "descripation": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, consequuntur!"
  },
  {
    "name": " Denim Casual Bell-Bottoms Jeans",
    "price": "2,200",
    "rating": "5/5",
    "img": "https://i.pinimg.com/736x/60/d3/7f/60d37fb2621c32bb4fccf9462a3e3d7d.jpg",
    "headline": "Women Pocket Button Denim Casual Bell-Bottoms Jeans",
    "descripation": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, consequuntur!"
  },
  {
    "name": "Stretch Multi-pocket Skinny Cargo Pants",
    "price": "1,450",
    "rating": "4/5",
    "img": "https://wyhsports.com/cdn/shop/products/26b0d5f1b1b27331ca22fa6b13d1de75.jpg?v=1698283183&width=823",
    "headline": "Try Men's High Stretch Multi-pocket Skinny Cargo Pants for unbeatable style and comfort.",
    "descripation": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, consequuntur!"
  },


]
// set Allproducts on local storage
localStorage.setItem('Allproducts', JSON.stringify(Allproducts));
console.log(Allproducts)

// display reviews 
function displayallproducts() {
  let clutter = '';
  Allproducts.forEach((product) => {
    clutter += `
    <div class="col-lg-3 col-md-6">
                              <div class="featured-item">
                                 <div class="featured-item-img">
                                    <a href="#">
                                       <img src="${product.img}" alt="Images">
                                    </a>
                                 </div>
                                 <div class="content">
                                    <h3><a href="#">${product.name}</a></h3>
                                    <hr>
                                    <div class="content-in">
                                       <h4>RS: ${product.price}</h4>
                                       <span>(${product.rating})<i class="fa fa-star"></i></span>
                                    </div>
                                    <hr>
                                    <div class="featured-content-list">
                                       <button type="button" data-name="Oxford" data-price="1200" class="default-btn border-radius-5"> Add to cart</button>
                                    </div>
                                 </div>
                              </div>
                           </div>
    `;
  });
  document.getElementById("All").innerHTML = clutter;
}

displayallproducts();
// display reviews 
function displayuserreview() {
  let clutter = '';
  userrevies.forEach((product) => {
    clutter += `
     <div class="item">
                 <img src="${product.img}" class="avatar">
                 <div class="content">
                     <table width="100%" cellspacing="0">
                         <tr>
                             <td>${product.name}</td>
                         </tr>
                         <tr>
                             <td>${product.headline}</td>
                         </tr>
                         <tr>
                             <td colspan="2" class="nameGroup">${product.descripation}</td>
                         </tr>
                     </table>
                 </div>
             </div>
    `;
  });
  document.getElementById("list").innerHTML = clutter;
}
displayuserreview();
// display popular 
function displaypopular() {
  let clutter = '';
  popularproducts.forEach((product) => {
    clutter += `
    <div id="featured" class="col-lg-3 col-md-6">
                  <div class="featured-item">
                     <div class="featured-item-img">
                        <a href="#">
                           <img src="${product.img}"
                              alt="Images">
                        </a>
                     </div>
                     <div class="content">
                        <h3><a href="#">${product.name}</a></h3>
                        <hr>
                        <div class="content-in">
                           <span>(${product.rating})<i class="fa fa-star"></i></span>
                        </div>
                     </div>
                  </div>
               </div>
    `;
  });
  document.getElementById("women").innerHTML = clutter;
}
displaypopular();





var shoppingCart = (function () {

  cart = [];
  console.log(cart)
  function Item(name, price, count) {
    this.name = name;
    this.price = price;
    this.count = count;
  }

  // Save cart
  function saveCart() {
    localStorage.setItem('shoppingCart', JSON.stringify(cart));
  }

  // Load cart
  function loadCart() {
    cart = JSON.parse(localStorage.getItem('shoppingCart'));
    console.log(shoppingCart)
  }
  if (localStorage.getItem("shoppingCart") != null) {
    loadCart();
  }


  var obj = {};
console.log(obj)
  // Add to cart
  obj.addItemToCart = function (name, price, count) {
    for (var item in cart) {
      if (cart[item].name === name) {
        cart[item].count++;
        saveCart();
        return;
      }
    }
    var item = new Item(name, price, count);
    cart.push(item);
    saveCart();
  }
  // Set count from item
  obj.setCountForItem = function (name, count) {
    for (var i in cart) {
      if (cart[i].name === name) {
        cart[i].count = count;
        break;
      }
    }
  };
  // Remove item from cart
  obj.removeItemFromCart = function (name) {
    for (var item in cart) {
      if (cart[item].name === name) {
        cart[item].count--;
        if (cart[item].count === 0) {
          cart.splice(item, 1);
        }
        break;
      }
    }
    saveCart();
  }

  // Remove all items from cart
  obj.removeItemFromCartAll = function (name) {
    for (var item in cart) {
      if (cart[item].name === name) {
        cart.splice(item, 1);
        break;
      }
    }
    saveCart();
  }

  // Clear cart
  obj.clearCart = function () {
    cart = [];
    saveCart();
  }
  console.log(obj)
  // Count cart 
  obj.totalCount = function () {
    var totalCount = 0;
    for (var item in cart) {
      totalCount += cart[item].count;
    }
    return totalCount;
  }

  // Total cart
  obj.totalCart = function () {
    var totalCart = 0;
    for (var item in cart) {
      totalCart += cart[item].price * cart[item].count;
    }
    return Number(totalCart.toFixed(2));
  }

  // List cart
  obj.listCart = function () {
    var cartCopy = [];
    for (i in cart) {
      item = cart[i];
      itemCopy = {};
      for (p in item) {
        itemCopy[p] = item[p];
      }
      itemCopy.total = Number(item.price * item.count).toFixed(2);
      cartCopy.push(itemCopy)
    }
    return cartCopy;
  }
  return obj;
})();


// Add item
$('.default-btn').click(function (event) {
  event.preventDefault();
  var name = $(this).data('name');
  var price = Number($(this).data('price'));
  shoppingCart.addItemToCart(name, price, 1);
  displayCart();
});

// Clear items
$('.clear-cart').click(function () {
  shoppingCart.clearCart();
  displayCart();
});


function displayCart() {
  var cartArray = shoppingCart.listCart();
  var output = "";
  for (var i in cartArray) {
    output += "<tr>"
      + "<td>" + cartArray[i].name + "</td>"
      + "<td>(" + cartArray[i].price + ")</td>"
      + "<td><div class='input-group'>"
      + "<input type='number' class='item-count form-control' data-name='" + cartArray[i].name + "' value='" + cartArray[i].count + "'>"
      + "</div></td>"
      + "<td><button class='delete-item btn btn-danger' data-name=" + cartArray[i].name + ">X</button></td>"
      + " = "
      + "<td>" + cartArray[i].total + "</td>"
      + "</tr>";
  }
  $('.show-cart').html(output);
  $('.total-cart').html(shoppingCart.totalCart());
  $('.total-count').html(shoppingCart.totalCount());
}

// Delete item button

$('.show-cart').on("click", ".delete-item", function (event) {
  var name = $(this).data('name')
  shoppingCart.removeItemFromCartAll(name);
  displayCart();
})

// Item count input
$('.show-cart').on("change", ".item-count", function (event) {
  var name = $(this).data('name');
  var count = Number($(this).val());
  shoppingCart.setCountForItem(name, count);
  displayCart();
});
displayCart();

// Tabs Single Page
$('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');
$('.tab ul.tabs li a').on('click', function (g) {
  var tab = $(this).closest('.tab'),
    index = $(this).closest('li').index();
  tab.find('ul.tabs > li').removeClass('current');
  $(this).closest('li').addClass('current');
  tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').slideUp();
  tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').slideDown();
  g.preventDefault();
});

// search function
$('#search_field').on('keyup', function () {
  var value = $(this).val();
  var patt = new RegExp(value, "i");

  $('.tab_content').find('.col-lg-3').each(function () {
    var $table = $(this);

    if (!($table.find('.featured-item').text().search(patt) >= 0)) {
      $table.not('.featured-item').hide();
    }
    if (($table.find('.col-lg-3').text().search(patt) >= 0)) {
      $(this).show();
      document.getElementById('not_found').style.display = 'none';
    } else {
      document.getElementById("not_found").innerHTML = " Product not found..";
      document.getElementById('not_found').style.display = 'block';
    }

  });

});



const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.nav-dot');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
let currentSlide = 0;
let autoSlideInterval;

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove('active'));
  dots.forEach(dot => dot.classList.remove('active'));

  if (index >= slides.length) currentSlide = 0;
  if (index < 0) currentSlide = slides.length - 1;

  slides[currentSlide].classList.add('active');
  dots[currentSlide].classList.add('active');
}

function nextSlide() {
  currentSlide++;
  showSlide(currentSlide);
}









function prevSlide() {
  currentSlide--;
  showSlide(currentSlide);
}

function startAutoSlide() {
  stopAutoSlide();
  autoSlideInterval = setInterval(nextSlide, 3000);
}

function stopAutoSlide() {
  if (autoSlideInterval) {
    clearInterval(autoSlideInterval);
  }
}




// Event listeners
next.addEventListener('click', () => {
  nextSlide();
  startAutoSlide();
});

prev.addEventListener('click', () => {
  prevSlide();
  startAutoSlide();
});

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentSlide = index;
    showSlide(currentSlide);
    startAutoSlide();
  });
});



// Start auto-slide
startAutoSlide();






// Function to show the Sign-Up form and hide the Login form
function showSignupForm() {
  document.getElementById("signup-form").style.display = "block";
  document.getElementById("login-form").style.display = "none";
}

// Function to show the Login form and hide the Sign-Up form
function showLoginForm() {
  document.getElementById("login-form").style.display = "block";
  document.getElementById("signup-form").style.display = "none";
}

// Sign-Up function
function signup() {
  let username = document.getElementById("signup-username").value;
  let password = document.getElementById("signup-password").value;

  if (!username || !password) {
    alert("Please fill in both fields");
    return;
  }

  // Check if the username already exists
  let users = JSON.parse(localStorage.getItem("users")) || [];
  if (users.some(user => user.username === username)) {
    alert("Username already exists!");
    return;
  }

  // Add the new user to the local storage
  users.push({ username: username, password: password });
  localStorage.setItem("users", JSON.stringify(users));

  alert("Sign up successful! Please log in.");
  showLoginForm();
}

// Login function
function login() {
  let username = document.getElementById("login-username").value;
  let password = document.getElementById("login-password").value;

  if (!username || !password) {
    alert("Please fill in both fields");
    return;
  }

  let users = JSON.parse(localStorage.getItem("users")) || [];
  let user = users.find(u => u.username === username && u.password === password);

  if (user) {
    // Store logged-in user details in local storage
    localStorage.setItem("loggedInUser", JSON.stringify(user));
    console.log(user)
    // Redirect to the homepage
    window.location.href = "index.html"; // Replace "index.html" with your homepage path
  } else {
    alert("Invalid username or password!");
  }
}

// Logout function
function logout() {
  localStorage.removeItem("loggedInUser");
  console.log(loggedInUser)

  // Redirect to the login page
  window.location.href = "login.html"; // Replace "login.html" with your login page path
}

// Check if the user is already logged in
window.onload = function () {
  let loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
  console.log(loggedInUser)

  // Avoid reload loop by checking if the current page is already the target page
  let currentPage = window.location.pathname.split("/").pop(); // Get the current page name
  if (loggedInUser && currentPage !== "index.html") {
    // Redirect to homepage if logged in
    window.location.href = "index.html"; // Replace "index.html" with your homepage path
  } else if (!loggedInUser && currentPage !== "login.html") {
    // Redirect to login page if not logged in
    window.location.href = "login.html"; // Replace "login.html" with your login page path
  }
};


function showuser() {
  let loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
  clutter = '';
  loggedInUser.forEach((product) => {
    clutter = `<a><i class="fa-regular fa-user"></i> </a>
             <h3> ${product.username} </h3>`
  })
  document.querySelector(".user").innerHTML = clutter;

}



// reviuser slider

document.getElementById('next').onclick = function () {
  const widthItem = document.querySelector('.item').offsetWidth;
  document.getElementById('formList').scrollLeft += widthItem;
}
document.getElementById('prev').onclick = function () {
  const widthItem = document.querySelector('.item').offsetWidth;
  document.getElementById('formList').scrollLeft -= widthItem;
}



// // display reviews
// function displayallusers() {
//   let users = JSON.parse(localStorage.getItem("users")) || [];
//   let clutter = '';
//   users.forEach((product) => {
//     clutter += `
//
//     `;
//   });
//   document.getElementById("tabile-body").innerHTML = clutter;
// }

// displayallusers()