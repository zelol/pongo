function loadBookmakersOnDashboard(){$.ajax({url:"comptes",type:"get",success:function(e){$("#comptes_par_bookmakers").html(e)},error:function(e){console.log("la récuperation des comptes bookmakers vers le dashboard n'a pas fonctionné")}})}function loadGeneralRecapsOnDashboard(){var e=$("#defaultrange input").val();$.ajax({url:"generalrecap",type:"get",data:{range:e},success:function(e){$("#tipsters-general-recap").html(e.tipsters_view),$("#total-recap-profits-devise").html(e.total_profit_devise),$("#total-recap-profits-unites").html(e.total_profit_unites)}})}function addManualCouponSelection(){function e(){q.addClass("hidden"),D.addClass("hidden"),z.addClass("hidden"),L.addClass("hidden"),X.addClass("hidden"),Z.addClass("hidden"),le.addClass("hidden"),ie.prop("disabled",!0)}function a(){se.click(function(){le.toggleClass("hidden"),se.is(":checked")?(ie.prop("disabled",!1),se.parents("span").addClass("checked")):(ie.prop("disabled",!0),se.parents("span").removeClass("checked"))})}function r(){p.find(".sportinputdashboard").select2({allowClear:!0,placeholder:"Choisir un sport",cache:!0,ajax:{url:"sports",dataType:"json",data:function(e){return{q:e.term}},processResults:function(e){return{results:e}}}}).change(function(){A.html(""),k.val("").trigger("change"),x.val("").trigger("change"),j.val("").trigger("change"),A.val("").trigger("change"),T.val("").trigger("change"),B.val("").trigger("change"),I.val("").trigger("change"),G.val("").trigger("change"),W.val("").trigger("change"),K.val("").trigger("change")})}function t(){p.find(".competitioninputdashboard").select2({allowClear:!0,placeholder:"Choisir une competition",cache:!0,ajax:{url:"competitions",dataType:"json",data:function(e){return{sport_id:p.find(".sportinputdashboard").val(),q:e.term}},processResults:function(e){return{results:e}}}})}function n(){p.find(".marketinputdashboard").select2({allowClear:!0,placeholder:"Choisir un type de pari",cache:!0,ajax:{url:"markets",dataType:"json",data:function(e){return{sport_id:p.find(".sportinputdashboard").val(),q:e.term}},processResults:function(e){return{results:e}}}}).change(function(){l(),c();var e=p.find(".marketinputdashboard").val();""==e?(D.fadeOut().addClass("hidden"),q.fadeOut().addClass("hidden")):(D.fadeIn().removeClass("hidden"),q.fadeIn().removeClass("hidden")),7==e?(A.select2({tags:!0,allowClear:!0,placeholder:"Nom de l'équipe ou du joueur vainqueur"}),F.html("Vainqueur <span class='glyphicon glyphicon-save'></span>")):8==e?(T.html('<option value=""></option>').val("").trigger("change").prop("disabled",!1),B.html('<option value=""></option>').val("").trigger("change").prop("disabled",!1),q.fadeIn().removeClass("hidden"),picks=[{id:"Home",text:"Domicile"},{id:"Away",text:"Exterieur"},{id:"Draw",text:"Match Nul"}],A.select2({data:picks,minimumResultsForSearch:1/0}),F.html("Résultat du match"),Q.text("Equipe Handicap"),Z.fadeIn().removeClass("hidden"),Z.addClass("col-md-6"),participantNameList=[{id:"Home",text:"Domicile"},{id:"Away",text:"Exterieur"}],K.select2({data:participantNameList,minimumResultsForSearch:1/0,placeholder:"Equipe/Joueur"}),H.html('Handicap <span class="glyphicon glyphicon-save"></span>'),z.fadeIn().removeClass("hidden"),z.addClass("col-md-6"),I.html('<option value=""></option>'),I.select2({tags:!0,allowClear:!0,placeholder:"2.5 ou -2.5"})):9==e?(picks=[{id:"1X",text:"1X"},{id:"X2",text:"X2"},{id:"12",text:"12"}],A.select2({data:picks,minimumResultsForSearch:1/0}),T.html('<option value=""></option>').val("").trigger("change").prop("disabled",!1),B.html('<option value=""></option>').val("").trigger("change").prop("disabled",!1),F.html("Choix")):43==e?(E.removeClass("hidden"),O.removeClass("hidden"),picks=[{id:"Home",text:"Home"},{id:"Away",text:"Away"},{id:"Draw",text:"Draw"}],A.select2({data:picks,minimumResultsForSearch:1/0})):46==e?(E.removeClass("hidden"),O.removeClass("hidden"),picks=[{id:"Home",text:"Home"},{id:"Away",text:"Away"}],A.select2({data:picks,minimumResultsForSearch:1/0})):48==e?(E.removeClass("hidden"),O.removeClass("hidden"),picks=[{id:"Home",text:"Home"},{id:"Away",text:"Away"}],A.select2({data:picks,minimumResultsForSearch:1/0}),z.removeClass("hidden"),H.text("Handicap"),I.select2({placeholder:"-2.5 ou 2.5",tags:!0})):(p.find(".pickinputdashboard").html(""),p.find(".pickinputdashboard").val("").trigger("change"))})}function o(){p.find(".scopeinputdashboard").select2({allowClear:!0,placeholder:"Choisir une portée",cache:!0,ajax:{url:"scopes",dataType:"json",data:function(e){return{sport_id:p.find(".sportinputdashboard").val(),q:e.term}},processResults:function(e){return{results:e}}}})}function s(){p.find(".pickinputdashboard").select2()}function i(){p.find(".team1inputdashboard").select2({allowClear:!0,placeholder:"Equipe/Joueur Domicile",cache:!0,ajax:{url:"equipes",dataType:"json",data:function(e){return{sport_id:p.find(".sportinputdashboard").val(),q:e.term}},processResults:function(e){return{results:e}}}}),p.find(".team2inputdashboard").select2({allowClear:!0,placeholder:"Equipe/Joueur Exterieur",cache:!0,ajax:{url:"equipes",dataType:"json",data:function(e){return{sport_id:p.find(".sportinputdashboard").val(),q:e.term}},processResults:function(e){return{results:e}}}})}function d(){p.submit(function(e){e.preventDefault();var a,r=p.serialize();a=p.find("#live").is(":checked")?1:0,$.ajax({url:"manualcoupon",type:"post",data:r+"&live="+a,success:function(e){0==e.etat?(e.errors.date?(p.find("#date_container").addClass("has-error"),p.find("#date_error").html(e.errors.date)):(p.find("#date_container").removeClass("has-error"),p.find("#date_error").empty()),e.errors.sport?(p.find("#sport_container").addClass("has-error"),p.find("#sport_error").html(e.errors.sport)):(p.find("#sport_container").removeClass("has-error"),p.find("#sport_error").empty()),e.errors.competition?(p.find("#competition_container").addClass("has-error"),p.find("#competition_error").html(e.errors.competition)):(p.find("#competition_container").removeClass("has-error"),p.find("#competition_error").empty()),e.errors.market?(p.find("#market_container").addClass("has-error"),p.find("#market_error").html(e.errors.market)):(p.find("#market_container").removeClass("has-error"),p.find("#market_error").empty()),e.errors.scope?(p.find("#scope_container").addClass("has-error"),p.find("#scope_error").html(e.errors.scope)):(p.find("#scope_container").removeClass("has-error"),p.find("#scope_error").empty()),e.errors.team1?(p.find("#team1_container").addClass("has-error"),p.find("#team1_error").html(e.errors.team1)):(p.find("#team1_container").removeClass("has-error"),p.find("#team1_error").empty()),e.errors.team2?(p.find("#team2_container").addClass("has-error"),p.find("#team2_error").html(e.errors.team2)):(p.find("#team2_container").removeClass("has-error"),p.find("#team2_error").empty()),e.errors.pick?(p.find("#pick_container").addClass("has-error"),p.find("#pick_error").html(e.errors.pick)):(p.find("#pick_container").removeClass("has-error"),p.find("#pick_error").empty()),e.errors.odd_doubleParam?(p.find("#odd_doubleParam_container").addClass("has-error"),p.find("#odd_doubleParam_error").html(e.errors.odd_doubleParam)):(p.find("#odd_doubleParam_container").removeClass("has-error"),p.find("#odd_doubleParam_error").empty()),e.errors.odd_doubleParam2?(p.find("#odd_doubleParam2_container").addClass("has-error"),p.find("#odd_doubleParam2_error").html(e.errors.odd_doubleParam2)):(p.find("#odd_doubleParam2_container").removeClass("has-error"),p.find("#odd_doubleParam2_error").empty()),e.errors.odd_doubleParam3?(p.find("#odd_doubleParam3_container").addClass("has-error"),p.find("#odd_doubleParam3_error").html(e.errors.odd_doubleParam3)):(p.find("#odd_doubleParam3_container").removeClass("has-error"),p.find("#odd_doubleParam3_error").empty()),e.errors.bookmaker?(p.find("#bookmaker_container").addClass("has-error"),p.find("#bookmaker_error").html(e.errors.bookmaker)):(p.find("#bookmaker_container").removeClass("has-error"),p.find("#bookmaker_error").empty()),e.errors.odd_value?(p.find("#odd_container").addClass("has-error"),p.find("#odd_error").html(e.errors.odd_value)):(p.find("#odd_container").removeClass("has-error"),p.find("#odd_error").empty())):(refreshSelections(),m.modal("hide"))}})})}function l(){j.html("").val("").trigger("change"),D.addClass("hidden"),D.removeClass("has-error"),S.empty(),A.html("").val("").trigger("change"),q.addClass("hidden"),q.removeClass("has-error"),M.empty(),I.html("").val("").trigger("change"),z.addClass("hidden"),z.removeClass("has-error"),Y.empty(),G.html("").val("").trigger("change"),L.addClass("hidden"),L.removeClass("has-error"),V.empty(),W.html("").val("").trigger("change"),X.addClass("hidden"),X.removeClass("has-error"),J.empty(),K.html("").val("").trigger("change"),Z.addClass("hidden"),Z.removeClass("has-error"),U.empty()}function c(){T.html("").val("").trigger("change").prop("disabled",!0),B.html("").val("").trigger("change").prop("disabled",!0)}function u(){$("#manualBetAddModal").on("hidden.bs.modal",function(){f.val(null).trigger("change"),h.removeClass("has-error"),g.empty(),v.val(null).trigger("change"),b.removeClass("has-error"),C.empty(),k.val(null).trigger("change"),_.removeClass("has-error"),y.empty(),x.val(null).trigger("change"),w.removeClass("has-error"),P.empty(),j.val(null).trigger("change"),D.removeClass("has-error"),S.empty(),T.val(null).trigger("change"),E.removeClass("has-error"),R.empty(),B.val(null).trigger("change"),O.removeClass("has-error"),N.empty(),A.val(null).trigger("change"),q.removeClass("has-error"),M.empty(),I.val(null).trigger("change"),z.removeClass("has-error"),Y.empty(),G.val(null).trigger("change"),L.removeClass("has-error"),V.empty(),W.val(null).trigger("change"),X.removeClass("has-error"),J.empty(),K.val(null).trigger("change"),Z.removeClass("has-error"),U.empty(),te.val(null).trigger("change"),oe.removeClass("has-error"),ne.empty(),ae.val(null).trigger("change"),ee.removeClass("has-error"),re.empty(),ae.val(null),le.removeClass("has-error").addClass("hidden"),de.empty(),ie.val("").prop("disabled",!0),se.parents("span").removeClass("checked"),se.prop("checked",!1)})}var p=($("#automaticform-add"),$("#manualselectionform-add")),m=$("#manualBetAddModal").modal("hide"),f=p.find('input[name="date"]'),h=p.find("#date_container"),g=p.find("#date_error"),v=p.find('select[name="sport"]'),b=p.find("#sport_container"),C=p.find("#sport_error"),k=p.find('select[name="competition"]'),_=p.find("#competition_container"),y=p.find("#competition_error"),x=p.find('select[name="market"]'),w=p.find("#market_container"),P=p.find("#market_error"),j=p.find('select[name="scope"]'),D=p.find("#scope_container"),S=p.find("#scope_error"),T=p.find('select[name="team1"]'),E=p.find("#team1_container"),R=p.find("#team1_error"),B=p.find('select[name="team2"]'),O=p.find("#team2_container"),N=p.find("#team2_error"),A=p.find('select[name="pick"]'),q=p.find("#pick_container"),F=q.find("label"),M=p.find("#pick_error"),I=p.find('select[name="odd_doubleParam"]'),z=p.find("#odd_doubleParam_container"),H=z.find("label"),Y=p.find("#odd_doubleParam_error"),G=p.find('select[name="odd_doubleParam2"]'),L=p.find("#odd_doubleParam2_container"),V=p.find("#odd_doubleParam2_error"),W=p.find('select[name="odd_doubleParam3"]'),X=p.find("#odd_doubleParam3_container"),J=p.find("#odd_doubleParam3_error"),K=p.find('select[name="odd_participantParameterName"]'),Z=p.find("#odd_participantParameterName_container"),Q=Z.find("label"),U=p.find("#odd_participantParameterName_error"),ee=p.find("#bookmaker_container"),ae=p.find('select[name="bookmaker"]'),re=p.find("#bookmaker_error"),te=p.find('input[name="odd_value"]'),ne=p.find("#odd_error"),oe=p.find("#odd_container"),se=p.find("#live"),ie=p.find('input[name="score"]'),de=p.find("#score_error"),le=p.find("#score_container");ae.select2({allowClear:!0,placeholder:"Choisir un bookmaker",cache:!0,ajax:{url:"bookmakers",dataType:"json",data:function(e){return{q:e.term}},processResults:function(e){return{results:e}}}}),e(),$.fn.modal.Constructor.prototype.enforceFocus=function(){},f.datetimepicker({format:"dd-mm-yyyy hh:ii",autoclose:!0,todayBtn:!0,language:"fr",pickerPosition:"bottom-left"}),u(),d(),a(),r(),t(),n(),o(),s(),i()}function refreshSelections(){var e=$("#automaticform-add");$.ajax({url:"selections",success:function(a){e.find("#automatic-selections").html(a.vue),supprimerSelection(),misAjourCompteBookmaker()},error:function(a){e.find("#automatic-selections").html("<p>impossible de récuperer les selections</p>")}})}function supprimerSelection(){var e=$("#automaticform-add");e.find("#automatic-selections .boutonsupprimer").on("click",function(e){e.preventDefault();var a=$(this).parents("tr"),r=a.find(".selection_id").text();$.ajax({url:"coupon/"+r,method:"delete",success:function(e){refreshSelections()}})})}function misAjourCompteBookmaker(){$.ajax({url:"updateaccountform",success:function(e){console.log(e),console.log(e.length>0),$("#automaticform-add").find("#accountsinputdashboard").html(""),e.length>0?$("#automaticform-add").find("#accountsinputdashboard").select2({data:e,minimumResultsForSearch:1/0}).val(e[0].id).trigger("change"):$("#automaticform-add").find("#accountsinputdashboard").select2({minimumResultsForSearch:1/0,placeholder:"Choisir un compte de bookmaker"}).val("").trigger("change").html("")}})}function gestionTicket(){function e(){r(),P.on("click",function(){$(this).is(":checked")?(y.removeClass("hide"),x.val(null).trigger("change").prop("disabled",!1),w.val(null).trigger("change").prop("disabled",!1)):(y.addClass("hide"),x.val(null).trigger("change").prop("disabled",!0),w.val(null).trigger("change").prop("disabled",!0))})}function a(){c.submit(function(e){e.preventDefault(),m.prop("disabled",!1);var a=$(this).serialize(),t=c.find(".betline").length;if(""==t)swal({title:"Erreur!",text:"Ajoutez au moins une selection pour pouvoir valider le ticket!",type:"warning",confirmButtonText:"OK"});else if(t>=1){var n,o,s;n=P.is(":checked")?1:0,o=j.is(":checked")?1:0,s=D.is(":checked")?1:0,$.ajax({url:"encourspari/auto",type:"post",data:a+"&linesnum="+t+"&ticketABCD="+n+"&ticketGratuit="+o+"&ticketLongTerme="+s,dataType:"json",success:function(e){var a;if(0==e.etat)if(console.log(e.msg),console.log($.isArray(e.msg)),$.isArray(e.msg))for(key in e.msg)a=key,toastr.error(e.msg[a],"Erreur:");else toastr.error(e.msg,"Erreur:");else 1==e.etat&&(p.val(null).trigger("change"),r(),refreshSelections(),toastr.success(e.msg,"Pari"),loadParisEnCours(),loadBookmakersOnDashboard())},error:function(e){console.log("erreur ajout de pari")},complete:function(){m.prop("disabled",!0)}})}})}function r(){m.val(null).trigger("change").prop("disabled",!0),f.val(null),h.val("u").trigger("change"),b.val(0).prop("disabled",!0),k.val(0).prop("disabled",!0),v.val(0),_.val(null).trigger("change").html("").prop("disabled",!0),y.addClass("hide"),x.val(null).trigger("change").prop("disabled",!0),w.val(null).trigger("change").prop("disabled",!0),S.addClass("hidden"),T.addClass("hidden"),E.addClass("hidden"),t()}function t(){P.prop("checked",!1),P.parents("span").removeClass("checked"),j.prop("checked",!1),j.parents("span").removeClass("checked"),D.prop("checked",!1),D.parents("span").removeClass("checked")}function n(){c.find("#selection-refresh").click(function(e){e.preventDefault(),refreshSelections()})}function o(){p.select2({allowClear:!0,placeholder:"Choisir un tipster",cache:!0,ajax:{url:"tipsters",dataType:"json",data:function(e){return{q:e.term}},processResults:function(e){return{results:e}}}}).change(function(){var e=p.select2("data");b.val(0),k.val(0),v.val(0),""==p.val()?(r(),m.val(null).trigger("change"),f.val(null),S.addClass("hidden"),T.addClass("hidden"),E.addClass("hidden")):(S.fadeIn().removeClass("hidden"),T.fadeIn().removeClass("hidden"),E.fadeIn().removeClass("hidden"),"n"==e[0].followtype?(m.val("n").trigger("change"),_.prop("disabled",!1),T.removeClass("hidden"),misAjourCompteBookmaker()):"b"==e[0].followtype&&(m.val("b").trigger("change"),_.prop("disabled",!0),T.addClass("hidden")));var a=Number(e[0].montant_par_unite);f.val(isNaN(a)?"":a)}),m.select2({cache:!0,minimumResultsForSearch:1/0,data:[{id:"",text:""},{id:"n",text:"normal"},{id:"b",text:"à blanc"}]}).prop("disabled",!0)}function s(){var e=[{id:"u",text:"en unités"},{id:"f",text:"en devise"}];h.select2({minimumResultsForSearch:1/0,cache:!0,data:e}),C.hide(),h.on("change",function(){"f"==h.val()?(v.val(0).prop("disabled",!0),b.val(0),k.val(0).prop("disabled",!1),g.hide(),C.show()):(k.val(0).prop("disabled",!0),v.val(0).prop("disabled",!1),b.val(0),g.show(),C.hide())})}function i(){_.select2({allowClear:!0,placeholder:"Choisir un compte",cache:!0,minimumResultsForSearch:1/0,ajax:{url:"accounts",dataType:"json",data:function(e){return{book_id:$(u+" .bookinputdashboard").val(),q:e.term}},processResults:function(e){return{results:e}}}})}function d(){x.select2({allowClear:!0,placeholder:"Choisir une serie",tags:!0,cache:!0,ajax:{url:"parisabcd",dataType:"json",data:function(e){return{q:e.term}},processResults:function(e){return{results:e}}}}),w.select2({allowClear:!0,placeholder:"Choisir une lettre",cache:!0,minimumResultsForSearch:1/0,ajax:{url:"lettreabcd",dataType:"json",data:function(e){return{serie_nom:x.val(),q:e.term}},processResults:function(e){console.log(e);var a=[];return $.each(e,function(e,r){a.push({id:r,text:r})}),{results:a}}}})}function l(){v.keyup(function(){var e=f.val(),a=Number(v.val()),r=Number(e)*Number(a),t=Math.round(100*r)/100;b.val(isNaN(t)||0>t?0:t)})}var c=$("#automaticform-add"),u="#automaticform-add",p=c.find("#tipstersinputdashboard"),m=c.find("#followtypeinputdashboard"),f=c.find("#amountperunit"),h=c.find("#typestakeinputdashboard"),g=c.find(".typestakeunites"),v=c.find("#stakeunitinputdashboard"),b=c.find("#amountconversion"),C=c.find(".typestakeflat"),k=c.find("#amountinputdashboard"),_=c.find("#accountsinputdashboard"),y=c.find("#methodeabcdcontainer"),x=c.find("#serieinputdashboard"),w=c.find("#letterinputdashboard"),P=c.find("#ticketABCD"),j=c.find("#ticketGratuit"),D=c.find("#ticketLongTerme"),S=c.find("#optionscontainer"),T=c.find("#bookmakercontainer"),E=c.find("#typestakecontainer");e(),n(),refreshSelections(),a(),misAjourCompteBookmaker(),o(),s(),l(),i(),d()}function automaticBetForm(){function e(){l.submit(function(e){e.preventDefault();var r=$(this).serialize(),t=l.find(".betline").length;if(""==t)swal({title:"Erreur!",text:"Ajoutez au moins une selection pour pouvoir valider le ticket!",type:"warning",confirmButtonText:"OK"});else if(t>=1){var n,o,i;n=p.is(":checked")?1:0,o=m.is(":checked")?1:0,console.log(p.is(":checked")),i=f.is(":checked")?1:0,$.ajax({url:"encourspari/auto",type:"post",data:r+"&linesnum="+t+"&ticketABCD="+n+"&ticketGratuit="+o+"&ticketLongTerme="+i,dataType:"json",success:function(e){var r;if(0==e.etat)if($.isArray(e.msg))for(key in e.msg)r=key,toastr.error(e.msg[r],"Erreur:");else toastr.error(e.msg,"Erreur:");else 1==e.etat&&(s(),a(),toastr.success(e.msg,"Pari"),loadParisEnCours(),loadBookmakersOnDashboard())},error:function(e){console.log("erreur ajout de pari")}})}})}function a(){var e=u.val();$.ajax({url:"selections",success:function(a){l.find("#automatic-selections").html(a.vue),r(),$.ajax({url:"allbookmakers",dataType:"json",success:function(r){l.find(".bookinputdashboard").select2({minimumResultsForSearch:1/0,cache:!0,data:r}),"à blanc"==e?(l.find(".bookinputdashboard").val("").trigger("change"),l.find("#accountsinputdashboard").val("").trigger("change")):(l.find(".bookinputdashboard").prop("disabled",!1),l.find("#accountsinputdashboard").prop("disabled",!1),l.find(".bookinputdashboard").val(a.bookmaker_id).trigger("change")),o(a.bookmaker_id)}}),a.msg.length>0&&swal({title:"Erreur!",text:a.msg,type:"warning",confirmButtonText:"OK"})},error:function(e){l.find("#automatic-selections").html("<p>impossible de récuperer les selections</p>")}})}function r(){l.find("#automatic-selections .boutonsupprimer").on("click",function(e){e.preventDefault();var r=$(this).parents("tr"),t=r.find(".selection_id").text();$.ajax({url:"coupon/"+t,method:"delete",success:function(e){a(),l.find(".bookinputdashboard").val(null).trigger("change"),l.find('select[name="accountsinputdashboard"]').val(null).trigger("change")},error:function(e){}})})}function t(){l.find("#selection-refresh").click(function(e){e.preventDefault(),a()})}function n(){var e=l.find("select[name=typestakeinputdashboard]");l.find(".typestakeflat").hide(),e.on("change",function(){"f"==$(this).val()?(l.find("#stakeunitinputdashboard").val(0),l.find("#amountconversion").val(0),l.find("#amountinputdashboard").val(0),l.find("#flattounitconversion").val(0),l.find(".typestakeunites").hide(),l.find(".typestakeflat").show()):(l.find("#amountinputdashboard").val(0),l.find("#flattounitconversion").val(0),l.find("#stakeunitinputdashboard").val(0),l.find("#amountconversion").val(0),l.find(".typestakeunites").show(),l.find(".typestakeflat").hide())})}function o(e){l.find("#tipstersinputdashboard").select2({allowClear:!0,placeholder:"Choisir un tipster",cache:!0,ajax:{url:"tipsters",dataType:"json",data:function(e){return{q:e.term}},processResults:function(e){return{results:e}}}}).change(function(){var e=$(this).select2("data");""==l.find("#tipstersinputdashboard").val()?(s(),l.find("#WithoutTipsterPart").fadeOut().addClass("hidden"),u.val(null).trigger("change"),l.find("#amountperunit").val("")):(l.find("#WithoutTipsterPart").fadeIn().removeClass("hidden"),"n"==e[0].followtype?u.val("n").trigger("change"):"b"==e[0].followtype&&u.val("b").trigger("change"));var a=Number(e[0].montant_par_unite);l.find("#amountperunit").val(isNaN(a)?"":a)}),u.select2({cache:!0,minimumResultsForSearch:1/0,data:[{id:"n",text:"normal"},{id:"b",text:"à blanc"}]}).prop("disabled",!0)}function s(){l.find("#stakeunitinputdashboard").val(null),l.find("#amountinputdashboard").val(null),l.find("#accountsinputdashboard").val(null).trigger("change"),l.find(".methodeabcdcontainer").addClass("hide"),l.find("#serieinputdashboard").val(null).trigger("change").prop("disabled",!0),l.find("#letterinputdashboard").val(null).trigger("change").prop("disabled",!0),l.find("#amountconversion").val(0),l.find("#flattounitconversion").val(0),l.find("#amountinputdashboard").val(0),l.find("#stakeunitinputdashboard").val(0),i()}function i(){p.prop("checked",!1),p.parents("span").removeClass("checked"),m.prop("checked",!1),m.parents("span").removeClass("checked"),f.prop("checked",!1),f.parents("span").removeClass("checked")}function d(){console.log(u.val()),u.val("b").trigger("change"),l.find("#WithoutTipsterPart").addClass("hidden"),s(),l.find("#ticketABCD").on("click",function(){$(this).is(":checked")?(l.find(".methodeabcdcontainer").removeClass("hide"),l.find("#serieinputdashboard").val(null).trigger("change").prop("disabled",!1),l.find("#letterinputdashboard").val(null).trigger("change").prop("disabled",!1)):(l.find(".methodeabcdcontainer").addClass("hide"),l.find("#serieinputdashboard").val(null).trigger("change").prop("disabled",!0),l.find("#letterinputdashboard").val(null).trigger("change").prop("disabled",!0))})}var l=$("#automaticform-add"),c="#automaticform-add",u=l.find("#followtypeinputdashboard"),p=l.find("#ticketABCD"),m=l.find("#ticketGratuit"),f=l.find("#ticketLongTerme"),h=[{id:"u",text:"en unités"},{id:"f",text:"en devise"}];l.find("#typestakeinputdashboard").select2({minimumResultsForSearch:1/0,cache:!0,data:h}),l.find("#accountsinputdashboard").select2({allowClear:!0,placeholder:"Choisir un compte",cache:!0,minimumResultsForSearch:1/0,ajax:{url:"accounts",dataType:"json",data:function(e){return{book_id:$(c+" .bookinputdashboard").val(),q:e.term}},processResults:function(e){return{results:e}}}}),l.find("#serieinputdashboard").select2({allowClear:!0,placeholder:"Choisir une serie",tags:!0,cache:!0,ajax:{url:"parisabcd",dataType:"json",data:function(e){return{q:e.term}},processResults:function(e){return{results:e}}}}),l.find("#letterinputdashboard").select2({allowClear:!0,placeholder:"Choisir une lettre",cache:!0,minimumResultsForSearch:1/0,ajax:{url:"lettreabcd",dataType:"json",data:function(e){return{serie_nom:$(c+" #serieinputdashboard").val(),q:e.term}},processResults:function(e){console.log(e);var a=[];return $.each(e,function(e,r){a.push({id:r,text:r})}),{results:a}}}}),l.find("#stakeunitinputdashboard").keyup(function(){var e=$(c+" #amountperunit").val(),a=Number($(c+" #stakeunitinputdashboard").val()),r=Number(e)*Number(a),t=Math.round(100*r)/100;isNaN(t)||0>t?$(c+"#amountconversion").val("0"):$(c+" #amountconversion").val(t)}),l.find("#amountinputdashboard").keyup(function(){var e=$(c+" #amountperunit").val(),a=$(c+" #amountinputdashboard").val(),r=Number(a)/Number(e),t=Math.round(100*r)/100;$(c+" #flattounitconversion").val(isNaN(t)||0>t||""==e?"0":t)}),d(),t(),a(),e(),n()}function loadParisEnCours(){$("#onglet_paris_en_cours span");$.ajax({url:"dashboard/ajax/parisencours",data:{page:1},type:"get",success:function(e){$("#tab_15_1").html(e.vue);var a=e.count_paris_encours;0==a?$("#onglet_paris_en_cours span").text(""):$("#onglet_paris_en_cours span").html(a),featuresParisEnCours(),paginationParisEnCours(),cashOut()},error:function(e){$("#tab_15_1").html("<p>impossible de récuperer les paris</p>")}})}function loadParisTermine(){$.ajax({url:"dashboard/ajax/paristermine",data:{page:1},type:"get",success:function(e){$("#tab_15_4").html(e),parisTermineDelete(),$("#paristerminetable .boutonsupprimer").click(function(e){e.stopPropagation()}),$(".subbetclick a").on("click",function(){$(this).find("i").hasClass("glyphicon-chevron-right")?($(this).find("i").removeClass("glyphicon-chevron-right"),$(this).find("i").addClass("glyphicon-chevron-down")):($(this).find("i").addClass("glyphicon-chevron-right"),$(this).find("i").removeClass("glyphicon-chevron-down"));var e=$(".subbetclick a").data("target");$("#paristerminetable").find(e)}),$(function(){$(".slimScrollTermine").slimScroll({height:"350px",allowPageScroll:!1,wheelStep:10,alwaysVisible:!0})}),$("#paristerminetable").tableSearch({searchPlaceHolder:"Recherche..."})},error:function(e){$("#tab_15_4").html("<p>impossible de récuperer les paris terminés</p>")}})}function featuresParisEnCours(){$('[data-toggle="tooltip"]').tooltip(),$("[data-hover='tooltip']").tooltip(),$("#parisencourstable .boutonvalider").click(function(e){e.stopPropagation()}),$("#parisencourstable .boutonsupprimer").click(function(e){e.stopPropagation()}),$("select[name='resultatDashboardInput']").click(function(e){e.stopPropagation()}),parisEnCoursCalculateStatus("#parisencourstable"),parisEnCoursEnclose("#parisencourstable",".validerform","historique"),parisEnCoursDelete("#parisencourstable",".supprimerform","encourspari/")}function paginationParisEnCours(){$("#tab_15_1").on("click",".pagination a",function(e){e.preventDefault();var a=getPaginationSelectedPage($(this).attr("href"));$.ajax({url:"dashboard/ajax/parisencours",data:{page:a},success:function(e){$("#tab_15_1").html(e),featuresParisEnCours()},error:function(e){console.log("erreur: pagination par click")}})})}function loadParisEnCoursWithPage(e){var a=$("#parisencourstable .id").length,r=$("#tab_15_1").find(".active").find("span").text();"delete"==e&&1==a&&(r-=1),r?$.ajax({url:"dashboard/ajax/parisencours",data:{page:r},type:"get",success:function(e){$("#tab_15_1").html(e),featuresParisEnCours()}}):loadParisEnCours()}function cashOut(){$("#cashoutModal").on("show.bs.modal",function(e){var a=$(e.relatedTarget).data("id");$(e.currentTarget).find('input[name="pari-id"]').val(a)});var e=$("#cashout-update"),a=[{id:"c",text:"classic cash out"}];e.find("#cashout-select").select2({minimumResultsForSearch:1/0,cache:!0,data:a}).change(function(){e.find(".classic-cash-out-group").toggleClass("hide")}),e.submit(function(a){a.preventDefault();var r=e.serialize();$.ajax({url:"cashout",type:"post",data:r,dataType:"json",success:function(e){if(e.etat)toastr.success(e.msg,"Pari");else for(key in e.msg)keyname=key,toastr.error(e.msg[keyname],"Erreur:")},error:function(){}})})}function loadParisLongTerme(){$.ajax({url:"dashboard/ajax/parislongterme",data:{page:"1"},type:"get",success:function(e){$("#tab_15_2").html(e),$('[data-toggle="tooltip"]').tooltip(),$("#onglet_paris_long_terme span").text($("#parislongtermetable #count").text());{var a=($("#parislongtermetable"),$("#parislongtermetable .boutonvalider")),r=$("#parislongtermetable .boutonsupprimer"),t=$("#parislongtermetable .validerform"),n=$("#parislongtermetable .supprimerform"),o=$("#parislongtermetable select[name='resultatDashboardInput']");$("#parislongtermetable select[name='resultatDashboardInput'] option:selected")}$('[data-toggle="tooltip"]').tooltip(),a.click(function(e){e.stopPropagation()}),r.click(function(e){e.stopPropagation()}),o.click(function(e){e.stopPropagation()}),o.change(function(e){var a=$(this).closest(".mainrow"),r=a.find(".tdcote").text(),t=a.find(".tdmise .tdsubmise").text(),n=a.find(".tdretour span.subretour"),o=a.find(".tdretour");switch(result=a.find("select[name='resultatDashboardInput'] option:selected").text()){case"--Selectionnez--":n.empty(),o.css("color","black");break;case"Gagné":var s=parseFloat(t*r);o.css("color","green"),a.find(".tdretour span.subretour").text(s);break;case"Perdu":var s=parseFloat(t);o.css("color","red"),a.find(".tdretour span.subretour").text(s);break;case"1/2 Gagné":var s=parseFloat((t*r-t)/2)+parseFloat(t);o.css("color","green"),a.find(".tdretour span.subretour").text(s);break;case"1/2 Perdu":var s=parseFloat(t/2);o.css("color","red"),a.find(".tdretour span.subretour").text(s);break;case"Remboursé":o.css("color","black");var s=parseFloat(t);a.find(".tdretour span.subretour").text(s);break;case"Annulé":o.css("color","black");var s=parseFloat(t);a.find(".tdretour span.subretour").text(s)}}),t.submit(function(e){e.preventDefault();var a=$(this).closest(".mainrow"),r=a.find(".tdretour span.subretour");if(r.text().length>0){var t=a.find(".tdcote").text(),n=a.find(".tdmise .tdsubmise").text(),o=$(this).serialize();$.ajax({url:"historique",type:"post",data:o+"&cote="+t+"&mise="+n+"&retour="+r,success:function(e){loadParisLongTerme()},error:function(){console.log("valider un pari long terme ne fonctionne pas")}})}else alert("Vous devez préciser un status pour ce pari.")}),n.submit(function(e){e.preventDefault();{var a=$(this).closest(".mainrow"),r=a.find(".id").text();a.find(".tdretour span.subretour"),a.find(".tdcote").text(),a.find(".tdmise .tdsubmise").text(),$(this).serialize()}confirm("Etes vous sur?")&&$.ajax({url:"historique/"+r,type:"delete",success:function(e){loadParisLongTerme()},error:function(){console.log("supprimer un pari long terme ne fonctionne pas")}})})},error:function(e){console.log("le chargement des paris long terme n'a pas fonctionné")}})}function calculProfits(e,a,r,t,n,o){var s,i,d=n,l=d,c=r,u=t,p=o,m=!1,f=!1,h=1,g="font-green-sharp",v="font-red-haze";if("simple"==e){var b=Number(c.find(".tdcote").text());0==a?s=1:1==a?h*=b:2==a?(h*=0,i=1):3==a?h*=[(b-1)/2+1]:4==a?h=.5*h:5==a&&(h+=0),s&&!i?(l="",m=!1,f=!0):(m=!0,l=h*d,l-=d,l=Number(Math.round(100*l)/100)),l>0?(u.addClass(g),p.addClass(g),u.removeClass(v),p.removeClass(v),u.removeClass("font-gray"),p.removeClass("font-gray")):0>l?(u.addClass(v),p.addClass(v),u.removeClass(g),p.removeClass(g),u.removeClass("font-gray"),p.removeClass("font-gray")):(u.addClass("font-gray"),p.addClass("font-gray"),u.removeClass(g),p.removeClass(g),u.removeClass(v),p.removeClass(v)),m?p.removeClass("hide"):p.addClass("hide"),l>0?f?u.html("+"+l):u.text("+"+l):f?u.html(l):u.text(l)}else c.find(".child-table-tr").each(function(){var e=Number($(this).find(".cote-td").text()),a=$(this).find('select[name="resultatSelectionDashboardInput[]"]').val();0==a?s=1:1==a?h*=e:2==a?(h*=0,i=1):3==a?h*=[(e-1)/2+1]:4==a?h=.5*h:5==a&&(h+=0)}),s&&!i?(l="",m=!1):(m=!0,l=h*d,l-=d,l=Number(Math.round(100*l)/100)),l>0?(u.addClass(g),p.addClass(g),u.removeClass(v),p.removeClass(v),u.removeClass("font-gray"),
p.removeClass("font-gray")):0>l?(u.addClass(v),p.addClass(v),u.removeClass(g),p.removeClass(g),u.removeClass("font-gray"),p.removeClass("font-gray")):(u.addClass("font-gray"),p.addClass("font-gray"),u.removeClass(g),p.removeClass(g),u.removeClass(v),p.removeClass(v)),m?p.removeClass("hide"):p.addClass("hide"),u.text(l>0?"+"+l:l)}function statusBoutonValider(e,a,r){var t=a,n=r,o=new Array;if("simple"==e){var s=t.find('select[name="resultatSelectionDashboardInput[]"]').val();"0"==s?n.prop("disabled",!0):n.prop("disabled",!1)}else t.find(".child-table-tr").each(function(){var e=$(this).find('select[name="resultatSelectionDashboardInput[]"]').val();o.push(e)}),-1!==$.inArray("2",o)||-1==$.inArray("2",o)&&-1==$.inArray("0",o)?n.prop("disabled",!1):n.prop("disabled",!0)}function parisEnCoursCalculateStatus(e){$(e+" select[name='resultatSelectionDashboardInput[]']").change(function(){var a,r=($(e),$(this).closest(".mainrow")),t=$(this).val(),n=$(this).parents().hasClass("subrow");if(a=n?"combine":"simple","simple"==a){var a=r.find(".type").text(),o=(r.find(".tdcote").text(),r.find(".tdsubmise").text()),s=r.find(".profits"),i=r.find(".devise"),d=r.find(".boutonvalider");statusBoutonValider(a,r,d),calculProfits(a,t,r,s,o,i)}else{var l=$(this).closest(".subrow"),c=l.prev(),a=c.find(".mainrow").text(),d=c.find(".boutonvalider"),u=$(this).closest(".child-table-tr"),o=(u.find(".child-id").text(),u.find('input[name="childrowsinput[]"]').val(),c.find(".tdsubmise").text()),s=c.find(".profits"),i=c.find(".devise");statusBoutonValider(a,l,d),calculProfits(a,"",l,s,o,i)}})}function parisEnCoursDelete(e,a,r){var t=($(e),$(a),r);$(e+" "+a).submit(function(e){e.preventDefault();{var a=$(this).closest(".mainrow"),r=a.find(".id").text();a.find(".tdretour span.subretour"),a.find(".tdcote").text(),a.find(".tdmise .tdsubmise").text(),$(this).serialize()}swal({title:"Supprimer le ticket",text:"Etes-vous sur?",type:"warning",showCancelButton:!0,confirmButtonColor:"#DD6B55",confirmButtonText:"Oui!",cancelButtonText:"Non, annuler",closeOnConfirm:!0,closeOnCancel:!0},function(e){e&&$.ajax({url:t+r,type:"delete",success:function(e){loadParisEnCours(),loadBookmakersOnDashboard(),0==e.etat?toastr.error(e.msg,"Suppression"):(toastr.success(e.msg,"Suppression"),loadBookmakersOnDashboard())},error:function(){console.log("supprimer un pari en cours ne fonctionne pas")}})})})}function parisEnCoursEnclose(e,a,r){var t=($(e),$(a),r);$(e+" "+a).submit(function(e){e.preventDefault();var a=$(this).closest(".mainrow"),r=($(this).closest(".wrapperRow"),a.find(".tdretour span.subretour"),a.find(".id").text()),n=[],o=[],s=(a.next().find(".child-row input"),a.find(".type").text());"simple"==s?(n=a.find('select[name="resultatSelectionDashboardInput[]"]').serialize(),o=a.find('input[name="childrowsinput[]"]').serialize()):(n=a.next().find('select[name="resultatSelectionDashboardInput[]"]').serialize(),o=a.next().find('input[name="childrowsinput[]"]').serialize()),$.ajax({url:t,type:"post",data:n+"&"+o+"&ticket-id="+r,dataType:"json",success:function(e){0==e.etat?toastr.error(e.msg,"Validation"):(toastr.success(e.msg,"Validation"),loadParisEnCours(),loadParisTermine(),loadBookmakersOnDashboard(),loadGeneralRecapsOnDashboard())},error:function(){console.log("valider un pari en cours ne fonctionne pas")}})})}function parisTermineDelete(){var e="#paristerminetable",a=".supprimerform",r="historique/";$(e+" "+a).submit(function(e){e.preventDefault();var a=$(this).closest(".mainrow"),t=a.find(".id").text();swal({title:"Supprimer le ticket",text:"Etes-vous sur?",type:"warning",showCancelButton:!0,confirmButtonColor:"#DD6B55",confirmButtonText:"Oui!",cancelButtonText:"Non, annuler",closeOnConfirm:!0,closeOnCancel:!0},function(e){e&&$.ajax({url:r+t,type:"delete",success:function(e){0==e.etat?toastr.error(e.msg,"Suppression"):(toastr.success(e.msg,"Suppression"),loadParisTermine(),loadBookmakersOnDashboard(),loadGeneralRecapsOnDashboard())},error:function(){console.log("supprimer un pari en cours ne fonctionne pas")}})})})}parisEnCoursDelete(),getBookmakersForSelection(),loadParisEnCours(),loadParisLongTerme(),loadParisTermine(),loadGeneralRecapsOnDashboard(),loadBookmakersOnDashboard(),gestionTicket(),addManualCouponSelection(),$("#defaultrange").daterangepicker({opens:"left",format:"DD/MM/YYYY",timeZone:moment("Europe/Paris"),ranges:{"Aujourd'hui":[moment(),moment()],Hier:[moment().subtract(1,"days"),moment().subtract(1,"days")],"Cette Semaine":[moment().startOf("isoweek"),moment().endOf("isoweek")],"Semaine Précédente":[moment().subtract(1,"week").startOf("isoweek"),moment().subtract(1,"week").endOf("isoweek")],"Ce Mois":[moment().startOf("month"),moment().endOf("month")],"Mois Précédent":[moment().subtract(1,"month").startOf("month"),moment().subtract(1,"month").endOf("month")]}},function(e,a){$("#defaultrange input").val(e.format("DD/MM/YYYY")+" - "+a.format("DD/MM/YYYY"))}).on("apply.daterangepicker",function(e,a){loadGeneralRecapsOnDashboard()}),$("#WelcomeModal").modal({keyboard:!1,backdrop:"static"});