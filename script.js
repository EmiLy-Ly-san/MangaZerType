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
    "Les gens ne cesseront jamais d'avoir des reves !",
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
    "Tout le monde a une facette de lui-meme qu'il ne peut pas reveler aux autres.",
    "Personne n'a tenu la main pour me sauver",
    "Je suppose qu'etre celibataire a cet age est deja un probleme.",
  ],
  characters: ["Anya", "Loid", "Yor", "Bond", "Damian"],
  picture: spyFamilyPicture,
  author: "Tatsuya Endo",
};

const chiConfig = {
  title: "Chi",
  sentences: [
    "Ze le savais ! Voilà la proie ! Elle fqit cui cui !",
    "Il faut que ze fasse tomber ça aussi !",
    "Les animaux de compagnie sont interdits dans l'immeuble. Si vous voulez garder vos chats... Il va falloir quitter votre appartement.",
    "C'est dans la boîte pleine de petutes billes qu'il faut faire pipi. Maman va te gronder !",
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
    "Hi hi ! C'est vrai qu'on se serait crues au pays des merveilles !",
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
let buttons = document.getElementsByTagName("button");
let booksButtons = document.querySelectorAll(".booksButtons");
let changeMangaChoice = document.querySelector(".changeMangaChoice");
let choicesButtons = document.querySelectorAll(".choicesButtons");
let charactersChoice = document.getElementById("charactersChoice");
let sentencesChoice = document.getElementById("sentencesChoice");
let formToValidateUserResponse = document.querySelector(
  ".inputPlayerContenair"
);
let validationButton = document.querySelector(".validation");

//INSTRUCTIONS varibales
let subjectHome = document.querySelector(".subject span");
let subject = document.querySelector(".subject em");
let subjectFrame = document.querySelector(".subject");

//INPUT RESPONSE PLAYER variables
let responsePlayer = document.getElementById("inputPlayer");
let inputFrame = document.querySelector(".response input");

//MODAL VARIABLES, FUNCTIONS and EventsListener:
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const scoreInstructionButton = document.querySelector(
  ".scoreInstructionButton"
);
const scorePlayer = document.querySelector(".scorePlayer");
const okButton = document.querySelector(".okButton");

function openModal() {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}

function closeModalandReload() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
  window.location.reload();
}

function displayScoreInstructionButton() {
  validationButton.style.display = "none";
  scoreInstructionButton.style.display = "block";
  scorePlayer.innerHTML = `Ton score est de ${score} / ${subjectValue.length} !`;
}

scoreInstructionButton.addEventListener("click", openModal);
okButton.addEventListener("click", closeModalandReload);

/***********GAME***********/
let mangaUserChoice;
let subjectValue;
let indexCounter = 0;
let score = 0;

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
      validationButton.classList.add("validateAction");
      responsePlayerVerify();
      responsePlayer.value = "";
      if (indexCounter < subjectValue.length - 1) {
        indexCounter += 1;
        subjectFrame.classList.add("animationDoubleBorder");
        subject.innerHTML = subjectValue[indexCounter];
      } else {
        indexCounter = 0;
        subjectFrame.classList.remove("animationDoubleBorder");
        subject.classList.add("hidden");
        subjectHome.classList.remove("hidden");
        subjectHome.textContent = "DONE !";
        responsePlayer.placeholder = "Clique pour VOIR TON SCORE !";
        displayScoreInstructionButton();
      }
    }
  });
}

function responsePlayerVerify() {
  if (responsePlayer.value === subjectValue[indexCounter]) {
    score++;
    console.log(score);
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
  play();
  gameStape.classList.add("underlineAnimation");
  challengeStape.classList.remove("underlineAnimation");
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
  play();
  gameStape.classList.add("underlineAnimation");
  challengeStape.classList.remove("underlineAnimation");
}

//let Game
mangaUserChoiceSelect();
charactersChoice.addEventListener("click", charactersPlay);
sentencesChoice.addEventListener("click", sentencesPlay);

responsePlayer.addEventListener("focus", () => {
  validationButton.classList.remove("validateAction");
});

const mangaStape = document.querySelector(".mangaStape");
const challengeStape = document.querySelector(".challengeStape");
const gameStape = document.querySelector(".gameStape");
mangaStape.classList.add("underlineAnimation");
