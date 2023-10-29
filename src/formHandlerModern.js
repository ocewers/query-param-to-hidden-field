document.addEventListener("DOMContentLoaded", function() {
    const queryString = new URLSearchParams(window.location.search);
    const formElement = document.querySelector("form[data-query-param-name][data-hidden-field-id]");
    const paramName = formElement.getAttribute("data-query-param-name");
    const hiddenFieldId = formElement.getAttribute("data-hidden-field-id");
    const hiddenFieldElement = document.getElementById(hiddenFieldId);
    
    if (queryString.has(paramName)) {
        hiddenFieldElement.value = queryString.get(paramName);
    } else {
        hiddenFieldElement.value = "Query parameter not found";
    }
});