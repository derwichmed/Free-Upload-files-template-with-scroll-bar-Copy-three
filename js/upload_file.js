function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                $(function (){
                    var src = "";
                    switch (input.files[0].type){
                        case 'image/png': 
                            src = "img/png.png";
                            break;
                        case 'image/jpeg':
                             src = "img/jpg.png";
                             break;
                         case 'application/pdf':
                              src = "img/pdf.png";
                              break;
                    }
                    var elem = '<div class="row file_item">'+
                                                '<div class="col-2 file_img">'+
                                                    '<img src="'+src+'"/>'+
                                                '</div>'+
                                                '<div class="col" style="padding: 0px">'+
                                                    '<div class="container-fluid">'+
                                                        '<div class="row justify-content-between">'+
                                                            '<div class="col file_name">'+
                                                                input.files[0].name+
                                                            '</div>'+
                                                            '<div class="col-4 file_size">'+
                                                                input.files[0].size+
                                                            '</div>'+
                                                        '</div>'+
                                                        '<div class="row">'+
                                                            '<div class="col file_progress">'+
                                                                '<div class="progress progress-bar progress-bar-striped progress-bar-animated">'+
                                                                    
                                                                '</div>'+ 
                                                            '</div>'+
                                                        '</div>'+
                                                        '<div class="row">'+
                                                            '<div class="col file_log">'+
                                                                '40% done'+
                                                            '</div>'+
                                                        '</div>'+
                                                    '</div>'+
                                                '</div>'+
                                            '</div>';
                        $('.lst_file_item').append(elem);
                        //image/png
                        //image/jpeg
                        //application/pdf
                });
            };
            reader.readAsDataURL(input.files[0]);
        }
    }