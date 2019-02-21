$.BLOG = {
	init: function() {
		this.console();
		this.basic();
		this.menu();
		setTimeout(function(THIS) {
			THIS.toc().scroll( $(window).scrollTop() );
			THIS.toc().go();
		}, 500, this);
		this.scroll();
		this.resize();
		this.goTop().active();
		this.share();
		this.header();
		this.search().init();
		this.reward();
		this.waves();
		this.mask();
		this.waterfall();
		this.tabBar();
	},
	console: function() {
		console.log('%cMellow','background:#aaa;color:#bada55', 'verson 1.3.8');
	},
	basic: function() {
		$.fixedClick();
		$.page().loaded();
	},
	menu: function() {
   		$.toggleMenu().init();
	},
	header: function(top, direction) {
		if (!top) {
			var top = $(window).scrollTop();
		}
		if (!direction) {
			var direction = 1;
		}
		$.fixedHeader(top, direction);
	},
	toc: function() {
		var toc = $('#post-toc');
		var repo = $('#repo');
		return {
			scroll: function(top) {
				if (!toc.length) return;
				$.toc().fixed(top);
				$.toc().actived(top);
			},
			go: function() {
				if (!toc.length && !repo.length) {
					$('.post-article').css("width", "100%");
					return;
				};
				$.toc().go();
			}
		}
	},
	goTop: function() {
		return {
			active: function() {
				$.toggleGoTop().active();
			},
			scroll: function(top) {
				$.toggleGoTop().scroll(top);
			}
		}
	},
	share: function() {
		$.share();
	},
	search: function() {
		return {
			init: function() {
				$.search().init();
				$.search().zoom();
			},
			zoom: function() {
				$.search().zoom();
			},
		}
	},
	waves: function(){
		$.waves();
	},
	reward: function() {
		$.reward();
	},
	mask: function() {
		$.mask();
	},
	waterfall: function() {
		$.waterfall();
	},
	tabBar: function() {
		$.tabBar();
	},
	scroll: function() {
		var lastScrollTop = 0;
		$(window).scroll(function() {
			var direction = 1;
			var top = $(window).scrollTop();
			if (lastScrollTop <= top) {
				direction = 1;
			} else {
				direction = 2;
			}
			$.BLOG.toc().scroll(top);
			$.BLOG.header(top, direction);
			$.BLOG.goTop().scroll(top);
			$.BLOG.waterfall();
			lastScrollTop = top;
		});
	},
	resize: function() {
		$(window).resize(function() {
			var top = $(window).scrollTop();
			$.BLOG.toc().scroll(top);
			$.BLOG.search().zoom();
		});
	}
};

$.BLOG.init();