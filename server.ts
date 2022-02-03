import * as Express from 'express';
 
const app = Express();

app.get('/', (req: Express.Request, res: Express.Response) => {
    return res.send('Hello TypeScript')
})

app.listen(3000, () => console.log('port 3000'))