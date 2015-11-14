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
	var textQRCode;
	
	if (resultRefri != null) {
		textQRCode = "Refrigerante = " + count_0 + " " + resultRefri;
	}
	if (resultComida != null) {
		textQRCode = textQRCode + "Comida = " + count_1 + " " + resultComida;	
	}
	else {
		textQRCode = null;	
	}
	createQRCode(textQRCode, 'qrCodeView', 16);
}

function clearAll() {
	document.getElementById('textView').innerHTML = "";
	document.getElementById('textView1').innerHTML = "";
	document.getElementById('qrCodeView').innerHTML = "";
	document.getElementById('textViewResult').innerHTML = "";
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