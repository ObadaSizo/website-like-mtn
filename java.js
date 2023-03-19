// list 1 show
let el = document.querySelector(".list1Show");

let hiddenDiv = document.querySelector(".list1");

el.addEventListener("mouseover", function handleMouseOver() {
    hiddenDiv.style.display = "block";
});

hiddenDiv.addEventListener("mouseover",function handleMouseOver(){
    hiddenDiv.style.display="block";
});
hiddenDiv.addEventListener("mouseleave",function handleMouseOut(){
    hiddenDiv.style.display = "none"; 
});
el.addEventListener("mouseout", function handleMouseOut() {
    hiddenDiv.style.display = "none";
});

// lightening the main a with child a
let e1 = document.querySelectorAll(".childl1") ;

let lighten = document.querySelector(".maina1") ;


lighten.addEventListener("mouseover",function handleMouseOver(){
    lighten.style.backgroundColor='rgb(255, 166, 77)';
    lighten.style.borderBottom='3px solid white';
});

for(let i=0 ; i<e1.length;i++){
    e1[i].addEventListener("mouseover",function handleMouseOver(){
        lighten.style.backgroundColor='rgb(255, 166, 77)';
        lighten.style.borderBottom='3px solid white';
    });
    e1[i].addEventListener("mouseout",function handleMouseOut(){
        lighten.style.backgroundColor='transparent';
        lighten.style.borderBottom='3px solid rgb(255, 166, 77)';
    });
    lighten.addEventListener("mouseout",function handleMouseOut(){
        lighten.style.backgroundColor='transparent';
        lighten.style.borderBottom='3px solid rgb(255, 166, 77)';
    });
}

let e2 = document.querySelectorAll(".childl2") ;

let lighten2 = document.querySelector(".maina2") ;


lighten2.addEventListener("mouseover",function handleMouseOver(){
    lighten2.style.backgroundColor='rgb(255, 166, 77)';
    lighten2.style.borderBottom='3px solid white';
});

for(let j=0 ; j<e2.length;j++){
    e2[j].addEventListener("mouseover",function handleMouseOver(){
        lighten2.style.backgroundColor='rgb(255, 166, 77)';
        lighten2.style.borderBottom='3px solid white';
    });
    e2[j].addEventListener("mouseout",function handleMouseOut(){
        lighten2.style.backgroundColor='transparent';
        lighten2.style.borderBottom='3px solid rgb(255, 166, 77)';
    });
    lighten2.addEventListener("mouseout",function handleMouseOut(){
        lighten2.style.backgroundColor='transparent';
        lighten2.style.borderBottom='3px solid rgb(255, 166, 77)';
    });
}

let e3 = document.querySelectorAll(".childl3") ;

let lighten3= document.querySelector(".maina3") ;


lighten3.addEventListener("mouseover",function handleMouseOver(){
    lighten3.style.backgroundColor='rgb(255, 166, 77)';
    lighten3.style.borderBottom='3px solid white';
});

for(let u=0 ; u<e3.length;u++){
    e3[u].addEventListener("mouseover",function handleMouseOver(){
        lighten3.style.backgroundColor='rgb(255, 166, 77)';
        lighten3.style.borderBottom='3px solid white';
    });
    e3[u].addEventListener("mouseout",function handleMouseOut(){
        lighten3.style.backgroundColor='transparent';
        lighten3.style.borderBottom='3px solid rgb(255, 166, 77)';
    });
    lighten3.addEventListener("mouseout",function handleMouseOut(){
        lighten3.style.backgroundColor='transparent';
        lighten3.style.borderBottom='3px solid rgb(255, 166, 77)';
    });
}

let e4 = document.querySelectorAll(".childl4") ;

let lighten4= document.querySelector(".maina4") ;


lighten4.addEventListener("mouseover",function handleMouseOver(){
    lighten4.style.backgroundColor='rgb(255, 166, 77)';
    lighten4.style.borderBottom='3px solid white';
});

for(let m=0 ; m<e4.length;m++){
    e4[m].addEventListener("mouseover",function handleMouseOver(){
        lighten4.style.backgroundColor='rgb(255, 166, 77)';
        lighten4.style.borderBottom='3px solid white';
    });
    e4[m].addEventListener("mouseout",function handleMouseOut(){
        lighten4.style.backgroundColor='transparent';
        lighten4.style.borderBottom='3px solid rgb(255, 166, 77)';
    });
    lighten4.addEventListener("mouseout",function handleMouseOut(){
        lighten4.style.backgroundColor='transparent';
        lighten4.style.borderBottom='3px solid rgb(255, 166, 77)';
    });
}

let e5 = document.querySelectorAll(".childl5") ;

let lighten5= document.querySelector(".maina5") ;


lighten5.addEventListener("mouseover",function handleMouseOver(){
    lighten5.style.backgroundColor='rgb(255, 166, 77)';
    lighten5.style.borderBottom='3px solid white';
});

