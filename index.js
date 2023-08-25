function findWord(){
    let TextArea = document.getElementById("textarea").value
    let Input = document.getElementById("input").value

    TextArea = TextArea.split(",")

    for(var i of TextArea){
        if(i===Input){
          return  document.getElementById("display").innerText = "bor"
        }
        else{
            document.getElementById("display").innerText = "yoq"
        }
    }
    
}

