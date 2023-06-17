var ans=1;
var a=Math.round((Math.random()*100)+1);
guess=()=>{
    var b=parseInt(document.getElementById("n").value);
    if(b==a)
    
      
        document.getElementById("result").textContent = "Congratlations!!!you have got the number in "+(ans++)+" tries";
      
    
    else if(b<a)
    
        
         document.getElementById("result").textContent = (ans++)+ " try!!Try a greater number";
          
    
    else
    
        
         document.getElementById("result").textContent = (ans++)+  "try!!Try a lesser number";
          
    
}