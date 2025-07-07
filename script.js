document.addEventListener('DOMContentLoaded', () => {
   
    const h2Element = document.querySelector('.home .content h2');
    const h4Element = document.querySelector('.home .content h4');
    const originalH2HTML = h2Element.innerHTML; 
    const originalH4Text = h4Element.textContent; 

    
    h2Element.innerHTML = '';
    h4Element.textContent = '';

    

    const delayBetweenH2H4 = 800; 
    function typeWriter(element, text, isHTML = false, callback = () => {}) {
        element.classList.add('typing-active'); 

        
        if (isHTML) {
            element.innerHTML = text;
        } else {
            element.textContent = text;
        }

        
        const style = getComputedStyle(element);
        const animationDurationStr = style.animationDuration; 
        const animationDurationMs = parseFloat(animationDurationStr) * 1000;

        
        setTimeout(() => {
            element.style.borderRight = 'none'; 
            element.style.animation = 'none'; 
            callback();
        }, animationDurationMs + 50);
    }

    typeWriter(h2Element, originalH2HTML, true, () => {
        setTimeout(() => {
            typeWriter(h4Element, originalH4Text, false);
        }, delayBetweenH2H4);
    });

});