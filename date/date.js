// switch 를 통해 경우에 따라 case를 나누고 그에 해당하는 값을 주는것이 가능하다.
// break 를 이용해 탈출한다.

var text;
switch ( new Date().getDay() ) {
    case 4:
    case 5:
        text = "곧 주말!";
        break;
    case 0:
    case 6:
        text = "주말!";
        break;
    default:
        text = "주말까지 많이 남았다...";
}
document.getElementById( "searchItem" ).innerHTML = text;

