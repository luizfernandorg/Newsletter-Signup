# News Letter SignUp

Example of integration of MailChimp with the application for the challenge NewsLetter-Signup from The Complete 2022 Web Development Bootcamp on Udemy

### Tecnologies
- HTML5
- CSS3
- SCSS
- Javascript
- NodeJS
- Express
- @mailchimp/mailchimp_marketing
- Jquery
- Bootstrap 5

### Environment
Two enviroment variable need to be created on .env file
APIKEY (string surrounded by "..." double quotes) and AUDIENCEID (a number value),

Example of ".env" file:
- APIKEY="3add33dee344eee-us14"
- AUDIENCEID=123123828223

### How to use
````
```
$ git clone https://github.com/luizfernandorg/Newsletter-Signup.git
$ cd Newsletter-Signup
$ npm install
```
````
create a file called .env
and inside this file include two variables

- APIKEY="include-here-the-api-key-us14"
- AUDIENCEID=a-number

then
````
```
$ node app.js
```
````