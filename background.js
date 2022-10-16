// create context menu
chrome.runtime.onInstalled.addListener( function( ) {
  chrome.contextMenus.create( {
      id: 'ixlsolver',
      title: 'Solve "%s"',
      documentUrlPatterns:["*://*.ixl.com/*"],
      contexts: [ 'selection' ]
  } );
} );

// listen for contextmenu clicked
chrome.contextMenus.onClicked.addListener( (info,tabs) => {
  //console.log( 'context menu clicked' );
  var prob = info.selectionText;
  //console.log(prob);
  //console.log(info);
  //console.log( tabs );
  // send message to content script to solve and edit the DOM
  chrome.tabs.sendMessage(tabs.id, {action: 'editDOM'}, function(response) {});
} );