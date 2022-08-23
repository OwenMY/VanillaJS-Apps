# Button Babies

## Challenge
Every time a user clicks the button, it should increment how many times it’s been clicked for that specific button, it should also create a new button underneath it that also starts off with “I’ve been clicked 0 times”. The trick is this: let’s say you have 50 buttons on the screen now and you click button 25, button 25 now needs to say “I’ve been clicked 1 times” and the button that gets added should be in position 51, not 26. Try to accomplish this with only one event listener to keep the page optimized. So you need to figure out how to use just one event listener, but differentiate between which button has been clicked because each button’s count gets specifically incremented.

## Tips
Try to keep things organized by creating separate functions for each thing that needs to be done (separate function for incrementing, another function for adding the button)