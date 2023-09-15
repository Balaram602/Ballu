class railwayR
{
    bookticket(name,phone,des)
    {
        this.name1=name1
        this.phone=phone
        this.des=des
    }
    display()
    {
        console.log("your name is"+this.name1)
        console.log("your phone is"+this.phone)
        console.log("your des is"+this.des)
    }
    cancel()
    {
        alert("your ticket cancelled"+this.name1)
    }
}
    let a=new railwayR()
    var n=prompt ("Enter Your name :")
    var p=Number("Enter Your phone :")
    var d=prompt("")

    a.bookticket("tina",12233,bangalore)
    let b=new railwayR()
    b.bookticket("asish",456789,balaosore)
    a.display()
    b.display()
