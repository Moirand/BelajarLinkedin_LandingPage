class TestimonialCard extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: 'open' });
    }

    setTestimonial(profile, name, status, testimonial) {
        this._profile = profile;
        this._name = name;
        this._testimonial = testimonial;
        this._status = status;

        this.render();
    }

    updateStyle() {
        return `
            :host {
                display: block;
                width: 40em;
                border-radius: 1.5em;
                color: black;
                
                background-color: var(--light-yellow);
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
            }
            .container {
                display: flex;
                flex=flow: row unwrap;
                gap: 2em;
                align-items: center;
                padding: .5em;
            }

            .content {
                display: flex;
                flex-flow: column nowrap;
            }

            p {
                margin: 0px;
                text-align: center;
            }
        `;
    }

    connectedCallback() {
        this.render();
    }

    render() {
        if (!this.shadowRoot) return;

        this.shadowRoot.innerHTML = `
            <style>${this.updateStyle()}</style>

            <div class="container">
                <div class="profile">
                    <img src="src/assets/img/${this._profile}" alt="Profile ${this._name}">
                </div>

                <div class="content">
                    <p>" ${this._testimonial} "</p>
                    <p>${this._name} &#65293; ${this._status}</p>
                </div>
            </div>
        `;
    }
}

customElements.define("testimonial-card", TestimonialCard);