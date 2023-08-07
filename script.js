const csv = require('csv-parser');
const fs = require('fs');
const { MongoClient } = require('mongodb');

//! Please paste the MongoDB Atlas connection URI here.
const mongoUri = 'mongodb+srv://username:password@cluster0.3qpxmbb.mongodb.net/';

//! Path and name of the CSV file.
const csvFilePath = './csv/test.csv';

// Import the CSV file into MongoDB
async function importCsvToMongoDB() {
  const client = new MongoClient(mongoUri);

  try {
    // Connect to MongoDB
    await client.connect();
    console.log('MongoDB\'ye bağlandı.');

    //! Select the database and collection.
    const db = client.db('deneme');
    const collection = db.collection('salesaaa');

    // Read the CSV file and add the data to the collection.
    const data = [];
    fs.createReadStream(csvFilePath)
      .pipe(csv())
      .on('data', (row) => {
        // Check for empty lines
        if (Object.values(row).some((value) => value !== '')) {
          data.push(row);
        }
      })
      .on('end', async () => {
        await collection.insertMany(data);
        console.log('CSV dosyası MongoDB\'ye başarıyla aktarıldı.');
        client.close();
      });
  } catch (error) {
    console.error('Hata oluştu:', error);
    client.close();
  }
}

// Transfer the data to MongoDB.
importCsvToMongoDB();

