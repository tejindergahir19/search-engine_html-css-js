$(document).ready(function(){

        /* BUTTON PRESSED FROM SEARCH  PAGE */

    $(".search .container button").click(function(){
        var q = $('.search .container input').val();

        $('.result-search input').val(q);

        $('.search').hide();
        $('.result').show();

        $(".search-results").html("<center><img src='searching.gif'></center>");

        const data = null;

        const xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === this.DONE) {
                let json = JSON.parse(this.responseText);
                var html = "";
                for(var i=0;i<15;i++)
                {
                    var results = '<a href="'+(json.results[i].link)+'"><div class="title">'+(json.results[i].title)+'</div><div class="link">'+(json.results[i].link)+'</div></a><div class="description">'+(json.results[i].description)+'</div><br>';

                    html = html + results;
                    
                }
                $(".search-results").html(html); 
            }
        });

        xhr.open("GET", "https://google-search3.p.rapidapi.com/api/v1/search/q="+q+"&num=15");
        xhr.setRequestHeader("x-user-agent", "desktop");
        xhr.setRequestHeader("x-proxy-location", "US");
        xhr.setRequestHeader("x-rapidapi-host", "google-search3.p.rapidapi.com");
        xhr.setRequestHeader("x-rapidapi-key", "838a58c050msh7a645958883cdbap1c246fjsnf2bcd2c8cd3c");

        xhr.send(data);
    });

        /* BUTTON PRESSED FROM SEARCH RESULT PAGE */

    $(".result-search button").click(function(){
        var q = $('.result-search input').val();

        $(".search-results").html("<center><img src='searching.gif'></center>");

        const data = null;

        const xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === this.DONE) {
                let json = JSON.parse(this.responseText);
                $(".searching").hide;
                var html = "";
                for(var i=0;i<15;i++)
                {
                    var results = '<a href="'+(json.results[i].link)+'"><div class="title">'+(json.results[i].title)+'</div><div class="link">'+(json.results[i].link)+'</div></a><div class="description">'+(json.results[i].description)+'</div><br>';

                    html = html + results;
                }
                $(".search-results").html(html);
                
            }
        });

        xhr.open("GET", "https://google-search3.p.rapidapi.com/api/v1/search/q="+q+"&num=15");
        xhr.setRequestHeader("x-user-agent", "desktop");
        xhr.setRequestHeader("x-proxy-location", "US");
        xhr.setRequestHeader("x-rapidapi-host", "google-search3.p.rapidapi.com");
        xhr.setRequestHeader("x-rapidapi-key", "838a58c050msh7a645958883cdbap1c246fjsnf2bcd2c8cd3c");

        xhr.send(data);
    });


        /* ENTER PRESSED FROM SEARCH PAGE */

    $('.search .container input').keypress(function(event){
	
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if(keycode == '13'){
            var q = $('.search .container input').val();

            $('.result-search input').val(q);

            $('.search').hide();
        $('.result').show();

        $(".search-results").html("<center><img src='searching.gif'></center>");
    
            const data = null;
    
            const xhr = new XMLHttpRequest();
            xhr.withCredentials = true;
    
            xhr.addEventListener("readystatechange", function () {
                if (this.readyState === this.DONE) {
                    let json = JSON.parse(this.responseText);
    
                    var html = "";
                    for(var i=0;i<15;i++)
                    {
                        var results = '<a href="'+(json.results[i].link)+'"><div class="title">'+(json.results[i].title)+'</div><div class="link">'+(json.results[i].link)+'</div></a><div class="description">'+(json.results[i].description)+'</div><br>';
    
                        html = html + results;
                    }
                    $(".search-results").html(html);
                    
                    
                }
            });
    
            xhr.open("GET", "https://google-search3.p.rapidapi.com/api/v1/search/q="+q+"&num=15");
            xhr.setRequestHeader("x-user-agent", "desktop");
            xhr.setRequestHeader("x-proxy-location", "US");
            xhr.setRequestHeader("x-rapidapi-host", "google-search3.p.rapidapi.com");
            xhr.setRequestHeader("x-rapidapi-key", "838a58c050msh7a645958883cdbap1c246fjsnf2bcd2c8cd3c");
    
            xhr.send(data);	
        }
    
    });


    /* ENTER PRESSED FROM SEARCH RESULT PAGE */

    $('.result-search input').keypress(function(event){
	
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if(keycode == '13'){
            var q = $('.result-search input').val();

            $(".search-results").html("<center><img src='searching.gif'></center>");


            const data = null;
    
            const xhr = new XMLHttpRequest();
            xhr.withCredentials = true;
    
            xhr.addEventListener("readystatechange", function () {
                if (this.readyState === this.DONE) {
                    let json = JSON.parse(this.responseText);
           
            var html = "";
                    for(var i=0;i<15;i++)
                    {
                        var results = '<a href="'+(json.results[i].link)+'"><div class="title">'+(json.results[i].title)+'</div><div class="link">'+(json.results[i].link)+'</div></a><div class="description">'+(json.results[i].description)+'</div><br>';
    
                        html = html + results;
                    }
                   
                    $(".search-results").html(html);
                }
            });
    
            xhr.open("GET", "https://google-search3.p.rapidapi.com/api/v1/search/q="+q+"&num=15");
            xhr.setRequestHeader("x-user-agent", "desktop");
            xhr.setRequestHeader("x-proxy-location", "US");
            xhr.setRequestHeader("x-rapidapi-host", "google-search3.p.rapidapi.com");
            xhr.setRequestHeader("x-rapidapi-key", "838a58c050msh7a645958883cdbap1c246fjsnf2bcd2c8cd3c");
    
            xhr.send(data);
        }
    
    });
}); 