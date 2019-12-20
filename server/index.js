import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import validator from 'express-validator';
import path from 'path';
import routes from './routes/api';
import transformer from './utils/transformer';
import customValidator from './middlewares/validators/custom-validator';
import customSanitizer from './middlewares/validators/custom-sanitizer';


const app = express(),
  port = process.env.PORT || '3100';

// logger
app.use(morgan('dev'));

// 3rd party middleware
app.use(cors());

app.use(bodyParser.json());

// configure validator
app.use(validator({ customValidators: customValidator, customSanitizers: customSanitizer }));

// use the defined routes
app.use('/api', routes);

// configure swagger-ui
app.use('/api-docs', express.static(
  path.join(__dirname, '../server/public/dist'),
));

// error handler
app.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  console.log(err);
  res.send(transformer.transformResponse(500, err));
});


app.listen(port || 3000, () => {
  console.log(`Started on port ${port}`);
});
// });

export default app;
