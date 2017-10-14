/* constructors */

function CouchPillow(shape, quantity, custom) {
    this.name = "Couch Pillow"; 
    this.shape = shape;
    this.quantity = quantity;
    this.unitPrice = 29;
    this.totalPrice = 29 * quantity;
    this.custom = custom;
    this.image = "img/couch-pillow-background.jpg";
  }

  /* global variables */
  var couchPillowAdded = false;
  var couchPillowOrder;
  var shape, quantity, custom;



$(document).ready(function() { 
    console.log("JS");

/* When couch pillow box on the product page is clicked */
    $("#couch-pillow-box").click(function() {
        console.log("couch pillow expand"); /*test*/
        $("#couch-pillow-box").css("width", "670px").css("cursor", "default"); /* to enlarge the box and change the cursor*/
        $("#couch-pillow-box .top-panel").css("width", "670px"); /* to enlarge the top panel*/
        $("#couch-pillow-box .backgroundimage").css("max-width", "").css("height", "auto").css("float", "left").css("padding", "10px").css("padding-righ", "30px").css("display", "inline-block").css("margin", "auto").css("max-height", "255px"); /* to resize the image*/
        $("#couch-pillow-box .text-box").css("visibility", "visible"); /* to make the input forms visible*/

        $("#couch-pillow-box #add-to-cart").click(function(){
            console.log('add to cart clicked');
            if (couchPillowAdded == false)
            {
                couchPillowAdded = true;
                shape = $("#couch-pillow-box #shape :radio:checked").attr('id'); /* to retrieve the shape specified by the user */
                console.log(shape);
                quantity = parseInt($("#couch-pillow-box #quantity").val()); /* to retrieve the quantity specified by the user and turn it into a number */
                console.log(quantity);
                custom = $("#couch-pillow-box textarea#custom").val();
                couchPillowOrder = new CouchPillow(shape, quantity, custom);
                console.log(couchPillowOrder);


            }
            







        });
    });
});