var count_0 = 0;
var count_1 = 0;
var resultRefri = 0;
var resultComida = 0;

function botao(textView) {
	switch(textView) {
		case 'textView': 
			count_0++;
			document.getElementById(textView).innerHTML = count_0;
			resultRefri = count_0*4.50;
			break;
		case 'textView1':
			count_1++;	
			document.getElementById(textView).innerHTML = count_1;
			resultComida = count_1*10;
			break;
	}
}

function generateQrCode() {
	var textQRCode = '';
	
	if (resultRefri != null) {
		
		textQRCode += 'Refrigerante:' + count_0 +'price!4.5' + '\n';
		}	
	if (resultComida != null) {
		textQRCode += 'Comida:' + count_1 +'price!10' + '\n';
	}
	else {
		textQRCode = null;	
	}
	var resultPrice = resultComida+resultRefri;
	
	textQRCode += 'price!'+resultPrice;
	
	document.getElementById('textViewResult1').innerHTML = textQRCode;
	createQRCode(textQRCode, 'qrCodeView', 16);
}

function clearAll(textView) {
	count_0 = 0;
	count_1 = 0;
	document.getElementById(textView).innerHTML = "";
}

function confirmGenerate() {
	document.getElementById('textViewResult').innerHTML = "Deseja confirmar a compra?" + "<input type='button' onclick='generateQrCode()' value='Sim'/>" + "<input type='button' onclick='clearAll()' value='Não'/>" ;
}

function createQRCode(text, containerId, typeNumber) {
	var qr = qrcode(typeNumber || 4,'M'); 
	qr.addData(text);
	qr.make();
	document.getElementById(containerId).innerHTML = qr.createImgTag();
}

function clearScreen(divViewShow) {
	document.getElementById('addProducts').;
	var display = document.getElementById(divViewShow).style.display;
    if(display == "none")
        document.getElementById(divViewShow).style.display = 'block';
    else
        document.getElementById(divViewShow).style.display = 'none';
	}
	function generate() {
		var url = document.getElementById('url').value;
		createQRCode(url, 'qrCodeView', 16);
	}
	



