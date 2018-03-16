<?php
	try{
		mb_language("Japanese");
		mb_internal_encoding("UTF-8");
		if (!mb_send_mail('i.yoshiki.1220@gmail.com,yoshiki.ikeda@water-fowl.co.jp,erisuke12345@yahoo.co.jp','Water-Fowl', print_r($_POST, true),"From: hato6502@gmail.com\nContent-Type: text/plain")) throw new Exception('送信できませんでした。');
	}catch(Exception $e){
		die('エラーが発生しました。<br>'.$e->getMessage());
	}
?>
	送信しました。
