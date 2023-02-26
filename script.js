function loveCalc() {
	let nam1 = document.getElementById("name1").value;
	let nam2 = document.getElementById("name2").value;
	
	let n1 = document.getElementById("name1").value.length;
	let n2 = document.getElementById("name2").value.length;
	
	let r1 = Math.floor(Math.random() * n1 + 1);
	let r2 = Math.floor(Math.random() * n2 + 1);
	
	let res;
	
	if(r1 <= r2) {
		res = r1 / r2 * 100;
	} else {
		res = r2 / r1 * 100;
	}
	
	res = Math.round(res);
	
	document.getElementById("res").innerHTML = String(res + ` % chance love for ${nam1} and ${nam2}`);
}
