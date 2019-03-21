function intercalador() {
			var palavra1 = document.forms["intercalar"]["palavra1"].value;
			var palavra2 = document.forms["intercalar"]["palavra2"].value;
			var array1 = palavra1.split('');
			var array2 = palavra2.split('');
			var totalLetras = 0;
			var resultado = "";
			if (array1.length > array2.length) {
				totalLetras = array1.length;
			}else{
				totalLetras = array2.length;
			}
			for (var i = 0; i < totalLetras; i++) {
				if(array1[i]){
					resultado = resultado + array1[i];
				}
				if (array2[i]) {
					resultado = resultado + array2[i];
				}
			}
			document.forms["intercalar"]["intercalacao"].value = resultado;
		}