import { LitElement, html, css } from "lit";
import { navigator } from "lit-element-router";

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
      }
      .headerContainer {
        display: flex;
        min-width: 100vw;
      }
      .usersContainer {
        padding: 16px;
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
      <div class="headerContainer">
        <h1>Usuarios registrados</h1>
        <br />

        <button>Add user</button>
      </div>
      ${this.users.map(
        (e) => html`
          <div class="usersContainer">
            <p>ID:${e.id_usuario}</p>
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
