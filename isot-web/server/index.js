require('dotenv').config()
const express = require ('express') //1)require - импорт модулей в файл. Импортируем express.
const sequelize = require(`./db`)
const PORT = process.env.PORT || 5000 //3)Порт на котором будет работать приложение

const app = express() //2)создадим объект вызвав функцию express.

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Сервер запущен на порту ${PORT}`))
//4)Вызываем функцию listen в которой указываем какой порт должен прослушивать сервер. Вторым параметром callback.
    } catch (e) {
        console.log(e)
    }
}
start()

