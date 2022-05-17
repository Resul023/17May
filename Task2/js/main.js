let circle = document.querySelector(".area .circle");
let leftPosition =0;
let topPosition=0;

let defaultHeightCircle = 80;
let defaultWidthCircle = 80;


window.addEventListener('keydown',function(i){
    console.log(i)


    if(i.keyCode == 40){
        topPosition+=5
        circle.style.top = topPosition+"px";
    }
    else if(i.keyCode == 39){
        leftPosition+=5
        circle.style.left = leftPosition+"px";
    }
    else if(i.keyCode == 37){
        leftPosition-=5
        circle.style.left = leftPosition+"px";
    }
    else if(i.keyCode == 38){
        topPosition-=5
        circle.style.top = topPosition+"px";
    }
    else if(i.keyCode == 13){
        
        let newCircle = document.createElement('div');
        newCircle.className = 'newCircle';
        let areaId = document.getElementById('area');
        let newCirclePosition=areaId.appendChild(newCircle);
        newCirclePosition.style.left = leftPosition + 20+'px';
        newCirclePosition.style.top = topPosition+20+'px';



        let circle = document.getElementById("circle");
        circle.style.height= (defaultHeightCircle-2)+'px';
        defaultHeightCircle-=2;

        circle.style.width = (defaultWidthCircle-2) + 'px';
        defaultWidthCircle-=2;


    }


})