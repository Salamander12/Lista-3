function inverterTodos() {
			var nomes = [];
			nomes.push(document.getElementById("nome1").value);
			nomes.push(document.getElementById("nome2").value);
			nomes.push(document.getElementById("nome3").value);
			nomes.push(document.getElementById("nome4").value);
			nomes.push(document.getElementById("nome5").value);
			document.getElementById("nome1").value = nomes[4];
			document.getElementById("nome2").value = nomes[3];
			document.getElementById("nome3").value = nomes[2];
			document.getElementById("nome4").value = nomes[1];
			document.getElementById("nome5").value = nomes[0];
		}