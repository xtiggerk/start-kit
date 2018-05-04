$(document).ready(function() {

    // Pass the checkbox name to the function
    function getCheckedBoxes(chkboxName) {
        var checkboxes = document.getElementsByName(chkboxName);
        var checkboxesChecked = [];
        // loop over them all
        for (var i=0; i<checkboxes.length; i++) {
        // And stick the checked ones onto an array...
        if (checkboxes[i].checked) {
            checkboxesChecked.push(checkboxes[i]);
        }
        }
        // Return the array if it is non-empty, or null
        return checkboxesChecked.length > 0 ? checkboxesChecked : [''];
    }
  
    function closeAllSelect(elmnt) {
        /*a function that will close all select boxes in the document,
        except the current select box:*/
        var x, y, i, arrNo = [];
        x = document.getElementsByClassName("select-items");
        y = document.getElementsByClassName("select-selected");
        for (i = 0; i < y.length; i++) {
            if (elmnt == y[i]) {
                arrNo.push(i)
            } else {
                y[i].classList.remove("select-arrow-active");
            }
        }
        for (i = 0; i < x.length; i++) {
            if (arrNo.indexOf(i)) {
                x[i].classList.add("select-hide");
            }
        }
    }

    function setAttributes(elem /* attribute, value pairs go here */) {
        for (var i = 1; i < arguments.length; i+=2) {
            elem.setAttribute(arguments[i], arguments[i+1]);
        }
    }

    var x, i, j, selElmnt, a, b, c;
    /*look for any elements with the class "custom-select":*/
    x = document.getElementsByClassName("custom-select");
    for (i = 0; i < x.length; i++) {
    if(x[i].getElementsByClassName("select-selected").length == 0) {
        selElmnt = x[i].getElementsByTagName("select")[0];
        /*for each element, create a new DIV that will act as the selected item:*/
        a = document.createElement("DIV");

        if(x[i].classList.contains('has-placeholder')) {
            setAttributes(a, "class", "select-selected is-placeholder");
        } else {
            setAttributes(a, "class", "select-selected");
        }

        a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
        setAttributes(a, "data-attribute", selElmnt.options[selElmnt.selectedIndex].getAttribute('value'));
        x[i].appendChild(a);
        /*for each element, create a new DIV that will contain the option list:*/
        b = document.createElement("DIV");
        b.setAttribute("class", "select-items select-hide");

        if(x[i].classList.contains('has-placeholder')) {
            j = 1
        } else {
            j = 0
        }

        if(x[i].classList.contains('is-multiselect')) {
            for (j; j < selElmnt.length; j++) {
                /*for each option in the original select element,
                create a new DIV that will act as an option item:*/
                var tplCheckbox = '<input name="multiTest" type="checkbox" id="c-' + j  + '" value="' + selElmnt.options[j].innerHTML + '"/>';
                c = document.createElement("DIV");
                c.innerHTML = tplCheckbox + ' <label for="c-' + j + '">' + selElmnt.options[j].innerHTML + '</label>';
                setAttributes(c, "data-attribute", selElmnt.options[j].getAttribute('value'));
                c.addEventListener("click", function(e) {
                    //get the list of checkbox checked and return the value
                    var updateSelected = getCheckedBoxes("multiTest").map(function(item) {
                        return item.value;
                    });
                    e.stopPropagation();
                    /*when an item is clicked, update the original select box,
                    and the selected item:*/
                    var i, s, h;
                    s = this.parentNode.parentNode.getElementsByTagName("select")[0];
                    h = this.parentNode.previousSibling;
                    for (i = 0; i < s.length; i++) {
                        console.log(h)                   
                        h.innerHTML = updateSelected;
                        h.setAttribute('data-attribute', this.getAttribute('value'));
                        h.classList.remove('is-placeholder');
                        break;
                    }
                    h.click();
                });
                b.appendChild(c);
            }
        } else {
            for (j; j < selElmnt.length; j++) {
                /*for each option in the original select element,
                create a new DIV that will act as an option item:*/
                c = document.createElement("DIV");
                c.innerHTML = selElmnt.options[j].innerHTML;
                setAttributes(c, "data-attribute", selElmnt.options[j].getAttribute('value'));
                c.addEventListener("click", function(e) {
                    /*when an item is clicked, update the original select box,
                    and the selected item:*/
                    var i, s, h;
                    s = this.parentNode.parentNode.getElementsByTagName("select")[0];
                    h = this.parentNode.previousSibling;
                    for (i = 0; i < s.length; i++) {
                        if (s.options[i].innerHTML == this.innerHTML) {
                            s.selectedIndex = i;
                            h.innerHTML = this.innerHTML;
                            h.setAttribute('data-attribute', this.getAttribute('value'));
                            h.classList.remove('is-placeholder');
                            break;
                        }
                    }
                    h.click();
                });
                b.appendChild(c);
            }
        }        
        x[i].appendChild(b);
        a.addEventListener("click", function(e) {
            /*when the select box is clicked, close any other select boxes,
            and open/close the current select box:*/
            e.stopPropagation();
            closeAllSelect(this);
            this.nextSibling.classList.toggle("select-hide");
            this.classList.toggle("select-arrow-active");
        });
    }

    }
    /*if the user clicks anywhere outside the select box,
    then close all select boxes:*/
        document.addEventListener("click", closeAllSelect);

});