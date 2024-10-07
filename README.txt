Basic Usage:

1. Paste API key sent to you in email, in the file src\app\constants\weather.constants.ts, line: 5
2. npm run dev
3. http://localhost:4000/weather?lat={lat}long={long}
  Remember that both lat and long must be correct values, otherwise you will get 400 response
4. For swagger documentation, go to: http://localhost:4000/api-docs/