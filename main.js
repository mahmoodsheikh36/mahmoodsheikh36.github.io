// search data
let data;

window.onload = function(e) {
  // make all "math buttons" clickable
  document.querySelectorAll(".math-button").forEach(elm => handleMathButton(elm));
  // fetch the search data
  fetch("search.json").then(response => response.json()).then(json => data = json);
}

function handleMathButton(node) {
  if (node.classList.contains('math-button')) {
    let symbol = node.children[0];
    symbol.setAttribute('original-fill', symbol.getAttribute('fill'));
    node.onmouseover = function() {
      symbol.setAttribute('fill', 'red');
      let ref = node.getAttribute('data-ref');
      console.log(ref);
      let id = ref.substr(4);
      console.log(findById(id));
    }
    node.onmouseout = function() {
      symbol.setAttribute('fill', symbol.getAttribute('original-fill'));
    }
  }
}

// find a blk entry by its id
function findById(id) {
  for (let entry of data) {
    if (entry.id !== null && entry.id.includes(id)) {
      return entry;
    }
  }
}

function search(el) {
  let val = el.value;
  let resultsContainer = document.getElementById("search-results-container");
  resultsContainer.innerHTML = '';
  if (val === '')
    return;
  for (let entry of data) {
    if (entry.title !== undefined && entry.id !== undefined && entry.title.includes(val)) {
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

      span.appendChild(document.createTextNode(entry.title));
      container.appendChild(subcontainer);
      subcontainer.appendChild(span);
      subcontainer.appendChild(plusMinusButton);
      container.appendChild(infoElm);
      resultsContainer.appendChild(container);
    }
  }
}