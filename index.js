const HBInit = require('haxball.js');

var room = HBInit({
    roomName: "Futsal Cat Hax | x1",
    maxPlayers: 12,
    public: true,
    playerName: "X1 BOT",
    noPlayer: true,
    geo: { code: "ve", lat: 10.5, lon: -66.9 }
});

room.setCustomStadium(JSON.stringify({
    "name": "Futsal Map",
    "width": 420,
    "height": 200,
    "spawnDistance": 180,
    "redSpawnPoints": [[-180,0]],
    "blueSpawnPoints": [[180,0]],
    "bg": {"type":"","height":0,"width":0,"color":"404447"},
    "vertices": [],
    "segments": [],
    "goals": [
        {"p0":[-375,-60],"p1":[-375,60],"team":"red"},
        {"p0":[375,-60],"p1":[375,60],"team":"blue"}
    ],
    "discs": [
        {"radius":6.4,"invMass":1.5,"pos":[0,0],"color":"FFD500","bcoef":0.4,"cGroup":["ball"],"damping":0.99}
    ]
}));
