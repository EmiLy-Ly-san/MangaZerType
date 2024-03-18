/***********VARIABLES - CLASS - OBJECTS***********/
//Pictures variables
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

//Individual Books Config Objects
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

// Books Collection
const booksCollection = {
  onePiece: new Manga(onePieceConfig),
  spyFamily: new Manga(spyFamilyConfig),
  ranmaDemi: new Manga(ranmaDemiConfig),
  onePunchMan: new Manga(onePunchManConfig),
  attaqueDesTitans: new Manga(attaqueDesTitansConfig),
  deadDeadDemonDestruction: new Manga(deadDeadDemonDestructionConfig),
};
const onePiece = booksCollection.onePiece;
const spyFamily = booksCollection.spyFamily;
const ranmaDemi = booksCollection.ranmaDemi;
const onePunchMan = booksCollection.onePunchMan;
const attaqueDesTitans = booksCollection.attaqueDesTitans;
const deadDeadDemonDestruction = booksCollection.deadDeadDemonDestruction;

//BookButtons variables
let booksButtons = document.querySelectorAll(".booksButtons");

//CHALLENGE CHOICES variables
const choicesButtons = document.querySelectorAll(".choicesButtons");
//INSTRUCTIONS varibales
let subject = document.querySelector(".subject");
//BUTTON
let validationButton = document.getElementById("#validation");
let charactersChoice = document.querySelector(".charactersChoice");

/***********GAME***********/
let score = 0;
let onePieceButton = document.querySelector(".onePiece");

function onePieceSelect() {
  onePieceButton.addEventListener("click", challengeOnePieceChoice);
}

function validateResponseUser() {
  validationButton.addEventListener("click", () => {
    validationButton.value = "active";
  });
}

function challengeOnePieceChoice() {
  if ((charactersChoice.value = "active")) {
    onePieceCharactersPlay();
  } else {
    onePieceSentencesPlay();
}

function onePieceCharactersPlay() {
  onePiece.charactersList.forEach(function (character, index) {
    subject.textContent = character;
    if (validationButton.value = "active") {   
      index++;
    }
  });
  console.log(score);
}

function onePieceSentencesPlay() {
    onePiece.sentencesList.forEach(function (sentence, index) {
        subject.texContent = sentence;
        if(validationButton.value = "active") {
            index++;
        }
    })
}

function letGame() {
  onePieceSelect();
}

letGame();










//MANGA AND CHALLENGE SELECTION
/*let mangaUserChoice;
function selectMangaUserChoice() {
  booksButtons.forEach(function (bookButton, index) {
    bookButton.addEventListener("click", () => {
      if ((booksButtons[index].value = "active")) {
        mangaUserChoice = booksButtons[index];
        console.log(mangaUserChoice);
      }
    });
  });
}

let challengeUserChoice;
function selectChallengeUserChoice() {
  choicesButtons.forEach(function (choiceButton, index) {
    choiceButton.addEventListener("click", () => {
      if ((choicesButtons[index] = "active")) {
        challengeUserChoice = choicesButtons[index];
        console.log(challengeUserChoice);
        charactersPropose();
      }
    });
  });
}

//LET GAME
let charactersUserList;
function charactersPropose() {
  charactersUserList = booksCollection.mangaUserChoice.charactersList;
  console.log(charactersUserList);
}

/*function browseChallengeButtons() {
  choicesButtons.forEach(function (choiceButton) {
    choiceButton.style.border = "solid 4px var(--lightRed)";
  });
}*/
//Manga User Choice
/*let mangaUserChoice;
function mangaUserSelect() {
  if ((booksButtons.value = "active")) {
    mangaUserChoice = booksButtons;
    console.log(mangaUserChoice);
  }
}*/
/*
    bookButton.style.border = "solid 4px var(--lightRed)";
    if (book.classList.contains("onePiece")) {
        mangaUserChoice = onePiece;
      } else if (book.classList.contains("spyFamily")) {
        mangaUserChoice = spyFamily;
      } else if (book.classList.contains("ranmaDemi")) {
        mangaUserChoice = ranmaDemi;
      } else if (book.classList.contains("onePunchMan")) {
        mangaUserChoice = onePunchMan;
      } else if (book.classList.contains("attaqueDesTitans")) {
        mangaUserChoice = attaqueDesTitans;
      } else if (book.classList.contains("deadDeadDemonDestruction")) {
        mangaUserChoice = deadDeadDemonDestruction;
      }
    })
  );
}*/


/*Challenge User Choice
let challengeUserChoice;
function challengeUserSelect() {
  choices.forEach((choices) =>
    choices.addEventListener("click", () => {
      debugger;
      choices.style.border = "solid 4px var(--lightRed)";
      if (choices.classList.contains("charactersChoice")) {
        console.log({ mangaUserChoice });
        if (mangaUserChoice.id === "One Piece") {
          //fqire un id pour chqaue bookConfig
          console.log(onePiece.charactersPropose());
        } else if ((mangaUserChoice = spyFamily)) {
          console.log(mangaUserChoice);
          console.log(spyFamily.charactersPropose());
        } else if ((mangaUserChoice = ranmaDemi)) {
          console.log(ranmaDemi.charactersPropose());
        } else if ((mangaUserChoice = onePunchMan)) {
          console.log(onePunchMan.charactersPropose());
        } else if ((mangaUserChoice = attaqueDesTitans)) {
          console.log(attaqueDesTitans.charactersPropose());
        } else if ((mangaUserChoice = deadDeadDemonDestruction)) {
          console.log(deadDeadDemonDestruction.charactersPropose());
        }
      } else if (choices.classList.contains("sentencesChoice")) {
        if ((mangaUserChoice = onePiece)) {
          console.log(onePiece.sentencesPropose());
        } else if ((mangaUserChoice = spyFamily)) {
          console.log(spyFamily.sentencesPropose());
        } else if (mangaUserChoice == ranmaDemi) {
          console.log(ranmaDemi.sentencesPropose());
        } else if (mangaUserChoice == onePunchMan) {
          console.log(onePunchMan.sentencesPropose());
        } else if ((mangaUserChoice = attaqueDesTitans)) {
          console.log(attaqueDesTitans.sentencesPropose());
        } else if ((mangaUserChoice = deadDeadDemonDestruction)) {
          console.log(deadDeadDemonDestruction.sentencesPropose());
*/