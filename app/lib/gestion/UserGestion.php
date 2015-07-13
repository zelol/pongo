<?php 
namespace lib\gestion;

use User;
use Input;
use Hash;
use Tipster;

class UserGestion implements UserGestionInterface {

    private function save($user)
	{
		$user->name = Input::get('name');
		$user->email = Input::get('email');		
		$user->abonnement = 'free';
		$user->devise = 'aucun';
		$user->timezone = 'Europe/Paris';
		$user->langue = 'fr';
		$user->type_cote = 'euro';
		$user->compteur_pari = 0;
		$user->save();
        $id = $user->id;

        //creation du tipster par defaut
		$tispter = new Tipster;
		$tispter->name = $user->name;
		$tispter->followtype = 'n';
        $user->tipsters()->save($tispter);
	}

	public function index($n)
	{
		$users = User::paginate($n);
		return compact('users');
	}

	public function store()
	{
		$user = new User;		
		$user->password = Hash::make(Input::get('password'));
		$this->save($user);
	}

	public function show($id)
	{
		$user = User::find($id);
		return compact('user');
	}

	public function edit($id)
	{
		$user = User::find($id);
		return compact('user');
	}

	public function update($id)
	{
		$user = User::find($id);
		$this->save($user);
	}

	public function destroy($id)
	{
		User::find($id)->delete();
	}

}