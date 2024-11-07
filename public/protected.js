

    const xhttp = new XMLHttpRequest();

    // Initial load of the Signup html on the dashboard
    xhttp.onload = function(){
        document.querySelector('.viewapi').innerHTML = this.responseText;
    }
    xhttp.open('GET', '/signup');
    xhttp.send();
    
    
    document.addEventListener('DOMContentLoaded', async function(){

        const apibtn = document.querySelector('.showapi');
        const apibtn_II = document.querySelector('.showlogin');
        const loginbtn = document.querySelector('.logUser');
        const showUsersbtn = document.querySelector('.showUsers');
        const editProfilebtn = document.querySelector('.editProfile');

        editProfilebtn.addEventListener('click', function() {
            
            const xhttp =  new XMLHttpRequest();

            xhttp.onreadystatechange = function() {
                if (this.readyState === 4 && this.status === 200) {
                    document.querySelector('.viewapi').innerHTML = "";
                    document.querySelector('.viewapi').innerHTML = this.responseText;
                }
            }

            xhttp.open('GET', '/login');
            xhttp.send();

        })

        showUsersbtn.addEventListener('click', function () {
            const xhttp = new XMLHttpRequest();
            
            xhttp.onreadystatechange = function () {
                if (this.readyState === 4 && this.status === 200) {
                    const responseinJSON = JSON.parse(this.responseText);
        
                    // Create a table element
                    const userTable = document.createElement('table');
                    userTable.classList.add('user-table');
        
                    // Create table headers
                    userTable.innerHTML = `
                        <thead>
                            <tr>
                                <th>Username</th>
                                <th>Email</th>
                                <th>Joined on</th>
                            </tr>
                        </thead>
                        <tbody></tbody>
                    `;
        
                    // Reference the tbody element where user rows will be added
                    const tbody = userTable.querySelector('tbody');
        
                    // Add a row for each user
                    responseinJSON.forEach((user) => {
                        const row = document.createElement('tr');
                        row.innerHTML = `
                            <td>${user.username || 'N/A'}</td>
                            <td>${user.email || 'N/A'}</td>
                            <td>${user.createdAt || 'N/A'}</td>
                        `;
                        
                        // Append the row to the tbody
                        tbody.appendChild(row);
                    });
        
                    // Append the table to the main view in the HTML
                    const viewApi = document.querySelector('.viewapi');
                    viewApi.innerHTML = ''; // Clear previous content if any
                    viewApi.appendChild(userTable);
                }
            };
        
            // Make the GET request to fetch users
            xhttp.open('GET', '/users');
            xhttp.send();
        });
        
        

        loginbtn.addEventListener('click', function(){
            xhttp.onreadystatechange = function(){
                if (this.readyState === 4 && this.status === 200) {
                    document.querySelector('.viewapi').innerHTML = this.responseText;
                }
            }
            
            xhttp.open('POST', '/design');
            xhttp.setRequestHeader('Content-type', 'application/json');
            xhttp.send(JSON.stringify({username: "Orunta Enyinnaya", password: 'keleman4xst'}))
        })

        apibtn.addEventListener('click', function(){

            //Uncomment to toggle the display
            // let isActive = false;
            // this.textContent === 'Show AJAX API'? isActive=true : isActive=false
             
            xhttp.onreadystatechange = function(){
                if (this.readyState===4 && this.status===200) {
                    const message = this.responseText;
                    // if (isActive) {
                        document.querySelector('.viewapi').innerHTML = message;
                        // apibtn.textContent = 'Hide AJAX API'
                       
                    // }else{
                        // document.querySelector('.viewapi').innerHTML = '';
                        // apibtn.textContent = 'Show AJAX API'
                        
                    // }
                    //this.responseText
                }
            }
            xhttp.open('GET', '/kelechi');
            xhttp.send();
        })

        apibtn_II.addEventListener('click', function(){
            // let isActive = false;
            // this.textContent === 'Show AJAX API'? isActive=true : isActive=false
             
            xhttp.onreadystatechange = function(){
                if (this.readyState===4 && this.status===200) {
                    const message = this.responseText;
                    // if (isActive) {
                        document.querySelector('.viewapi').innerHTML = message;
                        // apibtn.textContent = 'Hide AJAX API'
                       
                    // }else{
                        // document.querySelector('.viewapi').innerHTML = '';
                        // apibtn.textContent = 'Show AJAX API'
                        
                    
                    //this.responseText
                }
            }
            xhttp.open('GET', '/login');
            xhttp.send();
        })
            
        async function getStatus (){
            var response;
            try{
                response = await axios.get('/protectedpage');
                const message = response?.data?.message;
                console.log(response?.data)
                document.querySelector('.status').textContent = message;
            }
            catch(err){
                console.error(response?.data?.error)
                window.href = '/login'
            }
        }

        getStatus ()


        async function fetchUser (){
            try{
                const response = await axios.get('/session');
                const user = response?.data?.user;
                console.log(response?.data)
                document.querySelector('.name').textContent = user?.username;
            }
            catch(err){
                console.error(err?.message)
                window.href = '/login'
            }
        }
        
        fetchUser ()
    })
        

        
       
    