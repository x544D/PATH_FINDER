$(document).ready(function(){
    
    class Geo {
       
        constructor(x , y) {
            this.x = x;
            this.y = y;
            
          }
       
        getX() {
            return this.x;
          }
        getY() {
            return this.y;
          }
        getType() {
            return this.type;
          }
          setType(type) {
            this.type = type;
          }
        getClassName() {
            return "cols-" + this.x +':'+this.y;
          }
      }
    

    

    for (var i = 0; i < 30; i++) {
       
       for (var j = 0; j < 30 ; j++) {
           
    
            $('#map').append('<div class="cols-'+ i +':'+ j +'"></div>');
      
        }
      
    }
    
    function getPos(){
        $('#map div').click(function(){
            var pos = this.className.split('-')[1] ;
           
            var x = pos.split(':')[0] ;
            var y = pos.split(':')[1] ;
            
            var geo = new Geo(y,x);
            
            var start = document.getElementById('defStart').checked;
            var end = document.getElementById('defEnd').checked;
            var obs = document.getElementById('defObs').checked;

           if(start){
            if ( document.getElementById('Startactive').checked==true) {
                this.style = 'background-color: green;'
                geo.setType('S');
                $('#StartValue').text(geo.getClassName());
                document.getElementById('Startactive').checked = false;
            } else {
                this.style = 'background-color: #000;'
                document.getElementById('Startactive').checked = false;
            } 
           }
           else if(end){
            if ( document.getElementById('Endactive').checked==true) {
                geo.setType('E');
                $('#EndValue').text(geo.getClassName());
                this.style = 'background-color: orange;'
                document.getElementById('Endactive').checked = false;
            } else {
                this.style = 'background-color: #000;'
                document.getElementById('Endactive').checked = false;
            } 
           }
           else{
            if ( document.getElementById('Obsactive').checked==true) {
                this.style = 'background-color: red;'
                geo.setType('Ob');
                $('#ObsList').append(geo.getClassName()+'|');
                document.getElementById('Obsactive').checked = false;
            } else {
                this.style = 'background-color: red;'
                $('#ObsList').append(geo.getClassName()+'|');
                document.getElementById('Obsactive').checked = true;
            } 
           }
          
           $('#jsonData').text(Datajson) ;
       
        });
     
        
    };
   
    getPos();

 

    $('#btnshow').click(function(){
       
       var startClass = $('#StartValue').text();
       var endClass = $('#EndtValue').text();
       var endClass = '';
       var list = $('#ObsList').text().split('|');
       var i = 1 ;
      while(true) {
        // cols-1:2
          var startClass_2 =  (parseInt(startClass.split('-')[1].split(':')[0])+ i ) +':' + (parseInt(startClass.split('-')[1].split(':')[1]) + 0);
            var c1 = '.cols-' + startClass_2 ;
            startClass = c1;
        $(c1).css('background-color','blue');
        i++;
      }
    });

});