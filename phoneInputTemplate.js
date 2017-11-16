// TODO
//// add styling
//// add ability to choose template
//////////////////////////////////////////////////////////////////////////////////////////

(function(window)
{

var phoneTemplate = function(id){
    //// get the input element for phone numbers
    var phoneElement;
    function getPhoneInputElem(phoneID){
        phoneElement = document.getElementById(phoneID);
    }
    getPhoneInputElem(id);
    //////////////////////////////////////////////////////////////////////////////////////


    //// add base template
    if(phoneElement.value.replace(/[^0-9]/g, "").length === 0){
        phoneElement.value = "() -";
    }
    else if (phoneElement.value.replace(/[^0-9]/g, "").length < 3){
        threeNums();
    }
    else if (phoneElement.value.replace(/[^0-9]/g, "").length < 7){
        console.log('bob');
        sixNums();
    }
    else {
        tenNums();
    }
    phoneElement.setAttribute("maxlength", 14);
    //////////////////////////////////////////////////////////////////////////////////////


    //// when phone field is clicked on
    phoneElement.addEventListener("click", function (e) {
        // if first 3 numbers
        phoneElement.value.length < 7 
            // then put cursor inside parenthesis
            ? setCaretPosition(phoneElement, (phoneElement.value.length - 3))
            // else if second three numbers
            : phoneElement.value.length < 10 
                // then put cursor after parentheses and before dash
                ? setCaretPosition(phoneElement, phoneElement.value.length - 1)
                // else put cursor at the end
                : null;
            });
    //////////////////////////////////////////////////////////////////////////////////////


    // listen for typing in phone field
    phoneElement.addEventListener("keyup", function (e) {
        // if second 3 numbers, put them before the dash

        // if first three numbers, put them inside the parentheses
        if (phoneElement.value.replace(/[^0-9]/g, "").length < 3) {
            threeNums(phoneElement);
        }
        // if second 3 numbers, put them before the dash
        else if (phoneElement.value.replace(/[^0-9]/g, "").length < 6) {
            if (e.keyCode == 8 && phoneElement.value.replace(/[^0-9]/g, "").length < 4) {
                threeNums(phoneElement);
            }
            else {
                sixNums(phoneElement);
            }
        }
        // if last 4 numbers, add them to the end
        else {
            if (e.keyCode == 8 && phoneElement.value.replace(/[^0-9]/g, "").length < 7) {
                sixNums(phoneElement);
            }
            else {
                tenNums(phoneElement);
            }
        }
    });
    //////////////////////////////////////////////////////////////////////////////////////


    // functions to add numbers to template
    function threeNums(elem){
        var val = elem.value.replace(/[^0-9]/g, "");
        elem.value = "(" + val.substr(0, 3) + ") -";
        setCaretPosition(elem, elem.value.length - 3);
    }

    function sixNums(elem){
        var val = elem.value.replace(/[^0-9]/g, "");
        elem.value = "(" + val.substr(0, 3) + ") " + val.substr(3, 3) + "-";
        setCaretPosition(elem, elem.value.length - 1);
    }

    function tenNums(elem){
        var val = elem.value.replace(/[^0-9]/g, "");
        elem.value = "(" + val.substr(0, 3) + ") " + val.substr(3, 3) + "-" + val.substr(6);
        setCaretPosition(elem, elem.value.length);
    }
    //////////////////////////////////////////////////////////////////////////////////////


    // code from https://stackoverflow.com/questions/512528/set-keyboard-caret-position-in-html-textbox, Authors: John and kd7
    function setCaretPosition(elem, caretPos) {
        if (elem != null) {
            if (elem.createTextRange) {
                var range = elem.createTextRange();
                range.move('character', caretPos);
                range.select();
            }
            else {
                if (elem.selectionStart) {
                    elem.focus();
                    elem.setSelectionRange(caretPos, caretPos);
                }
                else
                    elem.focus();
            }
        }
    }
    //////////////////////////////////////////////////////////////////////////////////////
};

window.phoneTemplate = phoneTemplate;

}(window));