'use strict';

const mysql = require('mysql');
const user = process.env.MYSQL_USER;
const password = process.env.MYSQL_PASSWORD;
const db = process.env.MYSQL_DB;

var connection = mysql.createConnection({
  host: 'localhost',
  user: user,
  password: password,
  database: db
})


const query = function (sql, params, callback) {
  connection.connect((err) => {
    if (err) {
      console.error('mysql connection error: ' + err.stack);
      return;
    }
    connection.query(sql, params, (err, results, fields) => {
      connection.end(); // always close our connection
      if (err) {
        console.error('mysql query error: ' + err.stack);
      }
      return callback(results);
    });
  });
}


// fetch data
exports.select = function (callback) {
  if (user && password && database) {

    // TODO: this seems inefficient?
    query('SELECT * FROM fortunes', [], (err, results) => {
      if (err) {
        console.log('No database credentials set. Assuming no MySQL backend.')
      } else {
        val = results[Math.floor(Math.random() * 23)][1];
      }
      callback(err, val);
      return;
    });
    // TODO: what if we did this instead?
    /*
    key = Math.floor(Math.random() * 23)
    query('SELECT * FROM fortunes WHERE id=?', [key], (err, results) => {
      if (err) {
        console.log('No database credentials set. Assuming no MySQL backend.')
      } else {
        val = results[0][1];
      }
      callback(err, val);
      return;
    });
    */

  } else {
    console.log('No database credentials set. Assuming no MySQL backend.')
  }
}


// check to see if the table has been set up
exports.check = function (callback) {
  if (user && password && database) {
    query('SELECT COUNT(*) FROM fortunes', [], (err) => {
      if (err) {
        loadInitialData((err) => {
          callback(err);
        });
      }
    });
  } else {
    console.log('No database credentials set. Assuming no MySQL backend.')
  }
}

// -----------------------------------------------
// Populate our initial database


const loadInitialData = function (callback) {
  console.log('Loading initial data.');
  query('CREATE TABLE fortunes (id INT, fortune TEXT);', [], (err) => {
    if (err) {
      console.error(`Could not create fortunes table. ${err}`);
      callback(err);
      return;
    }

    // An array of quotes; source:
    // http://www.journaldev.com/240/my-25-favorite-programming-quotes-that-are-funny-too
    const initialInsert = `INSERT INTO fortunes (id, fortune) VALUES
    (1,"The best thing about a boolean is even if you are wrong, you are only off by a bit. (Anonymous)"),
    (2,"Without requirements or design, programming is the art of adding bugs to an empty text file. (Louis Srygley)"),
    (3,"Before software can be reusable it first has to be usable. (Ralph Johnson)"),
    (4,"The best method for accelerating a computer is the one that boosts it by 9.8 m/s2. (Anonymous)"),
    (5,"I think Microsoft named .Net so it wouldn't show up in a Unix directory listing. (Oktal)"),
    (6,"If builders built buildings the way programmers wrote programs, then the first woodpecker that came along wound destroy civilization. (Gerald Weinberg)"),
    (7,"There are two ways to write error-free programs; only the third one works. (Alan J. Perlis)"),
    (8,"Ready, fire, aim: the fast approach to software development. Ready, aim, aim, aim, aim: the slow approach to software development. (Anonymous)"),
    (9,"One [person's] crappy software is another [person's] full time job. (Jessica Gaston)"),
    (10,"A good programmer is someone who always looks both ways before crossing a one-way street. (Doug Linder)"),
    (11,"Always code as if the [person] who ends up maintaining your code will be a violent psychopath who knows where you live. (Martin Golding)"),
    (12,"Deleted code is debugged code. (Jeff Sickel)"),
    (13,"Walking on water and developing software from a specification are easy if both are frozen. (Edward V Berard)"),
    (14,"If debugging is the process of removing software bugs, then programming must be the process of putting them in. (Edsger Dijkstra)"),
    (15,"Software undergoes beta testing shortly before it's released. Beta is Latin for 'still doesn't work.' (Anonymous)"),
    (16,"Programming today is a race between software engineers striving to build bigger and better idiot-proof programs, and the universe trying to produce bigger and better idiots. So far, the universe is winning. (Rick Cook)"),
    (17,"It's a curious thing about our industry: not only do we not learn from our mistakes, we also don't learn from our successes. (Keith Braithwaite)"),
    (18,"There are only two kinds of programming languages: those people always bitch about and those nobody uses. (Bjarne Stroustrup)"),
    (19,"In order to understand recursion, one must first understand recursion. (Anonymous)"),
    (20,"The cheapest, fastest, and most reliable components are those that aren’t there. (Gordon Bell)"),
    (21,"The best performance improvement is the transition from the nonworking state to the working state. (J. Osterhout)"),
    (22,"The trouble with programmers is that you can never tell what a programmer is doing until it's too late. (Seymour Cray)"),
    (23,"Don't worry if it doesn't work right. If everything did, you'd be out of a job. (Mosher's Law of Software Engineering)")
    ;`;
    query(initialInsert, [], (err) => {
      if (err) {
        console.error(`Could not write initial data. ${err}\n${sql}`);
        callback(err)
      }
    });
  });
}

check();