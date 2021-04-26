var http=require('http')
var cheerio=require('cheerio')
var url='http://kaijiang.zhcw.com/zhcw/html/ssq/list_1.html'

function filter(html){
	var $=cheerio.load(html)
	var group=$('td')
	var eachgroup=[]
	console.log(group[2].attribs.style)
	var arr=Object.keys(group)
	arr.forEach(function(v){
		var self=group[v]
		if(!self.attribs["style"]){
			return
		}else{
			 eachgroup.push(v+'\n')
			
		}
	})
	return(eachgroup)
}

http.get(url,function (res) {
	var html=''
	res.on('data',function(data){
		html+=data
	})

	res.on('end',function(){
		console.log(filter(html))
	})
})
.on('error',function(){
	console.log('爬取失败')
})
//                 if(!self.attribs["style"]){
//                                 ^

// TypeError: Cannot read property 'style' of undefined
//     at E:\node\node知识汇总\node爬虫.js:12:19
//     at Array.forEach (native)
//     at filter (E:\node\node知识汇总\node爬虫.js:10:6)
//     at IncomingMessage.<anonymous> (E:\node\node知识汇总\node爬虫.js:29:15)
//     at emitNone (events.js:91:20)
//     at IncomingMessage.emit (events.js:185:7)
//     at endReadableNT (_stream_readable.js:974:12)
//     at _combinedTickCallback (internal/process/next_tick.js:80:11)
//     at process._tickCallback (internal/process/next_tick.js:104:9)
