$(function() {
	if(!window.localStorage) {
		alert("浏览器支持localstorage");
		return false;
	} else {
		var storage = window.localStorage;
		//写入a字段
		storage["a"] = 'page2.html';
		//写入b字段
		//storage.b = 1;
		//写入c字段
		storage.setItem("c", 3);
		console.log(typeof storage["a"]);
		console.log(typeof storage["b"]);
		console.log(typeof storage["c"]);
		console.log(storage.a);
	}

	//点击链接跳转详情页
	$('.click-nav').on('click', function() {
		window.localStorage.b = $(this).attr('href')
		window.location.href = "detial.html"
		return false;

	})

	//改变联系方式
	function changeInfo() {
		//微信名称
		var wxName = "2018hello",
			//手机号码
			phoneNum = "18200166666";
		$('.wx-name').html(wxName);
		$('.phone-num').html(phoneNum);
	}

	changeInfo();

	//改变排列顺序
	function changeList() {
		var arrList = new Array();
		var div_father = $('.more-list');
		//
		div_father.children().each(function() {
			arrList.push($(this))
		})

		//乱序函数
		var random = function(array) {
			return array.sort(function() {
				return Math.random() > 0.5
			});
		};

		//乱序
		random(arrList);

		for(var i = 0; i < arrList.length; i++) {
			div_father.append(arrList[i])
		}

	}

	changeList();

})