// DOM - Document Object Model
// The DOM is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects; that way, programming languages can interact with the page.


// an example of how it interacts with HTML and CSS

// ---CSS style---
//   .red-square {
//     width: 100px;
//     height: 100px;
//     background-color: crimson;
//   }

// ---HTML---
// <div class="red-square"></div>

// ---Javascript---
//   const redSquare = document.querySelector('.red-square');
//   redSquare.style.backgroundColor = 'limegreen';

// In this example, the DOM allows JavaScript to access and modify the HTML element with the class "red-square" and change its background color from crimson to limegreen.
// note that querySelector will only select the first element that matches the selector. If you want to select all elements that match the selector, you can use querySelectorAll instead.
// notice that the background-color property in CSS is written in camelCase as backgroundColor in JavaScript. This is because JavaScript uses camelCase for property names, while CSS uses kebab-case.

// There is a lot more you can do with the DOM, such as creating new elements, removing elements, adding event listeners, and more. The DOM is a powerful tool for web development and is essential for creating dynamic and interactive web pages.

// Example of using querySelectorAll to select multiple elements and modify them
// Here is an example of how to use querySelectorAll to select multiple elements and modify them:

// ---HTML---
// <ul>
//   <li class="js-target">Unchanged</li>
//   <li class="js-target">Unchanged</li>
//   <li>Won't Change</li>
//   <li class="js-target">Unchanged</li>
//   <li>Won't Change</li>
//   <li class="js-target">Unchanged</li>
// </ul>
// ---Javascript---
// <script>
//   const elementsToChange = document.querySelectorAll('.js-target');
//   for (let i = 0; i < elementsToChange.length; i++) {
//     const currentElement = elementsToChange[i];
//     currentElement.innerText = "Modified by JavaScript!";
//   }
// </script>

// ---Resulting HTML---
// - Modified by JavaScript!
// - Modified by JavaScript!
// - Won't Change
// - Modified by JavaScript!
// - Won't Change
// - Modified by JavaScript!

// In this example, we use querySelectorAll to select all elements with the class "js-target". We then loop through each of these elements and change their inner text to "Modified by JavaScript!". The other list items that do not have the "js-target" class remain unchanged.
// Note: When using querySelectorAll, it returns a NodeList, which is similar to an array but does not have all the same methods. You can convert it to an array using Array.from() or the spread operator if you need to use array methods.

