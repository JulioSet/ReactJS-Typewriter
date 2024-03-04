var soal = [];

export var addSoal = function addSoal(inp) {
    soal.push(inp);
};
export var getSoal = function getSoal() {
    return soal;
};

export var loadData = function loadData() {
    var dataString = localStorage.getItem('data');
    if (dataString != null) {
        var data = JSON.parse(dataString);
        data.forEach(function (el) {
            addSoal(el.kata);
        });
    }
};