var Game=prompt("What game would you like to purchase : GOW, RDR2?");

while (Game !='GOW' && Game !='RDR2')
{
    Game=prompt('Out of stock'); 
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