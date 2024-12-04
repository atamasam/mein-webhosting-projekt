let currentLectureIndex = 0;
const lectures = [
  "content/01_content.html",
  "content/02_content.html",
  "content/03_content.html",
  "content/04_content.html",
  "content/05_content.html",
  "content/06_content.html",
  "content/schwerpunkt.html", // Schwerpunkt als normale Vorlesung behandeln
];

function showContent(lecture) {
  // Ermittele den Index der Vorlesung in der lectures-Liste
  currentLectureIndex = lectures.indexOf(lecture);

  fetch(lecture)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("lectureContainer").innerHTML = data;
      document.querySelector(".container").style.display = "none";
      document.getElementById("lectureContainer").style.display = "flex";

      const backButton = document.getElementById("backButton");
      const nextButton = document.getElementById("nextButton");

      backButton.classList.remove("hide");
      backButton.classList.add("show");
      backButton.style.display = "block";

      nextButton.classList.remove("hide");
      nextButton.classList.add("show");
      nextButton.style.display = "block";
    });
}

function showLastLecture() {
  currentLectureIndex =
    (currentLectureIndex - 1 + lectures.length) % lectures.length;
  showContent(lectures[currentLectureIndex]); // Keine Änderungen an den Übergabeparametern
}

function showNextLecture() {
  currentLectureIndex = (currentLectureIndex + 1) % lectures.length;
  showContent(lectures[currentLectureIndex]); // Keine Änderungen an den Übergabeparametern
}

function goBack() {
  document.querySelector(".container").style.display = "flex";
  document.getElementById("lectureContainer").style.display = "none";

  const backButton = document.getElementById("backButton");
  const nextButton = document.getElementById("nextButton");

  backButton.classList.remove("show");
  backButton.classList.add("hide");

  nextButton.classList.remove("show");
  nextButton.classList.add("hide");

  setTimeout(() => {
    backButton.style.display = "none";
    nextButton.style.display = "none";
  }, 500); // Wartezeit für die Dauer der Ausblendungsanimation
}

function searchLectures() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const buttons = document.querySelectorAll(".button");

  buttons.forEach((button) => {
    const text = button.textContent.toLowerCase();
    if (text.includes(input)) {
      button.style.display = "block";
    } else {
      button.style.display = "none";
    }
  });

  const noResultsMessage = document.getElementById("noResultsMessage");
  if (buttons.length === 0) {
    noResultsMessage.style.display = "block";
  } else {
    noResultsMessage.style.display = "none";
  }
}

function toggleSidebar() {
  var sidebar = document.getElementById("mySidebar");
  if (sidebar.style.width === "250px") {
    sidebar.style.width = "0";
  } else {
    sidebar.style.width = "250px";
    loadSidebarContent();
  }
}

function loadSidebarContent() {
  fetch("side/00_sidebar.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("sidebarContent").innerHTML = data;
    });
}

function runScript() {
  alert("Jetzt folgt eine Abfrage");
  var name = prompt("Wie ist dein Name");
  let codeBlock = document.getElementById("codeBlock");
  codeBlock.innerHTML = "Hallo " + name;
}

function runScript_2() {
  let eingabe = prompt("Bitte geben Sie die Anzahl ein: ", "");

  // Hole das Element mit der ID "codeBlock2"
  let codeBlock = document.getElementById("codeBlock2");

  // Lösche den aktuellen Inhalt des Elements
  codeBlock.innerHTML = "";

  if (!eingabe) {
    codeBlock.innerHTML = "Abbruch eingegeben";
  } else {
    for (var i = 1; i <= eingabe; i++) {
      for (var j = 1; j <= i; j++) {
        codeBlock.innerHTML += "*"; // Ändere das Symbol auf *
      }
      codeBlock.innerHTML += "<br>";
    }
  }
}

function runScript_3() {
  let inputString = prompt("Bitte geben Sie einen String ein:", "");
  let codeBlock = document.getElementById("codeBlock3");
  codeBlock.innerHTML = "";

  if (!inputString) {
    codeBlock.innerHTML = "Abbruch eingegeben";
  } else {
    const countBs = (str) =>
      str.split("").filter((char) => char.toLowerCase() === "b").length;
    let count = countBs(inputString);
    codeBlock.innerHTML = `Der String enthält ${count} 'B' oder 'b'.`;
  }
}

