// Single line comment
/*

Multiline comment

*/


// alert("Warning! Will Robinson...Warning!");

// confirm("Do you like pokemon?");

// prompt("What type of pokemon do you like?");

var checkHealth = function(){
    alert("Health: "+player.inventory.health);
}

var checkFood = function(){
    alert("Food: "+player.inventory.food);
}

var inventory = {
    Sword:0,
    food:0,
    map:0,
    Bow:0,
    health:100,
    ZeckberchulinPond:20,
    SwordDamage:20,
    ZeckberchulinBow:30,
    ZeckberchulinBoss:50,
    BowDamage:10,
}

Game();

function Game(){
    
    document.write("Legend of the Zekberchulin Hunter!");
    
    var playerName = prompt("What is your name?");
    
    while(!confirm("Are you sure you want "+playerName+" as a name?")){
        playerName = prompt("What name do you want?");
    }
    
    alert("Welcome to the land of Druzdil "+playerName);
    
    Prison();
    
    function Prison(){
        var prison = prompt("You wake up... your head is pounding and your vison is blurred. After pacing around your headache begins to wear off, your vison clears. It appears you are in prison and you cannot remember why. \n - look around \n - go back to sleep \n - taunt the guard").toLowerCase();
        
        if(prison === "look around" || prison === "look"){
            
            var prisonLook = prompt("The prison is small, dirty and damp. A rat scurries into a hole in the corner. Bugs squirm and scamper underfoot. There is a barred window to the back. An occupied bed has a stranger asleep snoring to the right. The cell bars and locked door to the front. An empty bed which you had sleeped in the night before to the right. In the center of the dirt floor is a lumpy moldy rug. \n -wake stranger \n - move rug \n - eat bugs").toLowerCase();
            
            if(prisonLook === "eat bugs" || prisonLook === "eat"){
                
                var prisonsick = prompt("You find a black millipede runing along the floor, you eat it and instantly regreat it. You have been poisoned and know are puking blood all over the floor. \n - look for antidote \n - accept fate").toLowerCase(); 
                
                if(prisonsick == "antidote" || prisonsick === "look for antidote" || prisonsick === "look"){
                    
                    var prisonantidote = prompt("You find a green vile on the floor next to you. \n -use it \n - don't use it").toLowerCase();
                    
                    if(prisonantidote === "use it" || prisonantidote === "use"){
                        
                        var resume = confirm("You drink your roomates sweat it burn in your mouth as you final breath escapes, do you wish to continue?");
                        
                        if(resume){
                            Prison();
                        }
                        else{
                            alert("WASTED POTENIAL!");
                        }
                    }
                    else if(prisonantidote === "don't" || prisonantidote === "don't use it"){
                        
                        var resume = confirm("You die on the ground suffering, do you wish to continue?");
                        
                        if(resume){
                            Prison();
                        }
                        else{
                            alert("WASTED POTENIAL");
                        }
                    }
                    else{
                            alert("I don't understand "+prisonantidote);
                            Prison();
                    }
                }
                else if(prisonsick === "accept fate" || prisonsick === "fate" || prisonsick === "accept"){
                    
                    alert("You die from food poisoning");
                    
                    var resume = confirm("Do you wish to continue?");
                    
                    if(resume){
                        Prison();
                    }
                    else{
                        alert("WASTED POTENIAL!");
                    }
                
                  }
                else{
			             alert("I don't understand "+prisonsick);
			             Prison();
                } 
            }
            else if(prisonLook === "wake stranger" || prisonLook === "stranger" || prisonLook === "wake"){
                
                alert("You wake up a green beast with yellow eyes and sharp teeth he jumps you and stabs you");
                
                var resume = confirm("Do you wish to continue?");
                
                if(resume){
                        Prison();
                }
                else{
                        alert("WASTED POTENIAL!");
                }
            }   
            else if(prisonLook === "move rug" || prisonLook === "rug" || prisonLook === "move"){
                
                var prisonSword = prompt("You find a sword, what will you use it on? \n - roomate \n -guard").toLowerCase();
                
                inventory.Sword++
                    
                    if(prisonSword = "roomate"){
                        
                        var prisonRoomDead = alert("You stabed your rommate to death it looks like a green human seized lizard");
                    }
            }
            else{
                    alert("I don't understand "+prisonLook);
                    Prison();
            }
        }
            
        else if(prison === "go to sleep" || prison === "sleep" || prison === "bed"){
            
            alert("You fall back to sleep and stabbed to death by your roomate");
            
            var resume = confirm("Do you wish to continue?");
            
            if(resume){
                    Prison();
            }
            else{
                    alert("WASTED POTENIAL!");
            }   
         
        }
        else if(prison === "taunt the guard" || prison === "taunt" || prison === "guard"){
            
            var guardTaunt = prompt("How? \n - wistle \n - yell \n - talk.").toLowerCase();
            
            if(guardTaunt === "wistle"){
                
                alert("The guard takes that as an insult, swears at you, and kills you.");
                
                var resume = confirm("Do you wish to continue?");
                
                if(resume){
                        Prison();
                }
                else{
                    alert("WASTED POTENIAL!");
                }
            }
            
            else if(guardTaunt === "talk"){
                
                var guardTalk = prompt("The guard falls to his knees in tears, and begins recitting prayer, what should you say? \n - amen \n - laugh \n - say false doctrine").toLowerCase();
                
                if(guardTalk === "amen" || guardTalk === "close"){
                    
                    var amen = confirm("The guard opens his eyes and stares at you, he gets up, opens the door and leads you out of the prison");
                    
                    var leavePrison = confirm("Do you wish to leave");
                    
                    if(leavePrison){
                            Outside();
                    }
                    else{
                        ("Back to the beginning");
                        Prison();
                    }
                }
                
                else if(guardTalk === "say false doctrine" || guardTalk === "say false" || guardTalk === "doctrine"){
                    
                    var falseDoc = prompt("He throws his holy text at you called the Wand of Numbers, there was something in it, \n - throw it back \n - read a verse \n - look for something").toLowerCase();
                    
                    if (falseDoc === "throw it back" || falseDoc === "throw back" || "throw"){
                        
                        var throwholytext = alert("You throw the Wand of Numbers back at him, he falls to the ground, you see a key hanging from the books pages");
                        
                        var grabkey = confirm("Grab the key");
                        
                        if(grabkey){
                            
                            var keygrabed = prompt("What do you want to do with the key \n - open cell door \n - look for another door").toLowerCase();
                            
                            if(keygrabed === "open cell door" || keygrabed === "open door"){
                                
                                var opencelldoor = prompt("You open the cell door that leads to a hallway with 7 other cells, you notice a large wooden gate at the end of the hallway and a upstairs on the other side. What should you do? \n - go upstairs \n - search cells \n - search the gate").toLowerCase();
                            }
                            
                            else if(keygrabed === "look for another door"){
                                
                                var anotherdoor = confirm("You look around and find a trapdoor under your roomates bed that requires a key, should you open it?");
                                
                                if(anotherdoor){
                                    
                                    var trapdoorcavern = alert("You climb down a lader of bones with moss growing on the walls, and a small dirpping sound below you, you notice at the bottom of your climb that you are in a sewer. A few minutes later you find another trapdoor above you with sunlight coming out.");
                                    
                                    var open2trapdoor = confirm("Open it");
                                    
                                    if(open2trapdoor){
                                            Outside();
                                    }
                                    
                                    
                                }
                            }
                        }
                        else {
                            var keynotgrabed = prompt("You think that grabing the key is a waste of time, after a few hours the guard wakes up and runs away. What should you do? \n - let it happen \n - be ready").toLowerCase();
                            
                            if(keynotgrabed === "let it happen"){
                                
                                var letithappen = prompt("They raid your cell in the middle of the night, they tie you up and take you upstairs to their warden. The warden is on a pile of human bones surronded by guards, you see a open door behind him, the rope knots are weak and fexible. What should you do? \n - secretly untie knots \n - strugle \n - do nothing").toLowerCase();
                            }
                        }
    
                      }
                    }
                
                    
                }
                
                else if(guardTalk === "laugh"){
                    
                    var guardlaugh = alert("He use the power of his religon to fuse your mouth together, and you die from the power of the spaghetti god sauce"); 
                    
                    var resume = confirm("Do you wish to continue");
                    
                    if(resume){
                            Prison();
                    }
                    else{
                        ("WASTED POTENIAL");
                    }
                }
                else{
                        alert("I don't understand "+guardTaunt);
                        Prison();
                }
            }
            
            else if(guardTaunt === "yell"){
                
                var guardYell = prompt("The guard screams and runs, he is probaly going to get reinforcements, what should you do ? \n - hide \n - wait \n - prepare").toLowerCase();
                
                if(guardYell === "hide"){
                    
                    var guardhide = prompt("Where ? \n - under your bed \n - in your bed \n - stand in the open \n - hang on ceiling").toLowerCase();
                }
                
                else if(guardYell === "wait" || guardYell === "stay"){
                    
                    alert("After a few minutes, there are five of guards trying to break down your door, after they break it down, they roast you for dinner for their warden");
                    
                    var resume = confirm("Do you wish to continue");
                    
                    if(resume){
                            Prison();
                    }
                    else{
                        ("WASTED POTENIAL");
                    }
                }
            
            }
            else{
			         alert("I don't understand "+guradTaunt);
			         Prison();
            } 
        
        }
        
    

    
    function Outside(){
        var Outside = prompt(" \n - West Prison \n - East Field \n - North Forest \n - North East Forest ").toLowerCase();
        
        switch(Outside){
            case "prison" || "West Prison" || "jail" || "West":
                var PrisonRe = prompt("I guess you really like prison");
                
                Prison();
        }
        switch(Outside){
            case "North Forest" || "north" || "North":
                var ForestNor = prompt("You go to the North forest");
                
                Outside();
            break;
            case "field" || "East Field" || "east" || "East":
                var FieldEa = prompt("You go to the East Field");
                
            break;
            case "North East forest" || "north east":
                var ForestNorEa = prompt("You go to the North East forest");
                Outside();
            break;
            default:
                alert("I don't know what "+Outside+" is!");
                Outside();
            break;
                
        }
        
    }

}
