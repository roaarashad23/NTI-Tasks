let btn=document.getElementsByTagName('button')
let src1="https://demo.theme-sky.com/merto/wp-content/uploads/2024/09/banner4-demo1.jpg"
let src2="https://demo.theme-sky.com/merto/wp-content/uploads/2024/03/blog-2.jpg"
let imgeChange =()=>{
    let img = document.getElementById("myImg");
   if(img.src ==src1){
    img.src =src2
   }
   else{
    img.src =src1
   }
}

//let btn=document.getElementsByTagName('button')
// let img =document.getElementsByClassName('myImg')
//let src1="https://demo.theme-sky.com/merto/wp-content/uploads/2024/09/banner4-demo1.jpg"
//let src2="https://demo.theme-sky.com/merto/wp-content/uploads/2024/03/blog-2.jpg"
// let currentSrc = img.getAttribute("src");
// if(currentSrc == src1){
//     img.setAttribute("src",src2);
// }
// else{
//     img.setAttribute("src",src1);
// }

let ulChange =(element)=>{
    let allItems = element.parentElement.querySelectorAll('li');

    allItems.forEach(li => {
        li.style.backgroundColor = "";
    });

    element.style.backgroundColor = "lightblue";
}
