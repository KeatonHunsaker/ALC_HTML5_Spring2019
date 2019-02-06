// Single line comment
/*

Multiline comment

*/


// alert("Warning! Will Robinson...Warning!");

// confirm("Do you like pokemon?");

// prompt("What type of pokemon do you like?");
var inventory = {
    sword:0,
    food:0,
    map:0,
    bow:0,
    health:100,
    ZeckberchulinPond:20,
    SwordDamage:20,
    ZeckberchulinBow:30,
    ZeckberchulinBoss:50,
}

Game();

function Game(){
    
    document.write("Legend of the Zekberchulin Hunter!");
    var playerName = prompt("What is your name?"); 
    alert("Welcome to the land of Druzdil "+ playerName);
    
    Prison();
    
    function Prison(){
        var prison = prompt("You wake up...our head is pounding and your vison is blurred. After pacing around walking off the headache, your vison clears. It appears you are in prison and you cannot remember why. /n -look around /n - go back to sleep /n - taunt the guard").toLowerCase();
        if(prison === "look around" || prison === "look"){
            var prisonLook = prompt("The prison is small, dirty and damp. A rat scurries into a hole in the corner. Bugs squirm and scamper underfoot. There is a barred window to the back. An occupied bed has a stranger asleep snoring to the right. The cell bars and locked door to the front. An empty bed which you had sleeped in the night before to the right. In the center of the dirt floor is a lumpy moldy rug. /n -wake stranger /n -move rug /n -eat bugs").toLowerCase();
            if(prisonLook === "eat bugs" || prisonLook === "bugs" || prisonLook === "eat"){
                var prisonsick = prompt("You find a black millipede runing along the floor, you eat it and instantly regreat it. You have been poisoned and know are puking blook all over the floor. -/look for antidote -/accept fate").toLowerCase(); 
                if(prisonsick == "antidote" || prisonsick === "look for antidote" || prisonsick === "look"){
                    var prisonantidote = prompt("You find a green vile on the floor next to you. /n -use it /n - don't use it").toLowerCase();
                    if(prisonantidote === "use it" || prisonantidote === "use"){
                        var resume1 = confrim("You drink your roomates sweat it burn in your mouth as you final breath escapes, Do you wish to continue?");
                        
                        if(resume1){
                            Prison();
                        }
                        else{
                            alert("See Ya");
                        }
                    }
                    else if(prisonantidote === "don't" || prisonantidote === "don't use it"){
                        var resume5 = confirm("You die on the ground suffering, do you wish to continue?");
                        
                        if(resume5){
                            Prison();
                        }
                        else{
                            alert("Bye");
                        }
                    }
                }
                else if(prisonsick === "fate" || prisonsick === "accept fate"){    
                    alert("You die from poisoning");
                    var resume2 = confirm("Do you wish to continue?");
                    
                    if(resume2){
                        Prison();
                    }
                    else{
                        alert("QUITTER");
                    }
                
                }
            }
            else if(prisonLook === "wake stranger" || prisonLook === "stranger" || prisonLook === "wake"){
            alert("You wake up a green beast with yellow eyes and sharp teeth he jumps you and stabs you");
            var resume3 = confrim("Do you wish to continue?");
                
            if(resume3){
                Prison();
            }
            else{
                alert("Failure");
            }
            }   
            else if(prisonLook === "move rug" || prisonLook === "rug" || prisonLook === "move"){
                var prisonSword = prompt("You find a sword, what will you use it on? /n -roomate /n -guard").toLowerCase();
                inventory.sword++
                    if(prisonSword = "roomate"){
                        var prisonRoomDead = alert("You stabed your rommate to death it looks like a green human seized lizard");
                    }
                }
            else{
                ("Look at your options again");
            }
        }
        
        else if(prison === "go to sleep" || prison === "sleep" || prison === "bed"){
        alert("You fall back to sleep and stabbed to death by your roomate");
        var resume4 = confirm("Do you wish to continue?");
            
        if(resume4){
            Prison();
        }
        else{
            alert("WASTED POTENIAL!");
          }   
         
        }
        else if(prison === "taunt the guard" || prison === "taunt" || "guard"){
            var gaurdTaunt = prompt("How? /n -wistle /n -yell /n -talk.").toLowerCase();
        }
        else{
            ("Look at your options again");
        }
    }
    
    function Outside(){
        var Outside = prompt(" - West Prison - East Field - North Forest - NorthEast Forest ").toLowerCase();
        
        switch(Outside){
            case "prison" || "west prison" || "jail":
                var PrisonRe = prompt("I guess you really like prison");
                
                Prison();
        }
        switch(Outside){
            case "north forest" || "north":
                var ForestNor = prompt("you go to the North forest");
                
                Outside();
            break;
            case "field" || "east field" || "east":
                var FieldEa = prompt("You go to the East Field");
                
            break;
            case "northeast forest" || "northeast":
                var ForestNorEa = prompt("You go to the NorthEast forest")
                Outside();
            break;
            default:
                alert("I don't know what "+Outside+" is!");
                Outside();
            break;
                
        }
        
    }

}
