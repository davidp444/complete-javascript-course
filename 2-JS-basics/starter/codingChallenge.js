//challenge 5

function calculateTip(bill) {
    if (bill < 50)
        return 0.2 * bill;

    if (bill >= 50 && bill <= 200)
        return 0.15 * bill;

    if (bill > 200)
        return 0.1 * bill;
}

var johnBills = [124,48,268,180,42];
var johnTips = [];
var johnTotal = [];

for (var i = 0; i < johnBills.length; i++)
{
    johnTips[i](calculateTip(johnBills[i]));
    johnTotal[i] = johnBills[i] + johnTips[i];
}

console.log(johnTotal);

