class Button extends HTMLElement{
    static get observedAttributes(){
        return ["message"]
    }

    constructor(){
        super();
        this.attachShadow({mode: "open"});
        this.onButtonClicked = this.onButtonClicked(this);
    }
}