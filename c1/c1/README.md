## React-Coffee-House

### Submission Instructions [Please note]

#### Maximum Marks - 18

- The Submission should not contain spaces, for example /rct-101 folder/eval will not work.
- Do not push node_modules and package_lock.json to github.

```
✅ Able to submit the app - 1 mark ( minimum score )
✅ Heading should be visible when the component loads - 1 mark
✅ Should make a get request to the endpoint when clicked on the Get Coffee button and disappear on UI once clicked on it- 2 marks
✅ Check all types of coffee are visible- only checking no of items/coffee visible - 1 mark
✅ Check all titles of the coffee are displayed - 1 mark
✅ Check place order button is there for every product and cancel order is not present by default - 1 mark
✅ Check all images of the product are displayed - 1 mark
✅ On clicking on the Place Order button, the button should get disabled and the text content should change accordingly also a new button to cancel the order should be visible - 3 marks
✅ Clicking on the cancel order button should make it have only the place order button - 2 marks
✅ When someone clicks on place order, cost should be visible in the h6 tag - 2 marks
✅ When someone clicks on place order and cancels the order, the cost should be visible in the h6 tag and disappear when the value is 0 - 3 marks

```

### Installation

- Use node version(LTS) should be `v16.16.0`
- Don't change/override package.json

```
npm install --engine-strict

// run locally
npm run start
```

- the system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug it before itself
- we also request you not to just submit it last minute
  try to keep one submission at a time

## Problem

### Description

- A coffee shop needs a website where a user can see a welcome message at the start along with a button `Get Coffee`.
- On clicking the `Get Coffee` button, the application should make a fetch request to the API and display all the data in cards using the `CoffeeItem` component and `CoffeeDetails` component.
- Initially render `Get Coffee` button only.
- On clicking the `Get Coffee` button, the application should make a fetch request to the API and display all the data in cards using the `CoffeeItem` component.
- On clicking the `Place Order` button, the text on the button should toggle to `Order Placed`, and a new button with the text `Cancel Order` should appear below it.
- On clicking the `Cancel Order` button, the text on the button(`Order Placed` button) should toggle back to `Place Order`, and the `Cancel Order` button should disappear.
- Map data into `CoffeeItem` component inside `CoffeeDetails` component

<div>
<img src="https://i.imgur.com/nJP7v7r.png" width="100%">
<img src="https://i.imgur.com/iYhwaE6.png" width="100%">
<img src="https://i.imgur.com/sfZLnUt.png" width="100%">
</div>

## Folder Structure

- Components
  - PlaceorderBtn.jsx (This have button/buttons)
  - CoffeeDetails.jsx (this you can assume as a card)
  - CoffeeItem.jsx (here you can fetch the data from API and display it with help of the CoffeeDetails component)
- App.js

### CoffeeDetails
- Will contain `h1` tag with `Coffee House` as the title
- A `Get Coffee` button with `className="get-coffee"`
- Button is only visible if Coffee cards are not shown and vice versa
- On clicking the button, fetch data from the API and map it into the container below
- A `div` tag with `data-cy="container"` ( `data-cy` is similar to `id` / `classname` which we give to any of the tags)
  - You need to create the above div tag. (This will be visible only when the button(`Get Coffee`) is not visible and vice versa)
- The above container should contain all the coffee product details displayed as cards
- There should be an `h6` tag with text content `Total cost:${amount}` ("$" should not be there in text see the above images for reference), where the amount is the total value of the orders placed and it should get updated in real-time and this should be visible only when the amount is greater than 0. By default we can't see this, we will see it only when someone places the order. (Don't place this h6 tag inside div with `data-cy="container"`)
- Don't use any localstorage to store the data.

### CoffeeItem

- This component should accept each coffee product's details as props.(image,title,price and other values required as props. see the image above for reference which values are required)
- A `div` tag with `className="coffee_card"`
- The above div should contain all the properties of the given coffee product (image, name, price)
- Show the image in `img` tag
- Show title in `h3` and price in `h5` tags
- Each card should have a `Place Order` button with `className="place_order_button"` by default and regarding buttons, you can use the below component.

### PlaceorderButton.jsx

- Create a button tag with `className="place_order_button"`
- By default, the text content of the button is `Place Order`
- After clicking on the button, the text content of the button should be changed to `Order Placed`, and the button should be disabled.
- A new button with `className="cancel_order_button"` should appear just below the above button and the text should be `Cancel Order`
- After clicking on `Cancel Order`, the text content of the button with `className="place_order_button"` should be changed back to `Place Order` and should be enabled, and the button with `className="cancel_order_button"` should be removed from UI.


#### API Url:-
**https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-coffee** 
- Use Fetch only.
#### **Note**

- Make sure you use only the given components and don't create new Components, files, or folders of your own. Changing the component name, and file/folder structures might result in giving you zero marks
- Do Not Remove `data-cy="xxxx"` from anywhere, these are used by testing tools to test your code, and removal of this will lead to low scores.
- Also make sure to cross-check all the spellings and Cases of Texts.

### General Guidelines

- The system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug it before itself
- we also request you not to just submit it last minute
- try to keep one submission at a time
