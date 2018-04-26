<?php
	require_once dirname(__FILE__) . "../lib/Route.php";
	$routes = new Route(true);
	$route = $routes->getRoutes();
	 
	print_r($route);

?>