new Vue({
	el:'#news',
	delimiters: ['[[', ']]'],
	data:{
		msg:'',
		menu:'',
		arrLi:[
			{
				class:'first',
				title:'活动导览',
				id:5,
			},
			{
				class:'two',
				title:'交通指引',
				id:6
			},
			{
				class:'three',
				title:'参会申请',
				id:7
			},
			{
				class:'four',
				title:'参会帮助',
				id:8
			}
		],
		arrIndex:0,
	},
	created(){
		var categoryId = this.arrLi[0].id;
		var _this = this;
		$.post('/api/v1/index/getMenu',function(data){
			_this.menu = data
		})
		$.post('/api/v1/server/getArticle',{category_id:categoryId},function(data){
			_this.msg = data;
		})
	},
	methods:{
		chooseTitle(index,id){
			this.arrIndex  = index;
			this.postFnc(id);
		},
		postFnc(id){
			var _this = this;
			$.post('/api/v1/server/getArticle',{category_id:id},function(data){
				_this.msg = '';
				_this.msg = data;
			})
		}
	}

})