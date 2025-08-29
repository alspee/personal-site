// Lightbox functionality for gallery pages with arrow key navigation
document.addEventListener('DOMContentLoaded', function() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.querySelector('.lightbox');
    
    if (!galleryItems.length || !lightbox) return;
    
    const lightboxImage = lightbox.querySelector('.lightbox-image');
    const lightboxClose = lightbox.querySelector('.lightbox-close');
    let currentImageIndex = 0;
    let galleryImages = [];
    
    // Build array of all images for navigation
    galleryItems.forEach(item => {
        const img = item.querySelector('img');
        galleryImages.push({
            src: img.src,
            alt: img.alt
        });
    });
    
    // Update lightbox image
    const updateLightboxImage = (index) => {
        if (index >= 0 && index < galleryImages.length) {
            currentImageIndex = index;
            lightboxImage.src = galleryImages[index].src;
            lightboxImage.alt = galleryImages[index].alt;
        }
    };
    
    // Navigate to next image
    const nextImage = () => {
        const nextIndex = (currentImageIndex + 1) % galleryImages.length;
        updateLightboxImage(nextIndex);
    };
    
    // Navigate to previous image
    const previousImage = () => {
        const prevIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
        updateLightboxImage(prevIndex);
    };
    
    // Open lightbox
    galleryItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            updateLightboxImage(index);
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });
    
    // Close lightbox
    const closeLightbox = () => {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    };
    
    if (lightboxClose) {
        lightboxClose.addEventListener('click', closeLightbox);
    }
    
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (lightbox.classList.contains('active')) {
            switch(e.key) {
                case 'Escape':
                    closeLightbox();
                    break;
                case 'ArrowRight':
                    nextImage();
                    break;
                case 'ArrowLeft':
                    previousImage();
                    break;
            }
        }
    });
});