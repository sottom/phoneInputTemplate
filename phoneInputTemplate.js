// TODO
//// add styling
//// add ability to choose template
//////////////////////////////////////////////////////////////////////////////////////////

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
        // if first three numbers, put them inside the parentheses
        if (phoneElement.value.replace(/[^0-9]/g, "").length < 3) {
            threeNums();
        }
        // if second 3 numbers, put them before the dash
        else if (phoneElement.value.replace(/[^0-9]/g, "").length < 6) {
            sixNums();
        }
        // if last 4 numbers, add them to the end
        else {
            tenNums();
        }
    });
    //////////////////////////////////////////////////////////////////////////////////////


    // functions to add numbers to template
    function threeNums(){
        var val = phoneElement.value.replace(/[^0-9]/g, "");
        phoneElement.value = "(" + val.substr(0, 3) + ") -";
        setCaretPosition(phoneElement, phoneElement.value.length - 3);
    }

    function sixNums(){
        var val = phoneElement.value.replace(/[^0-9]/g, "");
        phoneElement.value = "(" + val.substr(0, 3) + ") " + val.substr(3, 3) + "-";
        setCaretPosition(phoneElement, phoneElement.value.length - 1);
    }

    function tenNums(){
        var val = phoneElement.value.replace(/[^0-9]/g, "");
        phoneElement.value = "(" + val.substr(0, 3) + ") " + val.substr(3, 3) + "-" + val.substr(6);
        setCaretPosition(phoneElement, phoneElement.value.length);
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

