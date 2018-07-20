function setup(){
    createCanvas(1000,1000);
    //background("black");}
    fill("grey");
    let i;
    let j;

    f+=100;
    for(let s=0; s < 5; s++){
        if(random(0,100) > 50){
            i = 300;
            j = 100;
        }else {
            i = 100;
            j = 300;
        }
        rect(Math.floor((Math.random() * 10) * 100), Math.floor((Math.random() * 10) * 100) , i, j)
        //Math.floor((Math.random() * 10) * 100) 
    }   
}
