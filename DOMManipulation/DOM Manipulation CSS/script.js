let para = document.getElementById('spara')
console.log(para.style)
para.style.backgroundColor ='blue'
let secondEle = document.getElementById('sdiv')

secondEle.style.cssText;;
secondEle.style.cssText= "background-color:black; color: white; padding: 0.5rem"
let fele = document.querySelector('#fdiv')
fele.setAttribute('class','divClass');
fele.setAttribute('style',"padding:0.4rem")
fele.setAttribute('style',"padding:0.4rem; background-color:pink")



// fpara.classList
// fpara.classList.add('tclass')
// DOMTokenList(3) ['fclass', 'sclass', 'tclass', value: 'fclass sclass tclass']0: "fclass"1: "sclass"length: 2value: "fclass sclass"[[Prototype]]: DOMTokenList


// fpara.classList.add('tclass')
// fpara.classList

// DOMTokenList(3) ['fclass', 'sclass', 'tclass', value: 'fclass sclass tclass']



// fpara.classList.remove('tclass')
// fpara.classList
// DOMTokenList(2) ['fclass', 'sclass', value: 'fclass sclass']0: "fclass"1: "sclass"length: 2value: "fclass sclass"[[Prototype]]: DOMTokenList



// fpara.classList.toggle('sclass')
// false
// fpara.classList
// DOMTokenList ['fclass', value: 'fclass']


// fpara.classList.toggle('sclass')
// true
// fpara.classList
// DOMTokenList(2) ['fclass', 'sclass', value: 'fclass sclass']




// fpara.classList.contains('tclass')
// false


// fpara.classList.contains('fclass')
// true





