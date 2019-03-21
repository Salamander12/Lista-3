		function validacao(){
			var senha = document.forms["cadastro"]["senha"].value;
			var confirmSenha = document.forms["cadastro"]["confirmSenha"].value;
			if (senha == confirmSenha) {
				if (senha.length >= 6 && senha.length <= 10) {
					return true;
				}else{
					alert("Sua senha deve possuir entre 6 e 10 caracteres!");
					return false;
				}
			}else{
				alert("As senhas informadas não conferem!");
				return false;
			}
		}