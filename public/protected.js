    // protected.js
    // require('/public/profile.js');

    async function getFile(callback, usercallback) {
        const reqObj = new  XMLHttpRequest();
        reqObj.open('GET', 'public/profile.html');
        reqObj.onload = async function(){
        if (this.status === 200) {
            callback(this.responseText)
            // Fetch session data
            try {
                const res = await fetch('/session'
                    , 
                    {
                        method: 'GET',
                        credentials: 'same-origin',
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    },
                );
                if (res.ok) {
                    const sessionData = await res.json(); // Parse JSON response
                    console.log(sessionData)
                    usercallback(sessionData); // Call usercallback with session data
                } else {
                    usercallback('Failed to fetch user');
                }
            } catch (error) {
                console.error("Error fetching session:", error);
                usercallback('Failed to fetch user');
            }
            // .then((res)=> {return console.log(res.data)})
            // .catch((e) => console.log(e))
            // const reqUser = new XMLHttpRequest();
            // reqUser.open('GET', '/session');
            // reqUser.onload = function(){
            //     if (this.status === 200) {
            //         usercallback(this.responseText)
            //     } else {
            //         usercallback('Failed to fetch user')
            //     }
            // }
            // reqUser.send();
        } else {
            callback("Error: " + reqObj.status)
        }
    }
        reqObj.withCredentials = true;
        reqObj.send();

        
    }

    // getFile(display, displayUser)
    
    function display(file){
        document.querySelector('.viewapi').innerHTML = file
    }

    function displayUser(file){
        if (file ) {
            const { user } = file
       
        if (document.querySelector('.viewapi')) {
            document.querySelector('.viewapi .profile-picture').src = `data:image/png;base64,${user?.image}`;
            document.querySelector('.viewapi .username-value').innerHTML = user?.username
            document.querySelector('.viewapi .email-value').innerHTML = user?.email
            document.querySelector('.viewapi .joined-value').innerHTML = user?.createdAt
        }
    }
    }
// ///To fetch users info at page load
    const xhttp = new XMLHttpRequest();

    xhttp.onload = function(){
        if (this.status === 200){
            document.querySelector('.myapi').innerHTML = this.responseText;
        }
    }

    xhttp.open('GET', '/public/calendar.html');
    xhttp.send();
//     var username = ''; 
//     var email = '';
//     var joined = '';
//     var pic = '';
//     //Enumerable properties or ( readable and writable ) properties of the object that can be read by Object.getPropertyNames() and Object.keys();
//     var userObject = {id:0, name: 'John', email: 'john4life@gmail.com', age: 40 }
//     //Map Object
//     var myMap = new Map(Object.entries(userObject))

//     //Can add any number of arguments
//     function add(...n) {
//         // Arguments are the values passed in the function
//         // Arguments are properties of a function.
//         // Arguments are objects/properties of a function that contain an array of arguments.
//         // Functions, like objects, have inbuilt methods and properties
//         // n in this case represents arguments
//         // console.log(arguments) is the same as console.log(n)
//         console.log(n || arguments)
//         let i = 0;
//         for (let key in n || arguments){
//             i += n[key] || arguments[key];
//         }

//         return i;
//     }

//     function average(...n) {
//         let i = 0;
//         for (let key in n) {
//             i += n[key]
//         }

//         return i/n.length

//     }


//     //Non-enumerable properties that can only be read by Object.getPropertyNames() and not Object.keys()
//     // Object.defineProperty(userObject, 'reset', {
//     //     get : function() {
//     //         this.id = 0
//     //     }
//     // })

//     // Object.defineProperty(userObject, 'increment', {
//     //     get : function(){
//     //         this.id ++
//     //     }
//     // })

//     // Object.defineProperty(userObject, 'incrementByValue', {
//     //     get : function(){
//     //         this.id *= this.age
//     //     }
//     // })

//     // Object.defineProperty(userObject, 'setAge', {
//     //     set : function(value) {
//     //         this.age = value * this.age
//     //     }
//     // })

//     xhttp.onload = function(){
//         // if (this.readyState === 4 && this.status === 200) {
//             username = (JSON.parse(this.responseText))?.user?.username;
//             email = (JSON.parse(this.responseText))?.user?.email;
//             joined = (JSON.parse(this.responseText))?.user?.createdAt;
//             pic = (JSON.parse(this.responseText))?.user?.image;
//             // message[2] = JSON.parse(this.responseText).username;
//             console.log((JSON.parse(this.responseText))?.user?.username);

//             console.log(add(5,4))
//             console.log(average(9,6))
//             // console.log(Object.entries(userObject))
//             // console.log(myMap)

//             //Non-enumerable properties defined by getters and setters are also known as Object Accessors or Computed Properties
//             //To get the result of the getter method for the non-enumerable properties increment and incrementByValue of the userObject
//             // userObject.increment;
//             // userObject.incrementByValue;
//             //To apply the value fot the setter method for the non-enumerable property setAge of the userObject
//             // userObject.setAge = 10

