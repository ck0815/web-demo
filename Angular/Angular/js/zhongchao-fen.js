angular.module("myapp",[])
.filter("myfilter",function(){
	return function(data,index){
		if(data){
			//如果成功 返回截取下标
			return data.slice(index);
			console.log(data)
		}
	}
})
.controller("main",["$scope","$http",function($scope,$http){
	
	$http.get("csl-data.json")
	.success(
		function(res){
			$scope.datas = res;
			
			//分页4个变量
			//当前页
			$scope.pagenow = 1;
			//每页总条数
			$scope.pagesize = 10;
			//总记录数
			$scope.allcont = $scope.datas.length;
//			console.log($scope.allcont)
			//总页数	让 总的数据量除每页的数据量 得出几页取整
			$scope.pagecont = Math.ceil($scope.allcont/$scope.pagesize);
//			console.log($scope.pagecont)
			//
			$scope.pagearr = [];
			for(var i=0; i<=$scope.pagenow;i++){
				$scope.pagearr[i-1]
				console.log($scope.pagearr)
			}
	})
	$scope.setpage = function(index) {
			$scope.pagenowow = index;
		}

	
	
	
	
	//排序  默认id正序排序
	$scope.order = "$index+1";
	$scope.ji = function (data,e) {
		//添加颜色 通过angular的子集
		angular.element(e.target).parent().children().removeClass("add");
		angular.element(e.target).addClass("add");
		if($scope.order == data){
			//判断order 的值 是不是和传进来的值一样 如果一样
			//让这一次的 值为负 倒序排列
			$scope.order = "-"+data;
		}else{
			//order 就代表传进来的数据  为正 
			$scope.order = data
		}
	}
}])