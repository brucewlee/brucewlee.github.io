class Figure extends HTMLElement {
    static get observedAttributes() {
        return ['src', 'alt', 'caption', 'width', 'height'];
    }

    constructor() {
        super();
        if (!document.getElementById('blog-figure-styles')) {
            const styleSheet = document.createElement('style');
            styleSheet.id = 'blog-figure-styles';
            styleSheet.textContent = `
                .blog-figure {
                    display: block;
                    margin: 1.5rem auto;
                    max-width: 100%;
                }
                
                .blog-figure-container {
                    border: 1px solid #e5e7eb;
                    border-radius: 0.5rem;
                    overflow: hidden;
                    background-color: #FEFCFF;
                    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
                }
                
                .blog-figure img {
                    width: 100%;
                    height: auto;
                    object-fit: cover;
                    display: block;
                }
                
                .blog-figure figcaption {
                    padding: 1rem;
                    font-size: 0.875rem;
                    color: #4b5563;
                    border-top: 1px solid #e5e7eb;
                    background-color: #FEFCFF;
                    line-height: 1.5;
                }
                
                .blog-figure .caption-content {
                    display: block;
                    text-align: left;
                }
                
                .blog-figure .caption-content b {
                    color: #374151;
                }

                .blog-figure .caption-paragraph {
                    margin: 0.75rem 0;
                }
                
                .blog-figure .caption-paragraph:first-child {
                    margin-top: 0;
                }
                
                .blog-figure .caption-paragraph:last-child {
                    margin-bottom: 0;
                }
                
                /* Math rendering adjustments */
                .blog-figure .MathJax {
                    display: inline !important;
                }
                
                .blog-figure .mjx-chtml {
                    margin: 0 !important;
                }
            `;
            document.head.appendChild(styleSheet);
        }
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

        this.className = 'blog-figure';
        this.innerHTML = `
            <figure class="blog-figure-container">
                <img
                    src="${src}"
                    alt="${alt}"
                    width="${width}"
                    height="${height}"
                />
                ${caption ? `
                    <figcaption>
                        <div class="caption-content">
                            ${caption}
                        </div>
                    </figcaption>
                ` : ''}
            </figure>
        `;

        if (window.MathJax) {
            window.MathJax.typesetPromise([this]).catch(err => {
                console.error('MathJax typesetting failed:', err);
            });
        }
    }
}

customElements.define('blog-figure', Figure);