function automaticBetForm() {

    var form = $('#automaticform-add');
    var form_string = '#automaticform-add';

    function ajouterTicket() {
        form.submit(function (e) {
            e.preventDefault();
            var data = $(this).serialize();
            var linesnum = form.find('.betline').length;
            if (linesnum == '') {
                swal({
                    title: "Erreur!",
                    text: "Ajoutez au moins une selection pour pouvoir valider le ticket!",
                    type: "warning",
                    confirmButtonText: "OK"
                });
            } else if (linesnum >= 1) {
                //serialize doesnt retrieve .text() of an input
                var ticketABCD;
                var ticketGratuit;
                var ticketLongTerme;
                if (form.find("#ticketABCD").is(":checked")) {ticketABCD = 1;}else{ticketABCD = 0;}
                if (form.find("#ticketGratuit").is(":checked")) {ticketGratuit = 1;}else{ticketGratuit = 0;}
                if (form.find("#ticketLongTerme").is(":checked")) {ticketLongTerme = 1;}else{ticketLongTerme = 0;}

                $.ajax({
                    url: 'encourspari/auto',
                    type: 'post',
                    data: data + '&linesnum=' + linesnum + '&ticketABCD=' + ticketABCD + '&ticketGratuit=' + ticketGratuit + '&ticketLongTerme=' + ticketLongTerme,
                    dataType: 'json',
                    success: function (json) {
                        var keyname;
                        if (json.etat == 0) {
                            if ($.isArray(json.msg)) {
                                for (key in json.msg) {
                                    keyname = key;
                                    toastr.error(json.msg[keyname], 'Erreur:');
                                }
                            } else {
                                toastr.error(json.msg, 'Erreur:');
                            }

                        } else if (json.etat == 1) {
                            resetAutomaticForm();
                            refreshSelections();
                            toastr.success(json.msg, 'Pari');
                            loadParisEnCours();
                            loadBookmakersOnDashboard();
                        }
                    },
                    error: function (json) {
                        console.log('erreur ajout de pari');
                    }
                });
            }
        });
    }

    // fonction de rafraichissement.
    function refreshSelections() {
        var suivi = form.find('#followtypeinputdashboard').val();
        $.ajax({
            url: 'selections',
            success: function (data){
                form.find('#automatic-selections').html(data.vue);
                supprimerSelection();
                $.ajax({
                    url: 'allbookmakers',
                    dataType: 'json',
                    success: function (data2) {
                        form.find('.bookinputdashboard').select2({
                            minimumResultsForSearch: Infinity,
                            cache: true,
                            data: data2
                        });

                        if(suivi == 'à blanc'){
                            form.find('.bookinputdashboard').val("").trigger("change");
                            form.find('#accountsinputdashboard').val("").trigger("change");
                        }else{
                            form.find('.bookinputdashboard').prop('disabled', false);
                            form.find('#accountsinputdashboard').prop('disabled', false);
                            form.find('.bookinputdashboard').val(data.bookmaker_id).trigger("change");
                        }
                        gestionTipsters(data.bookmaker_id);
                    }
                });
                if (data.msg.length > 0){
                    swal({
                        title: "Erreur!",
                        text: data.msg,
                        type: "warning",
                        confirmButtonText: "OK"
                    });
                }
            },
            error: function (data) {
                form.find('#automatic-selections').html('<p>impossible de récuperer les selections</p>');
            }
        });
    }

    // rafrachais les selections automatiquement toutes les 10 sec.
    function refreshSelectionsAuto() {
        form.find('.bookinputdashboard').val("").trigger("change");
        form.find('#accountsinputdashboard').val("").trigger("change");
    }

    // supprime la selection.
    function supprimerSelection(){
        form.find('#automatic-selections .boutonsupprimer').on('click', function (e) {
            e.preventDefault();
            var parent = $(this).parents('tr');
            var id = parent.find(".selection_id").text();
            $.ajax({
                url: 'coupon/' + id,
                method: 'delete',
                success: function (data) {
                    refreshSelections();
                    form.find('.bookinputdashboard').val(null).trigger("change");
                    form.find('select[name="accountsinputdashboard"]').val(null).trigger('change');
                },
                error: function (data) {
                }
            });
        });
    }

    // rafraichis les selections.*/
    function refreshSelectionsClick() {
        form.find('#selection-refresh').click(function (e) {
            e.preventDefault();
            refreshSelections();
        });
    }

    function typestakechoice() {
        var select = form.find('select[name=typestakeinputdashboard]');
        form.find('.typestakeflat').hide();
        select.on('change', function () {
            if ($(this).val() == 'f') {
                form.find('.typestakeunites').hide();
                form.find('#stakeunitinputdashboard').val('');
                form.find('.typestakeflat').show();
            } else {
                form.find('.typestakeunites').show();
                form.find('.typestakeflat').hide();
                form.find('#amountinputdashboard').val('');
            }
        });
    }

    function gestionTipsters(bookmaker_id){
        form.find('#tipstersinputdashboard').select2({
            allowClear: true,
            placeholder: "Choisir un tipster",
            cache: true,
            ajax: {
                url: 'tipsters',
                dataType: 'json',
                data: function (params) {
                    return {
                        q: params.term // search term
                    };
                },
                processResults: function (data) {
                    return {
                        results: data
                    };
                }
            }
        });
        form.find('#tipstersinputdashboard').change(function () {
            var tipster_id = $(form_string + ' #tipstersinputdashboard').val();
            var followtype = $(form_string + ' #followtypeinputdashboard');
            var montant_par_unite = $(form_string + ' #amountperunit');

            // remise a zero des champs liés.
            $(form_string + ' #stakeunitinputdashboard').val('');
            $(form_string + ' #amountperunit').val('');
            $(form_string + ' #amountconversion').val('0');
            $(form_string + ' #amountinputdashboard').val('');
            $(form_string + ' #flattounitconversion').val('0');
            $.ajax({
                url: 'infosTipster',
                data: 'tipster_id=' + tipster_id,
                dataType: 'json',
                success: function (data) {
                    form.find('.bookinputdashboard').val(null).trigger("change");
                    form.find('#accountsinputdashboard').val(null).trigger("change");
                    followtype.val('');
                    if (data.followtype == 'n') {
                        followtype.val('normal');
                        form.find(".bookinputdashboard").prop("disabled", false);
                        form.find("#accountsinputdashboard").prop("disabled", false);
                        form.find('.bookinputdashboard').val(bookmaker_id).trigger("change");
                        form.find('#accountsinputdashboard').val(null).trigger("change");
                    } else if (data.followtype == 'b') {
                        followtype.val('à blanc');
                        form.find('.bookinputdashboard').val(null).trigger("change");
                        form.find('#accountsinputdashboard').val(null).trigger("change");
                        form.find('.bookinputdashboard').prop('disabled', true);
                        form.find('#accountsinputdashboard').prop('disabled', true);
                    }else{
                        form.find(".bookinputdashboard").prop("disabled", false);
                        form.find("#accountsinputdashboard").prop("disabled", false);
                        form.find('.bookinputdashboard').val(bookmaker_id).trigger("change");
                        form.find('#accountsinputdashboard').val(null).trigger("change");

                    }
                    var mt = Number(data.montant_par_unite);
                    isNaN(mt) ?  montant_par_unite.val('') : montant_par_unite.val(mt);
                },
                error: function (data) {
                }
            });
        });
    }

    function resetAutomaticForm(){
        form.find('#stakeunitinputdashboard').val(null).trigger("change");
        form.find('#amountinputdashboard').val(null).trigger("change");
        form.find('#accountsinputdashboard').val(null).trigger("change");
        form.find('input:checkbox').prop('checked', false);
    }

    var type_stake = [{ id: 'u', text: 'en unités' }, { id: 'f', text: 'en devise' }];

    form.find('#typestakeinputdashboard').select2({
        minimumResultsForSearch: Infinity,
        cache: true,
        data: type_stake
    });


    form.find('#accountsinputdashboard').select2({
        allowClear: true,
        placeholder: "Choisir un compte",
        cache: true,
        minimumResultsForSearch: Infinity,
        ajax: {
            url: 'accounts',
            dataType: 'json',
            data: function (params) {
                return {
                    book_id: $(form_string + ' .bookinputdashboard').val(),
                    q: params.term // search term
                };
            },
            processResults: function (data) {
                return {
                    results: data
                };
            }
        }
    });

    // chargements des paris abcd dans le select input.
    form.find('#serieinputdashboard').select2({
        allowClear: true,
        placeholder: "Choisir une serie",
        tags: true,
        cache: true,
        ajax: {
            url: 'parisabcd',
            dataType: 'json',
            data: function (params) {
                return {
                    q: params.term // search term
                };
            },
            processResults: function (data) {
                // parse the results into the format expected by Select2.
                // since we are using custom formatting functions we do not need to
                // alter the remote JSON data
                /* var newData = [];
                 $.each(data, function (index,value) {
                 newData.push({
                 id:value.id,  //id part present in data
                 text: value.text  //string to be displayed
                 });
                 });*/
                return {
                    results: data
                };
            }
        }
    });

    form.find('#letterinputdashboard').select2({
        allowClear: true,
        placeholder: "Choisir une lettre",
        cache: true,
        minimumResultsForSearch: Infinity,
        ajax: {
            url: 'lettreabcd',
            dataType: 'json',
            data: function (params) {
                return {
                    serie_nom: $(form_string + ' #serieinputdashboard').val(),
                    q: params.term // search term
                };
            },
            processResults: function (data) {
                console.log(data);
                // parse the results into the format expected by Select2.
                // since we are using custom formatting functions we do not need to
                // alter the remote JSON data
                var newData = [];
                $.each(data, function (index, value) {
                    newData.push({
                        id: value,  //id part present in data
                        text: value  //string to be displayed
                    });
                });
                return {
                    results: newData
                };
            }
        }
    });

    form.find('#stakeunitinputdashboard').keyup(function () {
        var montant_par_unite = $(form_string + ' #amountperunit').val();
        var unites = Number($(form_string + ' #stakeunitinputdashboard').val());
        var res = Number(montant_par_unite) * Number(unites);
        var res_final = Math.round(res * 100) / 100;
        isNaN(res_final) || res_final < 0 ? $(form_string + '#amountconversion').val('0') : $(form_string + ' #amountconversion').val(res_final);
    });

    form.find('#amountinputdashboard').keyup(function () {
        var montant_par_unite = $(form_string + ' #amountperunit').val();
        var montant = $(form_string + ' #amountinputdashboard').val();
        var res = Number(montant) / Number(montant_par_unite);
        var res_final = Math.round(res * 100) / 100;
        isNaN(res_final) || res_final < 0 || montant_par_unite == '' ? $(form_string + ' #flattounitconversion').val('0') : $(form_string + ' #flattounitconversion').val(res_final);
    });

    form.find('#serieinputdashboard').prop('disabled', true);
    form.find('#letterinputdashboard').prop('disabled', true);
    form.find('.methodeabcdcontainer').addClass("hide");
    //form.find('.bookmakercontainer').addClass("hide");

    form.find('#ticketABCD').on('click', function(){
        if ( $(this).is(':checked') ) {
            form.find('.methodeabcdcontainer').removeClass("hide");
            form.find('#serieinputdashboard').prop('disabled', false);
            form.find('#letterinputdashboard').prop('disabled', false);
        }
        else {
            form.find('.methodeabcdcontainer').addClass("hide");
            form.find('#serieinputdashboard').prop('disabled', true);
            form.find('#letterinputdashboard').prop('disabled', true);
        }
    });

    // initialisation
    //$(".bookinputdashboard").prop("disabled", true);
    //$("#accountsinputdashboard").prop("disabled", true);
    refreshSelectionsClick();
    refreshSelections();
    ajouterTicket();
    typestakechoice();
}




