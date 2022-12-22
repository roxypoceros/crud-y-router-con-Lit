import { LitElement, html, css } from "lit";
import { navigator } from "lit-element-router";

export class InfoUsers extends navigator(LitElement) {
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
      propName: { type: String },
    };
  }

  render() {
    return html`
      <h1>Actualizar información</h1>
      <div>
        <p>Nombre:</p>
        <input type="text" id="userName" />
        <p>Apellido paterno:</p>
        <input type="text" id="firstLastname" />
        <p>Apellido materno</p>
        <input type="text" id="secondLastname" />
        <br />

        <button @click=${this.updateUserInfo}>Actualizar</button>

        <button @click="${() => this.navigateTo("/")}">Home</button>
      </div>
    `;
  }

  navigateTo(path) {
    this.navigate(path);
  }
}
customElements.define("info-users", InfoUsers);
