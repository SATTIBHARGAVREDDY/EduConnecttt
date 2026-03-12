export class Student{
  constructor(
    public studentId:number,
    public fullName:string,
    public dateOfBirth:Date|null,
    public contactNumber:string,
    public email:string,
    public address:string
  ){}
  logAttributes():void{
    console.log({
      studentId:this.studentId,
      fullName:this.fullName,
      dateOfBirth:this.dateOfBirth,
      contactNumber:this.contactNumber,
      email:this.email,
      address:this.address
    });
  }
}
