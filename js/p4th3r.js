// Project Made by Members of @MZT Team

// REPL.IT : https://repl.it/@MZT
// GITHUB  : https://github.com/Aliens-PL/

// CONTIBUTERS : x544D, samoray1998, adilmerz

class Point
{
  constructor(x, y)
  {
      this.x = x;
      this.y = y;
  }
}


let lastLoc = new Point(0, 0)
let isDragging = false

let UNITS   = []
let infos   = {
  "s":null,
  "e":null,
}

class UNIT
{
    constructor(point)
    {
     /*
      *    [this.v] is the cell Value :
      *
      *    -1 = Initial State
      *    0  = Start Point
      *    1  = End Point
      *    2  = Wall
      */
      if (!(point instanceof Point))
      {
        
        $("#map").css("display", "block");
        $("#map").css({
          "padding":"20px",
          "text-align":"center"
        });
        $("#map").html("<p class='err_p' >E R R O R : CODE CHANGED</p>");
        
      }

      this._p = point;
      this._v = -1;

      // this.c => css class
      this._c = point.x.toString()+":"+point.y.toString()
    }

    get_cords = () => this._p;
    get_value = () => this._v;
    get_class = () => this._c;

}

function DrawMap() 
{
    c = 0
    for (var i = 1; i <= 20; i++) for (var j = 1; j <= 60 ; j++) 
    {
      // Writing actual HTML.
      $('#map').append('<div class="'+c+'" ></div>');
      
      // Storing each UNIT
      UNITS.push(new UNIT(new Point(i, j)))
      c++;
    }
}


$(document).ready(function()
{
    // We Draw First
    DrawMap();
 

    $("#map div").mousedown((e) => 
    {
      let cords = e.target.className
      console.log(UNITS[cords])
    });


});