var books=[]
var  x= prompt("Enter your library by open and exit by exit")
while(x !="exit")
{
    var p=prompt("enter your choice 1>add 2>del 3>show 4>exit")
    if (p='add')
    {
        var a=prompt("enter a book name")
        books.push(a)
    }
    else if(p=='del')
    {
  books.pop()
    }
    else if(p=='show')
    {
  console.log(books)
    }
    else if(p=="exit")
    {
        x='exit8'
    }
    else (p=='del')
    {
        console.log("invalid input")
    }

}