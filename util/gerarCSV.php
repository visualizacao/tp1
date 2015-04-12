<html>
<body>
<?php
  $input = fopen("docs/all.txt", "r") or die("Unable to open file!");
  $file_path = "all.csv"; 
  $dados = '';
  $dados .="idGrafo,edge,idPessoa,tipoLugar,idLugar";
  $dados .= "\n";
  //lendo a primeira linha do arquivo
 $linha = fgets($input);
 //le ate o fim do arquivo
  while(!feof($input)){
	if(strstr($linha, "graph")){
		list($graph, $idGraph) = split(" ", $linha);
		$idGraph = str_replace("\n", '', $idGraph);
		$linha = fgets($input);
		while ($linha != null) {
			list($edge, $idPessoa,$tipoLugar, $idLugar) = split(" ", $linha);
			$dados.= $idGraph.",".$edge.",".$idPessoa.",".$tipoLugar.",".$idLugar;
			$linha = fgets($input);
			if(strstr($linha, "graph"))
				break;
		}
	}
  }
  $file=fopen($file_path,'w+');
  fwrite($file, $dados);
  fclose($file);

  fclose($input);
;
?>
</body>
</html>