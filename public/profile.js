    
    document.addEventListener('DOMContentLoaded', function(){
        

        // document.addEventListener('DOMContentLoaded', function(){
            // alert('Hello')
        // })
        const viewAPI = document.querySelector('.viewapi');
        const profilebtn = document.querySelector('.profile-container');
        // if (profilebtn){
            console.log(viewAPI)

            viewAPI.addEventListener('fullscreenchange', () => {
                console.log("Hello")
            })
        // }
        
        const data = { username: '', email: '', image: '' };

        // viewAPI.addEventListener('')

        if (viewAPI){
           
            // Select the parent div
            viewAPI.addEventListener('click', (event) => {
                // Check if a child element inside viewAPI triggered the event
                const clickedElement = event.target; // This is the child element clicked

                // Save button clicked
                if (clickedElement.classList.contains('save-btn')) {

                    const xhttp = new XMLHttpRequest();

                    xhttp.onreadystatechange = function () {
                        if (this.readyState === 4 && this.status === 200) {
                            document.querySelector('.viewapi').innerHTML = "";
                            document.querySelector('.viewapi').innerHTML = this.responseText;
                        }
                    }
                        const username = viewAPI.querySelector('.username').value;
                        const email = viewAPI.querySelector('.email').value;
                        const imageFile = viewAPI.querySelector('.image').files[0];
        
                        // Only proceed if username and email are filled
                        if (username && email) {
                            data.username = username;
                            data.email = email;
                        }
        
                        // Convert the image to Base64 if it exists
                        if (imageFile) {
                            const reader = new FileReader();
                            reader.onload = function (e) {
                                const base64Image = e.target.result.split(',')[1];
                                data.image = base64Image;
        
                                // Send the request only after image is converted to Base64
                                sendRequest(JSON.stringify(data));
                            };
                            reader.readAsDataURL(imageFile);
                        } else {
                            // If no image file, send the request directly
                            sendRequest(JSON.stringify(data));
                        }

                        function sendRequest(payload) {
                            xhttp.open('POST', '/profile');
                            xhttp.setRequestHeader('Content-type', 'application/json');
                            xhttp.send(payload);
                        }
                    
            };
                
            }, true); // 'true' for capture phase, 'false' for bubbling phase

        }

    
    })
    


