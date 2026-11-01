const HaxballJS = require('haxball.js');

HaxballJS().then((HBInit) => {
    var room = HBInit({
        roomName: "Futsal Cat Hax | x1 [Conpetitive]",
        maxPlayers: 12,
        public: true,
        playerName: "X1 BOT",
        noPlayer: true,
        geo: { code: "ve", lat: 10.5, lon: -66.9 }
    });

    // Configuración del webhook de Discord para las repeticiones
    const WEBHOOK_DISCORD = 'https://discord.com/api/webhooks/1566523201973002371/clTC85x7AKjM1EcRNd4txOf1NesVZ0JOmmOxt9k0iyk6Gpb';

    // Cargar el mapa personalizado de Futsal
    room.setCustomStadium(JSON.stringify({
        "name": "1v1 & 2v2 Futsal Map by D1mS (FIXED) [haxmods.com]",
        "width": 420,
        "height": 200,
        "spawnDistance": 180,
        "redSpawnPoints": [[-180,0],[-180,-50],[-180,50],[-180,100],[-180,-100],[-368,0]],
        "blueSpawnPoints": [[180,0],[180,-50],[180,50],[180,100],[180,-100],[368,0]],
        "bg": {"type":"","height":0,"width":0,"color":"404447"},
        "vertices": [
            {"x":368,"y":171,"traits":["ballArea"]},{"x":0,"y":200,"traits":["kickoffBarrier"]},{"x":0,"y":66,"bcoef":0.15,"traits":["kickoffgoalNet"],"curve":0,"color":"ffffff","pos":[550,-80],"bias":-25},{"x":-368,"y":-171,"bcoef":1,"cMask":["ball"],"traits":["ballArea"],"curve":0,"color":"ffffff","pos":[550,80],"bias":-25}
        ],
        "segments": [],
        "goals": [
            {"p0":[-375,-60],"p1":[-375,60],"team":"red"},
            {"p0":[375,-60],"p1":[375,60],"team":"blue"}
        ],
        "discs": [
            {"radius":6.4,"invMass":1.5,"pos":[0,0],"color":"FFD500","bcoef":0.4,"cGroup":["ball"],"kick","score"],"damping":0.99},
            {"radius":5,"pos":[-368,60],"color":"F80000","traits":["goalPost"],"y":60,"x":-368},
            {"radius":5,"pos":[-368,-60],"color":"F80000","traits":["goalPost"],"y":-60,"x":-368},
            {"radius":5,"pos":[368,60],"color":"6666FF","traits":["goalPost"],"y":80},
            {"radius":5,"pos":[368,-60],"color":"6666FF","traits":["goalPost"],"y":-80}
        ]
    }));
});