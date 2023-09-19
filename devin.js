
document.addEventListener("DOMContentLoaded", function() {

    var cpt = 0;
    var randomNum = Math.floor(Math.random()* 100);
    var msg = document.getElementById("message");
    var button = document.getElementById("valider");
    

    button.addEventListener("click", verif);

    function verif() {
        //a.innerText = randomNum;
        var text = document.getElementById("input").value;
		 if (text.trim() === "") { 
			msg.innerHTML = "Le texte n'est pas un numéro";
            return; 
        }
        if (!isNaN(text) ) {
            cpt = cpt + 1;
            if(cpt == 6){
                msg.innerHTML = "[" +cpt +"] " + "Perdu "+ " le nb etait :" + randomNum;
                msg.style.color = "red";
                button.innerText = "retry?";
                
                button.removeEventListener("click", verif);
                button.addEventListener("click", reinit); 
                return;
            }
            else{
                if(text == randomNum){
                    msg.innerHTML = "[" +cpt +"] " + "Gagné" + " le nb etait bien :" + randomNum;
                    msg.style.color = "green";
                    button.innerText = "retry?";
                    
                    button.removeEventListener("click", verif);
                    button.addEventListener("click", reinit); 
                    return;
                }
                else if (text < randomNum){
                    msg.innerHTML = "[" +cpt +"] " + "trop petit";
                    msg.style.color = "blue";
                }
                else if (text > randomNum){
                    msg.innerHTML = "[" +cpt +"] " + "trop grand";
                    msg.style.color = "blue";
                }
            }
        } 
		
        else {
            msg.innerHTML = "Le texte n'est pas un numéro";
        }
    }

    function reinit() {
        cpt = 0;
        randomNum = Math.floor(Math.random()* 100);
        //a.innerText = randomNum;
        button.innerText = "Essayer";
        msg.innerHTML = "";
        msg.style.color = "black";
        document.getElementById("input").value = ""; 
        
        button.removeEventListener("click", reinit);
        button.addEventListener("click", verif);
    }

});
