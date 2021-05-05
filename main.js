var my_canvas=document.getElementById("myCanvas");
var refer_canvas=myCanvas.getContext("2d");
var indenti_mouse_event="empety";
var Last_position_x, Last_position_y;
var color="black";
var width_Pen=2;

myCanvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    indenti_mouse_event="mousedown";  
}

canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
    indenti_mouse_event="mouseup";  
}

canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
    indenti_mouse_event="mouseleave";  
}

canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
var crunnet_position_x=e.clientX-canvas.offsetLeft;
var crunnet_position_y=e.clientY-canvas.offsetTop;
if (mouse_event=="mousedown"){

    refer_myCanvas.beginPath();
    refer_myCanvas.strokeStyle=color;
    refer_myCanvas.lineWidth=width_of_line;
    console.log("Last Position X and Y ccrcinates= "+Last_position_x+" , "+Last_position_y);
    console.log("currant Position X and Y ccrcinates= "+cpx+" , "+cpy);
    refer_myCanvas.moveTo(Last_position_of_x, Last_position_of_y);
    refer_myCanvas.lineTo(crunnet_position_x, crunnet_position_y);
    refer_myCanvas.stroke();
}
Last_position_x=crunnet_position_x;
Last_position_y=crunnet_position_y;
}