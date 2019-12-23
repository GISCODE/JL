window.onload = function () {
			var mig = document.getElementById('mig');//获取块
			var migs = document.getElementById('migs');//获取列表块
			var l = document.getElementById("l");//获取左按钮
			var r = document.getElementById("r");//获取右按钮
			var animated = false;//动画是否在执行
			var timer;//声明定时器
		    //图片位移函数
			function animation (offset){
				animated = true;
				var newMisgs = parseInt(migs.style.left) + offset;
				var time =500; //动画位移时间
				var interval = 30; //位移间隔时间
				var speed = offset/(time/interval);//每次位移量
	            //动画位移方向
				function go(){
					if ((speed < 0 && parseInt(migs.style.left) > newMisgs) || (speed > 0 &&parseInt(migs.style.left) < newMisgs)) {
						migs.style.left = parseInt(migs.style.left) + speed + 'px';
						setTimeout(go,interval);
					} 
					else{
						animated = false; 
						migs.style.left = newMisgs + 'px';
	
						if (newMisgs >= -400) {
							migs.style.left = -1660 + 'px';
						}
						if (newMisgs <= -1660) {
							migs.style.left = -400 + 'px';
					    }
				    }
				}
				go();
			}
	        //自动播放动画
			function play(){
				timer = setInterval(function () {
					r.onclick();
				},3000);
			}
	        //动画停住
			function stop(){
				clearInterval(timer);
			}
	        //右边按钮点击函数
			r.onclick = function () {
				if (animated == false) {
					animation(-420);
				}
			} 
			//左边按钮点击函数
			l.onclick = function () {
				if (animated == false) {
					animation(420);
				}
			}
			//鼠标覆盖动画停止，移开动画开始
			 mig.onmouseover = stop;
			 mig.onmouseout = play;
			 //默认开始
			 play();
		}
