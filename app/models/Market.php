<?php

class Market extends Eloquent {
	protected $fillable = array('id','name');
	protected $table = 'markets';
	public static $rules = array();
}
