require('dotenv').config()
const express = require ('express') //1)require - импорт модулей в файл. Импортируем express.
const sequelize = require(`./db`)
const PORT = process.env.PORT || 5000 //3)Порт на котором будет работать приложение
const models = require ('./models/models')
const app = express() //2)создадим объект вызвав функцию express.
const cors = require('cors')
const router = require ('./routes/index')
const errorHandler = require('./middleware/ErrorHandlingMiddleware')

app.use(cors())
app.use(express.json())
app.use('/api', router)
    //Обработка ошибок, последний MiddleHandler
app.use(errorHandler)
const start = async () =>
{
    try
    {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Сервер запущен на порту ${PORT}`))
//4)Вызываем функцию listen в которой указываем какой порт должен прослушивать сервер. Вторым параметром callback.
    } catch (e)
    {
        console.log(e)
    }
}
start()
