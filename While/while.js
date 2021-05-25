let funds = 50;

while ( funds > 1 && funds < 100 ) {
    // 돈걸기

    // 주사위 굴리기

    // 그림을 맞췄으면 돈을 가져오기

}

// m 이상 n 이하의 무작위 정수 반환
function rand( m, n ) {
    return m + Math.floor( ( n - m + 1 ) * Math.random() );
}

// 무작위 반환
function randFace() {
    return ["crown", "anchor", "heart", "spade", "club", "diamond"]
        [rand( 0, 5 )];
}

const bets = {crown: 0, anchor: 0, heart: 0, spade: 0, club: 0, diamond: 0};
let totalBet = rand( 1, funds );
if ( totalBet === 7 ) {
    totalBet = funds;
    bets.heart = totalBet;
} else {

}
funds = funds - totalBet;