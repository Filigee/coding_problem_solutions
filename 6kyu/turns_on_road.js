// https://www.codewars.com/kata/591c075a94414c1617000063/solutions

function turnsOnRoad(x, y) {
    if ((x==0 || x==1) && (y==0)) { return 0; }
    if ( (y+x)>=0 && (y-x)>0 ) { return 4*y-2; } // upper
    if ( (y+x)<0 && (y-x)>=0 ) {return -4*x-1; } // left
    if ( (y-x)<=0 && (y+x-1)>0 ) {return 4*x-3; } // right
    if ( (y-x)<0 && (y+x-1)<=0 ) {return -4*y; } // lower
}
