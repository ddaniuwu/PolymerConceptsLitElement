import { LitElement , html, css } from 'lit-element';

class MyWork extends LitElement {    
    static get properties() {
        return {
        event1: { type: Boolean}        
        };
    }
    static get styles(){
        return css`
        :host{
            font-family:Arial;
            max-width: 70%;
            max-height:70%;
            margin:auto;
        }
        div{
            -webkit-box-shadow: 2px 2px 5px #999;
            margin:10%;
            text-align:center;
        }
        h1::first-letter
        {
            font-size:150%;
        }
        b
        {
        font-weight:bold;
        color:red;
        }
        `
    }
    constructor() {
        super ();
        this.event1 = true
    }
    render() {
        return html`
            <div>
            <h1>Polymer Concepts</h1>
                <button @click="${this.clickHandler}">Click </button>
            <h3>Custom Change Notification Events</h3>
            <p>Los elementos nativos como <b><input value="input" disabled=${this.event1}></b> no proveen
            notificacion de cambios de eventos que <b>Polymer</b> usa para 
            el flujo de datos ascendente. </p>
            <p>Polymer le permite asociar un evento de notificación
             de cambio personalizado con un enlace de datos...</p>
             <h5>Ejemplo:</h5>
             <b>"input value="{{firstName::change}}"</b>
            </div>
        `;
    }
    clickHandler(e) {
        console.log(e.target);
    }
}
customElements.define('my-work' , MyWork);