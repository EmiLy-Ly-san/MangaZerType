/***********VARIABLES - CLASS - OBJECTS***********/
//PICTURES variables
const homePicture = document.getElementById("homePicture");
const onePiecePicture = document.getElementById("onePiecePicture");
const spyFamilyPicture = document.getElementById("spyFamilyPicture");
const chiPicture = document.getElementById("chiPicture");
const fukunekoPicture = document.getElementById("fukunekoPicture");
const ichikoEtNikoPicture = document.getElementById("ichikoEtNikoPicture");
const rojiPicture = document.getElementById("rojiPicture");

//CLASS
class Manga {
  constructor(bookConfig) {
    this.title = bookConfig.title;
    this.sentences = bookConfig.sentences;
    this.characters = bookConfig.characters;
    this.picture = bookConfig.picture;
    this.author = bookConfig.author;
  }

  get charactersList() {
    return this.characters;
  }

  get sentencesList() {
    return this.sentences;
  }
}

//INDIVIDUAL BOOK CONFIG Objects
const onePieceConfig = {
  title: "One Piece",
  sentences: [
    "Le roi des pirates, ce sera moi !",
    "Les gens ne cesseront jamais d'avoir des rêves !",
    "Vivre n'est pas un crime.",
    "L'avenir ne peut exister que si on met sa vie en jeu !",
    "Ne pas voir la pourriture dans ce monde, est un plaisir connu des aveugles.",
  ],
  characters: ["Luffy", "Nami", "Zoro", "Chopper", "Usopp"],
  picture: onePiecePicture,
  author: "Eiichiro Oda",
};

const spyFamilyConfig = {
  title: "Spy Family",
  sentences: [
    "Papa est le plus grand menteur du monde, mais c'est un menteur cool.",
    "J'essaie de ne pas me faire kidnapper.",
    "Tout le monde a une facette de lui-même qu'il ne peut pas révéler aux autres.",
    "Personne n'a tenu la main pour me sauver",
    "Je suppose qu'être célibataire à cet âge est déjà un problème.",
  ],
  characters: ["Anya", "Loid", "Yor", "Bond", "Damian"],
  picture: spyFamilyPicture,
  author: "Tatsuya Endo",
};

const chiConfig = {
  title: "Chi",
  sentences: [
    "Ze le savais ! Voilà la proie ! Elle fait cui cui !",
    "Il faut que ze fasse tomber ça aussi !",
    "Les animaux de compagnie sont interdits dans l'immeuble. Si vous voulez garder vos chats... Il va falloir quitter votre appartement.",
    "C'est dans la boîte pleine de petites billes qu'il faut faire pipi. Maman va te gronder !",
    "Mais non ! Ze suis pas un chat ! Ze suis Chi !",
  ],
  characters: ["Youhei", "Minou", "Noiraud", "Chi", "Monsieur Yamada"],
  picture: chiPicture,
  author: "Konami Kanata",
};

const fukunekoConfig = {
  title: "Fukuneko",
  sentences: [
    "Elle s'est introduite dans la maison ! Regarde...",
    "J'ai jamais accepté, moi de déménager dans ce coin paumé où j'ai aucun ami !",
    "Je voudrais te demander à propos de cette histoire de Fukuneko et de cette petite fille devenue déesse... Est-ce que c'est une histoire vraie ?",
    "J'ai l'impression que ça pourrait bien avoir un rapport avec la disparition de maman...",
    "Chacun trouve son bonheur où il peut !",
  ],
  characters: ["Ako", "Luna", "Yôta", "Fuku", "Ichirô"],
  picture: fukunekoPicture,
  author: "Mari Matsuzawa",
};

const ichikoEtNikoConfig = {
  title: "Ichiko et Niko",
  sentences: [
    "Au village pocket, une maison champignon.",
    "Tout le circuit de la maison est Mocco touché.",
    "C'est Mocco impossible.",
    "Pas une seconde je ne souhaiterais une autre vie que la mienne.",
    " Le parapluie Pwap-Pwap est trop pratique !",
  ],
  characters: ["Ichiko", "Niko", "Mocco", "Josette", "Ripper"],
  picture: ichikoEtNikoPicture,
  author: "Lunlun Yamamoto",
};

