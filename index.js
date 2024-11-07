const express = require('express');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
const formidable = require('formidable');
const fs = require('fs');
const events = require('events');
const session = require('express-session');
const multer = require('multer');
const upload = multer();
const bcrypt = require('bcrypt');
const eventEmitter = new events.EventEmitter();
const { connectDB } = require('./db');
const User = require('./models/UserModel');
const MongoStore = require('connect-mongo');
require('dotenv').config();
const app = express();

connectDB();

const store = MongoStore.create({
    mongoUrl: process.env.MONGO_URI,  // Your MongoDB connection string
    collection: 'sessions',        // Collection to store sessions
    ttl: 24 * 60 * 60,
    autoRemove:'native',
  });
  
  store.on('error', function(error) {
    console.log(error);
  });

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));
app.use('/public', express.static(path.join(__dirname, '/public')));
app.use(session({secret: "Your secret key"}));
app.enable('trust proxy');
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    // rolling:true,
    // unset: 'destroy',
    saveUninitialized: false,
    store: store,
    cookie: {
        maxAge: 24 * 60 * 60 * 1000,  // 1 day
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production'? true : false,  // True if you're running on HTTPS
        sameSite: process.env.NODE_ENV === 'production'? 'none' : 'Lax', //'Lax',
        domain: process.env.NODE_ENV === 'production'? 'node-ajax-project.vercel.app' : 'localhost',
        path:'/'

    }
}));
// app.use(upload.array());
  //Assign the event handler to an event:
 
var Users = [];

////Application level middleware that is called on every request.
///It has no mount path.
  app.use(function(req, res, next){
    req.time = new Date();
    next();
})


var myEventHandler = function (req, res) {
    if (req.uploaded){
        res.json({file: req.uploaded});
    }
    next();
    console.log('I hear a scream!');
  }

  // Define upload directory path globally
const uploadDir = path.join(__dirname, 'public', 'imgs');

// Ensure the directory exists
fs.mkdirSync(uploadDir, { recursive: true });

// Event handler for the 'upload' event
// app.use(function(req, res, next){
    eventEmitter.on('upload', (uploadedPath, res) => {
    console.log('Upload complete:', uploadedPath);
    res.json({ message: 'File uploaded successfully!', filePath: uploadedPath });
})
//  next();
// })
;

app.get('/', function(req, res){
        const absolutePath = path.join(__dirname, '/public/login.html');
        res.sendFile(absolutePath);
    // eventEmitter.emit('upload');
    
})

// app.get('*', function(req, res){
//     const absolutePath = path.join(__dirname, '/public/login.html');
//     res.sendFile(absolutePath);
// // eventEmitter.emit('upload');

// })

app.get('/kelechi', function(req, res){
    const absolutePath = path.join(__dirname, '/public/signup.html');
    res.sendFile(absolutePath);
    // res.json({message: 'You are an amazing person'})
})

app.get('/design', function(req, res){
    const absolutePath = path.join(__dirname, '/public/design.html');
    res.sendFile(absolutePath);
    // res.json({message: 'You are an amazing person'})
})

// GET route to check the upload status or simulate an upload endpoint
app.get('/uploadPic', function (req, res) {
    if (req.time) {
        eventEmitter.emit('upload', req.time, res);
    } else {
        res.status(400).json({ error: 'No file uploaded yet' });
    }
});

app.get('/time', (req, res) => {
    res.json({ time: req.time });
});

app.post('/signup', upload.array(), async(req, res, next) => {
    console.log(req.body)
    const { username, email, password } = req.body
    if (!username || !email || !password){
        res.status(400).json({error: "Incomplete or Invalid credentials"})
    }
    try{
        const user = await User.findOne({ $or: [{ username }, { email }] });
        if (user) {
            return res.status(400).json({ error: 'User Already Exists with this name and email' });
        }
        const isPasswordValid = user && user.comparePassword(password) //await bcrypt.compare(password, user.password);
        if (isPasswordValid) {
            return res.status(400).json({ error: 'Password already taken' });
        }

        var newUser = { username: username, email: email, password: password };
        var signedupUser = new User(newUser);
        await signedupUser.save();
        Users.push(newUser);
        console.log(Users)
        req.session.user = newUser;
        res.redirect('/protectedpage');

    }
    catch(err){
        console.log('Save Error:',  err)
        return res.status(500).json({error: err})
    }
     
  })

  app.get('/users', async function(req, res){
    const allUsers = await User.find();
    res.send(allUsers)
  })

  app.post('/design', upload.array(), async (req, res) => {
    const { username, password } = req.body;

    // Validate request body
    if (!username || !password) {
        return res.status(400).json({ error: 'Username and password are required' });
    }

    try {
        // Find user by username
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(400).json({ error: 'Invalid username or password' });
        }

        // Compare password
        const isPasswordValid = user.comparePassword(password);//await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ error: 'Invalid username or password' });
        }

        // Set user in session if credentials are valid
        req.session.user = user;

        // Redirect to the protected page
        return res.redirect('/design');
    } catch (error) {
        console.error('Login error:', error);
        return res.status(500).json({ error: 'An error occurred during login' });
    }
});

  function isSessionActive(req, res, next){
    // if (req.session.user) {
    //     req.directPath = 'login.html'
    //     res.sendFile(path.join(__dirname, 'public', req.directPath));
    //     // next();
    // }else{
        req.directPath = 'signup.html'
        res.sendFile(path.join(__dirname, 'public', req.directPath));
        // next();
    
  }

