class header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <style>
          .header {
            width: 100vw;
            background: linear-gradient(to bottom, white 20%, rgb(0, 255, 195) 80%);
            height: 130px;
            padding: 10px;
            position: fixed;
            left: 0;
            top:0;
          }
  
          .header div {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            font-size: 15px;
            text-align: center;
          }
  
          .header div img {
            height: 60px;
          }

          
        @media screen and (max-width: 720px) {
    
            .header div {
                font-size: 10px;
            }
            .header div img {
                height: 50px;
            }
            .header {
                 height: 100px;
            }
        }


        </style>
    <header class="header">
      <div>
        <img src="./images/img4.png" alt="image" />
        <h2>
          E-Portal of Conference & Case Management Hearing <br />
          Government Of India
        </h2>
      </div>
    </header>`;
  }
}

customElements.define("header-component", header);
