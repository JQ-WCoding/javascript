// onlcik 메소드에 넣을 함수
function loadDoc() {
    // xml Http
    var xhttp = new XMLHttpRequest();
    // 현 상태에서 변화가 생기면 실행되는 함수
    xhttp.onreadystatechange = function () {
        // state = good
        if ( this.readyState == 4 && this.status == 200 ) {
            // 내부 html (태그 내용) 안에 현재 응답에 관한 text를 넣는다
            document.getElementById( "demo" ).innerHTML = this.responseText;
        }
    };
    // open(method, url, async)
    xhttp.open( "GET", "ajax_info.txt", true );
    // sends the request to the server
    // send() -> GET, send(string) -> POST
    xhttp.send();
}

// url 을 통해 parameter 정보 넘기기
function loadDoc2() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if ( this.readyState == 4 && this.status == 200 ) {
            document.getElementById( "demo" ).innerHTML = this.responseText;
        }
    };
    xhttp.open( "GET", "demo_get2.asp?fname=Henry&lname=Ford", true );
    xhttp.send();
}

// POST 방식
function loadDocPost() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if ( this.readyState == 4 && this.status == 200 ) {
            document.getElementById( "demo" ).innerHTML = this.responseText;

        }
    };
    xhttp.open( "POST", "demo_post2.asp", true );
    // 헤더에 입력할 content의 타입을 지정할 수 있음
    xhttp.setRequestHeader( "Content-type", "application/x-www-form-urlencoded" );
    xhttp.send( "fname=Henry&lname=Ford" );
}

// xml example
function loadDocXML() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if ( this.readyState == 4 && this.status == 200 ) {
            justFunction( this );
        }
    };
    xhttp.open( "GET", "cd_catalog.xml", true );
    xhttp.send();
}

// ------ 기본
// xml 로드를 위한 함수
function justFunction( xml ) {
    var i;
    var xmlDoc = xml.responseXML;
    var table = "<tr><th>Artist</th><th>Title</th>></tr>"
    var x = xmlDoc.getElementsByTagName( "CD" );
    for ( i = 0; i < x.length; i++ ) {
        table += "<tr><td>" + x[i].getElementsByTagName( "ARTIST" )[0].childNodes[0].nodeValue + "</td><td>" + x[i].getElementsByTagName( "TITLE" )[0].childNodes[0].nodeValue + "</td></tr>";
    }
    document.getElementById( "demo" ).innerHTML = table;
}

//server page example!
<?php
$mysqli = new mysqli("servername", "username", "password", "dbname");
if($mysqli->connect_error) {
  exit('Could not connect');
}

$sql = "SELECT customerid, companyname, contactname, address, city, postalcode, country
FROM customers WHERE customerid = ?";

$stmt = $mysqli->prepare($sql);
$stmt->bind_param("s", $_GET['q']);
$stmt->execute();
$stmt->store_result();
$stmt->bind_result($cid, $cname, $name, $adr, $city, $pcode, $country);
$stmt->fetch();
$stmt->close();

echo "<table>";
    echo "<tr>";
        echo "<th>CustomerID</th>";
        echo "<td>" . $cid . "</td>";
        echo "<th>CompanyName</th>";
        echo "<td>" . $cname . "</td>";
        echo "<th>ContactName</th>";
        echo "<td>" . $name . "</td>";
        echo "<th>Address</th>";
        echo "<td>" . $adr . "</td>";
        echo "<th>City</th>";
        echo "<td>" . $city . "</td>";
        echo "<th>PostalCode</th>";
        echo "<td>" . $pcode . "</td>";
        echo "<th>Country</th>";
        echo "<td>" . $country . "</td>";
        echo "</tr>";
    echo "</table>";
?>