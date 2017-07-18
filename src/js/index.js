new Vue({
	el:'#app',
	delimiters: ['[[', ']]'],
	data:{
		news:'',//重要新闻
		plan:'',//特别策划
		speech:'',//精彩演讲
		boards:'',//榜单
		guest:'',//嘉宾
		previous:'',//历届西普
		splendid:'',//精彩瞬间
		thanksImg:'',//特别鸣谢
		speechLength:'',//演讲长度
		speechIndex:0,
		guestLength:'',//嘉宾长度
		guestIndex:0,
		allCepoLength:'',//历届长度
		allCepoIndex:0,
		splendidLength:'',//精彩瞬间长度
		splendidIndex:0,
		speechStyle:{
			width:'',
			marginLeft:0
		},
		guestStyle:{
			width:'',
			marginLeft:0
		},
		allCepoStyle:{
			width:'',
			marginLeft:0
		},
		splendidStyle:{
			width:'',
			marginLeft:0
		},
		bgImg:false,
		imgHref:'',
		menu:[],//导航菜单
	},
	created(){
		var _this = this;
		$.post('/api/v1/index/getAll',function(data){
			_this.news = data.news;
			_this.plan = data.planning;
			_this.speech = data.speech;
			_this.boards = data.boards;
			_this.guest = data.guest;
			_this.thanksImg = data.thanks;
			_this.previous = data.previous;
			_this.splendid = data.moment;
			_this.menu = data.menu;
			_this.speechLength = data.speech.list.length;
			_this.speechStyle.width = 1000*_this.speechLength+'px';
			_this.guestLength = data.guest.list.length;
			_this.guestStyle.width = 1100*_this.guestLength+'px';
			_this.allCepoLength = data.previous.list.length;
			_this.allCepoStyle.width = 1009*_this.allCepoLength+'px';
			_this.splendidLength = data.moment.list.length;
			_this.splendidStyle.width = 1078*_this.splendidLength+'px';
		})
		
	},
	mounted(){
		setTimeout(function(){
			
			var mySwiper = new Swiper('.swiper-container',{
				loop:true,
				prevButton:'.swiper-button-prev',
				nextButton:'.swiper-button-next',
			})
		},1000)

		
	},
	filters:{
		splitSring(val){
			if(val.length>65){
				return val.substring(0,65)+'...';
			}else{
				return val;
			}
			 
		},
		splitSring2(val){
			if(val.length>54){
				return val.substring(0,54)+'...';
			}else{
				return val;
			}
			 
		}
	},
	methods:{
		speechLeft(){
			if(this.speechIndex == 0) return false;
			if(this.speechIndex>0){
				this.speechIndex--;
			}
			this.speechStyle.marginLeft = -1000*this.speechIndex+'px';
		},
		speechRight(){
			if(this.speechIndex==this.speechLength) return false;
			if(this.speechIndex<this.speechLength-1){
				this.speechIndex++
			}
			
			this.speechStyle.marginLeft = -1000*this.speechIndex+'px';
		},
		guestLeft(){
			if(this.guestIndex == 0) return false;
			if(this.guestIndex>0){
				this.guestIndex--;
			}
			this.guestStyle.marginLeft = -1100*this.guestIndex+'px';
		},
		guestRight(){
			if(this.guestIndex==this.guestLength) return false;
			if(this.guestIndex<this.guestLength-1){
				this.guestIndex++
			}
			this.guestStyle.marginLeft = -1100*this.guestIndex+'px';
		},
		allCepoLeft(){
			if(this.allCepoIndex == 0) return false;
			if(this.allCepoIndex >0){
				this.allCepoIndex--;
			}
			
			this.allCepoStyle.marginLeft =  -1009*this.allCepoIndex+'px';
		},
		allCepoRight(){
			if(this.allCepoIndex==this.allCepoLength) return false;
			if(this.allCepoIndex<this.allCepoLength-1){
				this.allCepoIndex++;
			}
			
			this.allCepoStyle.marginLeft = -1009*this.allCepoIndex+'px';
		},
		splendidLeft(){
			if(this.splendidIndex == 0) return false;
			if(this.splendidIndex >0){
				this.splendidIndex--;
			}
			
			this.splendidStyle.marginLeft =  -1078*this.splendidIndex+'px';
		},
		splendidRight(){
			if(this.splendidIndex==this.splendidLength) return false;
			if(this.splendidIndex<this.splendidLength-1){
				this.splendidIndex++;
			}
			
			this.splendidStyle.marginLeft = -1078*this.splendidIndex+'px';
		},
		showImg(url){
			this.bgImg = true;
			this.imgHref = url;
		},
		hideBg(){
			this.bgImg = false;
		},
		urlTo(id,cateId,url){
			return url == '' ? '/newDetail.html?id='+id+'&category_id='+cateId : url;
		},
		urlMore(cateId){
			return '/news.html?category_id='+cateId;
		}
	}
})
