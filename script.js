/***********VARIABLES - CLASS - OBJECTS***********/
//PICTIRES variables
const onePiecePicture = document.getElementById("onePiecePicture");
const spyFamilyPicture = document.getElementById("spyFamilyPicture");
const ranmaDemiPicture = document.getElementById("ranmaDemiPicture");
const onePunchManPicture = document.getElementById("onePunchManPicture");
const attaqueDesTitansPicture = document.getElementById(
  "attaqueDesTitansPicture"
);
const deadDeadDemonDestructionPicture = document.getElementById(
  "deadDeadDemonDestructionPicture"
);

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

const ranmaDemiConfig = {
  title: "Ranma 1/2",
  sentences: [
    "Arrrgh! Les pandas ne peuvent pas parler.",
    "Voilà, Ranma, comme tu le souhaitais : un joli minou en pleine face !",
    "Ranma, je ne peux pas croire que tu sois jaloux d'un cochon..",
    "Ou diable suis-je maintenant ?",
    "Akane est vraiment une fille adorable. C’est juste une maniaque violente.",
  ],
  characters: ["Ranma", "Akane", "Ryoga", "Shampoo", "Genma"],
  picture: ranmaDemiPicture,
  author: "Rumiko Takahashi",
};

const onePunchManConfig = {
  title: "One-Punch Man",
  sentences: [
    "Tu dois t'entraîner comme un diable jusqu'au point où tes cheveux tombent. C'est la seule façon de devenir vraiment fort.",
    "Les êtres humains sont forts parce que nous pouvons nous changer.",
    "Je suis un cyborg solitaire qui se bat pour la justice !",
    "Je laisserai les problèmes de demain au moi de demain.",
    "Si tu as le temps de t'apitoyer, tu as le temps de t'ameliorer.",
  ],
  characters: ["Saitama", "Genos", "Tatsumaki", "Blast", "Suiko"],
  picture: onePunchManPicture,
  author: "Yusuke Murata",
};

const attaqueDesTitansConfig = {
  title: "L'Attaque des Titans",
  sentences: [
    "Les fous ce sont ceux qui acceptent de vivre comme du bétail.",
    "Bats-toi. Si tu perds tu meurs, si tu gagne tu vis.",
    "Si tu entres dans les troupes de patrouille, je te suivrai là-bas. Tu mourras rapidement si je ne suis pas là.",
    "Pardon Eren. J'ai eu un instant de faiblesse, mais ça ne se reproduira plus. Si je mourais... Je ne pourrais plus... penser à toi.",
    " Ce dont tu as le plus besoin pour l'instant, ce n'est pas de théorie, mais d'une leçon pratique.",
  ],
  characters: ["Eren", "Mikasa", "Armin", "Levi", "Sasha"],
  picture: attaqueDesTitansPicture,
  author: "Hajime Isayama",
};

const deadDeadDemonDestructionConfig = {
  title: "Dead Dead Demon Destruction",
  sentences: [
    "Ayez tous les chargeurs d'armes chargés de guimauve !",
    "Ils passent leur temps sur les reseaux sociaux a ecrire des commentaires sur des vedettes de tele sqns interet !.",
    "On va tous mourrir, nous, et vous, les humains...",
    "Un vaisseau envahisseur de taille moyenne et de tres nombreux petits appareils ont ete detectes.",
    "On finira tous broyes par cette societe elististe ou seuls les diplomes comptent...",
  ],
  characters: ["Kadode", "Oran", "Isobeyan", "Ooba", "Hiroshi"],
  picture: deadDeadDemonDestructionPicture,
  author: "Inio Asano",
};

//COLLECTION BOOKS object
const booksCollection = {
  onePiece: new Manga(onePieceConfig),
  spyFamily: new Manga(spyFamilyConfig),
  ranmaDemi: new Manga(ranmaDemiConfig),
  onePunchMan: new Manga(onePunchManConfig),
  attaqueDesTitans: new Manga(attaqueDesTitansConfig),
  deadDeadDemonDestruction: new Manga(deadDeadDemonDestructionConfig),
};

//BUTTONS variables
let buttons = document.getElementsByTagName("button");
let booksButtons = document.querySelectorAll(".booksButtons");

const choicesButtons = document.querySelectorAll(".choicesButtons");

let charactersChoice = document.getElementById("charactersChoice");
let sentencesChoice = document.getElementById("sentencesChoice");
let formToValidateUserResponse = document.querySelector(
  ".inputPlayerContenair"
);
let validationButton = document.getElementById("validation");

//INSTRUCTIONS varibales
let subject = document.querySelector(".subject");

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
      responsePlayerVerify();
      responsePlayer.value = "";
      if (indexCounter < subjectValue.length - 1) {
        indexCounter += 1;
        subject.innerHTML = subjectValue[indexCounter];
      } else {
        indexCounter = 0;
        subject.textContent = "DONE !";
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

//specifics game functions
function mangaUserChoiceSelect() {
  booksButtons.forEach(function (bookButton) {
    bookButton.addEventListener("click", () => {
      bookButton.style.border = "solid 4px #f23a56";
      mangaUserChoice = booksCollection[bookButton.id];
      console.log(mangaUserChoice);
      buttonsDisable(booksButtons);
      challengeChoose();
    });
  });
}

function challengeChoose() {
  charactersChoice.addEventListener("click", charactersPlay);

  sentencesChoice.addEventListener("click", sentencesPlay);
}

function charactersPlay() {
  console.log(mangaUserChoice);
  console.log(mangaUserChoice.charactersList);
  charactersChoice.style.border = "solid 4px #f23a56";
  buttonsDisable(choicesButtons);
  subjectValue = mangaUserChoice.charactersList;
  subject.innerHTML = subjectValue[indexCounter];
  play();
}

function sentencesPlay() {
  console.log(mangaUserChoice);
  console.log(mangaUserChoice.sentencesList);
  subjectValue = mangaUserChoice.sentencesList;
  subject.innerHTML = subjectValue[indexCounter];
  play();
}

//let Game

mangaUserChoiceSelect();
