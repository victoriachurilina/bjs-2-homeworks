function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}

Student.prototype.setSubject = function(subjectName) {
  if (this.subject === undefined) {
    this.subject = subjectName;
  }
}
Student.prototype.addMark = function(mark) {
  if (this.marks === undefined) {
    this.marks = [mark];
  } else {
    this.marks.push(mark);
  }
}
Student.prototype.addMarks = function(...marks) {
   if (this.marks === undefined) {
    this.marks = [...marks];
  } else {
    this.marks.push(...marks);
  }  
}
Student.prototype.getAverage = function() {
  if (this.marks.length === 0) {
    return 0;
  } else {
    const avg = this.marks.reduce((mark, score) => mark + score, 0)/this.marks.length;
    return avg;   
  }
}
Student.prototype.exclude = function(reason) {
  const avg = this.marks.reduce((mark, score) => mark + score, 0)/this.marks.length;
  if (avg < 4) {
    this.excluded = reason;
    delete this.marks;
    delete this.subject;
  }
}





