class A
{
    xyz()
    {
        console.log("parent class properties")

    }
}
class B extends A
{
    abcd()
    {
        console.log("child class properties")
    }
}
let x=new B()
x.xyz()
x.abcd()