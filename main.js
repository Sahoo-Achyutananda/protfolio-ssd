document.addEventListener('click', function(e){
    const timestamp = new Date().toISOString();
    const eventType = 'click';
    const eventObject = e.target.tagName;
    
    console.log(`${timestamp}, ${eventType}, ${eventObject}`);
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting){
            const timestamp = new Date().toISOString();
            const eventType = 'view';
            const eventObject = entry.target.tagName;
            
            console.log(`${timestamp}, ${eventType}, ${eventObject}`);
        }
    });
});

document.querySelectorAll('*').forEach(el => observer.observe(el));

// function identifyElement(element){
//     if (element.tagName === 'IMG') return 'image';
//     if (element.tagName === 'SELECT') return 'dropdown';
//     if (element.tagName === 'BUTTON') return 'button';
//     if (element.tagName === 'A') return 'link';
//     if (element.type === 'text') return 'text_input';
//     return element.tagName.toLowerCase();
// }