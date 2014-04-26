var rest = [

{
    name : 'whatever',
    rating : 3.5,
    price : 3.00,
    time : 45
},
{
    name : 'whatever',
    rating : 2.0,
    price : 4.00,
    time : 50
},
{
    name : 'whatever',
    rating : 1.5,
    price : 5.00,
    time : 30
},
{
    name : 'whatever',
    rating : 5.0,
    price : 6.00,
    time : 35
},
{
    name : 'whatever',
    rating : 4.5,
    price : 7.00,
    time : 55
}

]

function sortBy(array, key) {
    return array.sort(function(a, b) {
        var x = a[key]; var y = b[key];
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
}

var rating = sortby(rest, 'rating');
return rating;
