var Game=prompt("What game would you like to purchase : GOW, RDR2?");

while (Game !='GOW' && Game !='RDR2')
<<<<<<< HEAD
{
    Game=prompt('Out of stock'); 
=======
{prompt("Out of stock, Choose GOW or RDR2");
>>>>>>> d499c87a0ff1f36a66a438ea68485918eb7d4b5a
}
var copies=prompt('How many copies do you want?');
var order ='' ;
if (Game=="GOW") 
{
    order= '<img src="GOW.jpg"/>';
}
else {
    order= '<img src="RDR2.jpg"/>';
}

for (var i=0 ; i < copies ; i++)
{
document.write(order);
} 
console.log(order);
