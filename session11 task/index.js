/*function looping(startNum,endNum, breakNum,contNum){
    for(var i=startNum; i<=endNum ; i++){
        if(startNum==undefined || endNum==undefined || contNum== undefined || breakNum ==undefined ){
            alert("enter all number")
        }
        else{
            if( i== breakNum)
            break;
            else if (i== contNum)
            continue;
            else
            console.log(i)
        }
    }
}*/
//looping(1,10)

var courses=[ "html","css", "js" ,"bootstrab"]
var newCourse= prompt("enter a cours")
if(courses.includes(newCourse)){
    console.log(newCourse)
}
else {
    courses.push(newCourse)
    console.log(courses)
}


