var dinocontainer = document.getElementById("dinocontainer");

function makeDom(xhrData){

	var dinosaurString = "";
	var currentDinosaur;
	for (var i=0; i<xhrData.dinosaurs.length; i++){
		currentDinosaur = xhrData.dinosaurs[i];
	 
	 dinosaurString += `<div class="col-sm-6 col-md-4">`;
	 dinosaurString += `<div class="thumbnail">`;
	 dinosaurString += `<img src="${currentDinosaur.url}" alt="dino">`;
	 dinosaurString += `<div class="caption">`;
	 dinosaurString += `<h3>${currentDinosaur.name}</h3>`;
	 dinosaurString += `<p>Is a ${currentDinosaur.type}</p>`;
	 dinosaurString += `<p>Likes to eat: ${currentDinosaur.food}</p>`;
	 dinosaurString += `</div></div></div>`;
	 
	 } 

	 dinoContainer.innerHTML = dinosaurString;
}

function executeThisCodeAfterFileLoaded(){
	var data = JSON.parse(this.responseText);
	console.log(data);
	//makeDom(data);
}

function executeThisCodeAfterFileFails(){
	console.log("failed");

}

var thRequest = new XMLHttpRequest();
thRequest.addEventListener("load", executeThisCodeAfterFileLoaded);
thRequest.addEventListener("error", executeThisCodeAfterFileFails);
thRequest.open("GET","https://teamtreehouse.com/geoffwebb.json");
thRequest.send();
console.log("thRequest", thRequest);