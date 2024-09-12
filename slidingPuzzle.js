
///////////////////////////////logic////////////////////////

// var a = [], b;
// while (a.push(b = []) < 9) while (b.push(null) < 9);

var board=[["1","2","3"],
            ["4","5","6"],
            ["7","8","0"]];

 var board1=[];

var box=["1","2","3","4","5","6","7","8","0"];
var answerBox=["0","1","2","3","4","5","6","7","8"];

let l1=[];
let l2=[];
let l3=[];

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
}


function assignBoard(board){
  board.splice(0, board.length);

  //console.log(JSON.stringify(box));

  let j=0;
  for (var i=0; i<3; i++){
    //console.log(j);
    board.push([box[j],box[++j],box[++j]]);
    j++;
  }
}


//shuffleArray(box);
//assignBoard(board1);

//console.log(JSON.stringify(board1));
//console.log(JSON.stringify(findIndex(box,"b")));



function findIndex(box, target){
  let x=Math.trunc(box.indexOf(target)/3);
  let y=box.indexOf(target)%3;
    return [x,y];
}


function findPathdirection(board,index){

  let x=index[0];
  let y=index[1];

  //console.log(x,y);
  //console.log(board.length);

  if (x!=0 &&board[x-1][y]==JSON.stringify(randomnumber)){
    return "top";
  }

  if (x!=board.length-1&&board[x+1][y]==JSON.stringify(randomnumber)){
    return "bot";
  }

  if (board[x][y-1]!=undefined&&board[x][y-1]==JSON.stringify(randomnumber)){
    return "left";
  }

  if (board[x][y+1]!=undefined&&board[x][y+1]==JSON.stringify(randomnumber)){
    return "right";
  }

}




function transposition(board,index,direction){
  
  let x=index[0];
  let y=index[1];
  let temp=board[x][y];

  switch(direction) {
    case "top":
      // code block
      board[x][y]=board[x-1][y];
      board[x-1][y]=temp;


      break;
    case "bot":
      // code block
      board[x][y]=board[x+1][y];
      board[x+1][y]=temp;


      break;
    case "left":
        // code block
        board[x][y]=board[x][y-1];
        board[x][y-1]=temp;


      break;
    case "right":
      // code block
      board[x][y]=board[x][y+1];
      board[x][y+1]=temp;


      break;
    default:
      // code block
  }
}



function updateBox(array,target1,target2){
  let index1=array.indexOf(target1);
  let index2=array.indexOf(target2);
  let temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
}

//console.log(JSON.stringify(board));

//let index=findIndex(box,"8");
//let direction=findPathdirection(board, index);

//console.log(findPathdirection(board, [2,2]));

//console.log(index, direction);

//transposition(board,index,direction);

//console.log(JSON.stringify(board));



///////////////////////////////////////////////////////////////
//html//



  console.log(box);
  // shuffleArray(box);
  // assignBoard(board1);
  
  var randomnumber=Math.floor((Math.random() * 8) + 1);
  
  window.onload =function (e){ 

    // document.getElementById("0").style.backgroundImage="url(/pic/1.png)";
    // document.getElementById("1").style.backgroundImage="url(/pic/2.png)";
    // document.getElementById("2").style.backgroundImage="url(/pic/3.png)";
    // document.getElementById("3").style.backgroundImage="url(/pic/4.png)";
    // document.getElementById("4").style.backgroundImage="url(/pic/5.png)";
    // document.getElementById("5").style.backgroundImage="url(/pic/6.png)";
    // document.getElementById("6").style.backgroundImage="url(/pic/7.png)";
    // document.getElementById("7").style.backgroundImage="url(/pic/8.png)";
    // document.getElementById("8").style.backgroundImage="url(/pic/9.png)";
    
    // for (i=1;i<=box.length;i++){
    //   var element = document.getElementById(JSON.stringify(i));
    //   element.innerHTML = "1";
    // }
   



    shuffleArray(box);
    assignBoard(board1);

    // var randomnumber=Math.floor((Math.random() * 8) + 1);


    for (i=0;i<box.length;i++){
      let url="";
      if (box[i]==JSON.stringify(randomnumber)){
      document.getElementById(JSON.stringify(i)).innerHTML ="";
      document.getElementById(JSON.stringify(i)).style.backgroundImage="";}
      else{
      document.getElementById(JSON.stringify(i)).innerHTML =box[i]; 
      console.log("url= "+`url(pic/${box[i]}.png)`);
      document.getElementById(JSON.stringify(i)).style.backgroundImage=`url(pic/${box[i]}.png)`;
      }
    }

     console.log(JSON.stringify(board1));
  }

 


  function printBoard(){
    randomnumber=Math.floor((Math.random() * 8) + 1);
    for (i=0;i<box.length;i++){
      if (box[i]==JSON.stringify(randomnumber)){
      document.getElementById(JSON.stringify(i)).innerHTML ="";
      document.getElementById(JSON.stringify(i)).style.backgroundImage="";}
      else{
      document.getElementById(JSON.stringify(i)).innerHTML =box[i]; 
      document.getElementById(JSON.stringify(i)).style.backgroundImage=`url(pic/${box[i]}.png)`;}
    }
}

