var app = new Vue({
	el: "#app",
	data:{
		count: 0,
		pos:{
			color:'blue',
			left:'0px',
			top:'0px'
		}
	},
	methods:{
		myClick: function(event){
			event.target.blur()
			this.count+=1
			changePos(this.pos)
		}
	}
})

function changePos(sobj){
	sobj.top = $(window).height()*Math.random()+'px'
	sobj.left = $(window).width()*Math.random()+'px'
}

function test(){
	console.log(Math.random())
}

setInterval(function(){changePos(app.pos);},1000);