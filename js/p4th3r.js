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


const startPT = "imgs/s.png";
const endPt   = "imgs/e.png";
const walls   = "imgs/w.png";
const xImg    = "imgs/x.png";


let WriteLog_emptied = false;

let isDragging    = false;
let end_start_sat = false;
let get_back_ico  = [false , ""];
let UNITS   = []

let infos   = {

  "img":startPT,
  "s":null,
  "e":null,
  "o":[]
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
      this._c = point.x * point.y 
    }

    get_cords = () => this._p;
    get_value = () => this._v;
    get_class = () => this._c;

}

function Reset() 
{
  WriteLog_emptied  = false;
  isDragging        = false;
  end_start_sat     = false;
  get_back_ico      = [false , ""];
  UNITS             = []

  infos["img"]      = startPT;
  infos["s"]        = null;
  infos["e"]        = null;
  infos["o"]        = [];

  $('#map').empty();
  $('#logs').empty();

  __init__();

}


function DrawMap() 
{
    c = 0
    for (var i = 1; i <= 20; i++) for (var j = 1; j <= 60 ; j++) 
    {
      // Writing actual HTML.
      $('#map').append('<div _val= "-1" tabindex="'+c+1+'" class="'+c+'" ></div>');
      
      // Storing each UNIT
      UNITS.push(new UNIT(new Point(i, j)))
      c++;
    }
}


// var WriteLogs = function (target, message, index, interval) {   
//   if (index < message.length) {
//     $(target).append(message[index++]);
//     setTimeout(function () { WriteLogs(target, message, index, interval); }, interval);
//   }
// }


var WriteLogs = function ( target , message , color, index , interval) 
{
  if (!WriteLog_emptied)
  { 
    $(target).empty(); 
    $(target).css("color" , color)
    WriteLog_emptied = true;
  }

  if (index < message.length) 
  {
    $(target).append(message[index++]);
    setTimeout(function () { WriteLogs(target, message, color, index, interval); }, interval);
  }
  else WriteLog_emptied = false;
  
}


// out Initialisations to call it manually on Reset
function __init__() 
{
  $(function(){
    WriteLogs("#logs", "[#] THANK YOU FOR VISITING US_", "yellow" , 0, 50);
  }); 

  // We Draw First
  DrawMap();

  // Handle the start Btn click event
  $("#startBtn").on('click' , () => 
  {
    if (!end_start_sat) 
      $(() => { $("#logs").empty(); WriteLogs("#logs", "[ERROR]  PLEASE SPECIFY  SP / EP !", "red", 0, 50)});
    else
    {

      $(() => WriteLogs("#logs", "[#]  START IS NOT IMPLEMENTED YET !", "yellowgreen", 0, 50));

    }

  });

  $("#map").mouseleave((e) => 
  {
    $("#map").mouseup()
  });

  $("#map div").mouseover((e) => 
  {
    e.target.focus();
 
      if (e.target != infos['s'] && e.target != infos['e']) 
      $("."+e.target.className).css("background-image", "url('"+infos['img']+"')")

      else  
      {
        get_back_ico = [true , $("."+e.target.className).css("background-image")]
        $("."+e.target.className).css("background-image", "url('"+xImg+"')")
      }  
    
    

  });


  $("#map div").mouseout((e) => 
  {
    if (get_back_ico[0] == true) 
    {
      $("."+e.target.className).css("background-image", get_back_ico[1])
      get_back_ico = [false, ""]
    }
    else
    {
      if ($("."+e.target.className).attr("_val") == "-1") 
      { 
        e.target.focus();
        $("."+e.target.className).css("background-image", "none")
      }
    }

  });


  $("#map div").mousedown((e) => 
  {
    // know that we are on click so if mousemove triggered we can draw
    isDragging = true;

    const cls = e.target

    // Check if its not an x.png
    if (!get_back_ico[0]) 
    {
    
      if (infos['s'] == null) 
      {
        infos['s'] = cls;
        infos['img'] = endPt
        $("."+cls.className).css("background-image", "url('"+startPT+"')")
        $("."+cls.className).attr("_val" , "0")
      }
      else if (infos['e'] == null) 
      {
        infos['e'] = cls;
        infos['img'] = walls
        $("."+cls.className).css("background-image", "url('"+endPt+"')")
        $("."+cls.className).attr("_val" , "1")
        end_start_sat = true
      }
    }
    else
    {
      $("#logs").html("");
      
      $(function(){
        WriteLogs("#logs", "[ERROR]  THIS CELL IS ALREADY PRESERVED !", "red", 0, 50);
      });        
    }
  });


  $("#map div").mouseup((e) => 
  {
    // no more can draw walls
    isDragging = false;
  });


  $("#map div").mousemove((e) =>
  {
    // draw walls
    if (isDragging && end_start_sat && e.target != infos['e'] && e.target != infos['s']) 
    {
      $("."+e.target.className).css("background-image", "url('"+infos['img']+"')")
      $("."+e.target.className).attr("_val" , "2")
      UNITS[parseInt($("."+e.target.className).attr("tabindex"))-1]._v=2
    }
  });

}


function Start_1() 
{
  for (var i = 1; i <= 60; i++)
  {
    console.log(UNITS[i])
  }  
}


// builtin anonymous ready function
$(document).ready(function()
{
  __init__()

});
