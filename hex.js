 function generateRandomHexCode() {
	let hexCode = "#";

	for (let i = 0; i < 3; i++) {
		let hex = Math.floor(Math.random() * 256).toString(16);
		if(hex.length < 2) {
			hex = "0" + hex;
		}
		hexCode += hex;
	}

	return hexCode;
}


for (let i = 0; i < 100; i++) {
	console.log(generateRandomHexCode());
}
