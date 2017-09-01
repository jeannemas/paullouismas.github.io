function changeValue() {
	var celsius = document.getElementById("celsius").value;
	var farenheit = document.getElementById("farenheit").value;
	var change = document.getElementById("change").checked;
	console.log(change);
	if (change) {
		document.getElementById("celsius").value = celsius;
		document.getElementById("farenheit").value = (celsius*(9/5)+32);
		console.log("Celsius to Farenheit");
	} else {
		document.getElementById("farenheit").value = farenheit;
		document.getElementById("celsius").value = (farenheit-32)*(5/9);
		console.log("Farenheit to Celsius");
	}
}