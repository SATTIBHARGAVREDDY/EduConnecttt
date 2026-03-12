export class Teacher{
  constructor(
    public teacherId:number,
    public fullName:string,
    public contactNumber:string,
    public email:string,
    public subject:string,
    public yearsOfExperience:number
  ){}
  logAttributes():void{
    console.log({
      teacherId:this.teacherId,
      fullName:this.fullName,
      contactNumber:this.contactNumber,
      email:this.email,
      subject:this.subject,
      yearsOfExperience:this.yearsOfExperience
    });
  }
}
