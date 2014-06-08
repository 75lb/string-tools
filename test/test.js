var test = require("tape");
var s = require("../");

test("escapeRegExp", function(t){
    t.equal(s.escapeRegExp("(.*)"), "\\(\\.\\*\\)");
    t.end();
});

test("escapeRegExp", function(t){
    t.equal(s.fill("a", 10), "aaaaaaaaaa");
    // t.equal(s.fill("ab", 10), "ababababab"); // only works this way on 0.11
    t.end();
});

test("escapeRegExp", function(t){
    t.equal(s.padRight("clive", 1), "clive");
    t.equal(s.padRight("clive", 1, "-"), "clive");
    t.equal(s.padRight("clive", 10, "-"), "clive-----");    
    t.end();
});
