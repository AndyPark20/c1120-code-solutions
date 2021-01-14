
const express = require('express');
const app = express();
const pg = require('pg');
const jasonMiddleWare = express.json();


//middle ware for incoming json parse
app.use(jasonMiddleWare);

//connect basic route to the database SQL
const db = new pg.Pool({
  connectionString: 'postgres://dev:lfz@localhost/studentGradeTable'
});

// retrieving data using GET routing
app.get('/api/grades', (err, res, next) => {
  //retrieve SQL datatable for grades
  const sql = `
    select *
    from "grades"`;
  db.query(sql)
    .then(result => {
      const grade = result.rows
      return (res.status(200).json(grade));
    })
    .catch(err => {
      return (res.status(500).json('Error:Please try again'));
    })
})

//adding grades using post routing
app.post('/api/grades', (req, res, next) => {
  // retrieving user input via req.params
  const userName = req.body.name;
  const userCourse = req.body.course;
  const userScore = parseInt(req.body.score, 10);

  if (userName === undefined || userCourse === undefined) {
    return (res.status(400).json('ERROR: please enter valid information'))
  } else if (userScore !== Math.abs(userScore)) {
    return (res.status(400).json('ERROR: Please enter a positive value'))
  } else {
    const sql = `
    insert into "grades" ("name", "course", "score")
    values ($1,$2,$3)
    returning *`;

    const params = [userName, userCourse, userScore];

    db.query(sql, params)
      // retrieve success result
      .then(result => {
        const grades = result.rows[0]
        return (res.status(201).json(grades));
      })
      // proceed with rejected result
      .catch(err => {
        return (res.status(500).json(`Error: couldn't query the data, please try again`))
      })
  }
})

//updating grades using put routing
app.put('/api/grades/:gradeId', (req, res, next) => {
  const inputGradeId = parseInt(req.params.gradeId, 10)
  const inputName = req.body.name;
  const inputScore = parseInt(req.body.score, 10);
  const inputCourse = req.body.course;

  if (inputName === undefined || inputCourse === undefined) {
    return (res.status(400).json('Error: please enter valid information'))
  } else if (inputScore !== Math.abs(inputScore)) {
    return (res.status(400).json('Error: Please enter a positive value'))
  } else {
    const sql = `
    update "grades"
    set "name" =$1,
        "course"=$2,
        "score"=$3
    where "gradeId"=$4
    returning *`;
    const params = [inputName, inputCourse, inputScore, inputGradeId]
    db.query(sql, params)
      .then(result => {
        const grades = result.rows[0];
        if (grades) {
          res.status(200).json(grades);
        } else {
          res.status(404).json(`Error: Sorry, no matching ID# ${inputGradeId} found!`)
        }
      })
      // proceed with rejected result
      .catch(err => {
        return (res.status(500).json(`Error: couldn't query the data, please try again`))
      })
  }
})

//delete a row in DB using delete route
app.delete('/api/grades/:gradeId', (req, res, next) => {
  const inputGradeId = parseInt(req.params.gradeId, 10);

  if (inputGradeId !== Math.abs(inputGradeId)) {
    return (res.status(400).json('Error: Please enter a positive value'));
  } else {
    const sql = `
      delete from "grades"
      where "gradeId"=$1
      returning *`;

    const params = [inputGradeId];
    db.query(sql, params)
      .then(result => {
        const grades=result.rows[0]
        if (grades) {
          return (res.status(204).end());
        } else {
          return (res.status(404).json(`Error: Sorry, no matching ID# ${inputGradeId} found!`))
        }
      })
      .catch(err => {
        return (res.status(500).json(`Error:couldn't query the data, please try again`))
      })
  }
})


app.listen(3000, () => {
  console.log('listening to port 3000')
})
