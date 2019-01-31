
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('army')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('army').insert([
        {name: 'Corrin', unitClass: 'Nohr Prince', uniqueWeapon: 'Yato'},
        {name: 'Azura', unitClass: 'Songstress', },
        {name: 'Ryoma', unitClass: 'Swordmaster', uniqueWeapon: 'Raijinto'}
      ]);
    });
};
