/*
 * Programming Quiz: Find my Seat (4-8)
 * 
 * Write a nested for loop to print out all of the different seat combinations in the theater.
 * The first row-seat combination should be 0-0 
 * The last row-seat combination will be 25-99
 * 
 * Things to note: 
 *  - the row and seat numbers start at 0, not 1
 *  - the highest seat number is 99, not 100
 */

/*

Example output:
0-0
0-1
0-2
...
25-97
25-98
25-99

 * QUIZ REQUIREMENTS
 * - Your code should use a nested `for` loop'
 * - Your code should produce the expected output, as explained above
 */
 
// Write your code here

for (let s = 0; s <=25; s++) {
  for (let r = 0; r <=99; r++) { 
  console.log( s + "-" + r)
  }
} 
