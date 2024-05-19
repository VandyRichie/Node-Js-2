const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send(`
        <form action="/submit" method="post">
            <label for="firstName">First Name:</label><br>
            <input type="text" id="firstName" name="firstName"><br>
            <label for="lastName">Last Name:</label><br>
            <input type="text" id="lastName" name="lastName"><br>
            <label for="otherName">Other Name:</label><br>
            <input type="text" id="otherName" name="otherName"><br>
            <label for="email">Email:</label><br>
            <input type="email" id="email" name="email"><br>
            <label for="phoneNumber">Phone Number:</label><br>
            <input type="tel" id="phoneNumber" name="phoneNumber"><br>
            <label for="gender">Gender:</label><br>
            <input type="radio" id="male" name="gender" value="male">
            <label for="male">Male</label><br>
            <input type="radio" id="female" name="gender" value="female">
            <label for="female">Female</label><br>
            <input type="submit" value="Submit">
        </form>
    `);
});

app.post('/submit', (req, res) => {
    console.log(req.body);
    res.send('Form submitted successfully!');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
<<<<<<< HEAD
<<<<<<< HEAD
});
=======
});
>>>>>>> 2c1d311 (New changes)
=======
});
>>>>>>> cfa9a6d (new edit)
