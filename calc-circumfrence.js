function calcCircumference(radius) {
    var circumference = Math.round((2 * Math.PI * radius) * 100) / 100; //round to 2 decimal places
    var area = Math.round((Math.PI * radius ** 2) * 100) / 100;

    console.log('The circumference is ' + circumference + ' and the area is ' + area);
}

calcCircumference(2);

calcCircumference(7);

calcCircumference(20);