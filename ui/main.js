//counter code

var button = document.getElementById('counter');

button.onclick = function (){
 
 
 // Create a request object
 var request = new XMLHttpRequest();
 
 //capture the response and store it in a variable
 request.onreadystatechange = function(){
   if(request.readyState === XMLHttpRequest.DONE){
       // Take some action
       if(request.status === 200){
           var counter = request.responseText;
           var span = document.getElementById('count');
           span.innerHTML = counter.toString();
       }
   }  
   // Not done yet
 };
 
   // Make the request
   var request = new XMLHttpRequest();
 
 //capture the response and store it in a variable
 request.onreadystatechange = function(){
   if(request.readyState === XMLHttpRequest.DONE){
       // Take some action
       if(request.status === 200){
           var names = req.responseText;
           names = JSON.parse(names);
           var list = '';
           for(var i = 0; i < names.length; i++){
           list += '<li>' + names[i] + '</li>';
  }
           var ul = document.getElementById('namelist');
           ul.innerHTML = list;
       }
   }  
  
 };
 
   // Make the request
   request.open('GET', 'http://borgharesb.imad.hasura-app.io/submit-name?name='+ name, true);
   request.send(null);request.open('GET', 'http://borgharesb.imad.hasura-app.io/counter', true);
   request.send(null);
};


// Submit name
};