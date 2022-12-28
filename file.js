const choices = document.querySelectorAll('[data]');
const playerChoice = document.querySelector('.player-chosen-image');
const cpuChoice = document.querySelector('.cpu-chosen-image');
const playerScore = document.querySelector('.player-score');
const cpuScore = document.querySelector('.cpu-score');
const message = document.querySelector('.message');
const winner = document.querySelector('.winner');
const resetBtn = document.querySelector('.reset');


var cpu = function setCpuChoice(){
  min = Math.ceil(1);
  max = Math.floor(3);
  const randomChoice = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
  cpuChoice.src = choiceImages[randomChoice];
  return cpuChoices[randomChoice];
}

const cpuChoices = {
  1 : "Rock",
  2 : "Paper",
  3 : "Scissors"
}

const choiceImages = {
  1 : "Images/WhatsApp_Image_2022-12-27_at_22.25.30-removebg-preview.png",
  2 : "Images/WhatsApp_Image_2022-12-27_at_22.25.31-removebg-preview.png",
  3 : "Images/WhatsApp_Image_2022-12-27_at_22.25.31_1_-removebg-preview.png"
}

function  playGame() {
  playerChoice.src = this.src;
  cpu();
  if(playerScore.innerText*1 !== 5 && cpuScore.innerText*1!==5){

    if(this.alt === 'Rock' && cpu() === 'Scissors'){
      playerScore.innerText = (playerScore.innerText*1 + 1).toString();
    }else if (this.alt === 'Rock' && cpu() === 'Paper'){
      cpuScore.innerText = (cpuScore.innerText*1 + 1).toString();
    }else if(this.alt === 'Paper' && cpu() === 'Rock'){
      playerScore.innerText = (playerScore.innerText*1 + 1).toString();
    }else if(this.alt === 'Paper' && cpu() === 'Scissors'){
      cpuScore.innerText = (cpuScore.innerText*1 + 1).toString();
    }else if (this.alt === 'Scissors' && cpu() === 'Paper'){
      playerScore.innerText = (playerScore.innerText*1 + 1).toString();
    }else if (this.alt === 'Scissors' && cpu() === 'Rock'){
      cpuScore.innerText =(cpuScore.innerText*1 + 1).toString();
    }else{
      return
    }

  } else {

    if(playerScore.innerText*1 == 5){
      message.classList.add('popup');
      winner.classList.add('shown');
      resetBtn.classList.add('resetnow');

    }if(cpuScore.innerText*1 === 5){
      message.classList.add('popup');
      winner.innerText = 'You Lose Cpu Won';
      winner.classList.add('shown');
      resetBtn.classList.add('resetnow');
    }
  }
  
}
choices.forEach(choice => choice.addEventListener('click', playGame));

function resetGame(){
  location.reload();
}
resetBtn.addEventListener('click', resetGame);