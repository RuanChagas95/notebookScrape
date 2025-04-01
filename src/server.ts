// init express server
import express from 'express';
import routes from './routes';


const main = async () => {
    const app = express();
    const PORT = process.env.PORT || 3000;

    app.get('/health', (_req, res) => {
        res.send('ok');
    });

    app.use(express.json());
    app.use(routes)
    

    app.listen(PORT, () => {
        console.log(`App listening on port ${PORT}`);
    });
}

main()
