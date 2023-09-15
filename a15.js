class A
{
  constructor(name,phone)
  this.name=name
  this.phone=phone
}
display()
{
console.log("yoour name is "+this.name+"your phone is "+this.phone)
}
let a=new A("sam",123456)
A.display()