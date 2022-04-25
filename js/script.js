function populateModel(s1,s2){
	var s1 = document.getElementById(s1);
	var s2 = document.getElementById(s2);
	s2.innerHTML = "";
	if(s1.value === "Fiat"){
		var optionArrayModel = ["|","376|376","291|291","500|500","328|328","Argo|Argo","Cronos|Cronos","Mobi|Mobi","Ducato|Ducato","Nova Fiorino|Nova Fiorino","Nova Strada|Nova Strada","Pulse|Pulse","Toro|Toro"];
	} else if(s1.value === "Jeep"){
		var optionArrayModel = ["|","Renegade|Renegade","Compass|Compass","Commander|Commander","Grand Cherokee|Grand Cherokee","Wrangler|Wrangler"];
	} else if(s1.value === "RAM"){
		var optionArrayModel = ["|","1500|1500","2500|2500","3500|3500"];
	} else if(s1.value === "Citroen"){
		var optionArrayModel = ["|","C4 Cactus|C4 Cactus","CC21|CC21","CC22|CC22","CC24|CC24","Jumper|Jumper","Jumpy|Jumpy","Novo C3|Novo C3"];
	} else if(s1.value === "Peugeot"){
		var optionArrayModel = ["|","208|208","2008|2008","3008|3008","Boxer|Boxer","Expert|Expert"];
	}
	for(var option in optionArrayModel){
		var pairModel = optionArrayModel[option].split("|");
		var newOptionModel = document.createElement("option");
		newOptionModel.value = pairModel[0];
		newOptionModel.innerHTML = pairModel[1];
		s2.options.add(newOptionModel);
	}
}

