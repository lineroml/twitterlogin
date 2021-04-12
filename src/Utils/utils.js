export function encript(Cadena){
    var salida = "";
    var c;
    console.log("entro con cadena lenght ",Cadena.length)
    for (var i = 0; i < Cadena.length; i++) {
        c = Cadena.charAt(i);
        var  x = c.charCodeAt(0);
        console.log("x ",x)
        var y;
        if (i % 2 == 0) {
            if ((x >= 65 && x <= 70) || (x >= 97 && x <= 102)) {
                y = (x + 20);
            } else if ((x >= 71 && x <= 76) || (x >= 103 && x <= 108)) {
                y = (x + 8);
            } else if ((x >= 77 && x <= 82) || (x >= 109 && x <= 114)) {
                y = (x - 4);
            } else if ((x >= 83 && x <= 88) || (x >= 115 && x <= 120)) {
                y = (x - 16);
            } else if ((x === 89 || x === 90) || (x === 121 || x === 122)) {
                y = (x - 24);
            } else if ((x >= 48 && x <= 50)) {
                y = (x + 7);
            } else if ((x >= 51 && x <= 53)) {
                y = (x + 1);
            } else if ((x >= 54 && x <= 57)) {
                y = (x - 6);
            } else if ((x >= 32) && (x <= 38)) {
                y = (x + 26);
            } else if ((x >= 58) && (x <= 64)) {
                y = (x - 26);
            } else if ((x >= 39) && (x <= 43)) {
                y = (x + 52);
            } else if ((x >= 91) && (x <= 95)) {
                y = (x - 52);
            } else if ((x >= 44) && (x <= 46)) {
                y = (x + 79);
            } else if ((x >= 123) && (x <= 125)) {
                y = (x - 79);
            } else if (x == 10) {
                y = 158;
            } else {
                y = x;
            }
        } else if (i % 3 == 0) {
            if ((x >= 65 && x <= 77) || (x >= 97 && x <= 109)) {
                y = x + 13;
            } else if ((x >= 78 && x <= 90) || (x >= 110 && x <= 122)) {
                y = x - 13;
            } else if (x == 10) {
                y = 230;
            } else {
                y = x;
            }
        } else {
            if ((x >= 85 && x <= 90) || (x >= 117 && x <= 122)) {
                y = (x - 20);
            } else if ((x >= 79 && x <= 84) || (x >= 111 && x <= 116)) {
                y = (x - 8);
            } else if ((x >= 73 && x <= 78) || (x >= 105 && x <= 110)) {
                y = (x + 4);
            } else if ((x >= 67 && x <= 72) || (x >= 99 && x <= 104)) {
                y = (x + 16);
            } else if ((x == 65 || x == 66) || (x == 97 || x == 98)) {
                y = (x + 24);
            } else if ((x >= 55 && x <= 57)) {
                y = (x - 7);
            } else if ((x >= 52 && x <= 54)) {
                y = (x - 1);
            } else if ((x >= 48 && x <= 51)) {
                y = (x + 6);
            } else if ((x >= 32) && (x <= 39)) {
                y = (x + 8);
            } else if ((x >= 40) && (x <= 47)) {
                y = (x - 8);
            } else if ((x >= 58) && (x <= 60)) {
                y = (x + 4);
            } else if ((x >= 62) && (x <= 64)) {
                y = (x - 4);
            } else if ((x == 91) || (x == 92)) {
                y = (x + 3);
            } else if ((x == 94) || (x == 95)) {
                y = (x - 3);
            } else {
                if (x == 123) {
                    y = (x + 2);
                } else if (x == 125) {
                    y = (x - 2);
                } else if (x == 10) {
                    y = 61;
                } else {
                    y = x;
                }
            }
        }
        console.log("y ",y);
        c =String.fromCharCode(y);
        salida += c;
        console.log("salida",salida);
    }
    console.log("salida 2 "+salida);
    return salida;
  };

  function ascii_to_hexa(str)
  {
	var arr1 = [];
	for (var n = 0, l = str.length; n < l; n ++) 
     {
		var hex = Number(str.charCodeAt(n)).toString(16);
		arr1.push(hex);
	 }
	return arr1.join('');
   }