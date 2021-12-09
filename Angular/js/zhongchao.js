angular.module("myapp",[])
.controller("main",["$scope","$http",function($scope,$http){
	$http.get("csl-data.json").success(
		function(res){
			$scope.datas = res;
		}
	)
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