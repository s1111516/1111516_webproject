//window.onload = function(){
    //alert("Hi");
//};

let imageURL_Array=[
    "https://upload.wikimedia.org/wikipedia/zh/b/b1/Born_Pink_Cover_crop.jpeg",
    "https://upload.wikimedia.org/wikipedia/zh/6/68/BLACKPINK_-_Square_Up_%28%E6%95%B8%E4%BD%8D%E5%B0%88%E8%BC%AF%E5%B0%81%E9%9D%A2%29.jpg",
    "https://upload.wikimedia.org/wikipedia/zh/0/04/Re%EF%BC%9ABlackpink_Album_cover.jpg",
    "https://upload.wikimedia.org/wikipedia/zh/1/1a/BLACKPINK_-_THE_ALBUM.png",
    "https://upload.wikimedia.org/wikipedia/zh/1/1a/BLACKPINK_-_THE_ALBUM.png",
    "https://upload.wikimedia.org/wikipedia/zh/b/b1/Born_Pink_Cover_crop.jpeg",
    "https://upload.wikimedia.org/wikipedia/zh/b/b1/Born_Pink_Cover_crop.jpeg",
    "https://upload.wikimedia.org/wikipedia/zh/b/b1/Born_Pink_Cover_crop.jpeg",
    "https://upload.wikimedia.org/wikipedia/zh/0/04/Re%EF%BC%9ABlackpink_Album_cover.jpg",
    "https://upload.wikimedia.org/wikipedia/zh/1/1a/BLACKPINK_-_THE_ALBUM.png",
    "https://upload.wikimedia.org/wikipedia/zh/0/04/Re%EF%BC%9ABlackpink_Album_cover.jpg",
    "https://upload.wikimedia.org/wikipedia/zh/0/04/Re%EF%BC%9ABlackpink_Album_cover.jpg",
    "https://upload.wikimedia.org/wikipedia/zh/b/b1/Born_Pink_Cover_crop.jpeg",
    "https://upload.wikimedia.org/wikipedia/en/b/bc/Blackpink_-_Kill_This_Love.png",
    "https://upload.wikimedia.org/wikipedia/zh/1/1a/BLACKPINK_-_THE_ALBUM.png",
    "https://upload.wikimedia.org/wikipedia/zh/1/1a/BLACKPINK_-_THE_ALBUM.png",
    "https://upload.wikimedia.org/wikipedia/en/2/26/Black_Pink_-_Square_Up_artwork.png",
    "https://upload.wikimedia.org/wikipedia/en/b/bc/Blackpink_-_Kill_This_Love.png",
    "https://upload.wikimedia.org/wikipedia/zh/b/b1/Born_Pink_Cover_crop.jpeg",
    "https://upload.wikimedia.org/wikipedia/en/b/bc/Blackpink_-_Kill_This_Love.png",
    "https://upload.wikimedia.org/wikipedia/zh/0/04/Re%EF%BC%9ABlackpink_Album_cover.jpg",
    "https://upload.wikimedia.org/wikipedia/en/b/bc/Blackpink_-_Kill_This_Love.png",
    "https://upload.wikimedia.org/wikipedia/en/2/26/Black_Pink_-_Square_Up_artwork.png",
    "https://upload.wikimedia.org/wikipedia/zh/b/b1/Born_Pink_Cover_crop.jpeg",
    "https://upload.wikimedia.org/wikipedia/zh/1/1a/BLACKPINK_-_THE_ALBUM.png",//25
    "https://upload.wikimedia.org/wikipedia/en/2/26/Black_Pink_-_Square_Up_artwork.png",
    "https://upload.wikimedia.org/wikipedia/zh/b/b1/Born_Pink_Cover_crop.jpeg",
    "https://upload.wikimedia.org/wikipedia/zh/1/1a/BLACKPINK_-_THE_ALBUM.png",
    "https://upload.wikimedia.org/wikipedia/zh/1/1a/BLACKPINK_-_THE_ALBUM.png"
]

$(function(){
    $("input").on("click",function(){
        //alert("Hi");
        $("h1").text($("li:first").text());
    });
});
$(function(){
    $("input").on("click",function(){
        //alert("Hi");
        $("h1").text($("li:last").text());
    });
});
$(function(){
    $("input").on("click",function(){
        //alert("Hi");
        var numberOfListItem = $("li").length;
        var randomChildNumber = Math.floor(Math.random()*numberOfListItem);
        $("h1").text($("li").eq(randomChildNumber).text());
        $("img").attr("src",imageURL_Array[randomChildNumber]);

        
    });
});