var express = require("express");
var app = express();
app.use(express.static("public"));
app.set("view engine","ejs");
app.set("views","./views");

app.listen(3000);

app.get("/homepage", function(request, response){
  response.render("homepage");
});

app.get("/dailysales", function(request, response){
  response.render("dailysales");
});

app.get("/feedback", function(request, response){
  response.render("feedback");
});

app.get("/contact", function(request, response){
  response.render("contact");
});

app.get("/location", function(request, response){
  response.render("location");
});

app.get("/contact", function(request, response){
  response.render("contact");
});

app.get("/franchise", function(request, response){
  response.render("franchise");
});

app.get("/gallery", function(request, response){
  response.render("gallery");
});

app.get("/forgot", function(request, response){
  response.render("forgot");
});
app.get("/checkout", function(request, response){
  response.render("checkout");
});

app.get("/admin", function(request, response){
  response.render("pizza_admin/admin");
});

app.get("/homeadmin", function(request, response){
  response.render("pizza_admin/homeadmin");
});

app.get("/orders", function(request, response){
  response.render("pizza_admin/orders");
});

app.get("/customers", function(request, response){
  response.render("pizza_admin/customers");
});

app.get("/products", function(request, response){
  response.render("pizza_admin/products");
});

app.get("/menu", function(request, response)  {
  var products = [
    {
			id: 1,
		name: "THE PHILLY CHEESE",
		img: "../img/1.png",
		price: " $18.85",
		des:"Huge pie cut into 8 extra-large slices topped with tender Philly Steak, mushrooms."
		},

    {
			id: 2,
		name: "THE BIG PEPPERONI",
		img: "../img/6.png",
		price: "$17.95",
		des:"Huge pie cut into 8 extra-large slices. Authentic soft and foldable New York style dough."
		},

	{
		id: 3,
		name: "THE THREE MEATS",
		img: "../img/2.png",
		price: "$18.95",
		des:"Huge pie cut into 8 extra-large slices. Authentic soft and foldable New York style."
		},
    {
			id: 4,
		name: "THE HAM & PINEAPPLE",
		img: "../img/3.png",
		price: "$17.95",
		des:"Huge pie cut into 8 extra-large slices. Authentic soft and foldable New York style dough."
		},
    {
			id: 5,
		name: "THE SAUSAGE MUSHROOM",
		img: "../img/4.png",
		price: "$18.40",
		des:"Huge pie cut into 8 extra-large slices. Authentic soft and foldable New York style dough."
		},
    {
			id: 6,
		name: "NEW HALF N' HALF",
		img: "../img/5.png",
		price: " $20.95",
		des:"Combine your two favourite New Yorkers!"
		},

  ];

    response.render("menu", {
      products: products
    });
});
