    // Create Array
    let arNum = [1, 2, 3, 4, 5, 6, 7, 8, 9,];
    let n = 0;
            // Creating Variables for button and display
            let nextInput = document.getElementById('addInput');
            let calcbtn = document.getElementById('calcbtn');
    
        // addEventListener for button functionality
            calcbtn.addEventListener('click', add)
    
            // function created to add all values inside array into one total.
            function add(){
                let sum = 0;
                for (n = 0; n < arNum.length; n++) {
                    sum += arNum[n];
                }
                addInput.value = sum;
            }