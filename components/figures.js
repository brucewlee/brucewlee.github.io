// figure.js
class Figure extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    static get observedAttributes() {
        return ['src', 'alt', 'caption', 'width', 'height'];
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback() {
        this.render();
    }

    render() {
        const src = this.getAttribute('src') || '/api/placeholder/600/400';
        const alt = this.getAttribute('alt') || 'Figure';
        const caption = this.getAttribute('caption');
        const width = this.getAttribute('width') || '600';
        const height = this.getAttribute('height') || '400';

        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    margin: 1.5rem auto;
                }
                .figure-container {
                    border: 1px solid #e5e7eb;
                    border-radius: 0.5rem;
                    overflow: hidden;
                    background-color: #F4F0EC;
                    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
                }
                img {
                    width: 100%;
                    height: auto;
                    object-fit: cover;
                    display: block;
                }
                figcaption {
                    padding: 0.75rem;
                    font-size: 0.875rem;
                    color: #4b5563;
                    border-top: 1px solid #e5e7eb;
                    background-color: #F4F0EC;
                }
                .caption-content {
                    display: flex;
                    gap: 0.5rem;
                    align-items: flex-start;
                }
                .caption-label {
                    font-weight: 500;
                }
            </style>
            <figure class="figure-container">
                <img
                    src="${src}"
                    alt="${alt}"
                    width="${width}"
                    height="${height}"
                />
                ${caption ? `
                    <figcaption>
                        <div class="caption-content">
                            <span>${caption}</span>
                        </div>
                    </figcaption>
                ` : ''}
            </figure>
        `;
    }
}

customElements.define('blog-figure', Figure);