function populateVersion(s2,s3){
	var s2 = document.getElementById(s2);
	var s3 = document.getElementById(s3);
	s3.innerHTML = "";
	if(s2.value === "Argo"){
		var optionArrayVersion = ["|","Drive|Drive","Trekking|Trekking","S-Design|S-Design"];
	} else if(s2.value === "Cronos"){
		var optionArrayVersion = ["|","Drive|Drive","S-Design|S-Design"];
	} else if(s2.value === "Mobi"){
		var optionArrayVersion = ["|","Trekking|Trekking","Like|Like"];
	} else if(s2.value === "376"){
		var optionArrayVersion = ["|","Low|Low","Entry|Entry","Mid|Mid","High|High"];
	} else if(s2.value === "291"){
		var optionArrayVersion = ["|","Big Horn|Big Horn","Laramie|Laramie","Overland|Overland","Rebel|Rebel","RT|RT"];
	} else if(s2.value === "500"){
		var optionArrayVersion = ["|","500e Icon|500e Icon"];
	} else if(s2.value === "328"){
		var optionArrayVersion = ["|","L1|L1","L1+|L1+","L2|L2"];
	} else if(s2.value === "Ducato"){
		var optionArrayVersion = ["|","Cargo Curto|Cargo Curto","Cargo Médio|Cargo Médio","Chassi|Chassi","Executivo|Executivo","Maxi Cargo|Maxi Cargo","Maxi Multi|Maxi Multi","Minibus|Minibus","Multi|Multi"];
	} else if(s2.value === "Nova Fiorino"){
		var optionArrayVersion = ["|","Endurance|Endurance"];
	} else if(s2.value === "Nova Strada"){
		var optionArrayVersion = ["|","Ranch|Ranch","Volcano|Volcano","Freedom|Freedom","Endurance|Endurance"];
	} else if(s2.value === "Pulse"){
		var optionArrayVersion = ["|","Impetus|Impetus","Audace|Audace","Drive|Drive"];
	} else if(s2.value === "Toro"){
		var optionArrayVersion = ["|","Ultra|Ultra","Ranch|Ranch","Volcano|Volcano","Freedom|Freedom","Endurance|Endurance"];
	} else if(s2.value === "C4 Cactus"){
		var optionArrayVersion = ["|","Live|Live","X-Series|X-Series","Feel|Feel","Shine|Shine"];
	} else if(s2.value === "CC21"){
		var optionArrayVersion = ["|"];
	} else if(s2.value === "CC22"){
		var optionArrayVersion = ["|"];
	} else if(s2.value === "CC24"){
		var optionArrayVersion = ["|"];
	} else if(s2.value === "Jumper"){
		var optionArrayVersion = ["|","Furgão|Furgão","Cargo|Cargo"];
	} else if(s2.value === "Jumpy"){
		var optionArrayVersion = ["|","Cargo|Cargo","Vitré|Vitré","e-Jumpy|e-Jumpy"];
	} else if(s2.value === "Novo C3"){
		var optionArrayVersion = ["|"];
	} else if(s2.value === "Commander"){
		var optionArrayVersion = ["|","Limited|Limited","Overland|Overland"];
	} else if(s2.value === "Compass"){
		var optionArrayVersion = ["|","Série S|Série S","Série S 4XE|Série S 4XE","Trailhawk|Trailhawk","Limited|Limited","Longitude|Longitude","Sport|Sport"];
	} else if(s2.value === "Grand Cherokee"){
		var optionArrayVersion = ["|"];
	} else if(s2.value === "Renegade"){
		var optionArrayVersion = ["|","Sport|Sport","Longitude|Longitude","Série s|Série S","Trailhawk|Trailhawk"];
	} else if(s2.value === "Wrangler"){
		var optionArrayVersion = ["|","Rubicon|Rubicon","Sahara|Sahara","Sahara Overland|Sahara Overland"];
	} else if(s2.value === "Boxer"){
		var optionArrayVersion = ["|","Furgão|Furgão","Cargo|Cargo","Minibus|Minibus"];
	} else if(s2.value === "Expert"){
		var optionArrayVersion = ["|","Cargo|Cargo","Vitré|Vitré","e-Expert|e-Expert","Minibus|Minibus"];
	} else if(s2.value === "208"){
		var optionArrayVersion = ["|","Active|Active","Allure|Allure","Griffe|Griffe","e-GT|e-GT"];
	} else if(s2.value === "2008"){
		var optionArrayVersion = ["|","Allure Pack|Allure Pack","Griffe|Griffe"];
	} else if(s2.value === "3008"){
		var optionArrayVersion = ["|","Griffe|Griffe","GT Pack|GT Pack"];
	} else if(s2.value === "1500"){
		var optionArrayVersion = ["|","Rebel|Rebel"];
	} else if(s2.value === "2500"){
		var optionArrayVersion = ["|","Laramie|Laramie"];
	} else if(s2.value === "3500"){
		var optionArrayVersion = ["|","Laramie|Laramie","Laramie Night Edition|Laramie Night Edition","Limited Longhorn|Limited Longhorn"];
	} 
	for(var option in optionArrayVersion){
		var pairVersion = optionArrayVersion[option].split("|");
		var newOptionVersion = document.createElement("option");
		newOptionVersion.value = pairVersion[0];
		newOptionVersion.innerHTML = pairVersion[1];
		s3.options.add(newOptionVersion);
	}
}