for(let n=0 ; n<e5.length;n++){
    e5[n].addEventListener("mouseover",function handleMouseOver(){
        lighten5.style.backgroundColor='rgb(255, 166, 77)';
        lighten5.style.borderBottom='3px solid white';
    });
    e5[n].addEventListener("mouseout",function handleMouseOut(){
        lighten5.style.backgroundColor='transparent';
        lighten5.style.borderBottom='3px solid rgb(255, 166, 77)';
    });
    lighten5.addEventListener("mouseout",function handleMouseOut(){
        lighten5.style.backgroundColor='transparent';
        lighten5.style.borderBottom='3px solid rgb(255, 166, 77)';
    });
}

let e6 = document.querySelectorAll(".childl6") ;

let lighten6= document.querySelector(".maina6") ;


lighten6.addEventListener("mouseover",function handleMouseOver(){
    lighten6.style.backgroundColor='rgb(255, 166, 77)';
    lighten6.style.borderBottom='3px solid white';
});

for(let o=0 ; o<e6.length;o++){
    e6[o].addEventListener("mouseover",function handleMouseOver(){
        lighten6.style.backgroundColor='rgb(255, 166, 77)';
        lighten6.style.borderBottom='3px solid white';
    });
    e6[o].addEventListener("mouseout",function handleMouseOut(){
        lighten6.style.backgroundColor='transparent';
        lighten6.style.borderBottom='3px solid rgb(255, 166, 77)';
    });
    lighten6.addEventListener("mouseout",function handleMouseOut(){
        lighten6.style.backgroundColor='transparent';
        lighten6.style.borderBottom='3px solid rgb(255, 166, 77)';
    });
}
let e7 = document.querySelectorAll(".childl7") ;

let lighten7= document.querySelector(".maina7") ;


lighten7.addEventListener("mouseover",function handleMouseOver(){
    lighten7.style.backgroundColor='rgb(255, 166, 77)';
    lighten7.style.borderBottom='3px solid white';
});

for(let p=0 ; p<e7.length;p++){
    e7[p].addEventListener("mouseover",function handleMouseOver(){
        lighten7.style.backgroundColor='rgb(255, 166, 77)';
        lighten7.style.borderBottom='3px solid white';
    });
    e7[p].addEventListener("mouseout",function handleMouseOut(){
        lighten7.style.backgroundColor='transparent';
        lighten7.style.borderBottom='3px solid rgb(255, 166, 77)';
    });
    lighten7.addEventListener("mouseout",function handleMouseOut(){
        lighten7.style.backgroundColor='transparent';
        lighten7.style.borderBottom='3px solid rgb(255, 166, 77)';
    });
}
let e8 = document.querySelectorAll(".childl8") ;

let lighten8= document.querySelector(".maina8") ;


lighten8.addEventListener("mouseover",function handleMouseOver(){
    lighten8.style.backgroundColor='rgb(255, 166, 77)';
    lighten8.style.borderBottom='3px solid white';
});

for(let q=0 ; q<e8.length;q++){
    e8[q].addEventListener("mouseover",function handleMouseOver(){
        lighten8.style.backgroundColor='rgb(255, 166, 77)';
        lighten8.style.borderBottom='3px solid white';
    });
    e8[q].addEventListener("mouseout",function handleMouseOut(){
        lighten8.style.backgroundColor='transparent';
        lighten8.style.borderBottom='3px solid rgb(255, 166, 77)';
    });
    lighten8.addEventListener("mouseout",function handleMouseOut(){
        lighten8.style.backgroundColor='transparent';
        lighten8.style.borderBottom='3px solid rgb(255, 166, 77)';
    });
}

// the heaer sticky
let head1 =document.querySelector("header");
let head2 =document.querySelector(".header2");

window.onscroll = function(e) {
    if(window.pageYOffset===0||window.pageYOffset===1){
        head1.style. visibility='visible';
    head2.style.position ='relative';
    head2.style.top ='72px';
    head2.style.hight ='100%';
    head2.style.backgroundColor='rgb(0,19,83)';
    hiddenDiv.style.top='79px'
    }
    else
    {head1.style. visibility= 'hidden';
    head2.style.position ='fixed';
    head2.style.top ='0';
    head2.style.hight ='90%';
    head2.style.backgroundColor='rgb(0,0,0,0.65)';
    hiddenDiv.style.top='79px'
    }};


let el2 = document.querySelector(".list2Show");
let hiddenDiv2 = document.querySelector(".child_list2");
el2.addEventListener("mouseover", function handleMouseOver() {
    hiddenDiv2.style.display = "block";
});

