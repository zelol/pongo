<?php

	class BaseController extends Controller
	{
		protected $currentUser;
		public function __construct()
		{
			$this->currentUser = Auth::User();
			View::share(['user' => $this->currentUser]);
			View::share(['dt' => Carbon::now()]);

			$this->beforeFilter(function () {
				//Event::fire('clockwork.controller.start');
			});

			$this->afterFilter(function () {
				//Event::fire('clockwork.controller.end');
			});
		}
	}