function populateEngine(s3,s4){
	var s3 = document.getElementById(s3);
	var s4 = document.getElementById(s4);
	s4.innerHTML = "";
	if(s3.value === "Drive"){
		var optionArrayEngine = ["|","1.3|1.3","1.0 T4|1.0 T4","1.0|1.0"];
	} else if(s3.value === "Trekking"){
		var optionArrayEngine = ["|","1.0|1.0","1.3|1.3"];
	} else if(s3.value === "S-Design"){
		var optionArrayEngine = ["|","1.3|1.3"];
	} else if(s3.value === "Like"){
		var optionArrayEngine = ["|"];
	} else if(s3.value === "Low"){
		var optionArrayEngine = ["|"];
	} else if(s3.value === "Entry"){
		var optionArrayEngine = ["|"];
	} else if(s3.value === "Mid"){
		var optionArrayEngine = ["|"];
	} else if(s3.value === "High"){
		var optionArrayEngine = ["|"];
	} else if(s3.value === "500e Icon" || s3.value === "e-Jumpy" || s3.value === "Série S 4XE" || s3.value === "e-GT"){
		var optionArrayEngine = ["|","Elétrico / Híbrido|Elétrico / Híbrido"];
	} else if(s3.value === "L1"){
		var optionArrayEngine = ["|"];
	} else if(s3.value === "L1+"){
		var optionArrayEngine = ["|"];
	} else if(s3.value === "L2"){
		var optionArrayEngine = ["|"];
	} else if(s3.value === "Cargo" || s3.value === "Cargo Curto" || s3.value === "Cargo Médio" || s3.value === "Chassi" || s3.value === "Executivo" || s3.value === "Maxi Cargo" || s3.value === "Maxi Multi" || s3.value === "Minibus" || s3.value === "Multi" || s3.value === "Furgão" || s3.value === "Vitré"){
		var optionArrayEngine = ["|","2.3|2.3","1.5 Turbo|1.5 Turbo","2.2 Turbo|2.2 Turbo"];
	} else if(s3.value === "Endurance" || s3.value === "Volcano" || s3.value === "Freedom" || s3.value === "Ranch" || s3.value === "Ultra"){
		var optionArrayEngine = ["|","1.4|1.4","Turbo 270|Turbo 270","TurboDiesel|TurboDiesel","1.3|1.3"];
	} else if(s3.value === "Impetus" || s3.value === "Audace" || s3.value === "Drive"){
		var optionArrayEngine = ["|","Turbo 200|Turbo 200","1.3|1.3"];
	} else if(s3.value === "Live" || s3.value === "X-Series" || s3.value === "Feel" || s3.value === "Shine" || s3.value === "Active" || s3.value === "Allure" || s3.value === "Griffe" || s3.value === "Allure Pack" || s3.value === "GT Pack"){
		var optionArrayEngine = ["|","1.6|1.6","1.6 THP|1.6 THP"];
	} else if(s3.value === "Limited" || s3.value === "Overland" || s3.value === "Série S" || s3.value === "Trailhawk" || s3.value === "Longitude" || s3.value === "Sport"){
		var optionArrayEngine = ["|","T270|T270","TD380|TD380","TD350|TD350"];
	} else if(s3.value === "Rubicon" || s3.value === "Sahara" || s3.value === "Sahara Overland"){
		var optionArrayEngine = ["|","2.0 Turbo|2.0 Turbo"];
	} else if(s3.value === "Active" || s3.value === "Sahara" || s3.value === "Sahara Overland"){
		var optionArrayEngine = ["|","2.0 Turbo|2.0 Turbo"];
	} else if(s3.value === "Rebel" || s3.value === "Sahara" || s3.value === "Sahara Overland"){
		var optionArrayEngine = ["|","5.7L V8 HEMI|5.7L V8 HEMI"];
	} else if(s3.value === "Laramie" || s3.value === "Laramie Night Edition" || s3.value === "Limited Longhorn"){
		var optionArrayEngine = ["|","6.7L|6.7L","Turbodiesel 6.7L|Turbodiesel 6.7L"];
	}
	for(var option in optionArrayEngine){
		var pairEngine = optionArrayEngine[option].split("|");
		var newOptionEngine = document.createElement("option");
		newOptionEngine.value = pairEngine[0];
		newOptionEngine.innerHTML = pairEngine[1];
		s4.options.add(newOptionEngine);
	}
}

/* function populateShift(s1,s5){
	var s1 = document.getElementById(s1);
	var s5 = document.getElementById(s5);
	s5.innerHTML = "";
	if(s1.value === "Fiat"){
		var optionArrayShift = ["|","at|AT","at6|AT6","at9|AT9","cvt|CVT","mt|MT"];
	} else if(s1.value === "Jeep"){
		var optionArrayShift = ["|","at6|AT6","at9|AT9"];
	} else if(s1.value === "Citroen"){
		var optionArrayShift = ["|","at|AT","mt|MT"];
	} else if(s1.value === "Peugeot"){
		var optionArrayShift = ["|","at|AT","mt|MT"];
	} else if(s1.value === "RAM"){
		var optionArrayShift = ["|","at|AT"];
	} 
	for(var option in optionArrayShift){
		var pairShift = optionArrayShift[option].split("|");
		var newOptionShift = document.createElement("option");
		newOptionShift.value = pairShift[0];
		newOptionShift.innerHTML = pairShift[1];
		s5.options.add(newOptionShift);
	}
} */