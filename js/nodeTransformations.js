function translateDocumentation() {
  const documentContents = document.body.getElementsByClassName(
    "documentation"
  );
  const translateDict = {
    simple: "poorly documented",
    intuitive: "confusing",
    delightful: "tedious",
    easy: "impossible to debug",
    "join the conversation": "rely on the kindness of strangers",
  };
  const textElements = documentContents[0].getElementsByTagName("p");
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
  var h = document.createElement("H1");
  const warning = document.createTextNode("Jillian! Why didnt you listen?");
  h.appendChild(warning);
  docTitle = document.body.getElementsByTagName("h1")[0];
  docTitle.parentNode.replaceChild(h, docTitle);

  let text = document.createTextNode("Jillian, I told you not to click!");
  const items = document.body.getElementsByClassName("grid-item");
  for (let i = items.length - 1; i >= 0; i--) {
    let item = items[i];
    let noun = i == 0 ? "time" : "times";
    const text = document.createTextNode(
      `You have been cursed ${i + 1} ${noun}!`
    );
    item.parentNode.replaceChild(text, item);
  }
}

function initiateCurse2() {
  let george = document.querySelector("object");
  let angle = Math.PI / 2;
  function animate(time, lastTime) {
    if (lastTime != null) {
      angle += (time - lastTime) * 0.001;
    }
    george.style.top = Math.sin(angle) * 30 + "px";
    george.style.left = Math.cos(angle) * 30 + "px";
    requestAnimationFrame((newTime) => animate(newTime, time));
  }
  requestAnimationFrame(animate);
}
