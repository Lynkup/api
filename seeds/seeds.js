
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('logs').del()
    .then(function () {
      // Inserts seed entries
      return knex('logs').insert([
        { "edit_code":"4n8s70", "title":"Student at Galvanize","summary":"We spoke briefly about how I like single-pagers", "name": "Susan", "content": "fish galvanize coffee ibm susan andrew glasses french press grinder"},
        { "edit_code":"123456", "title": "Woman who works for IBM", "summary": "We chatted about my coffee grinder", "name": "Andrew", "content": "ibm coffee susan andrew galvanize one pagers"},
        { "edit_code":"abcdef", "title": "Galvanize Instructor", "summary": "Instructor that enjoys jazz and good coffee", "name": "Andrew", "content": "adam glasses teacher instructor 'take on me' cortado random word"},
        { "edit_code":"1a2b3c", "title": "Student in Web Dev Class", "summary": "We meet up early before class", "name": "Thomas", "content": "yellow shirt galvanize coffee data science wawa spas"},
        { "edit_code":"098765", "title": "Fellow Student", "summary": "Making a chore app", "name": "Andrew", "content": "dog walker brown hair tattoos galvanize chores app mariya"},
        { "edit_code":"uvwxyz", "title": "Old guy in the back of class", "summary": "Making some sort of missed connections app", "name": "Mariya", "content": "andrew missed connection q2 galvanize glasses 35 analytical"},
        { "edit_code":"robroy", "title": "One of my g79 students", "summary": "Got a cortado for him once.", "name": "Adam", "content": "cortado instructor galvanize andrew q2 missed connections"}
      ]);
    });
};
