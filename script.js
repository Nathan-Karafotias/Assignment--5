let r = 0
let total = 0
let total2 = 0

//Tells the function to operate when the button is clicked
document.getElementById('button').addEventListener('click',buttonon)

//Calculates the circumference and area of a circle with the radius provided
function buttonon() {
 r = document.getElementById('input').value

 r = parseInt(r)

 total = 2 * Math.PI * r
 total2 = Math.PI * Math.pow(r, 2)
 
 alert(total)
 alert(total2)
}
