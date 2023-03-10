import { LitElement, html } from 'lit';
import { router } from 'lit-element-router';
import "./main-outlet";
import "./components/info-users";
import './components/show-users';
import "./components/add-user"

export class MainRouter extends router(LitElement) {

  static get properties() {
    return {
      route: { type: String },
      params: { type: Object },
      query: { type: Object },
      id: { type: String }
    };
  }

  static get routes() {
    return [{
      name: "users",
      pattern: "",
    },
    {
      name: "info",
      pattern: "info",
    },
    {
      name: "addUser",
      pattern: "addUser",
    }]
  }

  constructor() {
    super();
    this.route = '';
    this.params = {};
    this.query = {};
    this.id = '';
    this.addEventListener('sendID', (event) => { this.user = event.detail.data; this.requestUpdate() });

  }

  update() {
    super.update();
    console.log(this.user, "estamos en main router");
  }

  router(route, params, query, data) {
    this.route = route;
    this.params = params;
    this.query = query;
    this.data = data;
    console.log(route, params, query, data);
  }
  render() {
    return html`
    <main-outlet active-route=${this.route}>
      <show-users route="users"></show-users>
      <info-users route="info" .user=${this.user}></info-users>
      <add-user route="addUser"></add-user>
    
    
    </main-outlet>
    `;
  }
}
customElements.define('main-router', MainRouter);
