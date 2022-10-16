const entry = document.getElementById("entry");
const entry2 = document.getElementById("entry2");
var currentTab;

entry.addEventListener('keypress', (e) => {
  if (e.key == 'Enter' && !entry2.value) {
    var prob = document.getElementById('entry').value;
    uservar = prob.match(/[a-zA-Z]/gm);
    prob = prob.replace(/–−/gm,'-');
    prob = prob.replace(/[a-zA-Z]/gm,'x');
    solveprob(prob);
  } else if (e.key == 'Enter' && entry2.value) {
    var prob1 = entry.value;
    var prob2 = entry2.value;
    prob1 = prob1.replace(/–−/gm,'-');
    prob2 = prob2.replace(/–−/gm,'-');
    solvesystem(prob1, prob2);
  }
})

entry2.addEventListener('keypress', (e) => {
  if (e.key == 'Enter' && !entry2.value) {
    var prob = document.getElementById('entry').value;
    uservar = prob.match(/[a-zA-Z]/gm);
    prob = prob.replace(/–−/gm,'-');
    prob = prob.replace(/[a-zA-Z]/gm,'x');
    solveprob(prob);
  } else if (e.key == 'Enter' && entry2.value) {
    var prob1 = entry.value;
    var prob2 = entry2.value;
    prob1 = prob1.replace(/–−/gm,'-');
    prob2 = prob2.replace(/–−/gm,'-');
    solvesystem(prob1, prob2);
  }
})

function solveprob(o) {
  sol = nerdamer.solve(o,'x');
  sol = sol.toString();
  console.log(sol);
  const para = document.createElement("p");
  solution = sol.replace(/[\]\[]/gm,'');
  var node = document.createTextNode(uservar[0] + ' = ' + solution);
  para.appendChild(node);
  document.body.appendChild(para);
}

function solvesystem(o, i) {
  nerdamer.set('SOLUTIONS_AS_OBJECT', true);
  sol = nerdamer.solveEquations([o, i]);
  console.log(sol);
  const para = document.createElement("p");
  var node = document.createTextNode('x = ' + sol.x + ', y = ' + sol.y);
  para.appendChild(node);
  document.body.appendChild(para);
}

// ixl thing

var query = { active: true, currentWindow: true };

function callback(tabs) {
  currentTab = tabs[0].url; // there will be only one in this array
  currentTab = currentTab.replace(/((?<=com\/).+)/gm,'*');
  console.log(currentTab); // also has properties like currentTab.id
  if (currentTab == 'https://www.ixl.com/*') {
    const para = document.createElement("p");
    var node = document.createTextNode('we noticed you\'re on ixl. try highlighting the problem, then pressing \' ctrl and " \'');
    para.appendChild(node);
    document.body.appendChild(para);
  }
}

chrome.tabs.query(query, callback);

/*
document.getElementsByClassName('fillIn')[0].value
^ ixl input box
*/