class AppController {
    // Static method to handle the homepage request
    static getHomepage(req, res) {
      // Send a 200 status response with the message "Hello Holberton School!"
      res.status(200).send('Hello Holberton School!');
    }
  }
  
  module.exports = AppController;
  