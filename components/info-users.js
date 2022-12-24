import { LitElement, html, css } from 'lit';

export class InfoUsers extends LitElement {
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
      user: { type: Object },
      id: { type: String }
    };
  }

  constructor() {
    super();
    this.id = "";

  }



  render() {
    return html`
    <h1>Actualizar información</h1>
    <div>
      <p>Este es el ID ${this.user}</p>
      ${console.log(this.user)}
      <p>Nombre:</p>
      <input type="text" id="userName" value="${this.user.nombre}" />
      <p>Apellido paterno:</p>
      <input type="text" id="firstLastname" value="${this.user.apellidoPaterno}" />
      <p>Apellido materno</p>
      <input type="text" id="secondLastname" value="${this.user.apellidoMaterno}" />
      <br />
    
      <button @click=${this.updateUserInfo}>Actualizar</button>
    
      <button @click="${() => this.navigateTo("/")}">Home </button> </div>
    `;
  }

  updateUserInfo() {
    fetch("http://216.238.68.244:8080/litelement/api/actualizar/usuario/" + this.user.id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nombre: this.nombreDeUsuario.value,
        apellidoPaterno: this.firstLastname.value,
        apellidoMaterno: this.secondLastname.value,
      }),

    })
      .then((response) => response.json())
      .then((preview) => {
        console.log(preview);
      })
      .catch((err) => console.log("Solicitud fallida", err))
      

  }

  get nombreDeUsuario() {
    return this.renderRoot?.querySelector("#userName" ?? null);
  }
  get firstLastname() {
    return this.renderRoot?.querySelector("#firstLastname" ?? null);
  }
  get secondLastname() {
    return this.renderRoot?.querySelector("#secondLastname" ?? null);

  }



}
customElements.define('info-users', InfoUsers);
