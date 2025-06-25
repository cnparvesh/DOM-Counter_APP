       
        const counterElement = document.getElementById('counter');
        const incrementBtn = document.getElementById('increment');
        const decrementBtn = document.getElementById('decrement');
        const resetBtn = document.getElementById('reset');

       
        let count = 0;


        function updateCounter() {
            counterElement.textContent = count;

            
            if (count > 0) {
                counterElement.style.color = '#4CAF50'; 
            } else if (count < 0) {
                counterElement.style.color = '#f44336'; 
            } else {
                counterElement.style.color = '#333'; 
            }
        }

        
        incrementBtn.addEventListener('click', () => {
            count++;
            updateCounter();
        });

        decrementBtn.addEventListener('click', () => {
            count--;
            updateCounter();
        });

        resetBtn.addEventListener('click', () => {
            count = 0;
            updateCounter();
        });

        
        updateCounter();