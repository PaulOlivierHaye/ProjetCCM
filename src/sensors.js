import {PolymerElement, html} from '@polymer/polymer';
import '@polymer/paper-card/paper-card.js';
import '@polymer/paper-button/paper-button.js';

class SensorCard extends PolymerElement {
  static get properties() {
    return {
    }
  }


  static get template() {
    return html`
    <style>
      .sensors-card {
        height: 88vh;
        display: flex;
        flex-direction: column;
        font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
      }

      .card-content {
        font-size:20px;
        position:0 0 0 0;
        flex-grow:2;
        padding: 5px;
      }

      .buttons {
        flex-grow: 1;
        display: flex;
        flex-direction: row;
      }

      .buttons paper-button{
        flex-grow:1;
        width: 33%;
      }

      .refresh {
        font-size: 14px;
        padding: 10px;
        margin-top: 10px;
      }

      .green {
        color: green;
      }

      .red {
        color: red;
      }

      .yellow {
        color: yellow;
      }

      .orange {
        color: orange;
      }

      paper-button {
        padding: 0px;
        padding-left: 5px;
        margin-bottom: 5px;
        background: lightgreen;
        color: green;
        text-align: center;
      }

      paper-button:not([disabled]) {
        background: lime;
      }

      paper-button:hover {
        background: lightgreen;
      }

      vaadin-grid {
        font-size: 13px;
      }
    </style>
    <paper-card class="sensors-card" heading="Capteurs" onload="[[_getEntities()]]">
      <div class="card-content">
        <vaadin-grid>
          <vaadin-grid-column path="number" header="Numéro"></vaadin-grid-column>
          <vaadin-grid-column path="hygro" header="Hygrométrie">
            <template>
              <div>
                [[item.hygro]]
              </div>
            </template>
          </vaadin-grid-column>
          <vaadin-grid-column path="temp" header="Température">
            <template>
              <div>
                [[item.temp]] °C
              </div>
            </template>
          </vaadin-grid-column>
          <vaadin-grid-column path="battery" header="Batterie">
            <template>
              <div class$="[[_computeBatteryClass(item.battery)]]">
                [[item.battery]] %
              </div>
            </template>
          </vaadin-grid-column>
        </vaadin-grid>
        <paper-button class="refresh" on-tap="[[_getEntities()]]">Rafraichir</paper-button>
      </div>
    </paper-card>
    `;
  }

  ready() {
    super.ready();
    const grid = document.querySelector('sensor-card').shadowRoot.querySelector('vaadin-grid');

    grid.items = [
      {
        "number": 1,
        "hygro": 'OK',
        "temp": 16,
        "battery": 36
      },
      {
        "number": 2,
        "hygro": 'OK',
        "temp": 16,
        "battery": 82
      },
      {
        "number": 3,
        "hygro": 'Forte',
        "temp": 17,
        "battery": 6
      },
      {
        "number": 4,
        "hygro": 'OK',
        "temp": 16,
        "battery": 58
      },
      {
        "number": 5,
        "hygro": 'Basse',
        "temp": 16,
        "battery": 75
      },
      {
        "number": 6,
        "hygro": 'Basse',
        "temp": 17,
        "battery": 49
      },
      {
        "number": 7,
        "hygro": 'Basse',
        "temp": 17,
        "battery": 85
      },
      {
        "number": 8,
        "hygro": 'Basse',
        "temp": 19,
        "battery": 8
      }
    ];
  }

  _getEntities() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Access-Control-Allow-Origin", "*");
    myHeaders.append("username", "elementiosas@gmail.com");
    myHeaders.append("password", "ElementIo@02");
    myHeaders.append("fiware-servicepath", "/lmiot/");
    
    var myInit = {  method: 'GET',
                    headers: myHeaders,
                    mode: 'no-cors'};

    
    fetch('http://35.204.53.51/v2/entities', myInit)
    .then(function(response) {
      console.log(response);
      
      return response;
    })
  }

  _computeBatteryClass(battery) {
    if(battery >= 75) return 'green'
    if(battery >= 50) return 'yellow'
    if(battery >= 25) return 'orange'
    return 'red';
  }

}
customElements.define('sensor-card', SensorCard);