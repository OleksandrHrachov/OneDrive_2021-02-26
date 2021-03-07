window.addEventListener('load', function () {

  let counter = document.querySelector('.counter');
  let icons = document.querySelector('.icons');
  let play = document.querySelector('.btn-play-again');
  // let fields = document.querySelectorAll('.field');
  let userStep;
  let compStep;
  let countUser = 0;
  

  let modal = document.getElementById('rulesModal');
  let btnRules = document.getElementById('btnRules');
  let close = document.getElementsByClassName('icon-close')[0];

  btnRules.onclick = function () {
    modal.style.display = 'block';
  }

  close.onclick = function () {
    modal.style.display = 'none';
  }


  



  function choiceUser (e) {
    let target = e.target;
    if (target.classList.contains('field')) {
      userStep = target.dataset.field;
      // target.classList.add('activ');
      choiceComp();
    }
  }


  function choiceComp () {
    let rand = Math.floor(Math.random() * 3);
    let compFields = icons.querySelectorAll('.field');
    compStep = compFields[rand].dataset.field;
    winner();
  }


  function winner () {
    let comb = userStep + compStep;

    console.log(comb);

    switch (comb) {

      case 'rr':
      case 'ss':
      case 'pp':
        break;

      case 'rs':
      case 'sp':
      case 'pr':
        countUser++;
        counter.innerText = countUser;
        break;

      case 'sr':
      case 'ps':
      case 'rp':
        countUser--;
        counter.innerText = countUser;
        break;
    }
  }



  function playAgain () {
    choiceUser (e);
    choiceComp ();
    winner ();
  }

 

  play.addEventListener('click', playAgain);
  icons.addEventListener('click', choiceUser);
});





