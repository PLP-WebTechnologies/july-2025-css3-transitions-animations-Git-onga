<script>
        // Part 1: CSS3 Animations
        document.addEventListener('DOMContentLoaded', function() {
            // Button hover effects are handled by CSS
            const buttons = document.querySelectorAll('.btn');
                                  
            // Function with parameters and return value
            function calculateSquare(number) {
                return number * number;
            }
            
            // Function demonstrating scope
            function fibonacciSequence(n) {
                // Local function with its own scope
                function fib(n) {
                    if (n <= 1) return n;
                    return fib(n - 1) + fib(n - 2);
                }
                
                // This result variable is local to fibonacciSequence function
                let result = [];
                for (let i = 0; i < n; i++) {
                    result.push(fib(i));
                }
                return result.join(', ');
            }
            
            // Function with multiple parameters
            function convertTemperature(value, unit) {
                if (unit === 'celsius') {
                    return (value * 9/5) + 32 + '°F';
                } else {
                    return (value - 32) * 5/9 + '°C';
                }
            }
            
            // DOM interaction for function demo
            const calculateBtn = document.getElementById('calculateBtn');
            const fibonacciBtn = document.getElementById('fibonacciBtn');
            const temperatureBtn = document.getElementById('temperatureBtn');
            const numInput = document.getElementById('numInput');
            const functionResult = document.getElementById('functionResult');
            
            calculateBtn.addEventListener('click', function() {
                const inputValue = parseInt(numInput.value) || 5;
                const result = calculateSquare(inputValue);
                functionResult.textContent = `The square of ${inputValue} is ${result}`;
            });
            
            fibonacciBtn.addEventListener('click', function() {
                const inputValue = parseInt(numInput.value) || 5;
                const result = fibonacciSequence(inputValue);
                functionResult.textContent = `Fibonacci sequence: ${result}`;
            });
            
            temperatureBtn.addEventListener('click', function() {
                const inputValue = parseInt(numInput.value) || 25;
                const toFahrenheit = convertTemperature(inputValue, 'celsius');
                const toCelsius = convertTemperature(inputValue, 'fahrenheit');
                functionResult.textContent = `${inputValue}°C = ${toFahrenheit} | ${inputValue}°F = ${toCelsius}`;
            });
                      
            // Card flip functionality
            const flipCard = document.getElementById('flipCard');
            const flipCardBtn = document.getElementById('flipCardBtn');
            
            flipCard.addEventListener('click', function() {
                this.classList.toggle('flipped');
            });
            
            flipCardBtn.addEventListener('click', function() {
                flipCard.classList.toggle('flipped');
            });
            
            // Modal functionality
            const showModalBtn = document.getElementById('showModalBtn');
            const closeModalBtn = document.getElementById('closeModalBtn');
            const demoModal = document.getElementById('demoModal');
            
            showModalBtn.addEventListener('click', function() {
                demoModal.classList.add('active');
            });
            
            closeModalBtn.addEventListener('click', function() {
                demoModal.classList.remove('active');
            });
            
            // Animate boxes with JavaScript
            const animateBoxesBtn = document.getElementById('animateBoxesBtn');
            const boxes = document.querySelectorAll('.box');
            
            animateBoxesBtn.addEventListener('click', function() {
                // Remove any existing animations
                boxes.forEach(box => {
                    box.classList.remove('bounce', 'spin', 'shake');
                });
                
                // Add animations with a delay between each
                setTimeout(() => {
                    boxes[0].classList.add('pulse');
                }, 100);
                
                setTimeout(() => {
                    boxes[1].classList.add('bounce');
                }, 500);
                
                setTimeout(() => {
                    boxes[2].classList.add('spin');
                }, 1000);
                
                setTimeout(() => {
                    boxes[3].classList.add('shake');
                }, 1500);
                
                // Remove animations after they complete
                setTimeout(() => {
                    boxes.forEach(box => {
                        box.classList.remove('pulse', 'bounce', 'spin', 'shake');
                    });
                }, 3500);
            });
        });
    </script>
