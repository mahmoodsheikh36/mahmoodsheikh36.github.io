// search data
let data = [];

window.onload = function(e) {
  // make all "math buttons" clickable
  document.querySelectorAll(".math-button").forEach(elm => handleMathButton(elm));
  // fetch the search data
  fetch("search.json").then(response => response.json()).then(json => {
    for (let entry of json) {
      let entryText = entry.id || entry.title;
      if (entryText !== undefined && entryText !== null) {
        data.push(entry);
      }
    }
    search('');
  });
}

let popupElm;
let toShow = true; /* we need this because by the time the web request is done the user might've moved the mouse and we no longer need to show the result */
function handleMathButton(node) {
  if (node.classList.contains('math-button')) {
    let symbol = node.children[0];
    symbol.setAttribute('original-fill', symbol.getAttribute('fill'));
    node.onmouseover = function(event) {
      toShow = true;
      if (popupElm !== undefined)
        popupElm.innerHTML = ''; // clear previously added blocks
      symbol.setAttribute('fill', 'red');
      let ref = node.getAttribute('data-ref');
      let refId = ref.substr(4);
      getElementByBlkId(refId, function (elm) {
        if (!toShow)
          return;
        if (popupElm === undefined) {
          popupElm = document.createElement('div');
          popupElm.className = "popup";
          document.body.appendChild(popupElm);
        }
        popupElm.innerHTML = '';
        popupElm.appendChild(elm);
        Object.assign(popupElm.style, {
          left: `${event.pageX}px`,
          top:  `${event.pageY}px`,
          display: `block`,
        });
      });
    }
    node.onmouseout = function() {
      toShow = false;
      symbol.setAttribute('fill', symbol.getAttribute('original-fill'));
      if (popupElm !== undefined) {
        popupElm.innerHTML = '';
        Object.assign(popupElm.style, {
          display: `none`,
        });
      }
    }
  }
}

// find a blk entry by its id
function findById(id) {
  for (let entry of data) {
    // substr(4) because the id may begin with blk:
    if (entry.id !== null && entry.id === id) {
      return entry;
    }
  }
}

function getElementByBlkId(id, cb) {
  let entry = findById(id);
  if (entry !== undefined) {
    fetch(entry.filepath).then(response => response.text()).then(function(text) {
      // parse the "other" page (page containing the destination entry)
      let page = new DOMParser().parseFromString(text, "text/html");
      // the actual html entry from the other page
      let elm = page.getElementById(entry.id);
      cb(elm);
    });
  }
}

function searchInput(el) {
  search(el.value);
}

function search(val) {
  let resultsContainer = document.getElementById("search-results-container");
  resultsContainer.innerHTML = '';
  // if (val === '')
  //   return;
  let matchingEntries = [];
  for (let entry of data) {
    const entryText = entry.title || entry.id;
    if (entryText.includes(val)) {
      const container = document.createElement("div");
      const subcontainer = document.createElement("div");
      const span = document.createElement("span");
      const plusMinusButton = document.createElement("div");
      const infoElm = document.createElement("div");

      container.className = 'search-result-container';
      plusMinusButton.className = 'plus-button';
      infoElm.className = 'info';
      subcontainer.className = 'search-result';

      // on-demand info of reference/page/whatever
      plusMinusButton.onclick = function(elm) {
        // so that we dont insert duplicate info
        infoElm.innerHTML = '';

        console.log(entry);
        let isPlus = plusMinusButton.className === 'plus-button';

        if (isPlus) {
          plusMinusButton.className = 'minus-button';
          fetch(entry.filepath).then(response => response.text()).then(function(text) {
            // parse the "other" page (page containing the destination entry)
            let page = new DOMParser().parseFromString(text, "text/html");
            // the actual html entry from the other page
            let docElm = page.getElementById(entry.id);
            // the type of the entry
            let mytype;

            // direct link to the entry in its parent page
            let mylink = entry['filepath'];
            if (docElm !== null)
              mylink = mylink + '#' + entry.id;
            let linkElm = document.createElement('a');
            linkElm.href = mylink;
            linkElm.innerHTML = 'direct link';

            let topRow = document.createElement('div');
            topRow.className = 'separated-row';

            // insert the info
            if (entry['matched-pattern']['shared-name'] === 'blk-org-file-rule')
              mytype = 'document';
            if (docElm !== null)
              mytype = 'reference';
            if (mytype)
              topRow.appendChild(document.createTextNode('type: ' + mytype));
            else
              topRow.appendChild(document.createTextNode('empty'));

            // insert the on-demand info elements into the dom
            topRow.appendChild(linkElm);
            infoElm.appendChild(topRow);
            if (docElm !== null)
              infoElm.appendChild(docElm);
            container.appendChild(infoElm);
          });
        } else {
          plusMinusButton.className = 'plus-button';
          container.querySelector('.info').remove();
        }
      }

      span.appendChild(document.createTextNode(entryText));
      container.appendChild(subcontainer);
      subcontainer.appendChild(span);
      subcontainer.appendChild(plusMinusButton);
      container.appendChild(infoElm);
      resultsContainer.appendChild(container);

      matchingEntries.push(entry);
    }
  }
  // update numbers
  document.getElementById("search-numbers-results").innerHTML = '' + matchingEntries.length;
  document.getElementById("search-numbers-public").innerHTML = '' + data.length;
}