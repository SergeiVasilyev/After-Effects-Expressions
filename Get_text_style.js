// Get characters style from text layer (Font, font size, font color, leading etc.)

sauceText = thisComp.layer("Name").text.sourceText; // Get text from layer "Name"
sauceText.style.setText(sauceText); // Get text style
sauceText.style.setFillColor(thisComp.layer("Name").effect("Color Control")("Color")); // Connect Color Control to change font color

