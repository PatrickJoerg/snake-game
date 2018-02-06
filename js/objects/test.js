var ctx = null;

var gameTime = 0, lastFrameTime = 0;
var currentSecond = 0, framecount = 0; frameLastSecond = 0;
var showFramerate = false;

var offsetx = 0;
var offsety = 0;
var mouseState = {
    x: 0;
    y: 0;
    click: null;
};
var gameState= {
    screen: 'menu',
    
    dir = 0,
    moveDelay: 300,
    lastMove: 0,
    
    snake:[],
    newBlock: null,
    
    mapW: 14,
    mapH:14,
    tileW: 20,
    tileH: 20,
    
    score: 0,
    newBest: false,
    bestScore: 0
}
function startGame()
{
    //Resert the game item
}