var arr = ["tops/books.html",
, 
"tops/food.html",  "tops/people.html", ];

function randSite(){
        location.href = "" + arr[Math.floor (Math.random()*arr.length)];
}