// ------ VARIABLES ------ //
var treatClicks = 0;

var tricks = 0;
var tricksCost = 10;
var tricksMPS = 1;

var treatBox = 0;
var treatBoxCost = 30;
var treatBoxMPS = 2;

var treatStore = 0;
var treatStoreCost = 50;
var treatStoreMPS = 3;

var treatWarehouse = 0;
var treatWarehouseCost = 200;
var treatWarehouseMPS = 5;

function treatClicked() {
    treatClicks++;
}

// ------ COUNTERS ------ //

function buyClicker(items, cost) {
    if (treatClicks >= window[cost]) {
        window[items]++;
        treatClicks -= window[cost];
        window[cost] = Math.round(window[cost] * 1.5);
    } else {
        alert("Not enough treats, tap some more!");
    }
}

//function getTricks() {
//	if(treatClicks >= tricksCost) {
//		tricks++;
//		treatClicks -= tricksCost;
//		tricksCost = Math.round(tricksCost * 1.5);
//	} else {
//		alert("Not enough treats");
//	}
//}
//
//function getTreatBox() {
//	if(treatClicks >= treatBoxCost) {
//		treatBox++;
//		treatClicks -= treatBoxCost;
//		treatBoxCost = Math.round(treatBoxCost * 1.5);
//	} else {
//		alert("Not enough treats");
//	}
//}
//
//function getTreatStore() {
//	if(treatClicks >= treatStoreCost) {
//		treatStores++;
//		treatClicks -=treatStoreCost;
//		treatStoreCost = Math.round(treatStoreCost * 1.5);
//	} else {
//		alert("Not enough treats");
//	}
//}

var treatProducerTimer = setInterval(function() {
    treatProducers();
}, 1000);

var treatClickerTimer = setInterval(function() {
    updateTreat();
}, 100);

function updateTreat() {
    var treatsPerSecond = tricks * tricksMPS + treatBox * treatBoxMPS + treatStore * treatStoreMPS + treatWarehouse * treatWarehouseMPS;
    document.getElementById("treatsPerSecond").innerHTML = treatsPerSecond + " Treats per second";

    document.getElementById("numberOfTricks").innerHTML = "Number of New Tricks: " + tricks;

    document.getElementById("treatAmount").innerHTML = treatClicks + " Treats";


    document.getElementById("numberOfTreatBox").innerHTML = "Number of Treat Boxes " + treatBox;

    document.getElementById("treatStoreCost").innerHTML = "" + treatStoreCost;
    document.getElementById("numberOfTreatStore").innerHTML = "Number of Treat Store " + treatStore;


    document.getElementById("treatWarehouseCost").innerHTML = "" + treatWarehouseCost;
    document.getElementById("numberOfTreatWarehouse").innerHTML = "Number of Treat Warehouse " + treatWarehouse;
}

function treatProducers() {
    treatClicks += tricks * tricksMPS;
    treatClicks += treatBox * treatBoxMPS;
    treatClicks += treatStore * treatStoreMPS;
    treatClicks += treatWarehouse * treatWarehouseMPS;
}