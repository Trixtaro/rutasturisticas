import React from 'react';
import { withRouter } from 'react-router-dom';
import './styles/Buscador.css'

class Buscador extends React.Component {
    constructor (props) {
        super(props);
        this.state = { 
            datos: [],
            id: ''
         };
    }

    async componentDidMount () {
        try {
            const response = await fetch(`${process.env.REACT_APP_LARAVEL}/api/zonas`);
            const data = await response.json();
            this.setState({
                'datos': data.data
            });
        } catch (error) {
            console.log("< Mi-error en clase Buscador@componentDidMount >");
            console.log(error);
            console.log("< Mi-error en clase Buscador@componentDidMount />");
        }
        this.autocomplete(document.getElementById("buscador"), this.state.datos);
    }

    handleSubmit = e => {
        e.preventDefault();

        if(!this.state.id)
            return;

        this.props.history.push(`/lugares/${this.state.id}`);
        window.location.reload(false);
        console.log(this.props.history);
    }

    render () {
        return (
            <form onSubmit={this.handleSubmit} autoComplete="off" className="" action="/lugar">
                <div className="Buscador autocomplete">
                    <input id="buscador" name="buscador" type="text" placeholder={this.props.placeholder} />
                    <button className="lupa">
                        <i className="fas fa-search"></i>
                    </button>
                </div>
            </form>
        );
    }

    autocomplete = (inp, arr) => {
        var currentFocus;

        inp.addEventListener("input", function(e) {
            var a, b, i, val = this.value;
            closeAllLists();
            if (!val) { return false; }
            currentFocus = -1;
            /*create a DIV element that will contain the items (values):*/
            a = document.createElement("DIV");
            a.setAttribute("id", this.id + "autocomplete-list");
            a.setAttribute("class", "autocomplete-items");
            /*append the DIV element as a child of the autocomplete container:*/
            this.parentNode.appendChild(a);
            /*for each item in the array...*/
            for (i = 0; i < arr.length; i++) {
              let lugar = arr[i];

              /*check if the item starts with the same letters as the text field value:*/
              if (lugar.Lugar.substr(0, val.length).toUpperCase() === val.toUpperCase()) {
                /*create a DIV element for each matching element:*/
                b = document.createElement("DIV");
                /*make the matching letters bold:*/
                b.innerHTML = "<strong>" + lugar.Lugar.substr(0, val.length) + "</strong>";
                b.innerHTML += lugar.Lugar.substr(val.length);
                /*insert a input field that will hold the current array item's value:*/
                b.innerHTML += "<input type='hidden' value='" + lugar.Lugar + "'>";
                /*execute a function when someone clicks on the item value (DIV element):*/
                b.addEventListener("click", function(e) {
                    /*insert the value for the autocomplete text field:*/
                    inp.value = this.getElementsByTagName("input")[0].value;
                    buscarLugar(lugar)
                    /*close the list of autocompleted values,
                    (or any other open lists of autocompleted values:*/
                    closeAllLists();
                });
                a.appendChild(b);
              }
            }
        });

        /*execute a function presses a key on the keyboard:*/
        inp.addEventListener("keydown", function(e) {
            var x = document.getElementById(this.id + "autocomplete-list");
            if (x) x = x.getElementsByTagName("div");
            if (e.keyCode === 40) {
              /*If the arrow DOWN key is pressed,
              increase the currentFocus variable:*/
              currentFocus++;
              /*and and make the current item more visible:*/
              addActive(x);
            } else if (e.keyCode === 38) { //up
              /*If the arrow UP key is pressed,
              decrease the currentFocus variable:*/
              currentFocus--;
              /*and and make the current item more visible:*/
              addActive(x);
            } else if (e.keyCode === 13) {
              /*If the ENTER key is pressed, prevent the form from being submitted,*/
              e.preventDefault();
              if (currentFocus > -1) {
                /*and simulate a click on the "active" item:*/
                if (x) x[currentFocus].click();
              }
            }
        });

        function addActive(x) {
            /*a function to classify an item as "active":*/
            if (!x) return false;
            /*start by removing the "active" class on all items:*/
            removeActive(x);
            if (currentFocus >= x.length) currentFocus = 0;
            if (currentFocus < 0) currentFocus = (x.length - 1);
            /*add class "autocomplete-active":*/
            x[currentFocus].classList.add("autocomplete-active");
        }

        function removeActive(x) {
            /*a function to remove the "active" class from all autocomplete items:*/
            for (var i = 0; i < x.length; i++) {
                x[i].classList.remove("autocomplete-active");
            }
        }

        function closeAllLists(elmnt) {
            /* close all autocomplete lists in the document,
                except the one passed as an argument: */
            var x = document.getElementsByClassName("autocomplete-items");
            for (var i = 0; i < x.length; i++) {
                if (elmnt !== x[i] && elmnt !== inp) {
                    x[i].parentNode.removeChild(x[i]);
                }
            }
        }
        /*execute a function when someone clicks in the document:*/
        document.addEventListener("click", function (e) {
            closeAllLists(e.target);
        });

        const buscarLugar = lugar =>{
            this.setState({
                id: lugar.Id
            })

            this.props.history.push(`/lugares/${this.state.id}`);
        }
    }
}

export default withRouter(Buscador);