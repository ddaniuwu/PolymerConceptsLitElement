import {LitElement , html ,css }  from 'lit-element';

class MyHeaders extends LitElement {
   
    static get properties() {
        return {       
        };
    }

    static get styles(){
        return css `
        div{
            text-align:center;
        }
        `
    }

    render() {
        return html`
            <div> 
                <img src="https://web-components-resources.appspot.com/static/logo.svg"/>
                <h1>Web Components</h1>
            </div>
        `;
    }
}

customElements.define('my-header', MyHeaders)