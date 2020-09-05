// Project Made by Members of @MZT Team

// REPL.IT : https://repl.it/@MZT
// GITHUB  : https://github.com/Aliens-PL/

// CONTIBUTERS : x544D, samoray1998, adilmerz



UNITS = []

class UNIT
{
    
    constructor(x, y)
    {

    }
}

$(document).ready(function()
{

   
    for (var i = 0; i < 60; i++) {
       
       for (var j = 0; j < 20 ; j++) 
        {
            $('#map').append('<div class="cols-'+ i +':'+ j +'"></div>');
        }
      
    }


});