// components/gallery.js

document.addEventListener('DOMContentLoaded', function() {
    const galleryHTML = `
        <div class="photo-gallery">
            <div class="gallery-header">
                <div class="thumbnail-container">
                    <div class="thumbnail" data-full="pictures/gallery/oct-2024-phila.jpg" data-caption="Penn Lightweight Rowing at Princeton Chase <br> October, 2024. Image Credit: row2k">
                        <img src="pictures/gallery/oct-2024-phila-thumb.jpg" alt="Penn Lightweight Rowing" />
                    </div>
                    <div class="thumbnail" data-full="pictures/gallery/dec-2021-pohang.jpg" data-caption="Republic of Korea Marine Aircraft Group (ROK MAG) Activation Ceremony <br> December, 2021. Image Credit: 每日新聞">
                        <img src="pictures/gallery/dec-2021-pohang-thumb.jpg" alt="Marine Corps" />
                    </div>
                </div>
            </div>
        </div>

        <div class="modal" id="photoModal">
            <div class="modal-content">
                <span class="close-button">&times;</span>
                <img src="" alt="" id="modalImage" />
                <p id="modalCaption"></p>
            </div>
        </div>
    `;

    // Insert gallery styles
    const galleryStyles = `
        <style>
            .photo-gallery {
                margin-top: 2rem;
            }

            .gallery-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 1rem;
            }

            .gallery-title {
                font-style: italic;
                color: #666;
                font-size: 0.9rem;
            }

            .thumbnail-container {
                display: flex;
                gap: 1rem;
            }

            .thumbnail {
                cursor: pointer;
                transition: opacity 0.2s;
                position: relative;
            }

            .thumbnail:hover {
                opacity: 0.8;
            }

            .thumbnail img {
                width: 120px;
                height: 80px;
                object-fit: cover;
                border-radius: 4px;
            }

            /* Modal styles */
            .modal {
                display: none;
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.8);
                z-index: 1000;
            }

            .modal-content {
                position: relative;
                max-width: 800px;
                margin: 2rem auto;
                background: white;
                padding: 1rem;
                border-radius: 8px;
            }

            .close-button {
                position: absolute;
                top: 10px;
                right: 10px;
                cursor: pointer;
                font-size: 24px;
                color: #333;
            }

            #modalImage {
                width: 100%;
                height: auto;
                border-radius: 4px;
            }

            #modalCaption {
                margin-top: 1rem;
                text-align: center;
                font-style: italic;
                color: #666;
            }
        </style>
    `;

    // Find the last section in the main content
    const mainContent = document.querySelector('main');
    
    // Create a new section for the gallery
    const gallerySection = document.createElement('section');
    gallerySection.innerHTML = galleryStyles + galleryHTML;
    
    // Append the gallery section after all existing content in main
    mainContent.appendChild(gallerySection);

    // Add modal functionality
    const modal = document.getElementById('photoModal');
    const modalImg = document.getElementById('modalImage');
    const modalCaption = document.getElementById('modalCaption');
    const closeButton = document.querySelector('.close-button');

    // Open modal when clicking thumbnails
    document.querySelectorAll('.thumbnail').forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            modal.style.display = 'block';
            modalImg.src = this.dataset.full;
            modalCaption.innerHTML = this.dataset.caption;
        });
    });

    // Close modal when clicking close button
    closeButton.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    // Close modal when clicking outside the image
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});