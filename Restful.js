
const Student = require('./models/Student');
const Course = require('./models/Course');

// Handle API errors
function handleApiError(res, err) {
  console.error(err);

  res.status(500).json({
    error: 'Server error'
  });
}


// ----------------------------STUDENT API-----------------------------


// GET: Read all students / Search students
//curl http://localhost:3000/api/students
//curl "http://localhost:3000/api/students?name=Mary"
//curl "http://localhost:3000/api/students?studentNo=S001"
//curl "http://localhost:3000/api/students?enrolledCourse=2620"
//curl "http://localhost:3000/api/students?grade=80"



app.get('/api/students', async (req, res) => {
  try {
    const filter = {};

    if (req.query.name) {
      filter.name = new RegExp(req.query.name, 'i');
    }

    if (req.query.studentNo) {
      filter.studentNo = req.query.studentNo;
    }

    if (req.query.enrolledCourse) {
      filter.enrolledCourse = req.query.enrolledCourse;
    }

    if (req.query.grade) {
      filter.grade = req.query.grade;
    }

    const students = await Student.find(filter);
    res.json(students);
  } catch (err) {
    handleApiError(res, err);
  }
});

// GET: Read one student
//curl http://localhost:3000/api/students/S001
app.get('/api/students/:studentNo', async (req, res) => {
  try {
    const student = await Student.findOne({
      studentNo: req.params.studentNo
    });

    if (!student) {
      return res.status(404).json({
        error: 'Student not found'
      });
    }

    res.json(student);
  } catch (err) {
    handleApiError(res, err);
  }
});

// POST: Create student
//curl -X POST http://localhost:3000/api/students \
//-H "Content-Type: application/json" \
//-d '{
  //"name": "Mary ",
 // "studentNo": "S001",
 // "phone": "88888888",
  //"enrolledCourse": "2620",
 // "grade": "80"
//}'

app.post('/api/students', async (req, res) => {
  try {
    const student = await Student.create({
      name: req.body.name,
      studentNo: req.body.studentNo,
      phone: req.body.phone,
      enrolledCourse: req.body.enrolledCourse,
      grade: req.body.grade || 'Pending'
    });

    res.status(201).json({
      message: 'Student created',
      data: student
    });
  } catch (err) {
    handleApiError(res, err);
  }
});

// PUT: Update student
//curl -X PUT http://localhost:3000/api/students/S001 \
//-H "Content-Type: application/json" \
//-d '{
 // "name": "Mary Updated",
  //"phone": "88888888",
  //"grade": "80"
//}'
  

app.put('/api/students/:studentNo', async (req, res) => {
  try {
    const allowedFields = [
      'name',
      'phone',
      'enrolledCourse',
      'grade'
    ];

    const updateData = {};

    allowedFields.forEach((field) => {
      if (req.body[field] !== undefined) {
        updateData[field] = req.body[field];
      }
    });

    if (Object.keys(updateData).length === 0) {
      return res.status(400).json({
        error: 'Provide at least one field to update.'
      });
    }

    const student = await Student.findOneAndUpdate(
      { studentNo: req.params.studentNo },
      updateData,
      { new: true, runValidators: true }
    );

    if (!student) {
      return res.status(404).json({
        error: 'Student not found'
      });
    }

    res.json({
      message: 'Student updated',
      data: student
    });
  } catch (err) {
    handleApiError(res, err);
  }
});

// DELETE: Delete student
//curl -X DELETE http://localhost:3000/api/students/S001
app.delete('/api/students/:studentNo', async (req, res) => {
  try {
    const result = await Student.deleteOne({
      studentNo: req.params.studentNo
    });

    if (!result.deletedCount) {
      return res.status(404).json({
        error: 'Student not found'
      });
    }

    res.json({
      message: 'Student deleted'
    });
  } catch (err) {
    handleApiError(res, err);
  }
});


// -----------------------------COURSE API---------------------------


// GET: Read all courses
//curl http://localhost:3000/api/courses
app.get('/api/courses', async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (err) {
    handleApiError(res, err);
  }
});

// POST: Create course
//curl -X POST http://localhost:3000/api/courses \
//-H "Content-Type: application/json" \
//-d '{
  //"courseCode": "2620",
 // "title": "Server-side Technologies",
 // "instructor": "Dr. LIU"
//}'
  
  app.post('/api/courses', async (req, res) => {
  try {
    const course = await Course.create({
      courseCode: req.body.courseCode,
      title: req.body.title,
      instructor: req.body.instructor
    });

    res.status(201).json({
      message: 'Course created',
      data: course
    });
  } catch (err) {
    handleApiError(res, err);
  }
});

// DELETE: Delete course
//curl -X DELETE http://localhost:3000/api/courses/2620
app.delete('/api/courses/:courseCode', async (req, res) => {
  try {
    const result = await Course.deleteOne({
      courseCode: req.params.courseCode
    });

    if (!result.deletedCount) {
      return res.status(404).json({
        error: 'Course not found'
      });
    }

    res.json({
      message: 'Course deleted'
    });
  } catch (err) {
    handleApiError(res, err);
  }
});

