function menuButtonClick() {
    console.log('Clicked');
    var header = document.getElementById("topMenu"); // ugår från header och jobbar ner i dom:en
    header.classList.toggle("mobileMenu"); 
}