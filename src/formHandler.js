function getQueryParam(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

document.addEventListener("DOMContentLoaded", function() {
    var form = document.querySelector('form');
    var queryParamName = form.getAttribute('data-query-param-name');
    var hiddenFieldId = form.getAttribute('data-hidden-field-id');
    var myParam = getQueryParam(queryParamName);
    
    if (myParam) {
        document.getElementById(hiddenFieldId).value = myParam;
    } else {
        document.getElementById(hiddenFieldId).value = "Query parameter not found";
    }
});