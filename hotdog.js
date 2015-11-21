//window.location = "http://hotdogstand.atspace.cc/hotdog.html";

$(document).ready(function(){
//shorthand $(function(){//write code});    
var clicked = false;
var thisSection = " ";
var thisDescrip = " ";
var thisHeading = " ";
    
    
    $(".itemSection").click(function(){
        thisHeading = "#"+this.id+"_heading";
        thisDescrip = "#"+this.id+"_descrip";
        //alert(thisDescrip);
        if(clicked == false){
            displayInfo(thisHeading, thisDescrip);
        }
        else{
            displayNormal(thisHeading, thisDescrip);
        }
    });
    
                            
    function displayInfo(thisHeading, thisDescrip){
        $(thisDescrip).fadeIn();
        
        $(thisHeading).css({"font-size": "120%"});
        
        
        clicked = true;
    }
    function displayNormal(thisHeading, thisDescrip){
        if(clicked == true){
            $(thisDescrip).fadeOut();
            $(thisHeading).css({"font-size": "100%", "margin-top": "0%"});
            
            clicked = false;
        } 
    }

    
    
    
});