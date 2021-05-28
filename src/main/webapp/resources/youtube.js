$(document).ready(function(){
        var API_KEY = "AIzaSyDOHck4sZ2sSv-QXZGm9U5NsVBq-GXGfVg"; //본인 구글 api 키
        var video ='';
        
        $("form").submit(function(event){ //body에 선언되있는 form태그가 submit되면 콜백function이 event 오브젝트를 가지며 실행되고
            event.preventDefault(); //preventDefault: a태그/submit태그를 누르면 href를 통해 이동되거나, 창이 새로고침 되는 동작을 막아줌

            var search = $("#search").val();  //유저로부터 받는 키(검색어)- input태그에 id=로 키값을 넘길수 있게 선언해놓음
            videoSearch(API_KEY,search,10) //api키, 검색어,maxResult의 값
        })
    
        function videoSearch(key,search,maxResults){

            $("#videos").empty(); //선택한 요소(#videos)의 내용을 지움 

            // https://developers.google.com/youtube/v3/docs/search/list?hl=ko
            //     사이트에 있는 HTTP요청에 있는 get
            // 파라미터로 part=snippet(디폴트) + key(구글 API 키) + maxResult(결과 최대 갯수) + q(값(QUERY)=검색어) + type(video) = JSON형식으로 반환
            //임베디드 링크(홈페이지를 열거나 링크를 클릭하면 자신의 홈페이지에서 해당 링크 음악 등이 자동으로 흘러나오는 경우)embed -> 링크 삽입
            $.get("https://www.googleapis.com/youtube/v3/search?key=" + key + "&type=video&part=snippet&maxResults=" + maxResults + "&q=" + search, function(data){
                console.log(data)

                data.items.forEach(item => {
                    video = `
                    <iframe width="420" height="315" src="http://www.youtube.com/embed/${item.id.videoId}" frameborder="0" allowfullscreen></iframe>
                    `
                    //<iframe width="640" height="360" src="http://www.youtube.com/embed/M7lc1UVf-VE?enablejsapi=1 frameborder="0"></iframe>
                    //                                                                 M7lc1UVf-VE가 videoID이고 embedded code라고 한다 
                    $("#videos").append(video);
                });
            })   
        }
    });