function populate(s1,s2){
	var s1 = document.getElementById(s1);
	var s2 = document.getElementById(s2);
	s2.innerHTML = "";
	if(s1.value === "Fiat"){
		var optionArray = ["|","376|376","291|291","500|500","328|328","Argo|Argo","Cronos|Cronos","Mobi|Mobi","Ducato|Ducato","Nova Fiorino|Nova Fiorino","Nova Strada|Nova Strada","Pulse|Pulse","Toro|Toro"];
	} else if(s1.value === "Jeep"){
		var optionArray = ["|","Renegade|Renegade","Compass|Compass","Commander|Commander","Grand Cherokee|Grand Cherokee","Wrangler|Wrangler"];
	} else if(s1.value === "RAM"){
		var optionArray = ["|","1500|1500","2500|2500","3500|3500"];
	} else if(s1.value === "Citroen"){
		var optionArray = ["|","C4 Cactus|C4 Cactus","CC21|CC21","CC22|CC22","CC24|CC24","Jumper|Jumper","Jumpy|Jumpy","Novo C3|Novo C3"];
	} else if(s1.value === "Peugeot"){
		var optionArray = ["|","208|208","2008|2008","3008|3008","Boxer|Boxer","Expert|Expert"];
	}
	for(var option in optionArray){
		var pair = optionArray[option].split("|");
		var newOption = document.createElement("option");
		newOption.value = pair[0];
		newOption.innerHTML = pair[1];
		s2.options.add(newOption);
	}
}

function populateVersion(s2,s3){
	var s2 = document.getElementById(s2);
	var s3 = document.getElementById(s3);
	s3.innerHTML = "";
	if(s2.value === "Argo"){
		var optionArrayVersion = ["|","drive|Drive","trekking|Trekking","s-design|S-Design"];
	} else if(s2.value === "Cronos"){
		var optionArrayVersion = ["|","drive|Drive","s-design|S-Desogn"];
	} else if(s2.value === "Mobi"){
		var optionArrayVersion = ["|","trekking|Trekking","like|Like"];
	} else if(s2.value === "376"){
		var optionArrayVersion = ["|","low|Low","entry|Entry","mid|Mid","high|High"];
	} else if(s2.value === "291"){
		var optionArrayVersion = ["|","big horn|Big Horn","laramie|Laramie","overland|Overland","rebel|Rebel","rt|RT"];
	} else if(s2.value === "500"){
		var optionArrayVersion = ["|","500e icon|500e Icon"];
	} else if(s2.value === "328"){
		var optionArrayVersion = ["|","l1|L1","l1+|L1+","l2|L2"];
	} else if(s2.value === "Ducato"){
		var optionArrayVersion = ["|","cargo curto|Cargo Curto","cargo medio|Cargo Médio","chassi|Chassi","executivo|Executivo","maxi cargo|Maxi Cargo","maxi multi|Maxi Multi","minibus|Minibus","multi|Multi"];
	} else if(s2.value === "Nova Fiorino"){
		var optionArrayVersion = ["|","endurance|Endurance"];
	} else if(s2.value === "Nova Strada"){
		var optionArrayVersion = ["|","ranch|Ranch","volcano|Volcano","freedom|Freedom","endurance|Endurance"];
	} else if(s2.value === "Pulse"){
		var optionArrayVersion = ["|","impetus turbo|Impetus Turbo","audace turbo|Audace Turbo","drive turbo|Drive Turbo","drive|Drive"];
	} else if(s2.value === "Toro"){
		var optionArrayVersion = ["|","ultra|Ultra","ranch|Ranch","volcano|Volcano","freedom|Freedom","endurance|Endurance"];
	} else if(s2.value === "C4 Cactus"){
		var optionArrayVersion = ["|","live|Live","x-series|X-Series","fell|Feel","shine|Shine"];
	} else if(s2.value === "CC21"){
		var optionArrayVersion = ["|"];
	} else if(s2.value === "CC22"){
		var optionArrayVersion = ["|"];
	} else if(s2.value === "CC24"){
		var optionArrayVersion = ["|"];
	} else if(s2.value === "Jumper"){
		var optionArrayVersion = ["|","furgão|Furgão","cargo|Cargo"];
	} else if(s2.value === "Jumpy"){
		var optionArrayVersion = ["|","cargo|Cargo","vitré|Vitré","e-jumpy|e-Jumpy"];
	} else if(s2.value === "Novo C3"){
		var optionArrayVersion = ["|"];
	}
	for(var option in optionArrayVersion){
		var pairVersion = optionArrayVersion[option].split("|");
		var newOptionVersion = document.createElement("option");
		newOptionVersion.value = pairVersion[0];
		newOptionVersion.innerHTML = pairVersion[1];
		s3.options.add(newOptionVersion);
	}
}
