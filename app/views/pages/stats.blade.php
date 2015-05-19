@extends('layouts.default')

@section('content')
    <div class="page-head">
        <div class="container-fluid">
            <!-- BEGIN PAGE TITLE -->
            <div class="page-title">
                <h1>Statistiques </h1>
            </div>
            <!-- END PAGE TITLE -->
        </div>
    </div>
    <div class="page-content">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-9">
                    <div class="portlet light">
                        <div class="portlet-title">
                            <div class="caption">
                                <i class="icon-pin font-yellow-casablanca"></i>
                                <span class="caption-subject font-yellow-casablanca bold uppercase">Statistiques</span>
                            </div>
                            <div class="tools">
                                <a href="javascript:;" class="collapse" data-original-title="" title="">
                                </a>
                                <a href="#portlet-config" data-toggle="modal" class="config" data-original-title=""
                                   title="">
                                </a>
                            </div>
                        </div>
                        <div class="portlet-body">

                            <div class="tabbable-line">
                                <ul class="nav nav-tabs ">
                                    <li  class="active">
                                        <a href="#tab_general" data-toggle="tab">
                                            General</a>
                                    </li>
                                    <li  class="">
                                        <a href="#tab_tipster" data-toggle="tab">
                                            Tipsters</a>
                                    </li>
                                    <li  class="">
                                        <a href="#tab_bookmaker" data-toggle="tab">
                                            Paris</a>
                                    </li>
                                </ul>
                                <div class="tab-content">

                                    <div class="tab-pane active fade in" id="tab_general">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div id="chartPie1"></div>
                                            </div>
                                            <div class="col-md-6">
                                                <div id="chartDiv"></div>
                                            </div>
                                        </div>


                                        <div id="chartData2"></div>

                                    </div>
                                    <div class="tab-pane active fade in" id="tab_tipster">
                                        <div class="row">
                                            <div class="col-md-2">
                                                <label for="tipster_stats">Selectionez un tipster</label>
                                                <select name="tipster_stats" id="tipster_stats" class="form-control input-sm"></select>
                                            </div>
                                        </div>
                                        <div id="tipsters-stats-row" class="">
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div id="tipsterPie1">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div class="tab-pane active fade in" id="tab_bookmaker">

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    </div>
    </div>

@stop

