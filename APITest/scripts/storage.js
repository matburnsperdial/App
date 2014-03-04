
function setStored(name, content)
{
    localStorage.setItem(name, content);
}

function getStored(name)
{
    var result;
    
    if (localStorage.getItem(name) != undefined) 
    {
        result = localStorage.getItem(name);
    }
    else {
        result = "No such record!"
    }
    
    return result;
}

function clearStored()
{
    localStorage.clear();
}

