




function control1(){
    var mydiv = document.getElementById("mydiv")
    console.log(mydiv)


    var w = document.getElementById("width").value
    var h = document.getElementById("height").value
    var radius = document.getElementById("radius").value
    var border = document.getElementById("border").value
    var shadow = document.getElementById("shadow").value
    var inform = document.getElementById("inform").value
    var bg = document.getElementById('bg').value
    var top      = document.getElementById('top').value
    var left     = document.getElementById('left').value
    var position = document.getElementById('position').value
    var bgImg    = document.getElementById('bgImg').value



    var mytext = document.getElementById("mytext").innerHTML = inform
    mydiv.style.width = w
    mydiv.style.height = h
  
    mydiv.style.border = border
    mydiv.style.borderRadius = radius
    mydiv.style.boxShadow = shadow
    mydiv.style.background = bg
    mydiv.style.top = top
    mydiv.style.left = left
    mydiv.style.position = position
    mydiv.style.backgroundImage = 'url('+bgImg+')'
    mydiv.style.backgroundSize = 'cover'
    mydiv.style.backgroundRepeat = 'no-repeat'


}