module.exports = {
	title: "Laraset",
	head: [
	    [
	      'link',
	      {
	        href:
	          'https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,800,800i,900,900i',
	        rel: 'stylesheet',
	        type: 'text/css',
	      },
	    ],
	],
	themeConfig: {
		repo: 'khofaai/laraset',
		displayAllHeaders: true,
		sidebarDepth: 1,
		nav: [
		  {text: 'Home', link: '/'},
		],
		sidebar: {
			'/':require('./sidebar')
		} 
	}
};