app.post('/upload', (req, res, next) => {
    // Initialize formidable with the upload directory
    const form = new formidable.IncomingForm({
        uploadDir: uploadDir, // Specify the directory to save the files
        keepExtensions: true, // Retain file extensions
    });

    form.parse(req, (err, fields, files) => {
        if (err) {
            return res.status(500).json({ error: 'Error parsing the file' });
        }

        // Access the uploaded file
        const uploadedFile = files.filetoupload[0];
        if (!uploadedFile) {
            return res.status(400).json({ error: 'No file uploaded' });
        }

        // Safely access the file path
        const oldPath = uploadedFile.filepath || uploadedFile.path;
        if (!oldPath) {
            return res.status(400).send('Uploaded file path is undefined');
        }

        // Generate a safe new path for the file
        const newFileName = path.basename(uploadedFile.originalFilename || uploadedFile.name);
        const newPath = path.join(uploadDir, newFileName);

        // Move the file to the new location
        fs.rename(oldPath, newPath, (err) => {
            if (err) {
                return res.status(500).json({ error: 'Error moving the file' });
            }

            // Emit 'upload' event with newPath and pass the response object to send a response
            
            eventEmitter.emit('upload', newPath, res);
            req.uploadedPath1 = "hello";
            next();
        });
    })
});

app.get('/profile', (req, res) => {
    const absolutePath = path.join(__dirname, '/public/profile.html');
    res.sendFile(absolutePath);
})

// Route for handling login
app.post('/login', upload.array(), async (req, res) => {
    const { username, password } = req.body;

    // Validate request body
    if (!username || !password) {
        return res.status(400).json({ error: 'Username and password are required' });
    }

    try {
        // Find user by username
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(400).json({ error: 'Invalid username or password' });
        }

        // Compare password
        const isPasswordValid = user.comparePassword(password);//await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ error: 'Invalid username or password' });
        }

        // Set user in session if credentials are valid
        req.session.user = user;

        // Redirect to the protected page
        return res.redirect('/protectedpage');
    } catch (error) {
        console.error('Login error:', error);
        return res.status(500).json({ error: 'An error occurred during login' });
    }
});


app.get('/signup', function(req, res){
    res.sendFile(path.join(__dirname, 'public', 'signup.html'));
})

app.get('/login', async function(req, res){ 
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
    const allUsers = await User.find();
    console.log(allUsers)
})

app.get('/logout', function(req, res){
    req.session.destroy(function(){
        console.log("User logged out")
        res.redirect('/login')
    })
})

app.use('/protectedpage', checksignin, function(err, req, res, next){
    if (err) {
        console.log(err);
   //User should be authenticated! Redirect him to log in.
    res.redirect('/login');}
    next();
}
)

function checksignin(req, res, next){
    if (req.session && req.session.user) {
        // res.json({user: req.session.user})
        next();
    }else {
        var err = new Error("Not logged in!");
        console.log(req.session.user);
        return res.redirect('/login')
        // res.json({error: err})
        next(err);  //Error, trying to access unauthorized page!
     }

  }


app.get('/protectedpage', checksignin, function(req, res){
    res.sendFile(path.join(__dirname, 'public', 'protectedpage.html'));
})

app.get('/session', checksignin, (req, res) => {
    // Return session data as JSON
    if (req.session && req.session.user) {
        res.json({ user: req.session.user });
    } else {
        res.status(401).json({ error: 'Not logged in' });
    }
});

// app.get('/protectedpage', function(err, req, res, next){
    
//     try{
//         if (!err) {
//             return res.json({message: 'Operations successful'})
//         }
//     }
//     catch(err){
//         console.error(err);
//         return res.json({error: "Failed Operations"})
//     }
//     finally{
//         next();
//     }
   
// })

// app.use('/protectedpage', checksignin)




const PORT = 3100;
app.listen(PORT, function(){
    console.log(`Server listens at PORT localhost:${PORT}`)
})