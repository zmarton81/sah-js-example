/* $('css selector').action()*/
console.log("Script file is loaded");

$(`h1`).text(`This is done by Javascript!`);
$(`h1`).html(`This is done by <em>Javascript!</em>`);
/* $('h2').css('color', 'red');*/
$('h2').toggleClass('blue');


function mylittlefunction() {
    if ($('p').length <5) {
        $('main').append("<p>A p is appended in the main.</p>");    
    }
    else {
        $('button').remove('#add');
        
        /*console.log('we reached the maximum paragraph number');*/
    }
    $('p').css(`border`, `1px solid Red`);
    $('p').css('padding', '10px');   
    }

/*function mylittlefunction() {
    $('main').append("<p>A p is appended in the main.</p>");    
    $('p').css(`border`, `1px solid Red`);
    $('p').css('padding', '10px');

} */

/*how to use a funciton */
/*mylittlefunction(); 
mylittlefunction(); */

$('#add').click(mylittlefunction); 
$('#remove').click(function() {
 
    $('p:last-child').remove();
  
   }
)

function createButton(text) {
let node = document.createElement("button");                
let textnode = document.createTextNode(text); 
var att = document.createAttribute("id");      
att.value = "add";        
node.setAttribute(att); 
node.appendChild(textnode);                             
$('#remove').before(node)
}

$('#addButton').click(function() {
	if ( $("#add").length == 0) {
	createButton("Add p");
	}
	else {
		alert("Hey, már létezik, majd ha nem lesz, hasznalhatod :)")
	}
});



// fourth part:

// if (condition that true or false) {
    // condition is true
// } else {
    // condition is false 
// }
