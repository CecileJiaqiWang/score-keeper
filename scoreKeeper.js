var p1Score = Number(document.querySelector("#p1Score").textContent);
var p2Score = Number(document.querySelector("#p2Score").textContent);
var bar = Number(document.querySelector("#bar").textContent);


var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");

p1Button.addEventListener("click", function(){
	if (p1Score < bar && p2Score < bar) {
		p1Score++;
		document.querySelector("#p1Score").textContent = p1Score;
	} 
	if (p1Score === bar) {
		document.querySelector("#p1Score").classList.add("winner");
	}
});

p2Button.addEventListener("click", function(){
	if (p1Score < bar && p2Score < bar) {
		p2Score++;
		document.querySelector("#p2Score").textContent = p2Score;
	} 

	if (p2Score === bar) {
		document.querySelector("#p2Score").classList.add("winner");
	}
});

reset.addEventListener("click", function() {
	resett();
	bar = 5;
	document.querySelector("#bar").textContent = 5;
});

function resett() {
	p1Score = 0;
	document.querySelector("#p1Score").textContent = 0;
	p2Score = 0;
	document.querySelector("#p2Score").textContent = 0;
	document.querySelector("#p1Score").classList.remove("winner");
	document.querySelector("#p2Score").classList.remove("winner");
}

document.querySelector("input").addEventListener("change", function() {
	bar = Number(document.querySelector("input").value);
	document.querySelector("#bar").textContent = bar;
	resett();
});
