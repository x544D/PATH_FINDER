
// Change on your need :)
const DEFAULT_MAP_DIVS_SIZE         = 20
const DEFAULT_MAP_DIVS_BORDER_SIZE  = 1
 TOTAL_DIVS                      = 1000


//// DO NOT TOUCH THESE ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
let MapContainer            = document.getElementById("map");
let MATRICE                 = []
let LAST_SCREEN_SIZE        = document.documentElement.clientWidth
const TOTAL_DIV_SIZE        = DEFAULT_MAP_DIVS_SIZE + (DEFAULT_MAP_DIVS_BORDER_SIZE * 2)
const _INITIAL_DIVS         = TOTAL_DIVS
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ //


// When Size of screen changed
function ScreenSizeChanged() 
{
    console.clear()
    let BrowserWidth    = document.documentElement.clientWidth;
    let MapWidth        = MapContainer.innerWidth;

    console.log("+ Width changed from "+LAST_SCREEN_SIZE+" -> "+BrowserWidth)
    
    // Get possible Divs per row on current ScreenSize
    let _v = parseInt(BrowserWidth / TOTAL_DIV_SIZE)

    EditMap(BrowserWidth);
    LAST_SCREEN_SIZE = BrowserWidth;
    

}




// DrawMap func
function DrawMap() 
{
    MapContainer.innerHTML = null;
    
    for (let index = 0; index < MATRICE.length; index++) 
    {
        MapContainer.innerHTML += "<div style='border:"+DEFAULT_MAP_DIVS_BORDER_SIZE+"px solid #555;height:"+DEFAULT_MAP_DIVS_SIZE+"px;width:"+DEFAULT_MAP_DIVS_SIZE+"px;' _c='"+index+"' _r='' ></div>";
    }
}


// Add divs depending on Screen Size
function EditMap(browserClientWidth) 
{
    //dpr = DIVES PER ROW
    var dpr = parseInt(browserClientWidth / TOTAL_DIV_SIZE)
    console.log("dpr : "+dpr);

    var _tmp = dpr - (TOTAL_DIVS % dpr);

    if (_tmp === dpr) 
    {
        console.log("+ Matrice is Valid !");     
    } 
    else 
    {
        console.log("+ Should add "+_tmp);
        TOTAL_DIVS = _INITIAL_DIVS + _tmp;
    }
 
    Reset(_tmp+dpr)
    DrawMap()
}

// reset the map
function Reset(new_dpr) 
{
    MATRICE = []
    let col = 1
    let row = 1
    
    for (let index = 1; index <= TOTAL_DIVS; index++) 
    {
        MATRICE.push([index, col, row])
        if (col == new_dpr)
        {
            col = 1;
            row += 1;
        }
        col++;
    }
}

// Init Func Called when page fully loaded
function Init() 
{

    window.addEventListener('resize', () => ScreenSizeChanged())

    if (MapContainer) ScreenSizeChanged();
    else alert("Could not find Map element !")
}