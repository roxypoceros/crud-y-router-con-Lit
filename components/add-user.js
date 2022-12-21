import { LitElement, html, css } from "lit";

export class AddUser extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
        padding: 0px;
        font-family: "Alexandria", sans-serif;
        --ligthViolet: #ccccff;
        --violet: #9999ff;
        --almostBlack: #2a2a2a;
      }
      button {
        background-color: var(--ligthViolet);
        color: var(--almostBlack);
        border-radius: 25px;
        border: var(--violet);
        max-width: 150px;
        font-size: 16px;
        font-weight: 500;
        line-height: 1.5;
        overflow: hidden;
        padding: 9px 20px 8px;
        margin: 16px 0 0 0;
        text-align: center;
        user-select: none;
        -webkit-user-select: none;
        touch-action: manipulation;
        width: 100%;
      }
      button:hover,
      button:focus {
        opacity: 0.9;
      }
    `,
  ];

  static get properties() {
    return {
      newUser: { type: Object },
    };
  }

  constructor(){
    super();
    this.newUser = [];
  } 


  /*   sendNewUSer(data) {
      this.dispatchEvent(
        new CustomEvent("dataAPI", {
          detail: { data },
          bubbles: true,
          composed: true,
        })
      );
    } */

  render() {
    return html`
      <h1>Registro</h1>
      <div>
        <p>Nombre:</p>
        <input type="text" id="userName" />
        <p>Apellido paterno:</p>
        <input
          type="text"
          id="firstLastname"
        />
        <p>Apellido materno</p>
        <input
          type="text"
          id="secondLastname"
        />
        <br />

        <p>Nuevo usuario:</p>

        <button @click=${this.addNewUser}>Add user</button>
      </div>
    `;
  }


  addNewUser(e){
    console.log(this.nombreDeUsuario.value);
    console.log(this.firstLastname.value);
    console.log(this.secondLastname.value);
    fetch("http://216.238.68.244:8080/litelement/api/crear/usuario", {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(
        {
        "nombre":this.nombreDeUsuario.value,
        "apellidoPaterno": this.firstLastname.value,
        "apellidoMaterno":this.secondLastname.value
      }
      ),
    })
    .then((response) => response.json())
    .then((preview) => { 
      console.log(preview);
    })
    .catch((err) => console.log("Solicitud fallida", err));

 
  }

  

  get nombreDeUsuario(){
    return this.renderRoot?.querySelector("#userName" ?? null);

  }
  get firstLastname(){
    return this.renderRoot?.querySelector("#firstLastname" ?? null);
  }
  get secondLastname(){
    return this.renderRoot?.querySelector("#secondLastname" ?? null);
  }
  
  
}

customElements.define("add-user", AddUser);
