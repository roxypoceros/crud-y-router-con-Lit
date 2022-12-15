import { LitElement, html } from 'lit';
import { router} from 'lit-element-router';
import "./main-outlet";
import "./components/info-users";
import "./components/show-users";

export class MainRouter extends router (LitElement) {

static get properties() {
  return {
    route: { type: String },
    params: { type: Object },
    query: { type: Object },
  };
}

  static get routes(){
    return[{
      name: "users",
      pattern: "",
      },
      {
        name:"info",
        pattern: "info",
      }]
  }

  constructor() {
    super();
    this.route = '';
    this.params = {};
    this.query = {};
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
      <info-users route="info"></info-users>

    </main-outlet>
    `;
  }
}
customElements.define('main-router', MainRouter);
