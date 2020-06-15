function translateDocumentation() {
  const documentContents = document.querySelector("#documentation");

  // remove button
  const button = document.getElementById("documentation-button");
  button.parentNode.removeChild(button);

  // colors change to something more evil
  documentContents.style.background = "yellow";

  // translate title
  const title = documentContents.getElementsByTagName("h2")[0];
  title.textContent = " ⚠️ Caution";
  title.style.color = "yellow";

  // translate page
  const translateDict = {
    simple: "poorly documented",
    intuitive: "confusing",
    delightful: "tedious",
    easy: "impossible to debug",
    "join the conversation": "rely on the kindness of strangers",
  };
  const textElements = documentContents.getElementsByTagName("p");
  for (let text of textElements) {
    for (childNode of text.childNodes) {
      if (childNode.nodeType == 3) {
        const correctedText = childNode.nodeValue
          .split(" ")
          .map((word) => {
            let unpunctuated = word.match(/[^_\W]+/g);
            if (translateDict[unpunctuated])
              return word.replace(unpunctuated, translateDict[unpunctuated]);
            else return word;
          })
          .join(" ");
        text.replaceChild(document.createTextNode(correctedText), childNode);
      }
    }
  }
}

function initiateCurse() {
  docTitle = document.body.getElementsByTagName("h1")[0];
  docTitle.textContent = "Jillian! Why didnt you listen?";
  document.body.style.color = "white";
  document.body.style.background = "black";

  // remove documentation "game" for now
  const documention = document.getElementById("documentation");
  documention.parentNode.removeChild(documention);

  let text = document.createTextNode("Jillian, I told you not to click!");
  const items = document.body.getElementsByClassName("grid-item");
  for (item of items) {
    initiateCurse2(item);
  }
}

function initiateCurse2(george) {
  console.log(george);
  george.style.position = "relative";
  const randomNumber = Math.floor(Math.random() * 80) + 10;
  let angle = Math.PI / 2;
  function animate(time, lastTime) {
    if (lastTime != null) {
      angle += (time - lastTime) * 0.001;
    }
    george.style.top = Math.sin(angle) * randomNumber + "px";
    george.style.left = Math.cos(angle) * randomNumber + "px";
    requestAnimationFrame((newTime) => animate(newTime, time));
  }
  requestAnimationFrame(animate);
}