hiddenDiv2.addEventListener("mouseover",function handleMouseOver(){
    hiddenDiv2.style.display="block";
} )
hiddenDiv2.addEventListener("mouseleave",function handleMouseOut(){
    hiddenDiv2.style.display = "none"; 
});
el2.addEventListener("mouseout", function handleMouseOut() {
    hiddenDiv2.style.display = "none";
});


let el3 = document.querySelector(".list3Show");
let hiddenDiv3 = document.querySelector(".child_list3");
el3.addEventListener("mouseover", function handleMouseOver() {
    hiddenDiv3.style.display = "block";
});

hiddenDiv3.addEventListener("mouseover",function handleMouseOver(){
    hiddenDiv3.style.display="block";
} )
hiddenDiv3.addEventListener("mouseleave",function handleMouseOut(){
    hiddenDiv3.style.display = "none"; 
});
el3.addEventListener("mouseout", function handleMouseOut() {
    hiddenDiv3.style.display = "none";
});



let el4 = document.querySelector(".list4Show");
let hiddenDiv4 = document.querySelector(".child_list4");
el4.addEventListener("mouseover", function handleMouseOver() {
    hiddenDiv4.style.display = "block";
});

hiddenDiv4.addEventListener("mouseover",function handleMouseOver(){
    hiddenDiv4.style.display="block";
} )
hiddenDiv4.addEventListener("mouseleave",function handleMouseOut(){
    hiddenDiv4.style.display = "none"; 
});
el4.addEventListener("mouseout", function handleMouseOut() {
    hiddenDiv4.style.display = "none";
});

let el5 =document.querySelector(".user");
let hiddenDiv5 =document.querySelector(".sign_in_form");
let count = 0 ;
    
el5.onclick = function () {
    hiddenDiv5.style.display ="block";
    count ++ ;
    if(count%2===0) {hiddenDiv5.style.display ="none";}
    else {hiddenDiv5.style.display ="block";}
}
hiddenDiv5.onmouseleave =function() {
    hiddenDiv5.style.display ="none";
    count=0;
}
el5.ondblclick =function(){
    el5.preventDefault();
}


let slideIndex = 0;
showSlides();

function showSlides() {
let s;
let slides = document.getElementsByClassName("mySlides");
let dots = document.getElementsByClassName("dot");
    for (s = 0; s < slides.length; s++) {
        slides[s].style.display = "none";  
}
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
        for (s1 = 0; s1 < dots.length; s1++) {
            dots[s1].className = dots[s1].className.replace(" active", "");
}
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 5000); // Change image every 2 seconds
}


// the buy center section
// let click ;
// let icon = document.getElementsByClassName("fa-solid");
// let listIcon = document.getElementsByClassName("site");
// for(let v=0;v<listIcon.length;v++){
    
//     listIcon[v].onclick=function() {
//         if(icon[v+1].classList.contains("fa-caret-down")){
//             icon[v+1].classList.remove("fa-caret-down");
//             icon[v+1].className +=" fa-caret-left"; 
//         }
//         else{

//             icon[v+1].classList.remove("fa-caret-left");
//             icon[v+1].className +=" fa-caret-down";
//             click=v;
//         }
        

//         for(let w=0 ; w<listIcon.length;w++){
//             if(w===click){continue;}
//             else{
//                 icon[w+1].classList.remove("fa-caret-down");
//                 icon[w+1].className +=" fa-caret-left";
//             }
//         }
//     }
    
// }
let click ;
let icon = document.getElementsByClassName("fa-solid");
let listIcon = document.getElementsByClassName("site");
let para = document.getElementsByClassName("sitp");
let location1 = document.getElementsByClassName("location1");
for(let v=0;v<listIcon.length;v++){
    
    listIcon[v].onclick=function() {
        if(icon[v+1].classList.contains("s1")){
            icon[v+1].style.cssText="transform: rotate(0deg) translate(0px,0px) ;";
            icon[v+1].classList.remove("s1");
                para[v].style.cssText="color:#19c8fa; ;transform: scale(1);"
                location1[v].style.cssText="transform: scale(0);hight:0px;display:none";
        }
        else {
            icon[v+1].style.cssText="transform: rotate(-90deg) translate(7px,-5px) ;transform-origin: center center;color: #19c8fa;";
            para[v].style.cssText="color: rgb(255, 166, 77);transform: scale(1.15);"
            icon[v+1].classList.add("s1")
            location1[v].style.cssText="transform: scale(1); hight:100%; display:block;";
            click=v;
            console.log(location1[v])
        }
        console.log(icon[v].prop)
        for(let w=0 ; w<listIcon.length;w++){
            if(w===click){continue;}
            else{
                icon[w+1].style.cssText="transform: rotate(0deg) translate(0px,0px) ;";
                para[w].style.cssText="color:#19c8fa; ;transform: scale(1);"
                icon[w+1].classList.remove("s1");
                location1[w].style.cssText="transform: scale(0); hight:0px;display:none;";
            }
        }
    }
    
}




