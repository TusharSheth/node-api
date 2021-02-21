const seeder = require('mongoose-seed');
const { mongo } = require('./config/vars');

// Data array containing seed data - documents organized by Model
const data = [
  {
    model: 'Org',
    documents: [
      {
        name: 'Asian',
      },
      {
        name: 'Pacific',
      },
      {
        name: 'Eastern',
      },
    ],
  },
];

// Connect to MongoDB via Mongoose
seeder.connect(mongo.uri, () => {
  // Load Mongoose models
  seeder.loadModels([
    './src/api/services/org/org.model.js',
  ]);

  // Clear specified collections
  seeder.clearModels(['Org'], () => {
    console.log('>>>', 'seed.js 14');

    // Callback to populate DB once collections have been cleared
    seeder.populateModels(data, () => {
      seeder.disconnect();
    });
  });
});
