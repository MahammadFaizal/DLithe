window.addEventListener('DOMContentLoaded', () => {
   
    document.querySelectorAll('section').forEach(section => {
      section.style.display = 'block';
    });
    
   
    document.querySelectorAll('.filter-link').forEach(link => {
      link.addEventListener('click', event => {
        event.preventDefault();
        
        
        const category = link.getAttribute('href').substring(1);
        
        
        if (category === 'all') {
          document.querySelectorAll('section').forEach(section => {
            section.style.display = 'block';
          });
        } else {
        
          document.querySelectorAll('section').forEach(section => {
            section.style.display = 'none';
          });
          
        
          const selectedSection = document.getElementById(category);
          if (selectedSection) {
            selectedSection.style.display = 'block';
          }
        }
      });
    });
  
   
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
  