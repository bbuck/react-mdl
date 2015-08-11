# React MDL

React MDL is a wrapper for Facebook's [React.js](http://facebook.github.io/react/)
around Google's great [material-design-lite](http://www.getmdl.io/) library.
The goal is to make it much easier to integrate MDL into a React based client
application - avoiding the sometime numerous classes for achievement
(`mdl-button mdl-js-button`).

## Usage

### Base Component

The core of React MDL is the `MDLComponet` which represents a basic element with
MDL features. To create a badge, you can simply specify:

```jsx
<MDLComponent badge={10} icon="acocunt_box" />
```

Which will result in:

```html
<div class="material-icons mdl-badge" data-badge="10">account_box</div>
```

### Buttons

Buttons a represented by the `MDLButton` component which provides easy ways of
speicfying specific MDL button styles.
