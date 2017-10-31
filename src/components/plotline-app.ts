import { Element as PolymerElement } from '@polymer/polymer/polymer-element';
import './plotline-icons';

export default class PlotlineApp extends PolymerElement {
    static get template() {
        return `
            <h1>Hi!</h1>
            <plotline-icons></plotline-icons>
            <iron-icon icon="plotline:check"></iron-icon>
        `;
    }

    static get properties() {
        return {
            title: {
                type: String,
                readonly: true
            }
        }
    }

    constructor() {
        super();
    }
}

customElements.define('plotline-app', PlotlineApp);