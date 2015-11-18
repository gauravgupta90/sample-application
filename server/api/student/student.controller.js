/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/students              ->  index
 * POST    /api/students              ->  create
 * GET     /api/students/:id          ->  show
 * PUT     /api/students/:id          ->  update
 * DELETE  /api/students/:id          ->  destroy
 */

'use strict';

var _ = require('lodash');
var Student = require('./student.model');

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    if(err.code == 11000)
      res.status(409).send(err);
    else
      res.status(statusCode).send(err);
  };
}

function responseWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if (entity) {
      res.status(statusCode).json(entity);
    }
  };
}

function handleEntityNotFound(res) {
  return function(entity) {
    if (!entity) {
      res.status(404).end();
      return null;
    }
    return entity;
  };
}

function saveUpdates(updates) {
  return function(entity) {
    var updated = _.merge(entity, updates);
    return updated.saveAsync()
      .spread(function(updated) {
        return updated;
      });
  };
}

function removeEntity(res) {
  return function(entity) {
    if (entity) {
      return entity.removeAsync()
        .then(function() {
          res.status(204).end();
        });
    }
  };
}

// Gets a list of Students
exports.index = function(req, res) {
  Student.findAsync()
    .then(responseWithResult(res))
    .catch(handleError(res));
};

// Gets a single Student from the DB
exports.show = function(req, res) {
  Student.findByIdAsync(req.params.id)
    .then(handleEntityNotFound(res))
    .then(responseWithResult(res))
    .catch(handleError(res));
};

// Creates a new Student in the DB
exports.create = function(req, res) {
  Student.createAsync(req.body)
    .then(responseWithResult(res, 201))
    .catch(handleError(res));
};

// Updates an existing Student in the DB
exports.update = function(req, res) {
  if (req.body._id) {
    delete req.body._id;
  }
  Student.updateAsync({ '_id': req.params.id },req.body)
    .then(responseWithResult(res, 201))
    .catch(handleError(res));
};

// Deletes a Student from the DB
exports.destroy = function(req, res) {
  Student.findByIdAsync(req.params.id)
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
};


// Gets total Student Marks Average
exports.totalStudentMarksAverage = function(req, res) {
  Student.aggregate([
      
    { "$unwind": "$marks" },

    
    { "$group": {
        "_id": "$_id",
        "marks": { "$sum": "$marks.totalMarks" },
        "marksScored": { "$sum": "$marks.subjectMarks" },
        "subjectCount": { "$sum": 1 }
    }},
    { "$group": {
        "_id": "null",
        "totalMarks": { "$sum": "$marks" },
        "totalMarksScored": { "$sum": "$marksScored" },
        "totalSubject": { "$sum": "$subjectCount" },
        "totalStudent": { "$sum": 1 }
    }},
    ],function (err, result) {
        if (err) {
            console.log(err);
            return;
        }
        res.status(200).json(result);
    });
};

// Gets total Student Marks Average
exports.studentMarksAverage = function(req, res) {
  Student.aggregate([
 
    { "$unwind": "$marks" },

    { "$group": {
        "_id": "$_id",
        "totalMarks": { "$sum": "$marks.totalMarks" },
        "totalMarksScored": { "$sum": "$marks.subjectMarks" },
        "totalSubject": { "$sum": 1 },
        "studentInfo": {"$push": {"name": "$name", "mobile": "$mobile", "email": "$address.email"}}
    }},
    { $sort : { _id : 1 } }
    ],function (err, result) {
        if (err) {
            console.log(err);
            return;
        }
        res.status(200).json(result);
    });
};
