let firstName = "John";
let lastName = "Doe";

let text = `Welcome ${firstName}, ${lastName}!`;
console.log(text)

function updateTemplateLiteral(petName, placeholder = "{NAME}") {
	const reminderTemplate =
		"{NAME} is due for another visit. Please call us so we can set up a new appointment. We look forward to seeing you and {NAME} soon.";
	return reminderTemplate.replaceAll(placeholder, petName);
}

console.log(updateTemplateLiteral("Leo"));
console.log(updateTemplateLiteral("Stella", "{NAME}"));
console.log(updateTemplateLiteral("Stella"));