# Query Param to Hidden Field

A JavaScript utility to fetch a query parameter from the URL and set it as the value of a hidden form field. There are two versions of this utility: one designed for backward compatibility including support for Internet Explorer, and a modern version without Internet Explorer support.

## Features

- Fetches a specified query parameter from the URL.
- Sets the fetched value to a specified hidden form field.
- If the query parameter is not found, it sets "Query parameter not found" as the value of the hidden field.
- Uses `data` attributes for configuration, making it easy to adapt for various form setups.

## Installation

1. Clone or download this repository.
2. Depending on the version you need:
   - For backward compatibility: Copy the `formHandler.js` file to your project directory.
   - For modern browsers only: Copy the `formHandlerModern.js` file to your project directory.

## Usage

1. In your HTML form, set the following `data` attributes on the `<form>` element:

   - `data-query-param-name`: The name of the query parameter you want to fetch.
   - `data-hidden-field-id`: The ID of the hidden field you want to set the value to.

   Example:

   ```html
   <form data-query-param-name="desired QueryParamName" data-hidden-field-id="desiredHiddenFieldId"><input type="hidden" id="desiredHiddenFieldId" name="desiredHiddenFieldName" value="">
   <!-- rest of the form -->
   </form>
   ```

2. Include the chosen script file at the end of your HTML:
   ```html
   <!-- For backward compatibility version -->
   <script src="path/to/your/formHandler.js"></script>

   <!-- For modern browsers version -->
   <script src="path/to/your/formHandlerModern.js"></script>
   ```
3. That's it! The script will automatically fetch the specified query parameter and set its value to the hidden field when the page loads.

## Versions

### Backward Compatibility Version (formHandler.js)
- Designed to work with older browsers, including Internet Explorer.

### Modern Version (formHandlerModern.js)
- Optimized for modern browsers.
- Does not support Internet Explorer.

### Contributing
Contributions are welcome! Please open an issue or submit a pull request.

### License
This project is open source and available under the MIT License.
