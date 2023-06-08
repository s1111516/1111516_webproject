let mapArray, ctx, currentImgMain;
let imgMountain, imgMain, imgEnemy;
const gridLength=110;

function loadImages(sources,callback){
    var images={};
    var loadedImages=0;
    var numImages=0;
    for(var src in sources){
        numImages++;
    }
    for(var src in sources){
        images[src]=new Image();
        images[src].onload=function(){
            if(++loadedImages>=numImages){
                callback(images);
            }
        };
        images[src].src=sources[src];
    }
}

$(function(){
    mapArray=[//1:lisa1 2:jennie 3:rose 4:lisa2 5:end(jisoo) 6:light 7:sooya 8:ppeu 9:rosie 10:gomdeuki
        [0,1,7,6,6],
        [0,0,0,2,6],
        [3,8,0,10,6],
        [6,4,0,0,9],
        [6,6,6,5,6]
    ];
    ctx=$("#myCanvas")[0].getContext("2d");

    imgMain=new Image();
    imgMain.src="images/blinky1.png";
    currentImgMain={
        x:0,
        y:0
    };

    imgMain.onload=function(){
        ctx.drawImage(imgMain,0,0,511,488,currentImgMain.x,currentImgMain.y,gridLength,gridLength);
    };

    let sources={
        end:"images/jisoo1.png",
        jennie:"images/jennie1.png",
        rose:"images/rose2.png",
        lisa2:"images/lisa2.png",
        lisa1:"images/lisa1.png",
        light:"images/light.png",
        sooya:"images/sooya.png",
        ppeu:"images/ppeu.png",
        rosie:"images/rosie.png",
        gomdeuki:"images/gomdeuki.png"
        
    };

    loadImages(sources,function(images){
        for(let x in mapArray){
            for(let y in mapArray[x]){
                if(mapArray[x][y]==1){
                    ctx.drawImage(images.lisa1,0,0,158,233,y*gridLength,x*gridLength,gridLength,gridLength);
                }
                else if(mapArray[x][y]==2){
                    ctx.drawImage(images.jennie,0,0,126,227,y*gridLength,x*gridLength,gridLength,gridLength);
                }
                else if(mapArray[x][y]==3){
                    ctx.drawImage(images.rose,0,0,165,349,y*gridLength,x*gridLength,gridLength,gridLength);
                }
                else if(mapArray[x][y]==4){
                    ctx.drawImage(images.lisa2,0,0,173,334,y*gridLength,x*gridLength,gridLength,gridLength);
                }
                else if(mapArray[x][y]==5){
                    ctx.drawImage(images.end,0,0,161,234,y*gridLength,x*gridLength,gridLength,gridLength);
                }
                else if(mapArray[x][y]==6){
                    ctx.drawImage(images.light,0,0,725,754,y*gridLength,x*gridLength,gridLength,gridLength);
                }
                else if(mapArray[x][y]==7){
                    ctx.drawImage(images.sooya,0,0,640,810,y*gridLength,x*gridLength,gridLength,gridLength);
                }
                else if(mapArray[x][y]==8){
                    ctx.drawImage(images.ppeu,0,0,728,713,y*gridLength,x*gridLength,gridLength,gridLength);
                }
                else if(mapArray[x][y]==9){
                    ctx.drawImage(images.rosie,0,0,764,678,y*gridLength,x*gridLength,gridLength,gridLength);
                }
                else if(mapArray[x][y]==10){
                    ctx.drawImage(images.gomdeuki,0,0,739,702,y*gridLength,x*gridLength,gridLength,gridLength);
                }
            }
        }
    });


});


$(document).on("keydown",function(event){
    console.log(event.code);

    let targetImg,targetBlock,cutImagePositionX;
    targetImg={
        "x":-1,
        "y":-1
    };
    targetBlock={
        x:-1,
        y:-1
   };
   event.preventDefault();
   switch (event.code){
    case "ArrowLeft":
        targetImg.x=currentImgMain.x-gridLength;
        targetImg.y=currentImgMain.y;
        imgMain.src="images/blinky1.png";
        break;
    case "ArrowUp":
        targetImg.x=currentImgMain.x;
        targetImg.y=currentImgMain.y-gridLength;
        imgMain.src="images/blinky1.png";
        break;
    case "ArrowRight":
        targetImg.x=currentImgMain.x+gridLength;
        targetImg.y=currentImgMain.y;
        imgMain.src="images/blinky1.png";
        break;
    case "ArrowDown":
        targetImg.x=currentImgMain.x;
        targetImg.y=currentImgMain.y+gridLength;
        imgMain.src="images/blinky1.png";
        break;
    default:
        return;
   }
   

   if(targetImg.x<=500 && targetImg.x>=0 && targetImg.y<=500 && targetImg.y>=0){
    targetBlock.x=targetImg.y/gridLength;
    targetBlock.y=targetImg.x/gridLength;
   }
   else{
    targetBlock.x=-1;
    targetBlock.y=-1;
   }

   ctx.clearRect(currentImgMain.x,currentImgMain.y,gridLength,gridLength);

   if(targetBlock.x!=-1 && targetBlock.y!=-1){
    switch(mapArray[targetBlock.x][targetBlock.y]){
        case 0:
            $("#talkBox").text("");
            currentImgMain.x=targetImg.x;
            currentImgMain.y=targetImg.y;
            break;
        case 1:
            $("#talkBox").text("I'm lisa");
            break;
        case 2:
            $("#talkBox").text("I'm Jennie");
            
            break;
        case 3:
            $("#talkBox").text("I'm Rosé");
            
            break;
        case 4:
             $("#talkBox").text("Lisa again");
             
             break;
        case 5:
             $("#talkBox").text("Yes, I'm Jisoo");
            
            imgMain.src="images/blinky.png";
            
             
             break;
        case 6:
            $("#talkBox").text("no road");
            
            break;
         case 7:
            $("#talkBox").text("It's sooya");
           
            break;
        case 8:
            $("#talkBox").text("It's ppeu");
            
            break;
        case 9:
            $("#talkBox").text("It's rosie");
            
            break;
        case 10:
            $("#talkBox").text("It's gomdeuki");
           
            break;
    }
   }
   else{
    $("#talkBox").text("");
   }
   
   ctx.drawImage(imgMain,cutImagePositionX,0,511,488,currentImgMain.x,currentImgMain.y,gridLength,gridLength);

});