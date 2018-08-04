function processa(){
	let request = new XMLHttpRequest();
		request.open('GET','https://api.coinmarketcap.com/v1/ticker/?convert=brl&limite-10',false);
		request.onreadystatechange = function () {
	        if(request.readyState === XMLHttpRequest.DONE && request.status === 200) {
	            console.log(request.responseText);
	        }
	    };
	request.send();
	let lista = JSON.parse(request.response);

	

	for (var i=0; i<10; i++){
		let tr = document.createElement('tr');

		let tdrank = document.createElement('td');
		tdrank.innerText = lista[i].rank;
		tr.appendChild(tdrank);
		
		let tdname = document.createElement('td');
		tdname.innerText = lista[i].name;
		tr.appendChild(tdname);
		
		let tdsymbol = document.createElement('td');
		tdsymbol.innerText = lista[i].symbol;
		tr.appendChild(tdsymbol);
		
		let tdprice_brl = document.createElement('td');
		tdprice_brl.innerText = lista[i].price_brl;
		tr.appendChild(tdprice_brl);

		let tdprice_usd = document.createElement('td');
		tdprice_usd.innerText = lista[i].price_usd;
		tr.appendChild(tdprice_usd);

		let tbody = document.getElementById("tbody");
		tbody.appendChild(tr);
		
	}
};
processa();






