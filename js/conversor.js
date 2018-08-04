function conversor(){
	 event.preventDefault();
	var converte = document.getElementById("select").value;
	let request = new XMLHttpRequest();
		request.open('GET','https://api.coinmarketcap.com/v1/ticker/'+converte+'?convert=brl&limite-10',false);
		request.onreadystatechange = function () {
	        if(request.readyState === XMLHttpRequest.DONE && request.status === 200) {
	            console.log(request.responseText);
	        }
	    };
	request.send();
	let lista = JSON.parse(request.response);
	lista[0].price_brl;
	var ponta = parseFloat(lista[0].price_brl)/parseFloat(converte);
	var resp = document.getElementById("resposta").textContent;
	resp = ponta;
}

conversor();