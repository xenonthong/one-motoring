Vue.component('header-nav', {
	template: `
		<header class="header">
			<div class="container">
				<div class="clearfix">
					<div class="logo-pri">
						<img src="img/primary_logo.jpg" alt="One Motoring">
					</div>
					<div class="logo-sec">
						<img src="img/secondary_logo.jpg" alt="Brought to you by Land Transport Authority">
					</div>
				</div>
				<nav class="nav grid-collapsed">
					<ul class="nav__links col-lg-8">
						<li class="nav__link active"><a href="/"><i class="fa fa-home" aria-hidden="true"></i></a></li>
						<li class="nav__link"><a href="javascript:void(0);">BUYING</a></li>
						<li class="nav__link"><a href="javascript:void(0);">OWNING</a></li>
						<li class="nav__link"><a href="javascript:void(0);">DRIVING</a></li>
						<li class="nav__link"><a href="javascript:void(0);">SELLING/DE-REGISTERING</a></li>
						<li class="nav__link nav__link--special"><a href="javascript:void(0);">eServices</a></li>
					</ul>
					<div class="col-lg-4">
						<a class="btn btn--warning right" href="javascript:void(0);"><i class="fa fa-user" aria-hidden="true"></i> Login</a>

						<label class="search-label right" for="search">
							<input class="search-input" id="search" name="search" type="text" placeholder="Search">
							<i class="fa fa-search" aria-hidden="true"></i>
						</label>
					</div>
				</nav>
			</div>
		</header>
	`
});