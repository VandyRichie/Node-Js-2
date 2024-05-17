const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(`
  <html>
    <body>
     <form id="UserInfo"> 
     <form action="/action_page.php" method="post">
        <label for="fname">First Name:</label><br>
        <input type="text" id="fname" name="fname" required><br>
        <label for="lname">Last Name:</label><br>
        <input type="text" id="lname" name="lname" required><br>
        <label for="oname">Other Name:</label><br>
        <input type="text" id="oname" name="oname"><br>
        <label for="email">Email Address:</label><br>
        <input type="email" id="email" name="email"><br>
        <label for="phone">Phone Number:</label><br>
        <input type="tel" id="phone" name="phone" pattern="[0-9]{4}-[0-9]{3}-[0-9]{4}"><br>
        <label for="gender">Gender:</label><br>
        <select id="gender">
          <option value="please select" selected>Options</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select><br><br>
        <input type="submit" value="Submit">
      </form>
      <div id= "jsonOutput">
      </div>
          <script
          src="database.json"></script>
    </body>
  </html>
  `);
});
server.listen(4000, 'localhost');
console.log("Please Fill in Details!");

