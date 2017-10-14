function CouchPillow(shape, quantity, color, custom) {
    this.name = "Couch Pillow"; 
    this.shape = shape;
    this.quantity = quantity;
    this.unitPrice = 29;
    this.totalPrice = 29 * quantity;
    this.custom = custom;
    this.image = "img/couch-pillow-background.jpg";
  }


$(document).ready(function() { 
    console.log("JS");

/* When couch pillow box on the product page is clicked */
    $("#couch-pillow-box").click(function() {
        console.log("couch pillow expand"); /*test*/
        $("#couch-pillow-box").css("width", "670px").css("cursor", "default"); /* to enlarge the box and change the cursor*/
        $("#couch-pillow-box .top-panel").css("width", "670px"); /* to enlarge the top panel*/
        $("#couch-pillow-box .backgroundimage").css("max-width", "").css("height", "auto").css("float", "left").css("padding", "10px").css("padding-righ", "30px").css("display", "inline-block").css("margin", "auto").css("max-height", "255px"); /* to resize the image*/
        $("#couch-pillow-box .text-box").css("visibility", "visible"); /* to make the input forms visible*/

        $("#couch-pillow-box").click(function()
    });
});