const rojiConfig = {
  title: "Roji",
  sentences: [
    "Hi hi ! C'est vrai qu'on se serait cru au pays des merveilles !",
    "Ah là là, quelle gaffeuse !",
    "La ville des humains et notre pays sont au même endroit !",
    "C'est un vrai monde souterrain !!",
    "Y a pas à dire, tu dessines comme un pied...",
  ],
  characters: ["Azusa", "Blanche", "Yuzu", "Karin", "Kokoro"],
  picture: rojiPicture,
  author: "Keisuke Kotobuki",
};

//COLLECTION BOOKS object
const booksCollection = {
  onePiece: new Manga(onePieceConfig),
  spyFamily: new Manga(spyFamilyConfig),
  chi: new Manga(chiConfig),
  fukuneko: new Manga(fukunekoConfig),
  ichikoEtNiko: new Manga(ichikoEtNikoConfig),
  roji: new Manga(rojiConfig),
};

//BUTTONS variables
const buttons = document.getElementsByTagName("button");
const booksButtons = document.querySelectorAll(".booksButtons");
const changeMangaChoice = document.querySelector(".changeMangaChoice");
const choicesButtons = document.querySelectorAll(".choicesButtons");
const charactersChoice = document.getElementById("charactersChoice");
const sentencesChoice = document.getElementById("sentencesChoice");
const formToValidateUserResponse = document.querySelector(
  ".inputPlayerContenair"
);
const validationButton = document.querySelector(".validation");

//CONTAINERS AND GAME STAPES VARIABLES
const topPage = document.getElementById("topPage");
const topPageTop = topPage.offsetTop;
const gamePlace = document.querySelector(".gamePlace");
const mangaStape = document.querySelector(".mangaStape");
const challengeStape = document.querySelector(".challengeStape");
const gameStape = document.querySelector(".gameStape");
const stape2 = document.getElementById("stape2");
const stape2Top = stape2.offsetTop;
const stape3 = document.getElementById("stape3");
const stape3Top = stape3.offsetTop;

//INSTRUCTIONS varibales
const subjectHome = document.querySelector(".subject span");
const subject = document.querySelector(".subject em");
const subjectFrame = document.querySelector(".subject");

//INPUT RESPONSE PLAYER variables
const responsePlayer = document.getElementById("inputPlayer");
const inputFrame = document.querySelector(".response input");

//MODAL SCORE VARIABLES, FUNCTIONS and EventsListener:
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const scoreInstructionButton = document.querySelector(
  ".scoreInstructionButton"
);
const scorePlayer = document.querySelector(".scorePlayer");
const modalCross = document.querySelector(".modalCross");

function openModal() {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
  window.scrollTo(0, topPageTop, { behavior: "smooth" });
}

function closeModalandReload() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
  window.location.reload();
}

function displayScoreInstructionButton() {
  validationButton.style.display = "none";
  scoreInstructionButton.style.display = "flex";
}

modalCross.addEventListener("click", closeModalandReload);

//RESPONSE PLAYER LIST AND CORRECTION LIST

const correctionList = document.querySelector(".correctionList");
let answerUserItem;
let correctAnswerItem;
let answerUserTrueOrFalse;

function correctionComplete(answerUser, correctAnswer, trueOrFalse) {
  this.answerUser = answerUser;
  this.correctAnswer = correctAnswer;
  this.trueOrFalse = trueOrFalse;
  this.giveAnswerUser = function () {
    answerUserItem = document.createElement("li");
    answerUserItem.textContent = this.answerUser;
    correctionList.append(answerUserItem);
    console.log(this.answerUser);
    answerUserItem.classList.add("answerUserItemStyle");
  };
  this.giveCorrectAnswer = function () {
    correctAnswerItem = document.createElement("li");
    correctAnswerItem.textContent = "Correction: " + this.correctAnswer;
    correctionList.append(correctAnswerItem);
    console.log(this.correctAnswer);
    correctAnswerItem.classList.add("correctAnswerItemStyle");
  };
  this.giveTrueOrFalse = function () {
    if (answerUserTrueOrFalse === false) {
      this.trueOrFalse = false;
      answerUserItem.classList.add("falseAnswer");
    } else {
      this.trueOrFalse = true;
    }
  };
}

//CONFETTI UNICORN
const jsConfetti = new JSConfetti();
const confettiButton = document.querySelector(".confettiButton");
confettiButton.addEventListener("click", () => {
  confettiButton.classList.add("validationAnimation");
  confettiButton.addEventListener("transitionend", () => {
    confettiButton.classList.remove("validationAnimation");
  });
  jsConfetti.addConfetti({
    emojis: ["🦄"],
    emojiSize: 100,
    confettiNumber: 50,
  });
});

