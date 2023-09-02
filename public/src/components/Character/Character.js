class Character extends HTMLElement{

    static get observedAttributes(){
        return ["name","species","gender","house","yearofbirth"]
    }

    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    attributeChangedCallback(propName,oldValue,newValue){
        this[propName] = newValue;
        this.render();
    }

    render(){
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="Character.css">
        <section><h1>${this.name}</h1>
        <p>${this.species}</p>
        <p>${this.gender}</p>
        <p>${this.house}</p>
        <p>${this.yearofbirthh}</p>
        </section>`
    }
}

customElements.define("my-character", Character);
export default Character;