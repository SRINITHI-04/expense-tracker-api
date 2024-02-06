
// // default template for mongodb 
// const {MongoClient}= require('mongodb') // here we use mongo client alone 
// // here we have 2 files 
// //one for establish //another for get db 
// let dbConnection //established connection stores here 
// function connectToDb(callBack) {
//     MongoClient.connect('mongodb://127.0.0.1:27017/ExpenseTracker').then(function(client) {//in mongodb app top 3 dot--> copy sting+ /filename 
//         dbConnection = client.db()
//         callBack()
//     }).catch(function(error) {
//         callBack(error)
//     })
// }



// function getDB(){
//     return  dbConnection

// }

// module.exports ={connectToDB,getDB}//to use this db file in another file // this acts as connection//export the require functions 


const {MongoClient} = require('mongodb')

let dbConnection
function connectToDb(callBack) {
    MongoClient.connect('mongodb+srv://sri:1234@cluster0.fboidwt.mongodb.net/ExpenseData?retryWrites=true&w=majority').then(function(client) {
        dbConnection = client.db()
        callBack()
    }).catch(function(error) {
        callBack(error)
    })
}

function getDb() {
    return dbConnection
}

// Exporting required functions
module.exports = {connectToDb, getDb}