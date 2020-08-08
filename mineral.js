var mineral = {

    run: function (spawn) {
        let sources = Game.spawns['Spawn1'].room.find(FIND_SOURCES);
        for (let source of sources) {

            let not_wall = spawn.room
                .lookForAtArea(LOOK_TERRAIN, source.pos.y - 1
                , source.pos.x - 1, source.pos.y + 1,
                source.pos.x + 1, true) //获取矿物及其一圈 TERRAIN
                .filter((item) => {
                    return item.terrain !== 'wall'
                }); //获取能采矿的坐标

        }
    },
};

model.exports = Mineral;