// JavaScript zur Umrechnung und Validierung
function replace() {
  var eingabeFeld = document.getElementById("eingabe");
  eingabeFeld.value = eingabeFeld.value.replace(".", ",");
}

function script4() {
  var eingabeFeld = document.getElementById("eingabe");
  var input = eingabeFeld.value.replace(",", ".");
  var waehrung = document.querySelector('input[name="radio"]:checked');

  if (!waehrung) {
    alert("Bitte eine Umrechnungsrichtung auswählen!");
    return;
  }

  var ausgabe = 0;

  if (waehrung.value == "euroToUs") {
    ausgabe = (input * 1.07).toFixed(2); // Euro zu US-Dollar
  } else if (waehrung.value == "usToEuro") {
    ausgabe = (input * 0.94).toFixed(2); // US-Dollar zu Euro
  }

  document.getElementById("ausgabe").value = ausgabe.replace(".", ",");
}

let items = [];

function addItem() {
  items.push("New Item");
  renderItems();
}

function renderItems() {
  const itemList = document.getElementById("itemList");
  itemList.innerHTML = ""; // Clear existing items
  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    itemList.appendChild(li);
  });
}
// JavaScript zur Objekten
class Kontakt {
  static gesamtZahl = 0;

  #laufendeNummer;
  #vorname;
  #nachname;
  #telefon;
  #email;

  constructor(vorname, nachname, telefon, email) {
    this.#laufendeNummer = ++Kontakt.gesamtZahl;
    this.#vorname = vorname;
    this.#nachname = nachname;
    this.#telefon = telefon;
    this.#email = email;
  }

  getNummer() {
    return this.#telefon;
  }

  getVorname() {
    return this.#vorname;
  }

  setName(neuerNachname) {
    this.#nachname = neuerNachname;
  }

  getName() {
    return this.#nachname;
  }

  checkUser(nachname) {
    return this.#nachname === nachname;
  }

  getDetails() {
    return `Nummer: ${this.#laufendeNummer}, Name: ${this.#vorname} ${
      this.#nachname
    }, Telefon: ${this.#telefon}, Email: ${this.#email}`;
  }
}

const kontakte = [];

function addContact() {
  const form = document.getElementById("contactForm");
  const vorname = form.vorname.value;
  const nachname = form.nachname.value;
  const telefon = form.telefon.value;
  const email = form.email.value;

  const kontakt = new Kontakt(vorname, nachname, telefon, email);
  kontakte.push(kontakt);
  displayContacts();
}

function displayContacts() {
  const contactsList = document.getElementById("contactsList");
  contactsList.innerHTML = ""; // Liste zurücksetzen
  kontakte.forEach((kontakt, index) => {
    const contactDiv = document.createElement("div");
    contactDiv.textContent = kontakt.getDetails();

    contactsList.appendChild(contactDiv);

    // Zeilenumbruch nach jedem Kontakt außer dem letzten
    if (index < kontakte.length - 1) {
      const lineBreak = document.createElement("br");
      contactsList.appendChild(lineBreak);
    }
  });
}
function updateName() {
  const vorname = document.getElementById("editVorname").value;
  const neuerNachname = document.getElementById("neuerNachname").value;
  const kontakt = kontakte.find((k) => k.getVorname() === vorname);

  if (kontakt) {
    kontakt.setName(neuerNachname);
    document.getElementById(
      "editResult"
    ).textContent = `Nachname geändert zu: ${kontakt.getName()}`;
    displayContacts();
  } else {
    document.getElementById("editResult").textContent =
      "Kontakt nicht gefunden";
  }
}

function checkUser() {
  const vorname = document.getElementById("editVorname").value;
  const neuerNachname = document.getElementById("neuerNachname").value;
  const kontakt = kontakte.find((k) => k.getVorname() === vorname);

  if (kontakt) {
    document.getElementById("editResult").textContent = kontakt.checkUser(
      neuerNachname
    )
      ? "Nachname stimmt überein"
      : "Nachname stimmt nicht überein";
  } else {
    document.getElementById("editResult").textContent =
      "Kontakt nicht gefunden";
  }
}
