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

### Responsive Grid

To create a "Grid" row, simply use the `MDLGrid` class.

```jsx
<MDLGrid />
```

```html
<div class="mdl-grid"></div>
```

Cells are placed inside grids to leverage the space. Cells consume column spacing.

```jsx
<MDLGrid>
  <MDLCell cols="4">
    Hello, World!
  </MDLCell>
</MDLGrid>
```

```html
<div class="mdl-grid">
  <div class="mdl-cell mdl-cell--4-col">
    Hello, World!
  </div>
</div>
```

### Buttons

Buttons a represented by the `MDLButton` component which provides easy ways of
speicfying specific MDL button styles. The basic usage of a button:

```jsx
<MDLButton>Button</MDLButton>
```

```html
<button class="mdl-button mdl-js-button">Button</button>
```

Ripple effects can be added to a button type with the simple `applyRipple`
boolean attribute.

```jsx
<MDLButton applyRipple>Ripples</MDLButton>
```

```html
<button class="mdl-button mdl-js-button mdl-js-ripple-effect">Ripples</button>
```

There are five different kinds of buttons. Normal buttons are achieved without
any special classes, and appear as basic with hover effects. Then there is the
the `fab` button type which is a circle:

```jsx
<MDLButton fab>
  <MDLIcon icon="add" />
</MDLButton>
```

```html
<button class="mdl-button mdl-js-button mdl-button--fab">
  <i class="material-icons">add</i>
</button>
```

The `fab` type has a miniature version, the `miniFab` which is done much the
same way as the `fab`. Next there is the `raised` button type which makes
normal MDL buttons appear (without hover) with a shadow to pop from the background.

```jsx
<MDLButton raised>Raised</MDLButton>
```

```html
<button class="mdl-button mdl-js-button mdl-raised--button">Raised</button>
```

The final button type is for icon only buttons.

```jsx
<MDLButton icon>
  <MDLIcon icon="mood" />
</MDLButton>
```

```html
<button class="mdl-button mdl-js-button mdl-button--icon">
  <i class="material-icons">mood</i>
</button>
```

There are few additional classes for coloring buttons in specific ways. The
`colored` attribute will apply whichever color is normally used for the given
button type. The `primary` attribute will apply the primary theme color overriding
the `colored` attribute (some buttons, like `fab`s are colored by the accent color
by default). Then there is `accent` to force the accent color on the button.
