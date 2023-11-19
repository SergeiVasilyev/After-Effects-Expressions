// Script put Layer Anchor Point at the center
// Put this script into Anchor Point property

// Layer.sourceRectAtTime(t = time, includeExtents = false)
// Returns a JavaScript object with four attributes: [top, left, width, height]

a = sourceRectAtTime();
y = a.top + a.height/2;
[0,y];
