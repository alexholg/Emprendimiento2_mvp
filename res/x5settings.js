(function ( $, x5engine ) {
	var x = x5engine,
		s = x.settings,
		p = s.currentPath,
		b = x.boot;

	s.siteId = 'A2F7DE65EAE1C2AF63D610A6F5995395';
	s.islocal = true;
	s.version = '2020-2-5-1';
	b.push(function () {
		x.setupDateTime();
		x.imAccess.showLogout();
		x.utils.autoHeight();
		x.cart.ui.updateWidget();
		x.imGrid.init();
	});
	b.push(function () {
		x.sidebarScroll({
			enabledBreakpoints: ['ea2f0ee4d5cbb25e1ee6c7c4378fee7b']
		});
	});
	b.push(function () {
		x.stickyBar({
			enabledBreakpoints: ['d2f9bff7f63c0d6b7c7d55510409c19b','72e5146e7d399bc2f8a12127e43469f1','5ecdcca63de80fd3d4fbb36295d22b7d']
		});
	});

	// Links
	$.extend(s.links, {
		'htmlPlaceholder' : '<!--html_content_placeholder-->',
		'cssPlaceholder' : '<!--css_class_placeholder-->',
		'baseUrlPlaceholder' : '<!--base_url_placeholder-->'
	});


	// ShowBox
	$.extend(s.imShowBox, {
		"effect": "none", "customEffect": "generic animated none",
		'transitionEffect' : 'fade',
		'fullScreenEnabled' : true,
		'zoomEnabled' : true,
		'showProgress' : false,
		'shadow' : '',
		'background' : 'rgba(93, 181, 190, 1)',
		'borderWidth' : {
			'top': 0,
			'right': 0,
			'bottom': 0,
			'left': 0
		},
		'buttonLeft': '<svg class=\"im-common-left-button\"  xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 50 50\"><defs><style>.a{fill:#fff;}.b{fill:#788083;}<\/style><\/defs><rect class=\"a\" x=\"5.03\" y=\"5.03\" width=\"39.94\" height=\"39.94\"/><path class=\"b\" d=\"M15.09,25a1.17,1.17,0,0,1,.34-.78L31.3,8.35a1.07,1.07,0,0,1,1.57,0l1.7,1.7a1.07,1.07,0,0,1,0,1.57L21.19,25,34.57,38.38a1.07,1.07,0,0,1,0,1.57l-1.7,1.7a1.07,1.07,0,0,1-1.57,0L15.43,25.78A1.17,1.17,0,0,1,15.09,25Z\"/><\/svg>',
		'buttonRight': '<svg class=\"im-common-right-button\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 50 50\"><defs><style>.a{fill:#fff;}.b{fill:#788083;}<\/style><\/defs><rect class=\"a\" x=\"5.03\" y=\"5.03\" width=\"39.94\" height=\"39.94\" transform=\"translate(50 50) rotate(-180)\"/><path class=\"b\" d=\"M34.57,25.78,18.7,41.65a1.07,1.07,0,0,1-1.57,0l-1.7-1.7a1.07,1.07,0,0,1,0-1.57L28.81,25,15.43,11.62a1.07,1.07,0,0,1,0-1.57l1.7-1.7a1.07,1.07,0,0,1,1.57,0L34.57,24.22a1.07,1.07,0,0,1,0,1.57Z\"/><\/svg>',
		'buttonClose': '<svg class=\"im-common-close-button\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 50 50\"><defs><style>.a{fill:#fff;}.b{fill:#788083;}<\/style><\/defs><rect class=\"a\" x=\"5.03\" y=\"5.03\" width=\"39.94\" height=\"39.94\" transform=\"translate(50 50) rotate(-180)\"/><path class=\"b\" d=\"M27.65,25l3.92-3.92a1.33,1.33,0,0,0,0-1.89l-.77-.77a1.34,1.34,0,0,0-1.89,0L25,22.34l-3.92-3.92a1.37,1.37,0,0,0-1.89,0l-.77.77a1.34,1.34,0,0,0,0,1.89L22.35,25l-3.92,3.92a1.34,1.34,0,0,0,0,1.89l.77.77a1.37,1.37,0,0,0,1.89,0L25,27.65l3.92,3.92a1.33,1.33,0,0,0,1.89,0l.76-.77a1.33,1.33,0,0,0,0-1.89Z\"/><\/svg>',
		'buttonEnterFS': '<svg class=\"im-common-enter-fs-button\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 50 50\"><defs><style>.a{fill:#fff;}.b{fill:#788083;}<\/style><\/defs><rect class=\"a\" x=\"5.03\" y=\"4.75\" width=\"39.94\" height=\"39.94\" transform=\"translate(50 49.44) rotate(-180)\"/><path class=\"b\" d=\"M21.66,20.26l-6.44-6.44h6a.57.57,0,0,0,.57-.57V12.1a.57.57,0,0,0-.57-.57H12.41a.85.85,0,0,0-.85.85v8.79a.57.57,0,0,0,.57.57h1.16a.57.57,0,0,0,.57-.57V15.33l6.37,6.37a.65.65,0,0,0,.46.19h0a.65.65,0,0,0,.46-.19l.52-.52a.65.65,0,0,0,0-.92Z\"/><path class=\"b\" d=\"M37.61,11.68H28.78a.55.55,0,0,0-.55.55v1.19a.55.55,0,0,0,.55.55h5.92l-6.29,6.29a.65.65,0,0,0,0,.92l.52.52a.65.65,0,0,0,.92,0l6.29-6.29v5.92a.55.55,0,0,0,.55.55h1.19a.55.55,0,0,0,.55-.55V12.51A.83.83,0,0,0,37.61,11.68Z\"/><path class=\"b\" d=\"M21.85,29.43h0a.64.64,0,0,0-.19-.46l-.52-.52a.65.65,0,0,0-.92,0l-6.29,6.29V28.83a.57.57,0,0,0-.57-.57H12.21a.57.57,0,0,0-.57.57v8.8a.85.85,0,0,0,.85.85h8.8a.57.57,0,0,0,.57-.57V36.74a.57.57,0,0,0-.57-.57H15.38l6.29-6.29A.65.65,0,0,0,21.85,29.43Z\"/><path class=\"b\" d=\"M37.88,28.26H36.71a.56.56,0,0,0-.56.56v5.91l-6.29-6.29a.65.65,0,0,0-.92,0l-.52.52a.65.65,0,0,0,0,.92l6.29,6.29H28.79a.56.56,0,0,0-.56.56v1.17a.56.56,0,0,0,.56.56h8.8a.84.84,0,0,0,.84-.84v-8.8A.56.56,0,0,0,37.88,28.26Z\"/><\/svg>',
		'buttonExitFS': '<svg class=\"im-common-exit-fs-button\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 50 50\"><defs><style>.a{fill:#fff;}.b{fill:#788083;}<\/style><\/defs><rect class=\"a\" x=\"5.03\" y=\"5.03\" width=\"39.94\" height=\"39.94\" transform=\"translate(50 50) rotate(-180)\"/><path class=\"b\" d=\"M12.75,14.15l6.44,6.44h-6a.57.57,0,0,0-.57.57v1.16a.57.57,0,0,0,.57.57h9a.6.6,0,0,0,.6-.6v-9a.57.57,0,0,0-.57-.57H21.13a.57.57,0,0,0-.57.57v5.84l-6.37-6.37a.65.65,0,0,0-.46-.19h0a.65.65,0,0,0-.46.19l-.52.52a.65.65,0,0,0,0,.92Z\"/><path class=\"b\" d=\"M27.81,22.89h9.08a.55.55,0,0,0,.55-.55V21.14a.55.55,0,0,0-.55-.55H31l6.29-6.29a.65.65,0,0,0,0-.92l-.52-.52a.65.65,0,0,0-.92,0l-6.29,6.29V13.23a.55.55,0,0,0-.55-.55H27.78a.55.55,0,0,0-.55.55v9.08A.58.58,0,0,0,27.81,22.89Z\"/><path class=\"b\" d=\"M12.64,36.31h0a.64.64,0,0,0,.19.46l.52.52a.65.65,0,0,0,.92,0L20.55,31v5.91a.57.57,0,0,0,.57.57h1.17a.57.57,0,0,0,.57-.57V27.86a.6.6,0,0,0-.6-.6H13.21a.57.57,0,0,0-.57.57V29a.57.57,0,0,0,.57.57h5.91l-6.29,6.29A.65.65,0,0,0,12.64,36.31Z\"/><path class=\"b\" d=\"M27.79,37.48H29a.56.56,0,0,0,.56-.56V31l6.29,6.29a.65.65,0,0,0,.92,0l.52-.52a.65.65,0,0,0,0-.92L31,29.56h5.91a.56.56,0,0,0,.56-.56V27.83a.56.56,0,0,0-.56-.56H27.94a.71.71,0,0,0-.71.71v8.94A.56.56,0,0,0,27.79,37.48Z\"/><\/svg>',
		'buttonZoomIn': '<svg class=\"im-common-zoom-in-button\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 50 50\"><defs><style>.a{fill:#fff;}.b{fill:#788083;}<\/style><\/defs><rect class=\"a\" x=\"5.03\" y=\"5.03\" width=\"39.94\" height=\"39.94\" transform=\"translate(50 50) rotate(-180)\"/><path class=\"b\" d=\"M27,23V15.17a1.27,1.27,0,0,0-1.27-1.27H24.28A1.27,1.27,0,0,0,23,15.17V23H15.17a1.27,1.27,0,0,0-1.27,1.27v1.44A1.27,1.27,0,0,0,15.17,27H23v7.84a1.27,1.27,0,0,0,1.27,1.27h1.44A1.27,1.27,0,0,0,27,34.83V27h7.84a1.27,1.27,0,0,0,.9-.37h0a1.27,1.27,0,0,0,.37-.9V24.28A1.27,1.27,0,0,0,34.83,23Z\"/><\/svg>',
		'buttonZoomOut': '<svg class=\"im-common-zoom-out-button\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 50 50\"><defs><style>.a{fill:#fff;}.b{fill:#788083;}<\/style><\/defs><rect class=\"a\" x=\"5.03\" y=\"5.03\" width=\"39.94\" height=\"39.94\" transform=\"translate(50 50) rotate(-180)\"/><path class=\"b\" d=\"M15.19,26.85a1.27,1.27,0,0,1-1.27-1.27V24.15a1.27,1.27,0,0,1,1.27-1.27H34.84a1.27,1.27,0,0,1,1.27,1.27v1.44a1.27,1.27,0,0,1-.37.9h0a1.27,1.27,0,0,1-.9.37Z\"/><\/svg>',
		'buttonZoomRestore': '<svg class=\"im-common-zoom-restore-button\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 50 50\"><defs><style>.a{fill:#fff;}.b{fill:#788083;}<\/style><\/defs><rect class=\"a\" x=\"5.03\" y=\"5.03\" width=\"39.94\" height=\"39.94\" transform=\"translate(50 50) rotate(-180)\"/><path class=\"b\" d=\"M40.3,21.57c-1-1-1.26-.65-2,0l-2.26,2.26A12.53,12.53,0,1,0,23.6,37.53a13.33,13.33,0,0,0,7.09-2.2c1-.64.8-1.31.36-1.94s-.92-1-1.94-.36a10.31,10.31,0,0,1-5.51,1.71,9.73,9.73,0,1,1,9.71-10.4l-2.76-2.76c-.55-.55-1-1-2,0s-.55,1.43,0,2l4.88,4.88a1.4,1.4,0,0,0,2,0l4.88-4.88C41,22.85,41.26,22.56,40.3,21.57Z\"/><\/svg>',
		'borderRadius' : '0px 0px 0px 0px',
		'borderColor' : 'rgba(55, 71, 79, 1) rgba(55, 71, 79, 1) rgba(55, 71, 79, 1) rgba(55, 71, 79, 1)',
		'textColor' : 'rgba(93, 181, 190, 1)',
		'fontFamily' : 'Abel',
		'fontStyle' : 'normal',
		'fontWeight' : 'normal',
		'fontSize' : '14pt',
		'textAlignment' : 'left',
		'boxColor' : 'rgba(255, 255, 255, 1)',
		'opacity' : 0.9,
		'radialBg' : false // Works only in Mozilla Firefox and Google Chrome
	});

	// PopUp
	$.extend(s.imPopUp, {
		'effect' : 'websitex5.bl.templates.showboxanimation',
		'width' : 500,
		'shadow' : '',
		'background' : 'rgba(93, 181, 190, 1)',
		'borderRadius' : 10,
		'textColor' : 'rgba(93, 181, 190, 1)',
		'boxColor' : 'rgba(255, 255, 255, 1)',
		'opacity' : 0.9
	});

	// Tip
	$.extend(s.imTip, {
		'borderRadius' : 0,
		'arrow' : false,
		'shape' : 'classic',
		'position' : 'top',
		'effect' : 'attach',
		'showTail' : false
	});

	// PageToTop
	$.extend(s.imPageToTop, {
		'imageFile' : 'style/page-to-top.png'
	});

	// Captcha
	b.push(function () {
		x5engine.captcha.instance = new x5engine.captcha.x5captcha({
			"offlineCodes": {
				"0": { letter: 'H', path: 'captcha/imcpa_fll.gif'},
				"1": { letter: '3', path: 'captcha/imcpa_mv4.gif'},
				"2": { letter: 'Y', path: 'captcha/imcpa_eue.gif'},
				"3": { letter: 'N', path: 'captcha/imcpa_7pj.gif'},
				"4": { letter: 'Z', path: 'captcha/imcpa_ge6.gif'},
				"5": { letter: 'H', path: 'captcha/imcpa_nkd.gif'},
				"6": { letter: 'G', path: 'captcha/imcpa_yxg.gif'},
				"7": { letter: 'Z', path: 'captcha/imcpa_7kh.gif'},
				"8": { letter: 'F', path: 'captcha/imcpa_tzu.gif'},
				"9": { letter: '5', path: 'captcha/imcpa_lz5.gif'}
			}
		});
	}, false, 'first');
	b.push(function() { x.passwordpolicy.init({ "requiredPolicy": "false", "minimumCharacters": "6", "includeUppercase": "false", "includeNumeric": "false", "includeSpecial": "false" });
	});

	// BreakPoints
	s.breakPoints.push({"name": "Desktop", "hash": "ea2f0ee4d5cbb25e1ee6c7c4378fee7b", "start": "max", "end": 1150, "fluid": false});
	s.breakPoints.push({"name": "Breakpoint 1", "hash": "d2f9bff7f63c0d6b7c7d55510409c19b", "start": 1149.9, "end": 720, "fluid": false});
	s.breakPoints.push({"name": "Mobile", "hash": "72e5146e7d399bc2f8a12127e43469f1", "start": 719.9, "end": 480, "fluid": false});
	s.breakPoints.push({"name": "Mobile Fluid", "hash": "5ecdcca63de80fd3d4fbb36295d22b7d", "start": 479.9, "end": 0, "fluid": true});

	b.push(function () { x.cookielaw.activateScripts() });

	s.loaded = true;
})( _jq, x5engine );