function webMove(board,index,direction,id,target,box){
  
  console.log(index);

  let x=index[0];
  let y=index[1];
  let temp=board[x][y];

  switch(direction) {
    case "top":
      // code block
      board[x][y]=board[x-1][y];
      board[x-1][y]=temp;

      document.getElementById(id).innerText ="";
      document.getElementById(parseInt(id)-3).innerText =target;

      document.getElementById(id).style.backgroundImage="";
      document.getElementById(parseInt(id)-3).style.backgroundImage=`url(pic/${target}.png)`;

      updateBox(box,JSON.stringify(randomnumber), target);

      break;
    case "bot":
      // code block
      board[x][y]=board[x+1][y];
      board[x+1][y]=temp;

      document.getElementById(id).innerText ="";
      document.getElementById(parseInt(id)+3).innerText =target;

      document.getElementById(id).style.backgroundImage="";
      document.getElementById(parseInt(id)+3).style.backgroundImage=`url(pic/${target}.png)`;

      updateBox(box,JSON.stringify(randomnumber), target);

      break;
    case "left":
        // code block
        board[x][y]=board[x][y-1];
        board[x][y-1]=temp;

        document.getElementById(id).innerText ="";
        document.getElementById(parseInt(id)-1).innerText =target;


        document.getElementById(id).style.backgroundImage="";
        document.getElementById(parseInt(id)-1).style.backgroundImage=`url(pic/${target}.png)`;

        updateBox(box,JSON.stringify(randomnumber), target);

      break;
    case "right":
      // code block
      board[x][y]=board[x][y+1];
      board[x][y+1]=temp;

      document.getElementById(id).innerText ="";
      document.getElementById(parseInt(id)+1).innerText =target;

      document.getElementById(id).style.backgroundImage="";
      document.getElementById(parseInt(id)+1).style.backgroundImage=`url(pic/${target}.png)`;

      updateBox(box,JSON.stringify(randomnumber), target);

      break;
    default:
      // code block
  }
}


 function myFunction(id) {
  //document.getElementById("demo").innerHTML = "Hello World";
  //document.getElementById(id).innerHTML = "3";

  let target=document.getElementById(id).innerHTML;
  console.log("this is "+target);

  let index=findIndex(box, target);
  console.log("this is "+index);
  
  let direction=findPathdirection(board1,index);
  console.log(direction);
  webMove(board1,index,direction,id,target,box);
  console.log(JSON.stringify(board1));
  console.log(JSON.stringify(box));
 

  if (checkWin()){
    setTimeout(function a(){
      alert("You WIN!");
  },250);
  }

}


function checkWin(){
  let win=false;
  for (i=0;i<answerBox.length-1;i++){
    console.log(answerBox.length);
    if (document.getElementById(JSON.stringify(randomnumber)).innerHTML !=""){
      win=false;
      break;}
    else if(box[i] !=answerBox[i]) {
      win=false;
      break;
    }
    else{win=true;}
  }
  return win;
}

/////test//

let box2=["1","2","3","4"];

function btr1T(){

  shuffleArray(box);
  assignBoard(board1);
  printBoard();

}





