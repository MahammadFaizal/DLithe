// Wait until the DOM content is loaded
window.addEventListener('DOMContentLoaded', () => {
    // Initially display all news sections
    document.querySelectorAll('section').forEach(section => {
      section.style.display = 'block';
    });
    
    // Filter functionality for news sections
    document.querySelectorAll('.filter-link').forEach(link => {
      link.addEventListener('click', event => {
        event.preventDefault();
        
        // Get the category from the link (remove the '#' from the href)
        const category = link.getAttribute('href').substring(1);
        
        // If "all" is selected, show all sections
        if (category === 'all') {
          document.querySelectorAll('section').forEach(section => {
            section.style.display = 'block';
          });
        } else {
          // Hide all sections first
          document.querySelectorAll('section').forEach(section => {
            section.style.display = 'none';
          });
          
          // Then display only the selected section (if it exists)
          const selectedSection = document.getElementById(category);
          if (selectedSection) {
            selectedSection.style.display = 'block';
          }
        }
      });
    });
  
    // Close popup functionality
    const closeBtn = document.querySelector('.close-btn');
    const popup = document.querySelector('.popup');
    const overlay = document.querySelector('.overlay');
  
    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        popup.classList.remove('show');
        overlay.classList.remove('show');
      });
    }
  });
  