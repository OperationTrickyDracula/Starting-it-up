<?php
	session_start();
	if($_GET['login']){
		if($_POST['username']=='USERNAME' && $_POST['password']=='PASSWORD'){
			$_SESSION['loggedin'] = 1;
		}
	}

?>