
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()  // Change table names, then change del to truncate
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        { VIN: Date.now(), make: 'Honda', model: 'Civic', milage: 13000, transmission: 'Automatic', title: 'Salvage title' },
        { VIN: 3913813892223, make: 'Huyndai', model: 'Sonata-Hybrid', milage: 40000, transmission: 'Manual', title: 'Junk title' },
        { VIN: 1582001730218, make: 'Toyota', model: 'Camry', milage: 70000, transmission: 'CTV', title: 'Clear title' }
      ]);
    });
};