/***********GAME***********/
let mangaUserChoice;
let subjectValue;
let indexCounter = 0;
let score = 0;
let gameReview;

//generals game functions
function buttonsDisable(buttons) {
  buttons.forEach(function (button) {
    button.disabled = true;
  });
}

function play() {
  indexCounter = 0;
  score = 0;
  formToValidateUserResponse.addEventListener("submit", (e) => {
    e.preventDefault();
    if (responsePlayer.value == "") {
      inputFrame.style.border = "solid 1.5px #f23a56";
    } else {
      validationButton.classList.add("validationAnimation");
      validationButton.addEventListener("transitionend", () => {
        validationButton.classList.remove("validationAnimation");
      });
      responsePlayerVerify();
      gameReview = new correctionComplete(
        responsePlayer.value,
        subjectValue[indexCounter],
        answerUserTrueOrFalse
      );
      gameReview.giveAnswerUser();
      gameReview.giveCorrectAnswer();
      gameReview.giveTrueOrFalse();
      responsePlayer.value = "";
      if (indexCounter < subjectValue.length - 1) {
        indexCounter += 1;
        subjectFrame.classList.add("animationDoubleBorder");
        subject.innerHTML = subjectValue[indexCounter];
      } else {
        openModal();
        scorePlayer.innerHTML = `Ton score est de ${score} / ${subjectValue.length} !`;
        jsConfetti.addConfetti({
          emojis: ["🦄"],
          emojiSize: 100,
          confettiNumber: 100,
        });
      }
    }
  });
}

function responsePlayerVerify() {
  if (responsePlayer.value === subjectValue[indexCounter]) {
    score++;
    answerUserTrueOrFalse = true;
    console.log(score);
    console.log(answerUserTrueOrFalse);
  } else {
    answerUserTrueOrFalse = false;
  }
}

//specifics/choices game functions
function mangaUserChoiceSelect() {
  booksButtons.forEach(function (bookButton) {
    bookButton.addEventListener("click", () => {
      bookButton.classList.add("buttonSelected");
      mangaUserChoice = booksCollection[bookButton.id];
      mangaUserChoice.picture.classList.remove("hidden");
      homePicture.classList.add("hidden");
      changeMangaChoice.classList.remove("hidden");
      changeMangaChoice.addEventListener("click", mangaChoiceChange);
      console.log(mangaUserChoice);
      buttonsDisable(booksButtons);
      window.scrollTo(0, stape2Top, { behavior: "smooth" });
      mangaStape.classList.remove("underlineAnimation");
      challengeStape.classList.add("underlineAnimation");
    });
  });
}

function mangaChoiceChange() {
  window.location.reload();
}

function charactersPlay() {
  console.log(mangaUserChoice);
  console.log(mangaUserChoice.charactersList);
  buttonsDisable(choicesButtons);
  charactersChoice.classList.add("buttonSelected");
  sentencesChoice.classList.remove("buttonSelected");
  subjectValue = mangaUserChoice.charactersList;
  subject.innerHTML = subjectValue[indexCounter];
  subjectHome.classList.add("hidden");
  subject.classList.remove("hidden");
  window.scrollTo(0, stape3Top, { behavior: "smooth" });
  gameStape.classList.add("underlineAnimation");
  challengeStape.classList.remove("underlineAnimation");
  play();
}

function sentencesPlay() {
  console.log(mangaUserChoice);
  console.log(mangaUserChoice.sentencesList);
  charactersChoice.classList.remove("buttonSelected");
  sentencesChoice.classList.add("buttonSelected");
  subjectValue = mangaUserChoice.sentencesList;
  subject.innerHTML = subjectValue[indexCounter];
  subjectHome.classList.add("hidden");
  subject.classList.remove("hidden");
  window.scrollTo(0, stape3Top, { behavior: "smooth" });
  gameStape.classList.add("underlineAnimation");
  challengeStape.classList.remove("underlineAnimation");
  play();
}

//lauch Game
function launchGame() {
  mangaUserChoiceSelect();
  charactersChoice.addEventListener("click", charactersPlay);
  sentencesChoice.addEventListener("click", sentencesPlay);
  mangaStape.classList.add("underlineAnimation");
}

launchGame();
