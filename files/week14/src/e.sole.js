window.onload = function() {
	var rsr = Raphael('rsr', '665.017', '783.083');

	var group_a = rsr.set();
	group_a.attr({
		'name': 'group_a'
	});
	var group_b = rsr.set();
	group_b.attr({
		'parent': 'group_a',
		'name': 'group_b'
	});
	var piede = rsr.set();
	var _x3C_piede_x3E_ = rsr.path("M360.008,210.312c-1.504-7.362-3.221-14.683-5.097-21.958     c-3.564-13.825-7.66-27.557-12.736-40.907c-3.853-10.132-8.114-21.091-15.171-29.489c-22.484-26.764-67.178-32.193-99.633-12.103     c-23.369,14.466-46.949,49.542-64.696,96.235c-13.575,35.717-21.265,73.834-22.237,110.232c-0.885,33.09,4,63.408,14.162,88.748     c-0.519,4.049,4.037,20.892,4.795,22.646c0.134,0.311,0.233,0.531,0.259,0.626c2.085,9.873,4.312,19.735,6.466,29.273     c7.132,31.576,14.506,64.229,17.521,101.148c1.053,12.879,1.743,26.121,2.41,38.926c2.422,46.434,4.709,90.291,23.174,117.296     c9.37,13.705,26.671,23.614,46.279,26.507c3.828,0.564,7.61,0.844,11.326,0.844c15.289-0.001,29.416-4.729,40.607-13.745     c18.447-14.863,25.654-44.067,22.683-91.909c-1.169-18.812-3.525-38.794-6.021-59.95c-6.436-54.562-13.091-110.981-1.491-160.377     c3.905-16.629,12.229-39.06,19.572-58.85c2.139-5.766,4.16-11.211,5.909-16.086c0.104-0.293,0.525-1.205,1.108-2.469     c2.647-5.738,3.645-13.432,5.542-19.468c1.91-6.079,2.561-9.972,2.54-15.474c-0.022-6.186,1.174-9.347,1.156-15.577     c-0.017-5.664,1.063-11.218,1.185-16.853c0.228-10.596,0.024-21.039,0.773-31.629     C361.009,227.262,361.757,218.87,360.008,210.312z").attr({
		id: '_x3C_piede_x3E_',
		fill: '#FFCCCC',
		parent: 'group_a',
		'stroke-width': '0',
		'stroke-opacity': '1'
	}).data('id', '_x3C_piede_x3E_');
	piede.attr({
		'id': 'piede',
		'parent': 'group_a',
		'name': 'piede'
	});
	var supverde = rsr.set();
	var _x3C_lowsup_x3E_ = rsr.path("M341.066,241.474     c0,31.632-29.427,74.826-67.437,74.826c-38.009,0-82.216-43.194-82.216-74.826c0-31.633,42.359-69.284,80.368-69.284     C309.792,172.189,341.066,209.841,341.066,241.474z").attr({
		id: '_x3C_low-sup_x3E_',
		fill: '#8BC53F',
		stroke: '#231F20',
		"stroke-width": '0.25',
		parent: 'group_a',
		'stroke-opacity': '1'
	}).data('id', '_x3C_lowsup_x3E_');
	supverde.attr({
		'id': 'sup-verde',
		'parent': 'group_a',
		'name': 'supverde'
	});
	var supgiallo = rsr.set();
	var _x3C_mediumsup_x3E_ = rsr.path("M328.679,241.9     c0,26.766-24.556,63.314-56.272,63.314s-68.605-36.549-68.605-63.314s35.348-58.625,67.064-58.625S328.679,215.134,328.679,241.9     z").attr({
		id: '_x3C_medium-sup_x3E_',
		fill: '#CCCC33',
		stroke: '#231F20',
		"stroke-width": '0.25',
		parent: 'group_a',
		'stroke-opacity': '1'
	}).data('id', '_x3C_mediumsup_x3E_');
	supgiallo.attr({
		'id': 'sup-giallo',
		'parent': 'group_a',
		'name': 'supgiallo'
	});
	var suparancio = rsr.set();
	var _x3C_highsup_x3E_ = rsr.path("M312.534,242.641c0,18.31-18.206,43.312-41.722,43.312     s-50.865-25.002-50.865-43.312s26.207-40.104,49.723-40.104S312.534,224.331,312.534,242.641z").attr({
		id: '_x3C_high-sup_x3E_',
		fill: '#F6921E',
		parent: 'group_a',
		'stroke-width': '0',
		'stroke-opacity': '1'
	}).data('id', '_x3C_highsup_x3E_');
	suparancio.attr({
		'id': 'sup-arancio',
		'parent': 'group_a',
		'name': 'suparancio'
	});
	var infverde = rsr.set();
	var _x3C_lowinf_x3E_ = rsr.path("M304.577,628.271     c0,43.468-17.27,73.903-37.473,73.903c-16.836,0-39.201-37.68-39.201-73.903s22.365-81.293,39.201-81.293     S304.577,592.047,304.577,628.271z").attr({
		id: '_x3C_low-inf_x3E_',
		fill: '#8BC53F',
		stroke: '#231F20',
		"stroke-width": '0.25',
		parent: 'group_a',
		'stroke-opacity': '1'
	}).data('id', '_x3C_lowinf_x3E_');
	infverde.attr({
		'id': 'inf-verde',
		'parent': 'group_a',
		'name': 'infverde'
	});
	var infgiallo = rsr.set();
	var _x3C_mediuminf_x3E_ = rsr.path("M297.113,627.632     c0,35.965-13.907,61.146-30.177,61.146c-13.56,0-31.57-31.176-31.57-61.146s18.011-67.26,31.57-67.26     C280.494,560.373,297.113,597.662,297.113,627.632z").attr({
		id: '_x3C_medium-inf_x3E_',
		fill: '#CCCC33',
		stroke: '#231F20',
		"stroke-width": '0.25',
		parent: 'group_a',
		'stroke-opacity': '1'
	}).data('id', '_x3C_mediuminf_x3E_');
	infgiallo.attr({
		'id': 'inf-giallo',
		'parent': 'group_a',
		'name': 'infgiallo'
	});
	var infarancio = rsr.set();
	var _x3C_highinf_x3E_ = rsr.path("M287.852,626.715c0,25.176-9.735,42.803-21.124,42.803     c-9.491,0-22.099-21.823-22.099-42.803s12.607-47.081,22.099-47.081C276.218,579.634,287.852,605.736,287.852,626.715z").attr({
		id: '_x3C_high-inf_x3E_',
		fill: '#F6921E',
		parent: 'group_a',
		'stroke-width': '0',
		'stroke-opacity': '1'
	}).data('id', '_x3C_highinf_x3E_');
	infarancio.attr({
		'id': 'inf-arancio',
		'parent': 'group_a',
		'name': 'infarancio'
	});


	var rsrGroups = [group_a, group_b, piede, supverde, supgiallo, suparancio, infverde, infgiallo, infarancio];
	group_a.push();
	group_b.push();
	piede.push(
		_x3C_piede_x3E_
	);
	supverde.push(
		_x3C_lowsup_x3E_
	);
	supgiallo.push(
		_x3C_mediumsup_x3E_
	);
	suparancio.push(
		_x3C_highsup_x3E_
	);
	infverde.push(
		_x3C_lowinf_x3E_
	);
	infgiallo.push(
		_x3C_mediuminf_x3E_
	);
	infarancio.push(
		_x3C_highinf_x3E_
	);
	
	var infReset = function(){
		infgiallo.hide();
		infarancio.hide();
		infverde.hide();
	};
	
	var supReset = function(){
		supverde.hide();
		supgiallo.hide();
		suparancio.hide();
	};
	
	var showInf = function(val){
		infReset();
		if (val == 0){
			infverde.show();
		} else if (val == 1){
			infgiallo.show();
		} else if (val == 2){
			infarancio.show();
		};
	};

	var showSup = function(val){
		supReset();
		if (val == 0){
			supverde.show();
		} else if (val == 1){
			supgiallo.show();
		} else if (val == 2){
			suparancio.show();
		};
	};
	

	window.showSup = showSup;
	window.showInf = showInf;

};
