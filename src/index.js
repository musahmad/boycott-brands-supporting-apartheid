window.addEventListener("load", () => {
  console.log("Dom loaded");
  // get the class names
  const { mainContentClass, productTileClasses, productTileTags, tileProp } = getClassNames();
  // highlight products
  const matchedCompanies = applyBoycott(productTileClasses, productTileTags, tileProp);
  // action banner
  matchedCompanies.length > 0 ? showFooter(matchedCompanies) : hideFooter();
  // observe the content tag - add children
  observeDomChanges(mainContentClass, productTileClasses, productTileTags, tileProp);
});

function findContentTag(contentTarget) {
  // contentTarget is an array, so we map over it
  // and save the closures
  const results = contentTarget.map((ct) => {
    switch (ct) {
      case "body":
        return (mutation) => mutation.target.localName === ct;
      default:
        return (mutation) => mutation.target.className.includes(ct);
    }
  });
  return results;
}

function observeDomChanges(contentClassName, productTileClasses, productTileTags, tileProp) {
  const targetFinder = findContentTag(contentClassName);
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (
        mutation.type === "childList" &&
        (!mutation.previousSibling ||
          mutation.previousSibling.className !== "palestine-footer")
      ) {
        // iterate over closures and check if
        // there is one that returns true
        targetFinder.forEach((tf) => {
          // if check is true, we proceed
          if (tf(mutation)) {
            console.log(mutation);
            // highlight products
            const listBoycottedCompanies = applyBoycott(
              productTileClasses,
              productTileTags,
              tileProp
            );
            if (mutation.removedNodes[0]?.className === "palestine-footer") {
              return;
            }
            // action banner
            listBoycottedCompanies.length > 0
              ? showFooter(listBoycottedCompanies)
              : hideFooter();
          }
        });
      }
    });
  });

  observer.observe(document.body, { subtree: true, childList: true });
}

function applyBoycott(productTileClasses, productTileTags, tileProp) {
  const matchedBrands = new Set();
  let productTiles = []
  for (const tileClass of productTileClasses) {
    productTiles.push(...document.getElementsByClassName(tileClass));
  }
  if (productTileTags !== undefined) {
    for (const tileTag of productTileTags) {
      productTiles.push(...document.getElementsByTagName(tileTag));
    }
  }

  const boycottedBrands = companies
    .map((company) => company.name)
    .flatMap((company) => brands[company] || company);

  Array.from(productTiles).forEach((tile) => {
    const normalizedTile = getInnerTextWithLineBreaks(tile);
    const tileText = removeAccents(normalizedTile);
    const matchedBrand = isBrandFoundInText(boycottedBrands, tileText);
    if (matchedBrand) {
      applyBlur(tile);
      matchedBrands.add(matchedBrand);
    }
  });
  return [...new Set([...matchedBrands].map((brand) => findCompany(brand)))];
}

function isBrandFoundInText(brands, text) {
  // try and limit search to title by splitting on price or weight
  const textToSearch = text.split(/[$£€]|(\d+[gG])/i)[0];

  // iterate over brand and return boolean depending
  // on whether brand has been found in text or not
  const matchedBrand = brands.find(
    (brand) => textToSearch.search(new RegExp("\\b" + brand + "\\b", "gi")) > -1
  );

  return matchedBrand;
}

function applyBlur(node) {
  node.classList.add("blurred");
}

function showFooter(listCompanies) {
  const formattedListCompanies =
    listCompanies.length > 1
      ? listCompanies
          .slice(0, -1)
          .join(", ")
          .concat(" and ", listCompanies.slice(-1))
      : listCompanies[0];

  const footer = document.createElement("div");
  const text = document.createElement("div");
  const close = document.createElement("div");
  
  const flag = document.createElement("div");
  const img = document.createElement("img")
  img.src = chrome.runtime.getURL("./logo.png")
  img.width = 80;
  flag.appendChild(img)
  flag.role = "img";

  text.innerHTML = `By supporting Israel, ${formattedListCompanies} ${
    listCompanies.length > 1 ? "are" : "is"
  } supporting the the apartheid of the Palestinians. Their products have been blurred.`;
  close.classList.add("close-button");
  close.innerText = "Close";
  close.addEventListener("click", hideFooter);
  footer.appendChild(flag);
  footer.appendChild(text);
  footer.appendChild(close);
  footer.classList.add("palestine-footer");
  document.body.appendChild(footer);
}

function hideFooter() {
  const footerCollection = document.getElementsByClassName("palestine-footer");
  Array.from(footerCollection).forEach((footer) => {
    footer.remove();
  });
}

function removeAccents(text) {
  return text
    .replace(/[ÀÁÂÃÄÅ]/gi, "a")
    .replace(/[ÈÉÊË]/gi, "e")
    .replace(/[Î]/gi, "i")
    .replace(/[Ô]/gi, "o")
    .replace(/[Ù]/gi, "u")
    .replace(/[Ç]/gi, "c");
}

function findCompany(brand) {
  const matchedEntry = Object.entries(brands).find(([company, brands]) =>
    brands.includes(brand)
  );
  return matchedEntry ? matchedEntry[0] : brand;
}

function getDescriptions(listCompanies) {
  return companies
    .filter((company) => listCompanies.includes(company.name))
    .map((company) => company.description)
    .join("");
}

// This function will iterate through all child nodes and construct the text content
// with line breaks for block-level elements.
function getInnerTextWithLineBreaks(element) {
  let text = '';
  for (const child of element.childNodes) {
      if (child.nodeType === Node.TEXT_NODE) {
          text += child.nodeValue + '\n';
      } else if (child.nodeType === Node.ELEMENT_NODE) {
          if (window.getComputedStyle(child).display === 'block') {
              // Before we add the block-level text, we ensure there's a new line if text is not empty
              if (text !== '') {
                  text += '\n';
              }
              text += getInnerTextWithLineBreaks(child);
          } else {
              text += getInnerTextWithLineBreaks(child);
          }
      }
  }
  return text;
}

