function TurnOnOff() {
    var Image = document.getElementById('image');

    if(Image.scr.match('OffLampada')) {
         Image.src = 'Images/OnLampada.jpg';
    }   else {
         Image.src = 'Images/OffLampada.jpg';
    }
}