<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateCompetitionEquipeTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('competition_equipe', function(Blueprint $table) {
			$table->increments('id');
			$table->integer('competition_id')->unsigned();
			$table->unsignedInteger('sport_id');
			$table->foreign('competition_id')->references('id')->on('competitions')
				->onDelete('cascade')
				->onUpdate('restrict');
			$table->foreign('sport_id')->references('id')->on('sports')
				->onDelete('cascade')
				->onUpdate('restrict');
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('competition_equipe');
	}

}
