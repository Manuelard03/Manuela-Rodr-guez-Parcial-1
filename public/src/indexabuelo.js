import * as components from './components/indexpadre.js'
import data from "./data.js"

class Appcontainer extends HTMLElement {
    
    constructor(){
        console.log("holi")
        super();
        this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    render(){
        data.forEach((user)=>{
            this.shadowRoot.innerHTML += `
            <my-character name = "${user.name}" 
            species="${user.species}" 
            gender="${user.gender}" 
            house="${user.house}" 
            yearofbirth="${user.yearOfBirth}">
            </my-character> `
        })
    }
}

customElements.define("app-container", Appcontainer);