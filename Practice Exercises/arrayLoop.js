//Loop over the 2 arrays and if there are any common courses, if so console.log them
let student1Courses = ['Math', 'English', 'Programming', 'Science'];
let student2Courses = ['Geography', 'Spanish', 'Programming', 'Math'];

let commonCourse = [...student1Courses, ...student2Courses].reduce((total, item, index, array) => {
  (array.indexOf(item, index + 1) !== -1 && total.indexOf(item) === -1) ? total.push(item) : null
  return total
}, [])

console.log(commonCourse)