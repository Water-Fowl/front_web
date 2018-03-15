<?php
	try{
		mb_language("Japanese");
		mb_internal_encoding("UTF-8");
		if (!mb_send_mail('info@water-fowl.co.jp','Water-Fowl', print_r($_POST, true),"From: info@water-fowl.co.jp\nContent-Type: text/plain")) throw new Exception('送信できませんでした。');
	}catch(Exception $e){
		die('エラーが発生しました。<br>'.$e->getMessage());
	}
?>
	送信しました。
