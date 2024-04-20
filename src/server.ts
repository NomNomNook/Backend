import express from 'express';
import { PORT }  from "./config"

const app = express();


app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/user/login', (req, res) => {
  // get the login details from the headers
  // Authenticate the user using JWT 

  // marks the user as logged return token
});

app.get('/user/signup', (req, res) => {
  // validate the user data
  // check if the user is already signed up
  // if the user is not already signed up and valid then sign up
  // Save the user data
  // return data
});

app.listen(PORT, () => {
  console.log(`Server is listening at http://localhost:${PORT}`);
});
