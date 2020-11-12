CreateTable = window.onload = function () {
    var DataBaseNote = openDatabase('DataBaseNote', '1.0', 'database note', 4 * 1024 * 1024);
    DataBaseNote.transaction(function (tx) {
        tx.executeSql('CREATE TABLE IF NOT EXISTS note (id integer primary key autoincrement, title, text, date, time)');
    });
}

document.getElementById("save").addEventListener("click", functionSave);
function functionSave() {
    var d = new Date();
    var day = ("0" + d.getDate()).slice(-2);
    var month = d.getMonth() + 1;
    month = ("0" + month).slice(-2)
    var year = d.getFullYear();
    var hours = ("0" + d.getHours()).slice(-2);
    var minutes = ("0" + d.getMinutes()).slice(-2);
    var dayMonthYear = (day + "." + month + "." + year);
    var hoursMinutes = (hours + ":" + minutes);
    
    
    var thistitle = document.getElementById("title").value;
    var thistext = document.getElementById("text").value;
    var thisdate = dayMonthYear;
    var thistime = hoursMinutes;
    if (thistext == "") { alert("Ожидаеся информация в поле \"текст\""); return; }

    var DataBaseNote = openDatabase('DataBaseNote', '1.0', 'database note', 4 * 1024 * 1024);
    DataBaseNote.transaction(function (tx) {
        tx.executeSql('INSERT INTO note (title, text, date, time) VALUES (?,?,?,?)', [thistitle, thistext, thisdate, thistime]);
    });
}