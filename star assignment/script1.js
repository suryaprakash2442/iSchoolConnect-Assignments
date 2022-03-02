


const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

var $name = document.getElementById('uname')
var $dob = document.getElementById('dob')

$name.addEventListener('keyup', function(){
    uname = this.value
})
$dob.addEventListener('keyup', function(){
    dob = this.value
})

function star(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
    var posX = 300
    var posY = 10
    ctx.beginPath();
    ctx.moveTo(posX,posY)
    ctx.lineTo(posX-20,posY+25)
    ctx.lineTo(posX-50,posY+25)
    ctx.lineTo(posX-25,posY+50)
    ctx.lineTo(posX-35,posY+75)
    ctx.lineTo(posX,posY+60)
    ctx.lineTo(posX+35,posY+75)
    ctx.lineTo(posX+25,posY+50)
    ctx.lineTo(posX+50,posY+25)
    ctx.lineTo(posX+20,posY+25)
    ctx.lineTo(posX,posY)
    ctx.fill()
    
    ctx.stroke();
    ctx.closePath();
    ctx.font = "50px Arial";
    
    ctx.fillStyle = "steelblue"
    ctx.fillText("Happy Birthday,",120,200)
    ctx.fillText(uname + "!",220,270)
    
    ctx.fillText(dob,200,400)
    ctx.fillText( "is your birthdate",140,450)
    
}
// addEventListener("click", function(){
    star()
// })

