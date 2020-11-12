function OutRow (title, text, date, time){
	var div = document.createElement("div");
	var a = document.createElement("a");
	var span = document.createElement("span");
	var divOne = document.createElement("div");
	var spanOne = document.createElement("span");
	var spanTwo = document.createElement("span");

	span.textContent = title;
	if (title == ""){
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

	div.id = "buttonPosition";
	a.id = "mainButton";
	a.href = "#";
	span.id = "headingButton";
	divOne.id = "divDataTimeButton";
	spanOne.id = "dataButton";
	spanTwo.id = "timeButton";
}

window.onload = function () { //Вывод инфы из БД в HTML эллемент
	var DataBaseNote = openDatabase('DataBaseNote', '1.0', 'database note', 4 * 1024 * 1024);
    DataBaseNote.transaction(function (tx) {
        tx.executeSql('SELECT * from note', [], function (tx, result) {
            for (var i = 0; i < result.rows.length; i++) {
                var item = result.rows.item(i);
                OutRow(item.title, item.text, item.date, item.time);
            }
        });
	});
}

