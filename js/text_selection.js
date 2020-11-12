document.addEventListener('DOMContentLoaded', function () {
    chrome.tabs.executeScript({ //С этим фрагментом не так
        code: "window.getSelection().toString();" //С этим
    }, function (selection) {
        var selectedText = selection.toString();
        var result = selectedText; //Принимает выделенный текст
        
        document.getElementById("text").innerHTML = result;
    });
});