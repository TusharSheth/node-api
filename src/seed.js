var seeder = require('mongoose-seed');
const { mongo, env } = require('./config/vars');

// Connect to MongoDB via Mongoose
seeder.connect(mongo.uri, function () {

    // Load Mongoose models
    seeder.loadModels([
        './src/api/services/org/org.model.js',
    ]);

    // Clear specified collections
    seeder.clearModels(['Org'], function () {
        console.log('>>>', 'seed.js 14');

        // Callback to populate DB once collections have been cleared
        seeder.populateModels(data, function () {
            seeder.disconnect();
        });

    });
});

// Data array containing seed data - documents organized by Model
var data = [
    {
        'model': 'Org',
        'documents': [
            {
                'name': 'Asian',
            },
            {
                'name': 'Pacific',
            },
            {
                'name': 'Eastern',
            }
        ]
    }
];