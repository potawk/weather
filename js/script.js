async function get_data() {
	document.getElementById('loading').classList.remove('hidden');
	const a = await fetch("https://wttr.in/Fukuoka?format=j1");
	const data = await a.json();
	for (const hairetsu of data["weather"]) {
		let d = hairetsu["date"]
		let c = hairetsu["avgtempC"]
		let date = document.createElement('li');
		date.innerHTML = d + "の平均気温は、" + c + "度です。";
		document.body.appendChild(date);
	}
	document.getElementById('loading').className = 'hidden';
}

window.onload = function() {
	const button = document.getElementById('btn');
	button.addEventListener('click', get_data, false);
};
