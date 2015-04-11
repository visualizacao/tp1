<html>
<body>
<?php
  $input = fopen("http://homepages.dcc.ufmg.br/~dhca/all.txt", "r") or die("Unable to open file!");
  // Output one line until end-of-file
  while(!feof($input)) {
    echo (fgets($input) . "<br>");
  }
  fclose($input);
?>
</body>
</html>