//             // console.log(Object.getOwnPropertyDescriptors(userObject));
//             // console.log(Object.entries(userObject));
//         // }
//     }
//     xhttp.open('GET', '/session');
//     xhttp.send();

//     const xhttps = new XMLHttpRequest();

//     // Initial load of the Profile html after fetching users info on the dashboard
//     xhttps.onload = function(){
//         document.querySelector('.viewapi').innerHTML = this.responseText;
//         const viewAPI = document.querySelector('.viewapi')
//         const container = viewAPI.querySelector('.profile-container');
//         const header = container.querySelector('.profile-header');
//         const profilePic = header.querySelector('.profile-picture');
//         const profileInfo = container.querySelector('.profile-info');
//         const list = profileInfo.querySelector('.details-list');
//         const span = list.querySelectorAll('span')
//             console.log(span, username)
//             span[0].textContent = username;
//             span[1].textContent = email;
//             span[2].textContent = joined;
//             profilePic.src = `data:image/png;base64,${pic}`;
            
//     }
//     xhttps.open('GET', '/profile');
//     xhttps.send();

    
    
    document.addEventListener('DOMContentLoaded', async function(){

        const webWorker = document.querySelector('.web_worker');
        const startWorker = document.querySelector('.start');
        const stopWorker = document.querySelector('.stop');
        const apibtn = document.querySelector('.showapi');
        const apibtn_II = document.querySelector('.showlogin');
        const loginbtn = document.querySelector('.logUser');
        const showUsersbtn = document.querySelector('.showUsers');
        const showProfilebtn = document.querySelector('.showProfile');
        const viewAPI = document.querySelector('.viewapi');

        let worker;
        //Start Timer
        startWorker.addEventListener('click', function(){
            if (typeof(worker) == 'undefined') {
                worker = new Worker('/public/main.js')
                console.log(worker)
             }
     
             worker.onmessage = function(event){
                 webWorker.textContent = event.data
             }
        })

        //Stop Timer
        stopWorker.addEventListener('click', function(){
            worker.terminate();
            worker = undefined;
        })

        showProfilebtn.addEventListener('click', function() {

            getFile(display, displayUser);
            // //Fetch User Info from backend Session
            // const xhttp = new XMLHttpRequest();
            // var username = ''; 
            // var email = '';
            // var joined = '';
            // var pic = ''

            // xhttp.onload = function(){
            //     // if (this.readyState === 4 && this.status === 200) {
            //         username = (JSON.parse(this.responseText))?.user?.username;
            //         email = (JSON.parse(this.responseText))?.user?.email;
            //         joined = (JSON.parse(this.responseText))?.user?.createdAt;
            //         pic = (JSON.parse(this.responseText))?.user?.image;
            //         // message[2] = JSON.parse(this.responseText).username;
            //         console.log((JSON.parse(this.responseText))?.user?.image)
            //     // }
            // }
            // xhttp.open('GET', '/session');
            // xhttp.send();

            // ////////////////////////////////

            // //Display the Profile form

            // const xhttps = new XMLHttpRequest();

            // // Initial load of the Signup html on the dashboard
            // xhttps.onload = function(){
            //     document.querySelector('.viewapi').innerHTML = this.responseText;
            //     const viewAPI = document.querySelector('.viewapi')
            //     const container = viewAPI.querySelector('.profile-container');
            //     const header = container.querySelector('.profile-header');
            //     const profilePic = header.querySelector('.profile-picture');
            //     const profileInfo = container.querySelector('.profile-info');
            //     const list = profileInfo.querySelector('.details-list');
            //     const span = list.querySelectorAll('span')
            //         console.log(span, username, profilePic)
            //         span[0].textContent = username;
            //         span[1].textContent = email;
            //         span[2].textContent = joined;
            //         profilePic.src = `data:image/png;base64,${pic}`;
                    
            // }
            // xhttps.open('GET', '/profile');
            // xhttps.send();

            // SKIP THIS PART
            /////////////////////////
            
            // const xhttps =  new XMLHttpRequest();

            // xhttp.onreadystatechange = function() {
            //     if (this.readyState === 4 && this.status === 200) {
            //         document.querySelector('.viewapi').innerHTML = "";
            //         document.querySelector('.viewapi').innerHTML = this.responseText;
            //     }
            // }

            // xhttp.open('GET', '/profile');
            // xhttp.send();

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
            
        // async function getStatus (){
        //     var response;
        //     try{
        //         response = await axios.get('/protectedpage');
        //         const message = response?.data?.message;
        //         console.log(response?.data)
        //         document.querySelector('.status').textContent = message;
        //     }
        //     catch(err){
        //         console.error(response?.data?.error)
        //         window.href = '/login'
        //     }
        // }

        // getStatus ()


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
        

        
       
    