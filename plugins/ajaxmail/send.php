<?php 
	$recepient = "walonap566@exserver.top";
	$sitename = "ajax-mail";

	$name = trim($_POST["name"]);
	$phone = trim($_POST["phone"]);
	// $messege = "Имя: $name \n Телефон: $phone";
	$headers = 'From: e.gundina@ivgoradm.ru'."\r\n";

	// $pagetitle = "Заявка с сайта \"$sitename\"";
	mail($recepient, $headers, $messege, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
?>