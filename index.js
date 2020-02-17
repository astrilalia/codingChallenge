var horizontal1= [1,2,3]
var horizontal2= [4,5,6]
var horizontal3= [7,8,9]
var vertical1= [horizontal1[0], horizontal2[0], horizontal3[0]]
var vertical2= [horizontal1[1], horizontal2[1], horizontal3[1]]
var vertical3= [horizontal1[2], horizontal2[2], horizontal3[2]]

// function

var sort1 = () => {
    if(horizontal1[0]<horizontal1[2]){
        horizontal1.sort(function(a,b){
            return b-a
        })
    }else{
    horizontal1.sort(function(a,b){
        return a-b
        })
    }
    vertical1=[horizontal1[0], horizontal2[0], horizontal3[0]]
    listNum1()
    console.log(horizontal1)
    console.log(horizontal2)
    console.log(horizontal3)
}
var sort2 = (nameID) => {
    if(horizontal2[0]<horizontal2[2]){
        horizontal2.sort(function(a,b){
            return b-a
        })
    }else{
    horizontal2.sort(function(a,b){
        return a-b
    })
    }
    vertical2=[horizontal1[1], horizontal2[1], horizontal3[1]]
    listNum2()
    console.log(horizontal1)
    console.log(horizontal2)
    console.log(horizontal3)
}
var sort3 = (nameID) => {
    if(horizontal3[0]< horizontal3[2]){ 
        horizontal3.sort(function(a,b){
            return b-a
        })
    }else{
    horizontal3.sort(function(a,b){
        return a-b
    })
    }
    vertical3= [horizontal1[2], horizontal2[2], horizontal3[2]]
    listNum3()
    console.log(horizontal1)
    console.log(horizontal2)
    console.log(horizontal3)

}

var sort4 = () => {
    if(vertical1[0]<vertical1[2]){
        vertical1.sort(function(a,b){
            return b-a
        })
    }else{
    vertical1.sort(function(a,b){
        return a-b
        })
    }
    horizontal1[0]=vertical1[0]
    horizontal2[0]=vertical1[1]
    horizontal3[0]=vertical1[2]
    // listNum1()
    listNum4()
    console.log(horizontal1)
    console.log(horizontal2)
    console.log(horizontal3)
}
var sort5 = (nameID) => {
    if(vertical2[0]<vertical2[2]){
        vertical2.sort(function(a,b){
            return b-a
        })
    }else{
    vertical2.sort(function(a,b){
        return a-b
    })
    }
    // listNum2()
    horizontal1[1]=vertical2[0]
    horizontal2[1]=vertical2[1]
    horizontal3[1]=vertical2[2]
    listNum5()
    console.log(horizontal1)
    console.log(horizontal2)
    console.log(horizontal3)

}
var sort6 = (nameID) => {
    if(vertical3[0]< vertical3[2]){ 
        vertical3.sort(function(a,b){
            return b-a
        })
    }else{
    vertical3.sort(function(a,b){
        return a-b
    })
    }
    // listNum3()
    horizontal1[2]=vertical3[0]
    horizontal2[2]=vertical3[1]
    horizontal3[2]=vertical3[2]
    listNum6()
    console.log(horizontal1)
    console.log(horizontal2)
    console.log(horizontal3)
}


const listNum1 = () => {
    let output1 = horizontal1.map((val,index)=>{
        return (
            `
                <td id="vsatu${index}">${val}</td>
            `
        )
    })
    output1.push(`
    <td><input type="button" value="Sort" onclick="sort1()"></td>
    `)
    document.getElementById('horizontal1').innerHTML = output1.join('')
}

const listNum2 = () => {
    let output2 = horizontal2.map((val,index)=>{
        return (
            `
                <td id="vdua${index}">${val}</td>
            `
        )
    })
    output2.push(`
    <td><input type="button" value="Sort" onclick="sort2()"></td>
    `)
    document.getElementById('horizontal2').innerHTML = output2.join('')
}

const listNum3 = () => {
    let output3 = horizontal3.map((val,index)=>{
        return (
            `
                <td id="vtiga${index}">${val}</td>
            `
        )
    })
    output3.push(`
    <td><input type="button" value="Sort" onclick="sort3()"></td>
    `)
    document.getElementById('horizontal3').innerHTML = output3.join('')
}

const listNum4 = () => {
    document.getElementById('vsatu0').innerHTML = vertical1[0]
    document.getElementById('vdua0').innerHTML = vertical1[1]
    document.getElementById('vtiga0').innerHTML = vertical1[2]
}
const listNum5 = () => {
    document.getElementById('vsatu1').innerHTML = vertical2[0]
    document.getElementById('vdua1').innerHTML = vertical2[1]
    document.getElementById('vtiga1').innerHTML = vertical2[2]
}
const listNum6 = () => {
    document.getElementById('vsatu2').innerHTML = vertical3[0]
    document.getElementById('vdua2').innerHTML = vertical3[1]
    document.getElementById('vtiga2').innerHTML = vertical3[2]
}


// const listNum4 = ()
// document.getElementById('vertical').innerHTML = output4.join(')
listNum1()
listNum2()
listNum3()
listNum4()