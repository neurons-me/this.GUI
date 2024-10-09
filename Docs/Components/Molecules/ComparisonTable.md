# ComparisonTable QuickStart

###### **Usage Examples**

1. **Basic Table Example**

```jsx
<ComparisonTable
  headers={['Feature', 'Product A', 'Product B']}
  rowHeaders={['Price', 'Quality']}
  rows={[
    ['$10', '$15'],
    ['High', 'Low']
  ]}
/>
```

2. **Table with Custom Colors and Highlight**

```jsx
<ComparisonTable
  headers={['Feature', 'Product A', 'Product B']}
  rowHeaders={['Price', 'Quality']}
  rows={[
    ['$10', '$15'],
    ['High', 'Low']
  ]}
  highlightColumn={1}
  headerBgColor="info-color"
  rowHeaderBgColor="secondary-color"
  highlightBgColor="warning-color"
  borderColor="dark-color"
/>
```

This will allow you to dynamically change the colors for each part of the table using your defined theme colors.

**Quickstart Guide for ComparisonTable Component**

The ComparisonTable component allows you to create a table for comparing different items, products, or features. It supports customizable colors for the headers, row headers, highlighted columns, and borders, making it easy to integrate with your theme.

**Usage Examples**

​	1.	**Basic Comparison Table**

```jsx
<ComparisonTable
 headers={['Feature', 'Product A', 'Product B']}
 rowHeaders={['Price', 'Quality']}

 rows={[
  ['$10', '$15'],
  ['High', 'Medium']
 ]}
/>
```

This will render a basic comparison table with a list of features and corresponding values for two products.

​	2.	**Table with Highlighted Column**

```jsx
<ComparisonTable
 headers={['Feature', 'Product A', 'Product B']}
 rowHeaders={['Price', 'Quality', 'Support']}
 rows={[
  ['$10', '$15'],
  ['High', 'Medium'],
  ['24/7', 'Business Hours']
 ]}
 highlightColumn={1}
/>
```

This example highlights the second column (Product A) to make it stand out.

​	3.	**Customizing Colors**

```jsx
<ComparisonTable
 headers={['Feature', 'Product A', 'Product B']}
 rowHeaders={['Price', 'Quality']}
 rows={[
  ['$10', '$15'],
  ['High', 'Low']
 ]}
 highlightColumn={1}
 headerBgColor="info-color"
 rowHeaderBgColor="secondary-color"
 highlightBgColor="warning-color"
 borderColor="dark-color"
/>
```

In this example, custom colors are passed as props for the headers, row headers, highlighted column, and border.



**Available Props**

​	•	**headers**: An array of strings representing the column headers.

​	•	**rows**: A 2D array where each sub-array represents a row in the table.

​	•	**rowHeaders**: An array of strings representing the row headers.

​	•	**highlightColumn**: Index of the column to highlight (optional).

​	•	**headerBgColor**: Theme color for column headers (optional).

​	•	**rowHeaderBgColor**: Theme color for row headers (optional).

​	•	**highlightBgColor**: Theme color for the highlighted column (optional).

​	•	**borderColor**: Theme color for the table borders (optional).

For more details on prop types and customization, refer to the Storybook.