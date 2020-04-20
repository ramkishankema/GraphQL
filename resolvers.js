const db = require('./db')
const Query = {
   //resolver function for greeting
   greeting:() => {
      return "hello from  TutorialsPoint !!!"
   },
   
   //resolver function for students returns list
   students:() => db.students.list(),

   //resolver function for employees returns list
   employees:() => db.employees.list(),

   //resolver function for studentbyId
   studentById:(root,args,context,info) => {
      //args will contain parameter passed in query
      return db.students.get(args.id);
   },
   //resolver function for employee by Id
   employeeById:(root,args,context,info) => {
      //args will contain parameter passed in query
      return db.employees.get(args.employeeId);
   }
}

//for each single student object returned,resolver is invoked

const Student = {
      student:(root) => {
      return db.students.get(root.studentById);
   }}
const Employee = {
   employee:(root) => {
      return db.employees.get(root.employeeById);
   }

}

module.exports = {Query}