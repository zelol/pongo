<?php

use lib\validation\UserCreateValidator as UserCreateValidator;
use lib\validation\UserLoginValidator as UserLoginValidator;
use lib\gestion\UserGestion as UserGestion;

class AuthController extends BaseController {

    protected $login_validation;
    protected $create_validation;
    protected $user_gestion;

	public function __construct(
		UserLoginValidator $login_validation,
		UserCreateValidator $create_validation,
		UserGestion $user_gestion
		)
	{
		parent::__construct();
		$this->create_validation = $create_validation;
		$this->login_validation = $login_validation;
		$this->user_gestion = $user_gestion;

	}

	public function getLogin()
	{
		return View::make('pages.login');
	}

	public function postLogin()
	{
		if ($this->login_validation->fails()) {
		  return Redirect::to('auth/login')
		  ->withErrors($this->login_validation->errors())
		  ->withInput();
		} else {
			$user = array(
				'name' => Input::get('name'),
				'password' => Input::get('password')
			);
			if(Auth::attempt($user, Input::get('souvenir'))) {
				return Redirect::intended('dashboard');
			}
		    return Redirect::to('auth/login')
		    ->with('pass', 'Le mot de passe n\'est pas correct !')
		    ->withInput();
		}
	}

	public function getInscription(){

		return View::make('inscription');

	}

	public function postInscription(){

		if ($this->create_validation->fails()) {
		  return Redirect::to('auth/inscription')
		  ->withInput()
		  ->withErrors($this->create_validation->errors());
		} else {
			$this->user_gestion->store();
			return Redirect::to('auth/inscriptionok')
			->with('ok','L\'utilisateur a bien été créé.');
		}
	}

	public function getInscriptionok(){
		return View::Make('inscription_ok');
	}

	public function getLogout()
	{
		Auth::logout();
		return Redirect::to('auth/login');
	}



}