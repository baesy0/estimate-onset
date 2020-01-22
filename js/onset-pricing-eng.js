// pricing 자료구조
let pricing = {
	"date":"",
	"model":"",
	"author":"",
	"person":"",
	"email":"",
	"project":"",
	"url":"",
	"domestic":true,
	"description":"",
	"startdate":"",
	"enddate":"",
};

//init Write infomation
document.getElementById("startdate").value = todayDateFormat();
document.getElementById("enddate").value = todayDateFormat();
	
function numberWithCommas(n) {
	return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// 오늘 날짜를 문자열로 출력한다.
function today() {
	let date = new Date();
	let y = date.getFullYear();
	let m = date.getMonth() + 1;
	let d = date.getDate();
	return `Date: ${y}. ${m}. ${d}`;
}

// pad 함수는 숫자를 받아서 필요한 자리수만큼 "0"을 붙힌다.
function pad(num, size) {
    var s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
}

// 오늘 날짜를 문자열로 출력한다. input Date 형태로 출력한다.
function todayDateFormat() {
	let date = new Date();
	let y = date.getFullYear();
	let m = pad(date.getMonth() + 1,2);
	let d = pad(date.getDate(),2);
	return `${y}-${m}-${d}`;
}



function printMode() {
	window.print();
}

function resetForm() {
	document.getElementById("author").value = "";
	document.getElementById("person").value = "";
	document.getElementById("email").value = "";
	document.getElementById("project").value = "";
	document.getElementById("url").value = "";
	document.getElementById("domestic").checked = false;
	document.getElementById("description").value = "";
	document.getElementById("startdate").value = "";
	document.getElementById("enddate").value = "";
	document.getElementById("privacy").checked = false;
}

function sendToEmail() {
	if (document.getElementById("author").value == "") {
		alert("Please enter your company name or author name.");
		return
	}
	if (document.getElementById("person").value == "") {
		alert("Please enter your name of the person in charge.");
		return
	}
	if (document.getElementById("email").value == "") {
		alert("Please enter your e-mail address.");
		return
	}
	if (document.getElementById("project").value == "") {
		alert("Please provide a brief description of the project.");
		return
	}

	if (!document.getElementById("privacy").checked) {
		alert("Please agree to collect personal information.");
		return
	}
	if (!/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(document.getElementById("email").value)) {
		alert("Your E-mail is not an email format.");
		return
	}
	
	pricing.date = today();
	pricing.author = document.getElementById("author").value;
	pricing.author = document.getElementById("person").value;
	pricing.email = document.getElementById("email").value;
	pricing.project = document.getElementById("project").value;
	pricing.url = document.getElementById("url").value;
	pricing.domestic = document.getElementById("domestic").value;
	pricing.startdate = document.getElementById("startdate").value;
	pricing.enddate = document.getElementById("enddate").value;
	pricing.description = document.getElementById("description").value;
	
	var radios = document.getElementsByName('pricingModel');

	for (var i = 0, length = radios.length; i < length; i++) {
		if (radios[i].checked) {
			pricing.model = radios[i].value;
			break;
		}
	}
	
	$.ajax({
		url: "https://78bfhky5v4.execute-api.ap-northeast-2.amazonaws.com/onset-pricing",
		type: 'POST',
		data: JSON.stringify(pricing),
		dataType: 'json',
		crossDomain: true,
		contentType: 'application/json',
		success: function(data) {
			console.log(JSON.stringify(data));
		},
		error: function(e) {
			console.log("failed:" + JSON.stringify(e));
		}
	});
	alert("E-mail has been sent successfully.\nWe will contact you within 24 business hours.");
	
}