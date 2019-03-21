		function palindromo(){
			var x = document.getElementById("palindromo").value;
			if(x != null && x != ""){
				var y = x.split('').reverse().join('');
				if (x == y) {
					alert("É um palíndromo!")
				}else{
					alert("Não é um palíndromo!")
				}
			}
		}