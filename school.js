class School{
  constructor() {
    this.schoolname = null;
    this.registrationNumber = null ; 
    this.location = null ;
    this.mailId = null ; 
    this.phoneNumber = null ; 
    this.numberOfStudents = null ; 
    this.index=0;
  }

  addschool(){
    var schoolIndex = ("schools/school")+this.index

    database.ref(schoolIndex).set({
      name : this.schoolname ,
      registrationNo :this.registrationNumber,
      locationOfSchool :this.location,
      mailOfSchool:this.mailId ,
      phoneNumberOfSchool :this.phoneNumber,
      numberOfStudents : this.numberOfStudents
    });
  }
  getCount() {
    var schoolCountRef = database.ref("schoolCount");
    schoolCountRef.on("value", data => {
      schoolCount = data.val();
    });
  }

  updateCount(count) {             
    database.ref("/").update({
      schoolCount: count
    });
  }
}

