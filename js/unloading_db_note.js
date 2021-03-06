//function mainButton (){
//	alert("Работает!");
//}

function OutRow(id, title, text, date, time) {
	var div = document.createElement("div");
	var a = document.createElement("a");
	var span = document.createElement("span");
	var divOne = document.createElement("div");
	var spanOne = document.createElement("span");
	var spanTwo = document.createElement("span");

	textContent = id; //ID каэдого эллемента
	span.textContent = title;
	if (title == "") {
		span.textContent = text;
	}
	spanOne.textContent = date;
	spanTwo.textContent = time;

	elementWindow = document.getElementById("elementWindow");
	document.body.appendChild(elementWindow); //Родитель
	elementWindow.appendChild(div);
	div.appendChild(a);
	a.appendChild(span);
	a.appendChild(divOne);
	divOne.appendChild(spanOne);
	divOne.appendChild(spanTwo);

	div.className = "buttonPosition";
	a.className = "mainButton";
	a.id = id; //Как-то создавать уникальный ID
	a.href = "#";
	span.className = "headingButton";
	divOne.className = "divDataTimeButton";
	spanOne.className = "dataButton";
	spanTwo.className = "timeButton";

	//document.getElementById("mainButton").addEventListener("click", mainButton);
}

window.onload = function () { //Вывод инфы из БД в HTML эллемент
	var DataBaseNote = openDatabase('DataBaseNote', '1.0', 'database note', 4 * 1024 * 1024);
	DataBaseNote.transaction(function (tx) {
		tx.executeSql('SELECT * from note', [], function (tx, result) {
			for (var i = 0; i < result.rows.length; i++) {
				var item = result.rows.item(i);
				OutRow(item.id, item.title, item.text, item.date, item.time);
			}
		});
	});
}