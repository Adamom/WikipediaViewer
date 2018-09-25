$(document).ready(function(){
  
  $("#search").click(function(){ 
  
  //Looking for the input value once the search button is clicked on
    var input = $('#input').val(); 
  //Once we have the input value, we should include it in the url to display
    var url ="https://en.wikipedia.org/w/api.php?action=opensearch&search=" + input + "&format=json&callback=?";  
    //  var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+ searchTerm +"&format=json&callback=?";
    console.log(url);
    $.ajax({
      type:"GET",//to get to info
      url:url,
      async:false,
      dataType:"json",
      success:function(data){
        $("#output").html("");
        for(var i=0;i<data[1].length;i++){
          
          $("#output").prepend("<div> <div class='btn btn-default'> <a href=" + data[3][i] + "> <h2>" + data[1][i] + "</h2> <p>" + data[2][i] + "</p> </a></div> </div>");
        }
        console.log(data);
        console.log(data[1][0]);
        console.log(data[2][0]);
        console.log(data[3][0]);
      },
      error:function(errorMessage){
        alert("Error");
      }
      
      
    });
  
  });
  
  
  
});