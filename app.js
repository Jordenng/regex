import  fs  from "fs";


function isValidEmail(email){
    let regex = /\S+@\S+\.\S+/;
    return regex.test(String(email).toLowerCase());
}

// console.log(isValidEmail("yarden@gmail.com"))


function getNames(lst=[], lst2=[]){
    const mySet = new Set();
    for (let i of lst2){
        mySet.add(i.address.city)
    }
    for (let person of lst){
        if (mySet.has(person.address.city)) {
            console.log(person.name)
        }}
    }



// getNames([{name:"avi",address:{city:"new york"}},{name:"moshe",address:{city:"jlm"}}]
// ,[{address:{city:"new york"}},{address:{city:"london"}}])



function count(words = [], path_to_file){
    fs.readFile(path_to_file, (err, data) => {
        if (err) throw err;
        let str = data.toString();
        for (let wrd of words){
            console.log(wrd+":", str.split(wrd).length - 1)
        }
    })
}

// count(["avi","dor", "AVI"],"1.txt")


function countCase(words = [], path_to_file, isCaseInsensetive){
    if (isCaseInsensetive) {
        fs.readFile(path_to_file, (err, data) => {
            if (err) throw err;
            let str = data.toString();
            for (let wrd of words){
                console.log(wrd+":", str.toLowerCase().split(wrd).length - 1)
            }
        })
    } else {
        count(words, path_to_file)
    }
}

// countCase(["avi","dor"],"1.txt",false)

function count31(words = [], path_to_file){
    fs.readFile(path_to_file, (err, data) => {
        if (err) throw err;
        let str = data.toString();
        let regex = /[^a-zA-Z]/ig
            let w = str.split(regex)
            for (let i of w){
                console.log(i+":", str.split(i).length - 1)
            }
    })
}

count31(["???"],"1.txt")

// 3.1 function f(['???'], 'c:/1.txt')

// avi: 2
// AVI: 1
// dor: 2
// tvi: 1


// 3.1 function f(['?vi'], 'c:/1.txt')

// avi: 2
// tvi: 1

function getVitro(vitroDate){

    const curDate = new Date(vitroDate)
    let days = 44485.2
    curDate.setDate(curDate.getDate()-days)
    return curDate

}

// console.log(getVitro('2021-10-16 05:04'))