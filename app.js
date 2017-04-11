// je créais une variable globale conteurpoint
var conteurpoints = 0;


// je créais une fonction click pour rendre les cellules cliquables
$("td").click(function() {
	var cases = $(this).html();

	if (cases === "X" || cases === "O") {
		// si une case à déjà un X ou O, 
		// ne rien faire
	}else {
		//sinon augmenter/incrémenter le conteur
		conteurpoints++;
	} 

		if (conteurpoints % 2 === 0) { 
			// afficher une fois sur deux "X"
			$(this).html("X");
		}else {
			// sinon afficher "O"
			$(this).html("O");
		}
	









});