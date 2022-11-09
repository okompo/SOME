const header = document.createElement('header')
const logoBlock = document.createElement('div')
logoBlock.classList.add('logo_block')
const imgLogo = document.createElement('img')
imgLogo.src = '.././images/logo.png'
const h1 = document.createElement('h1')
h1.textContent = 'SLOGAN SLOGAN SLOGAN'






// ========= add elements ===================== 
const body = document.body
logoBlock.append(imgLogo, h1)
header.append(logoBlock)
body.append(header)