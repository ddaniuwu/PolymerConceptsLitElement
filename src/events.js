import {LitElement , html , css} from 'lit-element' 

class MyEvents extends LitElement{

   
 static get properties(){
     return{
         message : {type : String},
         array : {type: Array}, 
         boleano : {type: Boolean},
         array2 : {type: Array},
         mybool : {type: Boolean},
         mybool2: {type: Boolean}
     }
 }
 constructor(){
     super();
     this.message = 'Hello World'
     this.myarray = ['Item1' , 'Item2' , 'item3' , 'item4']
     this.array2 = ['Item1-1' , 'Item2-1' , 'item3-1' , 'item4-1']
    this.boleano = true
    this.mybool = true
    this.mybool2 = true
    }

 render() {
     return html`
         <p> ${this.message}</p>
         <ul>${this.myarray.map(function(item){
             return html`<li>${item}</li>`
         })} </ul>

         
         ${this.boleano ?
        html `<p>devuelve si es verdadero</p>` :
        html `<p>devuelve si es falso</p>`
        }

        <ul> ${this.array2.map (function(item1){
            return html `<li>${item1}</li>`
        })} </ul>

        <button @click=${this.click}>ClickMe</button>


        ${this.mybool ?
        html `<p>My boolean is ${this.mybool}</p>` :
        html `<p>My boolean is ${this.mybool}</p>`
        }
        
        <button @click=${this.click1}>Boolean</button>

        ${this.mybool2 ?
        html `<h1> My bool2 is ${this.mybool2}</p>` : 
        html `<h1> My boool2 is now ${this.mybool2} </p>`
        }

        <button @click =${this._handleclick}>Handleclick</button>
        
     `;
 }

 click(event){
    console.log(event.target)
    this.boleano =! this.boleano
 }
    
 click1(){
     this.mybool =! this.mybool
 }
 
_handleclick(){
    this.mybool2 =! this.mybool2
}

}


customElements.define('my-events1' , MyEvents)