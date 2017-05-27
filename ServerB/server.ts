import * as express from 'express';

const port: number = 4000;
const app: express.Application = express();

app.listen(port, () => {
    console.log(`SERVER B STARTED ON ${port}`);
});
