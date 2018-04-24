
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('logs').del()
    .then(function () {
      // Inserts seed entries
      return knex('logs').insert([
        { "edit_code":"4n8", "name": "Susan", "content": "fish galvanize coffee ibm susan andrew glasses french press grinder"},
        { "edit_code": "123", "name": "Andrew", "twitter_id": "agwallace", "linkedin_id": "agwallace", "instagram_id": "feigningfigure", "content": "ibm coffee susan andrew galvanize one pagers"},
        { "edit_code": "abc", "name": "Andrew", "facebook_id": "andrew.g.wallace", "twitter_id": "agwallace", "instagram_id": "feigningfigure", "content": "adam glasses teacher instructor 'take on me' cortado random word"},
        { "edit_code":"1a2", "name": "Thomas", "content": "yellow shirt galvanize coffee data science wawa spas"},
        { "edit_code": "098", "name": "Andrew", "facebook_id": "andrew.g.wallace", "twitter_id": "agwallace", "linkedin_id": "agwallace", "content": "dog walker brown hair tattoos galvanize chores app mariya"},
        { "edit_code":"uvw", "name": "Mariya", "content": "andrew missed connection q2 galvanize glasses 35 analytical"},
        { "edit_code":"roby", "name": "Adam", "content": "cortado instructor galvanize andrew q2 missed connections"},
        { "edit_code": "s70", "name": "Kris", "content": "pores 4k galvanize barber dumplings" },
        { "edit_code": "3d8", "name": "Tim", "content": "201 galvanize class student blue shirt trivia night brown hair coffee" }
      ]);
    });
};