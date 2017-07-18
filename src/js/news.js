

var vm = new Vue({
	el:"#news",
	delimiters: ['[[', ']]'],
	data:{
		showNew:false,
		newsList:'',//新闻列表
		currentPage:1,
		totalPage:1,//总页数
		menu:'',
		categoryId:'',
		name:'',
		nameEnglish:''
	},
	created(){
		var _this = this;
		var categoryId = (window.location.search).split("=")[1];
		this.categoryId = categoryId;
		$.post('/api/v1/index/getMenu',function(data){
			_this.menu = data
		})
		$.post('/api/v1/news/getList',{page_index:1,category_id:categoryId},function(data){
			_this.showNew = true;
			_this.newsList = data.list;
			_this.nameEnglish = data.name_en;
			_this.name = data.name;
			_this.totalPage = parseInt(10*data.total_page);
		})
	},
	methods:{
		handleCurrentChange(val){
			this.getNewsList(val);
		},
		getNewsList(page){
			var _this = this;
			$.post('/api/v1/news/getList',{page_index:page,category_id:this.categoryId},function(data){
				_this.newsList = '';
				_this.newsList = data.list;
			})
		},
		urlTo(id,category_id){
			return '/newDetail.html?id='+id+'&category_id='+category_id;
		}
	}
})