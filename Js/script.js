// let age = parseInt(prompt("How old are you?"));
// if (age < 18) {
// 	alert("You are not old enough to view this website");
// } else if (age >= 18 && age <= 20) {
// 	alert("You are old enough to view this website");
// } else {
// 	alert("You are old enough to view this website");

// }

//========== Switch ==========
// let consommable = prompt("Quel est votre consommable?");

// switch (consommable) {
// 	case "eau":
// 		alert("Vous avez choisi de boire de l'eau");
// 		break;
// 	case "café":
// 		alert("Vous avez choisi de boire du café");
// 		break;
// 	case "thé":
// 		alert("Vous avez choisi de boire du thé");
// 		break;
// 	default:
// 		alert("Vous avez choisi de boire de l'eau");
// 		break;
// }

//========== do while ==========

// do {
// 	var age = parseInt(prompt("How old are you?"));
// } while (age == "" || isNaN(age));
// alert("You are not old enough to view this website");

//========== operations ==========

// const addition = (x, y) => x + y;

// const soustraction = (x, y) => x - y;

// const multiplication = (x, y) => x * y;

// function division(x, y) {
// 	if (x != 0 && y != 0) {
// 		return x / y;
// 	} else {
// 		throw new Error("Impossible de diviser par 0");
// 	}
// }
// do {
// 	let choix;
// 	do {
// 		choix = parseInt(
// 			prompt(
// 				"Que souhaitez-vous faire ?\n\n 1-addition\n 2-soustraction\n 3-multiplication\n 4-division"
// 			)
// 		);
// 	} while (
// 		(choix != 1 && choix != 2 && choix != 3 && choix != 4) ||
// 		isNaN(choix)
// 	);

// 	do {
// 		var a = parseInt(prompt("Entrez un nombre"));
// 		var b = parseInt(prompt("Entrez un second nombre"));
// 	} while (isNaN(a) || isNaN(b));

// 	try {
// 		switch (choix) {
// 			case 1:
// 				var result = addition(a, b);
// 				break;
// 			case 2:
// 				var result = soustraction(a, b);
// 				break;
// 			case 3:
// 				var result = multiplication(a, b);
// 				break;
// 			case 4:
// 				var result = division(a, b);
// 				break;
// 			default:
// 				throw new Error("une erreur est survenue");
// 		}
// 		alert("le resultat vaut: " + result);
// 	} catch (error) {
// 		alert(error);
// 	}
// } while (confirm("Voulez-vous refaire un calcul ?"));

//========== Function recursive ==========
// const addition = (n) => {
// 	if (n == 1) {
// 		return 1;
// 	} else {
// 		return n + addition(n - 1);
// 	}
// };
// const newTimer = addition(5);
// console.log(newTimer);

//==========rest parameters ==========

// function addition(...numbers) {
// 	let result = 0;
// 	numbers.forEach((number) => {
// 		result += number;
// 	});
// 	console.log(result);
// }
// addition(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
//==============setInterval & setTimeout==================

// let btn = document.querySelector("button");

// let secondes = 10;
// let interval;

// // let secondRestante;

// function deCompte() {
// 	secondes--;
// 	if (secondes == 0) {
// 		stop();
// 	} else {
// 		document.body.innerHTML = secondes + "<br>";
// 	}
// }

// function start() {
// 	interval = setInterval(deCompte, 1000);
// }
// function stop() {
// 	clearInterval(interval);
// 	document.body.innerHTML += "STOP";
// }

// btn.addEventListener("click", start);
