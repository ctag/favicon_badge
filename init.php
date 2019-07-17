<?php
class Favicon_Badge extends Plugin {

	function about() {
		return array(1.0,
			"Add a badge to favicon",
			"ZeGuigui, RaMeR, ctag, aeritir");
	}

	function init($host) {
		$this->host = $host;
	}

	function get_js() {
		$js = file_get_contents(dirname(__FILE__) . "/init.js");
		return $js;
	}

	function api_version() {
		return 2;
	}

}
?>
