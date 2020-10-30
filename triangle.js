/*
 * Programming Quiz: Build A Triangle (5-3)
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have a `buildTriangle()` function
 * - Your `buildTriangle()` function should take one argument (or you can say parameter)
 * - Your `buildTriangle()` function should build the triangle as describe above
 */


// creates a line of * for a given length
function makeLine(length) {
    var line = "";
    for (var j = 1; j <= length; j++) {
        line += "_ ";
    }
    return line + "\n";
}

// creates a triangle

function buildTriangle (numberOfLines) {
  var triangle = "";

  for (var lineNumber = 1; lineNumber <= numberOfLines; lineNumber++) {
    triangle = triangle + makeLine(lineNumber);
  }
  return triangle;

}

// creates multiple triangles with as many lines as entered in argument

function buildTriangles (length, numberOfLines) {
  var triangles = "";
  for (var i = 0; i <length; i ++){
    triangles += buildTriangle(numberOfLines);
  }

  return triangles
}
console.log(buildTriangles(3, 20));

