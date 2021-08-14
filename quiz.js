function check(){


	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
    var question4 = document.quiz.question4.value;
	var correct = 0;

	if (question1 == "Nation First, Always First"){
		correct++;
}
    if (question2 == "The Saka Era") {
    	correct++;
}
    if (question3 == "24 Hours of the Day") {
    	correct++;
    }  
    if (question4 == "Red Fort") {
    	correct++;
    }  
     
    var messages = ["<b>Good job", "<b>Not bad", "<b>Better Luck Next Time"];
    var range;

     if (correct < 1){
     	 range = 2;
     }

      if (correct > 0 && correct < 4){
     	 range = 1;
     }

        if (correct > 3){
     	 range = 0;
     }

   document.getElementById("after_submit").style.visibility="visible";


   document.getElementById("message").innerHTML = messages[range];
   document.getElementById("number_correct").innerHTML = "<b>You got " + correct + " <b>correct.</b>";

}


function myFunction() {
    location.reload();
}