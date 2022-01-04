function parseScores(scoresString) {
   return scoresString.split(" ");  //Return parsing 
}  

function buildDistributionArray(scoresArray) {
   var result = [0, 0, 0, 0, 0]; //A, B, C, D, F quantities of people who get those grades
   for(let i = 0; i < scoresArray.length; i++){
      var sco = parseInt(scoresArray[i]);

      if(sco >= 90){
         result[0] += 1;   //sum 1 person to the A place [0] == 1 position
      }
      else if(sco >= 80){
         result[1] += 1;   //sum 1 person to the B place [1] == 2 position
      }
      else if(sco >= 70){
         result[2] += 1;   //sum 1 person to the C place [2] == 3 position
      }
      else if(sco >= 60){
         result[3] += 1;   //sum 1 person to the D place [3] == 4 position
      }
      else
         result[4] += 1;   //sum 1 person to the F place [4] == 5 position
   }
   return result;
}

function setTableContent(userInput) {
   var scores = parseScores(userInput); //parse scores from the user input 
   var arrayGrade = buildDistributionArray(scores); //creating the array of the quantity of people who get the letter grade
   var getTable = document.getElementById('distributionTable');   //creating a variable table using the distributionTable id 
   var flag = 0;  //flag in false
   var i = 0; 

   while(i < arrayGrade.length){
      if(arrayGrade[i] != 0){ //if the distincts locations of the array is not 0 
         flag = 1;   //flag becomes true
      }
      i++;
   }

   if(flag == 1){ //if the flag is true
      //create the table rows with the styles 
   getTable.innerHTML =`
      <tr id="firstRow">
         <td><div style="height:30px" class="bar0"></div></td>
         <td><div style="height:20px" class="bar1"></div></td>
         <td><div style="height:10px" class="bar2"></div></td>
         <td><div style="height:0px"  class="bar3"></div></td>
         <td><div style="height:20px" class="bar4"></div></td>
      </tr> 
      <tr>
         <td style="text-align: center;">A</td>
         <td style="text-align: center;">B</td>
         <td style="text-align: center;">C</td>
         <td style="text-align: center;">D</td>
         <td style="text-align: center;">F</td>
      </tr>
      <tr>
         <td style="text-align: center;" class="grade"></td>
         <td style="text-align: center;" class="grade"></td>
         <td style="text-align: center;" class="grade"></td>
         <td style="text-align: center;" class="grade"></td>
         <td style="text-align: center;" class="grade"></td>
      </tr>`;

   var j = 0;
      while(j < arrayGrade.length){
         var barNames = document.getElementsByClassName("bar"+j); //bar0, bar1, bar2, bar3, bar4
         document.getElementsByClassName("grade")[j].innerHTML = arrayGrade[j]; //grade0, grade1, grade2, grade3, grade4 
         barNames[0].style.height = (arrayGrade[j] * 10)+"px"; //3 * 10 == 30, 1 * 10 = 10; to create the graph height px
         j++; //next number from 0 - 4 
      }  
   }
   else{ //else no table to display
      getTable.innerHTML = "<tr><td>No graph to display</td></tr>"; //Printing No Graph To Display
   }
}

// The argument can be changed for testing purposes
// setTableContent("45 78 98 83 86 99 90 59 100 200 50 30 20 25 60 65 500 1000"); 

function bodyLoaded(input){
   setTableContent(input);
}

function fn1(){
   event.preventDefault();
   const str = document.getElementById('scores-input').value;
   // alert("Value inside the text box is: "+str);
   bodyLoaded(str);
}
