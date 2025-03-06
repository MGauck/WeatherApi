import express from 'express';
import { PORT } from './constants/server.constants';
import weatherRouter from './routes/weather.router';
import swagger from './swagger';

const app = express();

app.use(express.json());

// Each route with their own router file, for clarity. Usefull in bigger projects
app.use("/weather", weatherRouter);

swagger(app);

const server = app.listen({ port: PORT }, () => {
  console.log(`Server running on port ${PORT}`);  
  console.log(`My changes 1 ${PORT}`);  
  console.log(`My changes 2 ${PORT}`);  
  console.log(`My changes 4 ${PORT}`);  
});

export default server;