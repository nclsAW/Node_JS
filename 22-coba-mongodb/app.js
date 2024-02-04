const { MongoClient } = require('mongodb');

const url = 'mongodb://127.0.0.1:27017';
const dbName = 'test';

const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect()
    .then(() => {
        console.log('Koneksi berhasil!');
    })
    .catch((error) => {
        console.error('Koneksi gagal!', error);
    });
