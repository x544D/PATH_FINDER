
// When Size of screen changed
function ScreenSizeChanged(map) 
{
    console.clear()
    let BrowserWidth    = document.documentElement.clientWidth;
    let MapWidth        = map.innerWidth;

    console.log("+ Width changed => "+BrowserWidth)
    console.log(MapWidth)
    

}

// DrawMap func
function DrawMap(map) 
{
    
    for (let index = 0; index < 1000; index++) {
        map.innerHTML += "<div _c='"+index+"' _r='' ></div>";
    }
}


// Init Func Called when page fully loaded
function Init() 
{

    let MapContainer = document.getElementById("map");
    window.addEventListener('resize', () => ScreenSizeChanged(MapContainer))

    if (MapContainer) DrawMap(MapContainer);
    else alert("Could not find Map element")
}