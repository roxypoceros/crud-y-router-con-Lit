import { LitElement, html, css } from "lit";
import { navigator } from "lit-element-router";
import "./add-user"

export class ShowUsers extends navigator(LitElement) {
  static get properties() {
    return {
      users: { type: Object },
    };
  }

  constructor() {
    super();
    this.users = [];
  }

  firstUpdated() {
    this.getData();
  }

  /* sendData(data) {
    this.dispatchEvent(
      new CustomEvent("dataAPI", {
        detail: { data },
        bubbles: true,
        composed: true,
      })
    );
  } */

  static styles = [
    css`
      :host {
        display: block;
        padding: 0px;
        font-family: 'Alexandria', sans-serif;
        --ligthViolet: #ccccff;
        --violet: #9999ff;
        --almostBlack: #2a2a2a;
      }
      .titleContainer {
        display: flex;
        min-width: 100vw;
      }

      .title{
        min-width: 100vw;

      }
      .usersContainer {
        padding: 16px;
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

  getData() {
    fetch("http://216.238.68.244:8080/litelement/api/usuarios/")
      .then((response) => response.json())
      .then((respuesta) => {this.users = respuesta;
      })
      .catch((err) => console.log("Solicitud fallida", err));

    console.log(this.users, "info de users");
  }



  render() {
    return html`
      <div class="titleContainer">
        <h1>Usuarios registrados</h1>
        <br />
        <br />

      </div>
      <button @click=${() => this.navigateTo("/addUser")}>Add user</button>

      ${this.users.map(
        (e) => html`
          <div class="usersContainer">
            <p>Nombre:${e.nombre}</p>
            <p>Apellido paterno:${e.apellidoPaterno}</p>
            <p>Apellido materno:${e.apellidoMaterno}</p>

            <button @click=${() => this.navigateTo("/info")}>Update</button>
            <button @click=${() => this.deleteUser(e)}>Delete</button>
            <br />
          </div>
        `
      )}
    `;
  }

  navigateTo(path) {
    this.navigate(path);
  }

  deleteUser(e){
    console.log("Botón que borra");
    const id = this.users.id_usuario

}
}
customElements.define("show-users", ShowUsers);
