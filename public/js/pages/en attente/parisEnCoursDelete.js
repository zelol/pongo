/**
 * Created by sebs on 19/04/2015.
 */

function parisEnCoursDelete(tablename,formname,urlgiven){
    var table = $(tablename);
    var form = $(formname);
    var url = urlgiven;
    $(tablename+' '+formname).submit(function (e) {
        e.preventDefault();
        var parent = $(this).closest('.mainrow');
        var id = parent.find('.id').text();
        var retour = parent.find('.tdretour span.subretour');
        var cote = parent.find(".tdcote").text();
        var mise = parent.find(".tdmise .tdsubmise").text();
        var ser = $(this).serialize();
        swal({
                title: "Supprimer le ticket",
                text: "Etes-vous sur?",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Oui!",
                cancelButtonText: "Non, annuler",
                closeOnConfirm: true,
                closeOnCancel: true
            },
            function (isConfirm) {
                if (isConfirm) {
                    $.ajax({
                        url: url + id,
                        type: 'delete',
                        success: function (data) {
                            loadParisEnCours();
                            loadBookmakersOnDashboard();
                            if (data.etat == 0) {
                                toastr.error(data.msg, 'Suppression');
                            } else {
                                toastr.success(data.msg, 'Suppression');
                                loadBookmakersOnDashboard();
                            }
                        },
                        error: function () {
                            console.log("supprimer un pari en cours ne fonctionne pas");
                        }
                    });
                }
            });
    });
}