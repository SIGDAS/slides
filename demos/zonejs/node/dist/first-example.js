var rootZone = Zone.current;
var myZone = rootZone.fork({ name: 'myZone', properties: { user: null } });
myZone.run(function () {
    console.log(Zone.current.name);
    console.log(Zone.current.get('user'));
    console.log(Zone.current.parent.name);
    var myZoneChild = myZone.fork({ name: 'MyZoneChild', properties: { user: { name: 'Ivan' } } });
    myZoneChild.run(function () {
        console.log(Zone.current.name);
        console.log(Zone.current.get('user'));
        console.log(Zone.current.parent.name);
    });
});
//# sourceMappingURL=first-example.js.map