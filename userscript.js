// ==UserScript==
// @name         Sum Prices in Amazon Wishlists
// @namespace    http://tampermonkey.net/
// @version      2024-04-05
// @description  This Tampermonkey script is designed to calculate the total cost of all items in an Amazon wishlist. GBP Only!
// @author       Joshua Wilcox
// @match        https://www.amazon.co.uk/hz/wishlist/ls/*
// @icon         https://upload.wikimedia.org/wikipedia/commons/4/4a/Amazon_icon.svg
// @grant        none
// ==/UserScript==
(function() {
    'use strict';

    // Get all the price elements using a CSS selector
    let list = document.querySelector('#g-items'); // Replace '.your-list-class' with the actual CSS selector

    let priceElements = list.querySelectorAll('span.a-offscreen'); // Replace '.your-price-class' with the actual CSS selector
    // Extract the prices from the elements
    let prices = Array.from(priceElements).map(element => parseFloat(element.textContent.replace("£", "")));

    // Calculate the sum
    let sum = prices.reduce((total, value) => total + value, 0);
    let pounds = Math.floor(sum);
    let pence = Math.round((sum - pounds) * 100);

    // Create a new row with the sum information
    let sumRow = document.createElement('li');
    sumRow.textContent = `Total: £${pounds}.${pence}`;

    // Insert the new row into the Amazon list
    list.insertBefore(sumRow, list.firstChild);
})();
