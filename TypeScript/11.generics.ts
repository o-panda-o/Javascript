// T can be like `T extends Something` to restrict it to 
// classes which are either `Something` or extending it.
function echo<T>(arg: T): T{
    return arg;
}
var one:number=echo(1);