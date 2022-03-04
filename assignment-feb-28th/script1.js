


const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

var name,dob;

uname = document.getElementById('uname')
dob = document.getElementById('dob')

// uname.addEventListener('keyup', function(){
//     uname = this.value
// })
// dob.addEventListener('onchange', function(){
//     dob = this.value
// })
 
function star(){
    var x = Math.floor((Math.random() * 500) + 1);
    var y = Math.floor((Math.random() *500) + 1);

    // ctx.clearRect(0,0,canvas.width,canvas.height)
    var posX = 100
    var posY = 10
    ctx.fillStyle = "red"
    ctx.beginPath();
    ctx.moveTo(posX+x,posY+y)
    ctx.lineTo(posX-20+x,posY+25+y)
    ctx.lineTo(posX-50+x,posY+25+y)
    ctx.lineTo(posX-25+x,posY+50+y)
    ctx.lineTo(posX-35+x,posY+75+y)
    ctx.lineTo(posX+x,posY+60+y)
    ctx.lineTo(posX+35+x,posY+75+y)
    ctx.lineTo(posX+25+x,posY+50+y)
    ctx.lineTo(posX+50+x,posY+25+y)
    ctx.lineTo(posX+20+x,posY+25+y)
    ctx.lineTo(posX+x,posY+y)
    
    ctx.fill()
    
    ctx.stroke();
    ctx.closePath();
    
    
    
}
function details(){

    var uname = document.getElementById("uname").value
    var dob = document.getElementById("dob").value
    ctx.font = "50px Arial";
    ctx.fillText("Happy Birthday,",120,200)
    ctx.fillText(uname + "!",220,270)
    
    ctx.fillText(dob,200,400)
    ctx.fillText( "is your birthdate",140,450)

    ctx.globalCompositeOperation='destination-over';
}
