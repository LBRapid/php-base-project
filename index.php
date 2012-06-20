<?php
require_once 'lib/PHamlP_3.2/haml/HamlParser.php';

$haml = new HamlParser(array('debug' => false, 'format' => 'html5', 'ugly' => false, 'style' => 'nested'));
$html5 = $haml->parse('templates/index.haml', 'cache');

require_once 'cache/index.php';
?>
