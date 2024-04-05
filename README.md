# Amazon-Wishlist-Sum
This Tampermonkey script is designed to calculate the total cost of all items in an Amazon wishlist
This Tampermonkey script is designed to calculate the total cost of all items in an Amazon wishlist. Here's a step-by-step description of what the script does:

1. The script first selects the list of items on the Amazon wishlist page using the CSS selector `#g-items`.

2. It then selects all the price elements within this list. These are `span` elements with the class `a-offscreen`.

3. The script extracts the prices from these elements, removing the "£" symbol and converting the remaining text to a number.

4. It then calculates the sum of all these prices.

5. The script creates a new list item (`li`) and sets its text content to the total price, formatted as pounds and pence.

6. Finally, it inserts this new list item at the beginning of the Amazon wishlist.

This script is set to run on any Amazon wishlist page (https://www.amazon.co.uk/hz/wishlist/ls/*). 

Please note that the script assumes that all prices are in pounds. If the wishlist contains items with prices in other currencies, the total may not be accurate.
