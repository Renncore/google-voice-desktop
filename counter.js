function updateBadgeCount()
{
  var targetNodes = document.getElementsByClassName("navItemBadge");
  
  var count = 0; 
  for (var i = 0; i < targetNodes.length; ++i)
  {
    count += parseInt(targetNodes[i].innerHTML);
  }
  count /= 2; // because Google Voice has duplicate nodes for some reason
  
  var newTitle = "Voice" + (count > 0 ? " (" + count + ")" : "");
  if (document.title !== newTitle)
  {
    document.title = newTitle;
  }
}

// Update the badge every 5 seconds
setInterval(updateBadgeCount, 5000);

// update the badge as user clicks in the app, because GV updates the title with selected item's phone number
new MutationObserver(function(mutations) {
  updateBadgeCount();
}).observe(
  document.querySelector('title'), {
    subtree: true,
    characterData: true,
    childList: true
  }
);
