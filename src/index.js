module.exports = function getZerosCount(number, base) {
    var nulls = 0;
    var i = 1;

    var mas = [];
    for (var i = base; i > 1; i--)
    {
        if (base % i == 0) mas.push(i);
    }
    var naturals = [];
    var flag = 0;
    for (var i = 0; i < mas.length; i++)
    {
        for (var j = mas[i]-1; j > 1; j--) {
            if (mas[i] % j == 0) flag = 1;
        }
        if (flag == 0) naturals.push(mas[i]);
        flag = 0;
    }
    base = naturals[0];

    for (var j = base; j <= number; j *= base) {
        var rest = number % j;
        number = number - rest;
        nulls += (number / j);
        i++;
    }

    /*var mas = [];
    while (nulls > 0) {
        var a = nulls % base;
        mas.push(a);
        nulls = (nulls - a) / base;
    }
    var newnulls = "";
    for (var i = mas.length - 1; i >= 0; i--) {
        newnulls += mas[i];
    }
    */
    return nulls;
}