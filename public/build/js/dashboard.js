function loadBookmakersOnDashboard(){$.ajax({url:"comptes",type:"get",success:function(e){$("#comptes_par_bookmakers").html(e)},error:function(e){console.log("la récuperation des comptes bookmakers vers le dashboard n'a pas fonctionné")}})}function loadRecapsOnDashboard(){$.ajax({url:"recaps",type:"get",success:function(e){$('[data-toggle="collapse"]').collapse(),$("#recaps").html(e)},error:function(){}})}function totalProfits(){$.getJSON("totalprofit",function(e){var t=$(".dashboard-stat2");t.find(".totalprofit").text(e.montantprofit),t.find(".roi").text($.isNumeric(e.roi)?e.roi+" %":e.roi),t.find(".roi-bar").css("width",e.roi)})}function automaticBetForm(){function e(){i.submit(function(e){e.preventDefault();var a=$(this).serialize(),n=i.find(".betline").length;if(""==n)swal({title:"Erreur!",text:"Ajoutez au moins une selection pour pouvoir valider le ticket!",type:"warning",confirmButtonText:"OK"});else if(n>=1){var r,o,u;r=i.find("#ticketABCD").is(":checked")?1:0,o=i.find("#ticketGratuit").is(":checked")?1:0,u=i.find("#ticketLongTerme").is(":checked")?1:0,$.ajax({url:"encourspari/auto",type:"post",data:a+"&linesnum="+n+"&ticketABCD="+r+"&ticketGratuit="+o+"&ticketLongTerme="+u,dataType:"json",success:function(e){var a;if(0==e.etat)if($.isArray(e.msg))for(key in e.msg)a=key,toastr.error(e.msg[a],"Erreur:");else toastr.error(e.msg,"Erreur:");else 1==e.etat&&(s(),t(),toastr.success(e.msg,"Pari"),loadParisEnCours(),loadBookmakersOnDashboard())},error:function(e){console.log("erreur ajout de pari")}})}})}function t(){var e=i.find("#followtypeinputdashboard").val();$.ajax({url:"selections",success:function(t){i.find("#automatic-selections").html(t.vue),a(),$.ajax({url:"allbookmakers",dataType:"json",success:function(a){i.find(".bookinputdashboard").select2({minimumResultsForSearch:1/0,cache:!0,data:a}),"à blanc"==e?(i.find(".bookinputdashboard").val("").trigger("change"),i.find("#accountsinputdashboard").val("").trigger("change")):(i.find(".bookinputdashboard").prop("disabled",!1),i.find("#accountsinputdashboard").prop("disabled",!1),i.find(".bookinputdashboard").val(t.bookmaker_id).trigger("change")),o(t.bookmaker_id)}}),t.msg.length>0&&swal({title:"Erreur!",text:t.msg,type:"warning",confirmButtonText:"OK"})},error:function(e){i.find("#automatic-selections").html("<p>impossible de récuperer les selections</p>")}})}function a(){i.find("#automatic-selections .boutonsupprimer").on("click",function(e){e.preventDefault();var a=$(this).parents("tr"),n=a.find(".selection_id").text();$.ajax({url:"coupon/"+n,method:"delete",success:function(e){t(),i.find(".bookinputdashboard").val(null).trigger("change"),i.find('select[name="accountsinputdashboard"]').val(null).trigger("change")},error:function(e){}})})}function n(){i.find("#selection-refresh").click(function(e){e.preventDefault(),t()})}function r(){var e=i.find("select[name=typestakeinputdashboard]");i.find(".typestakeflat").hide(),e.on("change",function(){"f"==$(this).val()?(i.find(".typestakeunites").hide(),i.find("#stakeunitinputdashboard").val(""),i.find(".typestakeflat").show()):(i.find(".typestakeunites").show(),i.find(".typestakeflat").hide(),i.find("#amountinputdashboard").val(""))})}function o(e){i.find("#tipstersinputdashboard").select2({allowClear:!0,placeholder:"Choisir un tipster",cache:!0,ajax:{url:"tipsters",dataType:"json",data:function(e){return{q:e.term}},processResults:function(e){return{results:e}}}}),i.find("#tipstersinputdashboard").change(function(){var t=$(u+" #tipstersinputdashboard").val(),a=$(u+" #followtypeinputdashboard"),n=$(u+" #amountperunit");$(u+" #stakeunitinputdashboard").val(""),$(u+" #amountperunit").val(""),$(u+" #amountconversion").val("0"),$(u+" #amountinputdashboard").val(""),$(u+" #flattounitconversion").val("0"),$.ajax({url:"infosTipster",data:"tipster_id="+t,dataType:"json",success:function(t){i.find(".bookinputdashboard").val(null).trigger("change"),i.find("#accountsinputdashboard").val(null).trigger("change"),a.val(""),"n"==t.followtype?(a.val("normal"),i.find(".bookinputdashboard").prop("disabled",!1),i.find("#accountsinputdashboard").prop("disabled",!1),i.find(".bookinputdashboard").val(e).trigger("change"),i.find("#accountsinputdashboard").val(null).trigger("change")):"b"==t.followtype?(a.val("à blanc"),i.find(".bookinputdashboard").val(null).trigger("change"),i.find("#accountsinputdashboard").val(null).trigger("change"),i.find(".bookinputdashboard").prop("disabled",!0),i.find("#accountsinputdashboard").prop("disabled",!0)):(i.find(".bookinputdashboard").prop("disabled",!1),i.find("#accountsinputdashboard").prop("disabled",!1),i.find(".bookinputdashboard").val(e).trigger("change"),i.find("#accountsinputdashboard").val(null).trigger("change"));var r=Number(t.montant_par_unite);n.val(isNaN(r)?"":r)}})})}function s(){i.find("#stakeunitinputdashboard").val(null).trigger("change"),i.find("#amountinputdashboard").val(null).trigger("change"),i.find("#accountsinputdashboard").val(null).trigger("change"),i.find("input:checkbox").prop("checked",!1)}var i=$("#automaticform-add"),u="#automaticform-add",d=[{id:"u",text:"en unités"},{id:"f",text:"en devise"}];i.find("#typestakeinputdashboard").select2({minimumResultsForSearch:1/0,cache:!0,data:d}),i.find("#accountsinputdashboard").select2({allowClear:!0,placeholder:"Choisir un compte",cache:!0,minimumResultsForSearch:1/0,ajax:{url:"accounts",dataType:"json",data:function(e){return{book_id:$(u+" .bookinputdashboard").val(),q:e.term}},processResults:function(e){return{results:e}}}}),i.find("#serieinputdashboard").select2({allowClear:!0,placeholder:"Choisir une serie",tags:!0,cache:!0,ajax:{url:"parisabcd",dataType:"json",data:function(e){return{q:e.term}},processResults:function(e){return{results:e}}}}),i.find("#letterinputdashboard").select2({allowClear:!0,placeholder:"Choisir une lettre",cache:!0,minimumResultsForSearch:1/0,ajax:{url:"lettreabcd",dataType:"json",data:function(e){return{serie_nom:$(u+" #serieinputdashboard").val(),q:e.term}},processResults:function(e){console.log(e);var t=[];return $.each(e,function(e,a){t.push({id:a,text:a})}),{results:t}}}}),i.find("#stakeunitinputdashboard").keyup(function(){var e=$(u+" #amountperunit").val(),t=Number($(u+" #stakeunitinputdashboard").val()),a=Number(e)*Number(t),n=Math.round(100*a)/100;isNaN(n)||0>n?$(u+"#amountconversion").val("0"):$(u+" #amountconversion").val(n)}),i.find("#amountinputdashboard").keyup(function(){var e=$(u+" #amountperunit").val(),t=$(u+" #amountinputdashboard").val(),a=Number(t)/Number(e),n=Math.round(100*a)/100;$(u+" #flattounitconversion").val(isNaN(n)||0>n||""==e?"0":n)}),i.find("#serieinputdashboard").prop("disabled",!0),i.find("#letterinputdashboard").prop("disabled",!0),i.find(".methodeabcdcontainer").addClass("hide"),i.find("#ticketABCD").on("click",function(){$(this).is(":checked")?(i.find(".methodeabcdcontainer").removeClass("hide"),i.find("#serieinputdashboard").prop("disabled",!1),i.find("#letterinputdashboard").prop("disabled",!1)):(i.find(".methodeabcdcontainer").addClass("hide"),i.find("#serieinputdashboard").prop("disabled",!0),i.find("#letterinputdashboard").prop("disabled",!0))}),n(),t(),e(),r()}function loadParisABCD(){$.ajax({url:"dashboard/ajax/parisabcd",data:{page:1},type:"get",success:function(e){$("#tab_15_3").html(e)},error:function(e){$("#tab_15_3").html("<p>impossible de récuperer les paris ABCD</p>")}})}function loadParisEnCours(){$("#onglet_paris_en_cours span");$.ajax({url:"dashboard/ajax/parisencours",data:{page:1},type:"get",success:function(e){$("#tab_15_1").html(e.vue);var t=e.count_paris_encours;0==t?$("#onglet_paris_en_cours span").text(""):$("#onglet_paris_en_cours span").html(t),featuresParisEnCours(),paginationParisEnCours(),totalProfits(),cashOut()},error:function(e){$("#tab_15_1").html("<p>impossible de récuperer les paris</p>")}})}function loadParisTermine(){$("#onglet_paris_long_terme span");$.ajax({url:"dashboard/ajax/paristermine",data:{page:1},type:"get",success:function(e){$("#tab_15_4").html(e),parisTermineDelete(),$("#paristerminetable .boutonsupprimer").click(function(e){e.stopPropagation()}),$(function(){$(".slimScrollTermine").slimScroll({height:"150px",allowPageScroll:!1,wheelStep:10,alwaysVisible:!0})})},error:function(e){$("#tab_15_4").html("<p>impossible de récuperer les paris terminés</p>")}})}function featuresParisEnCours(){$('[data-toggle="tooltip"]').tooltip(),$("[data-hover='tooltip']").tooltip(),$("#parisencourstable .boutonvalider").click(function(e){e.stopPropagation()}),$("#parisencourstable .boutonsupprimer").click(function(e){e.stopPropagation()}),$("select[name='resultatDashboardInput']").click(function(e){e.stopPropagation()}),parisEnCoursCalculateStatus("#parisencourstable"),parisEnCoursEnclose("#parisencourstable",".validerform","historique"),parisEnCoursDelete("#parisencourstable",".supprimerform","encourspari/")}function paginationParisEnCours(){$("#tab_15_1").on("click",".pagination a",function(e){e.preventDefault();var t=getPaginationSelectedPage($(this).attr("href"));$.ajax({url:"dashboard/ajax/parisencours",data:{page:t},success:function(e){$("#tab_15_1").html(e),featuresParisEnCours()},error:function(e){console.log("erreur: pagination par click")}})})}function loadParisEnCoursWithPage(e){var t=$("#parisencourstable .id").length,a=$("#tab_15_1").find(".active").find("span").text();"delete"==e&&1==t&&(a-=1),a?$.ajax({url:"dashboard/ajax/parisencours",data:{page:a},type:"get",success:function(e){$("#tab_15_1").html(e),featuresParisEnCours()}}):loadParisEnCours()}function cashOut(){$("#cashoutModal").on("show.bs.modal",function(e){var t=$(e.relatedTarget).data("id");$(e.currentTarget).find('input[name="pari-id"]').val(t)});var e=$("#cashout-update"),t=[{id:"c",text:"classic cash out"}];e.find("#cashout-select").select2({minimumResultsForSearch:1/0,cache:!0,data:t}).change(function(){e.find(".classic-cash-out-group").toggleClass("hide")}),e.submit(function(t){t.preventDefault();var a=e.serialize();$.ajax({url:"cashout",type:"post",data:a,dataType:"json",success:function(e){if(e.etat)toastr.success(e.msg,"Pari");else for(key in e.msg)keyname=key,toastr.error(e.msg[keyname],"Erreur:")},error:function(){}})})}function loadParisLongTerme(){$.ajax({url:"dashboard/ajax/parislongterme",data:{page:"1"},type:"get",success:function(e){$("#tab_15_2").html(e),$('[data-toggle="tooltip"]').tooltip(),$("#onglet_paris_long_terme span").text($("#parislongtermetable #count").text());{var t=($("#parislongtermetable"),$("#parislongtermetable .boutonvalider")),a=$("#parislongtermetable .boutonsupprimer"),n=$("#parislongtermetable .validerform"),r=$("#parislongtermetable .supprimerform"),o=$("#parislongtermetable select[name='resultatDashboardInput']");$("#parislongtermetable select[name='resultatDashboardInput'] option:selected")}$('[data-toggle="tooltip"]').tooltip(),t.click(function(e){e.stopPropagation()}),a.click(function(e){e.stopPropagation()}),o.click(function(e){e.stopPropagation()}),o.change(function(e){var t=$(this).closest(".mainrow"),a=t.find(".tdcote").text(),n=t.find(".tdmise .tdsubmise").text(),r=t.find(".tdretour span.subretour"),o=t.find(".tdretour");switch(result=t.find("select[name='resultatDashboardInput'] option:selected").text()){case"--Selectionnez--":r.empty(),o.css("color","black");break;case"Gagné":var s=parseFloat(n*a);o.css("color","green"),t.find(".tdretour span.subretour").text(s);break;case"Perdu":var s=parseFloat(n);o.css("color","red"),t.find(".tdretour span.subretour").text(s);break;case"1/2 Gagné":var s=parseFloat((n*a-n)/2)+parseFloat(n);o.css("color","green"),t.find(".tdretour span.subretour").text(s);break;case"1/2 Perdu":var s=parseFloat(n/2);o.css("color","red"),t.find(".tdretour span.subretour").text(s);break;case"Remboursé":o.css("color","black");var s=parseFloat(n);t.find(".tdretour span.subretour").text(s);break;case"Annulé":o.css("color","black");var s=parseFloat(n);t.find(".tdretour span.subretour").text(s)}}),n.submit(function(e){e.preventDefault();var t=$(this).closest(".mainrow"),a=t.find(".tdretour span.subretour");if(a.text().length>0){var n=t.find(".tdcote").text(),r=t.find(".tdmise .tdsubmise").text(),o=$(this).serialize();$.ajax({url:"historique",type:"post",data:o+"&cote="+n+"&mise="+r+"&retour="+a,success:function(e){loadParisLongTerme()},error:function(){console.log("valider un pari long terme ne fonctionne pas")}})}else alert("Vous devez préciser un status pour ce pari.")}),r.submit(function(e){e.preventDefault();{var t=$(this).closest(".mainrow"),a=t.find(".id").text();t.find(".tdretour span.subretour"),t.find(".tdcote").text(),t.find(".tdmise .tdsubmise").text(),$(this).serialize()}confirm("Etes vous sur?")&&$.ajax({url:"historique/"+a,type:"delete",success:function(e){loadParisLongTerme()},error:function(){console.log("supprimer un pari long terme ne fonctionne pas")}})})},error:function(e){console.log("le chargement des paris long terme n'a pas fonctionné")}})}function manualBetForm(){function e(){}function t(){p.find("#tipstersinputdashboard").select2({allowClear:!0,placeholder:"Choisir un tipster",cache:!0,ajax:{url:"tipsters",dataType:"json",data:function(e){return{q:e.term}},processResults:function(e){return{results:e}}}}),p.find("#tipstersinputdashboard").change(function(){var e=$(f+" #tipstersinputdashboard").val(),t=$(f+" #followtypeinputdashboard"),a=$(f+" #amountperunit");$(f+" #stakeunitinputdashboard").val(""),$(f+" #amountperunit").val(""),$(f+" #amountconversion").val("0"),$(f+" #amountinputdashboard").val(""),$(f+" #flattounitconversion").val("0"),$.ajax({url:"infosTipster",data:"tipster_id="+e,dataType:"json",success:function(e){p.find(".bookinputdashboard").val(null).trigger("change"),p.find("#accountsinputdashboard").val(null).trigger("change"),t.val(""),"n"==e.followtype?(t.val("normal"),p.find(".bookinputdashboard").prop("disabled",!1),p.find("#accountsinputdashboard").prop("disabled",!1)):"b"==e.followtype?(t.val("à blanc"),p.find(".bookinputdashboard").val(null).trigger("change"),p.find("#accountsinputdashboard").val(null).trigger("change"),p.find(".bookinputdashboard").prop("disabled",!0),p.find("#accountsinputdashboard").prop("disabled",!0)):(p.find(".bookinputdashboard").val(null).trigger("change"),p.find("#accountsinputdashboard").val(null).trigger("change"),p.find(".bookinputdashboard").prop("disabled",!0),p.find("#accountsinputdashboard").prop("disabled",!0));var n=Number(e.montant_par_unite);a.val(isNaN(n)?"":n)},error:function(e){}})})}function a(){var e=[{id:"u",text:"en unités"},{id:"f",text:"en devise"}];p.find("#typestakeinputdashboard").select2({minimumResultsForSearch:1/0,cache:!0,data:e});var t=p.find("select[name=typestakeinputdashboard]");p.find(".typestakeflat").hide(),t.on("change",function(){"f"==$(this).val()?(p.find(".typestakeunites").hide(),p.find("#stakeunitinputdashboard").val(""),p.find(".typestakeflat").show()):(p.find(".typestakeunites").show(),p.find(".typestakeflat").hide(),p.find("#amountinputdashboard").val(""))}),p.find("#stakeunitinputdashboard").keyup(function(){var e=$(f+" #amountperunit").val(),t=Number($(f+" #stakeunitinputdashboard").val()),a=Number(e)*Number(t),n=Math.round(100*a)/100;isNaN(n)||0>n?$(f+"#amountconversion").val("0"):$(f+" #amountconversion").val(n)}),p.find("#amountinputdashboard").keyup(function(){var e=$(f+" #amountperunit").val(),t=$(f+" #amountinputdashboard").val(),a=Number(t)/Number(e),n=Math.round(100*a)/100;$(f+" #flattounitconversion").val(isNaN(n)||0>n||""==e?"0":n)})}function n(){p.find(".bookinputdashboard").select2({allowClear:!0,placeholder:"Choisir un bookmaker",cache:!0,ajax:{url:"bookmakers",dataType:"json",data:function(e){return{q:e.term}},processResults:function(e){return{results:e}}}}),p.find("#accountsinputdashboard").select2({allowClear:!0,placeholder:"Choisir un compte",cache:!0,minimumResultsForSearch:1/0,ajax:{url:"accounts",dataType:"json",data:function(e){return{book_id:$(f+" .bookinputdashboard").val(),q:e.term}},processResults:function(e){return{results:e}}}})}function r(){p.find("#ticketABCD").on("click",function(){$(this).is(":checked")?(p.find("#methodeabcdcontainer").removeClass("hide"),p.find("#serieinputdashboard").prop("disabled",!1),p.find("#letterinputdashboard").prop("disabled",!1)):(p.find("#methodeabcdcontainer").addClass("hide"),p.find("#serieinputdashboard").prop("disabled",!0),p.find("#letterinputdashboard").prop("disabled",!0))}),p.find("#serieinputdashboard").select2({allowClear:!0,placeholder:"Choisir une serie",tags:!0,cache:!0,ajax:{url:"parisabcd",dataType:"json",data:function(e){return{q:e.term}},processResults:function(e){return{results:e}}}}),p.find("#letterinputdashboard").select2({allowClear:!0,placeholder:"Choisir une lettre",cache:!0,minimumResultsForSearch:1/0,ajax:{url:"lettreabcd",dataType:"json",data:function(e){return{serie_nom:$(f+" #serieinputdashboard").val(),q:e.term}},processResults:function(e){console.log(e);var t=[];return $.each(e,function(e,a){t.push({id:a,text:a})}),{results:t}}}}),p.find("#serieinputdashboard").change(function(){var e=$(f+"#serieinputdashboard option:selected").text();e=encodeURIComponent(e),p.find("#letterinputdashboard").val(null).trigger("change")})}function o(){h.find(".sportinputdashboard").select2({allowClear:!0,placeholder:"Choisir un sport",cache:!0,ajax:{url:"sports",dataType:"json",data:function(e){return{q:e.term}},processResults:function(e){return{results:e}}}})}function s(){h.find(".competitioninputdashboard").select2({allowClear:!0,placeholder:"Choisir une competition",cache:!0,ajax:{url:"competitions",dataType:"json",data:function(e){return{sport_id:h.find(".sportinputdashboard").val(),q:e.term}},processResults:function(e){return{results:e}}}})}function i(){h.find(".marketinputdashboard").select2({allowClear:!0,placeholder:"Choisir un type de pari",cache:!0,ajax:{url:"markets",dataType:"json",data:function(e){return{sport_id:h.find(".sportinputdashboard").val(),q:e.term}},processResults:function(e){return{results:e}}}}).change(function(){var e=h.find(".marketinputdashboard").val();43==e&&alert("ok")})}function u(){h.find(".scopeinputdashboard").select2({allowClear:!0,placeholder:"Choisir un sous type",cache:!0,ajax:{url:"scopes",dataType:"json",data:function(e){return{sport_id:h.find(".sportinputdashboard").val(),q:e.term}},processResults:function(e){return{results:e}}}})}function d(){h.find(".pickinputdashboard").select2({allowClear:!0,placeholder:"Selectionner un choix",cache:!0,ajax:{url:"pick",dataType:"json",data:function(e){return{market_id:h.find(".marketinputdashboard").val(),q:e.term}},processResults:function(e){return{results:e}}}})}function l(){h.find(".team1inputdashboard").select2({allowClear:!0,placeholder:"Equipe n°1/Joueur n°1",cache:!0,ajax:{url:"equipes",dataType:"json",data:function(e){return{sport_id:h.find(".sportinputdashboard").val(),q:e.term}},processResults:function(e){return{results:e}}}}),h.find(".team2inputdashboard").select2({allowClear:!0,placeholder:"Equipe n°2/Joueur n°2",cache:!0,ajax:{url:"equipes",dataType:"json",data:function(e){return{sport_id:h.find(".sportinputdashboard").val(),q:e.term}},processResults:function(e){return{results:e}}}})}function c(){$("select.country_d").change(function(){"Europe"==$("select.country_d").val()&&$(".state_d").replaceWith('<input type="text" name="state_d" id="state_d">')}),$("select.country_o").change(function(){"Europe"==$("select.country_o").val()&&$(".state_o").replaceWith('<input type="text" name="state_o" id="state_o">')})}var p=$("#manubetform-add"),f="#manubetform-add",h=$("#manualselectionform-add");e(),$.fn.modal.Constructor.prototype.enforceFocus=function(){},c(),t(),a(),n(),r(),o(),s(),i(),u(),d(),l()}function calculProfits(e,t,a,n,r,o){var s,i,u=r,d=u,l=a,c=n,p=o,f=!1,h=!1,m=1,b="font-green-sharp",v="font-red-haze";if("simple"==e){var g=Number(l.find(".tdcote").text());0==t?s=1:1==t?m*=g:2==t?(m*=0,i=1):3==t?m*=[(g-1)/2+1]:4==t?m=.5*m:5==t&&(m+=0),s&&!i?(d="",f=!1,h=!0):(f=!0,d=m*u,d-=u,d=Number(Math.round(100*d)/100)),d>0?(c.addClass(b),p.addClass(b),c.removeClass(v),p.removeClass(v),c.removeClass("font-gray"),p.removeClass("font-gray")):0>d?(c.addClass(v),p.addClass(v),c.removeClass(b),p.removeClass(b),c.removeClass("font-gray"),p.removeClass("font-gray")):(c.addClass("font-gray"),p.addClass("font-gray"),c.removeClass(b),p.removeClass(b),c.removeClass(v),p.removeClass(v)),f?p.removeClass("hide"):p.addClass("hide"),d>0?h?c.html("+"+d):c.text("+"+d):h?c.html(d):c.text(d)}else l.find(".child-table-tr").each(function(){var e=Number($(this).find(".cote-td").text()),t=$(this).find('select[name="resultatSelectionDashboardInput[]"]').val();0==t?s=1:1==t?m*=e:2==t?(m*=0,i=1):3==t?m*=[(e-1)/2+1]:4==t?m=.5*m:5==t&&(m+=0)}),s&&!i?(d="",f=!1):(f=!0,d=m*u,d-=u,d=Number(Math.round(100*d)/100)),d>0?(c.addClass(b),p.addClass(b),c.removeClass(v),p.removeClass(v),c.removeClass("font-gray"),p.removeClass("font-gray")):0>d?(c.addClass(v),p.addClass(v),c.removeClass(b),p.removeClass(b),c.removeClass("font-gray"),p.removeClass("font-gray")):(c.addClass("font-gray"),p.addClass("font-gray"),c.removeClass(b),p.removeClass(b),c.removeClass(v),p.removeClass(v)),f?p.removeClass("hide"):p.addClass("hide"),c.text(d>0?"+"+d:d)}function statusBoutonValider(e,t,a){var n=t,r=a,o=new Array;if("simple"==e){var s=n.find('select[name="resultatSelectionDashboardInput[]"]').val();"0"==s?r.prop("disabled",!0):r.prop("disabled",!1)}else n.find(".child-table-tr").each(function(){var e=$(this).find('select[name="resultatSelectionDashboardInput[]"]').val();o.push(e)}),-1!==$.inArray("2",o)||-1==$.inArray("2",o)&&-1==$.inArray("0",o)?r.prop("disabled",!1):r.prop("disabled",!0)}function parisEnCoursCalculateStatus(e){$(e+" select[name='resultatSelectionDashboardInput[]']").change(function(){var t,a=($(e),$(this).closest(".mainrow")),n=$(this).val(),r=$(this).parents().hasClass("subrow");if(t=r?"combine":"simple","simple"==t){var t=a.find(".type").text(),o=(a.find(".tdcote").text(),a.find(".tdsubmise").text()),s=a.find(".profits"),i=a.find(".devise"),u=a.find(".boutonvalider");statusBoutonValider(t,a,u),calculProfits(t,n,a,s,o,i)}else{var d=$(this).closest(".subrow"),l=d.prev(),t=l.find(".mainrow").text(),u=l.find(".boutonvalider"),c=$(this).closest(".child-table-tr"),o=(c.find(".child-id").text(),c.find('input[name="childrowsinput[]"]').val(),l.find(".tdsubmise").text()),s=l.find(".profits"),i=l.find(".devise");statusBoutonValider(t,d,u),calculProfits(t,"",d,s,o,i)}})}function parisEnCoursDelete(e,t,a){var n=($(e),$(t),a);$(e+" "+t).submit(function(e){e.preventDefault();{var t=$(this).closest(".mainrow"),a=t.find(".id").text();t.find(".tdretour span.subretour"),t.find(".tdcote").text(),t.find(".tdmise .tdsubmise").text(),$(this).serialize()}swal({title:"Supprimer le ticket",text:"Etes-vous sur?",type:"warning",showCancelButton:!0,confirmButtonColor:"#DD6B55",confirmButtonText:"Oui!",cancelButtonText:"Non, annuler",closeOnConfirm:!0,closeOnCancel:!0},function(e){e&&$.ajax({url:n+a,type:"delete",success:function(e){loadParisEnCours(),loadBookmakersOnDashboard(),0==e.etat?toastr.error(e.msg,"Suppression"):(toastr.success(e.msg,"Suppression"),loadBookmakersOnDashboard())},error:function(){console.log("supprimer un pari en cours ne fonctionne pas")}})})})}function parisEnCoursEnclose(e,t,a){var n=($(e),$(t),a);$(e+" "+t).submit(function(e){e.preventDefault();var t=$(this).closest(".mainrow"),a=($(this).closest(".wrapperRow"),t.find(".tdretour span.subretour"),t.find(".id").text()),r=[],o=[],s=(t.next().find(".child-row input"),t.find(".type").text());"simple"==s?(r=t.find('select[name="resultatSelectionDashboardInput[]"]').serialize(),o=t.find('input[name="childrowsinput[]"]').serialize()):(r=t.next().find('select[name="resultatSelectionDashboardInput[]"]').serialize(),o=t.next().find('input[name="childrowsinput[]"]').serialize()),$.ajax({url:n,type:"post",data:r+"&"+o+"&ticket-id="+a,dataType:"json",success:function(e){0==e.etat?toastr.error(e.msg,"Validation"):(toastr.success(e.msg,"Validation"),loadParisEnCours(),loadParisTermine(),loadBookmakersOnDashboard(),loadRecapsOnDashboard())},error:function(){console.log("valider un pari en cours ne fonctionne pas")}})})}function parisTermineDelete(){var e="#paristerminetable",t=".supprimerform",a="historique/";$(e+" "+t).submit(function(e){e.preventDefault();var t=$(this).closest(".mainrow"),n=t.find(".id").text();swal({title:"Supprimer le ticket",text:"Etes-vous sur?",type:"warning",showCancelButton:!0,confirmButtonColor:"#DD6B55",confirmButtonText:"Oui!",cancelButtonText:"Non, annuler",closeOnConfirm:!0,closeOnCancel:!0},function(e){e&&$.ajax({url:a+n,type:"delete",success:function(e){0==e.etat?toastr.error(e.msg,"Suppression"):(toastr.success(e.msg,"Suppression"),loadParisTermine(),loadBookmakersOnDashboard(),loadRecapsOnDashboard())},error:function(){console.log("supprimer un pari en cours ne fonctionne pas")}})})})}parisEnCoursDelete(),getBookmakersForSelection(),loadParisEnCours(),loadParisLongTerme(),loadParisABCD(),loadParisTermine(),loadRecapsOnDashboard(),loadBookmakersOnDashboard(),automaticBetForm(),manualBetForm(),$("#WelcomeModal").modal({keyboard:!1,backdrop:"static"});