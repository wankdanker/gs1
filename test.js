var gs1 = require('./');
var test = require('tape');

test('gtin-12', function (t) {
    t.equal(gs1('1111111'), '11111115');
    t.equal(gs1('2345678'), '23456785');
    
    t.equal(gs1('11111111111'), '111111111117');
    t.equal(gs1('23456789012'), '234567890129');

    t.equal(gs1('111111111111'), '1111111111116');
    t.equal(gs1('234567890123'), '2345678901234');
    
    t.equal(gs1('1111111111111'), '11111111111113');
    t.equal(gs1('2345678901234'), '23456789012344');

    t.equal(gs1('1111111111111111'), '11111111111111118');
    t.equal(gs1('2345678901234567'), '23456789012345678');

    t.equal(gs1('11111111111111111'), '111111111111111115');
    t.equal(gs1('12345678901234567'), '123456789012345675');

    t.ok(gs1.validate('11111115'));
    t.ok(gs1.validate('23456785'));
    t.ok(gs1.validate('111111111117'));
    t.ok(gs1.validate('234567890129'));
    t.ok(gs1.validate('1111111111116'));
    t.ok(gs1.validate('2345678901234'));
    t.ok(gs1.validate('11111111111113'));
    t.ok(gs1.validate('23456789012344'));
    t.ok(gs1.validate('11111111111111118'));
    t.ok(gs1.validate('23456789012345678'));
    t.ok(gs1.validate('111111111111111115'));
    t.ok(gs1.validate('123456789012345675'));

    t.notOk(gs1.validate('11111111'));
    t.notOk(gs1.validate('23456782'));
    t.notOk(gs1.validate('111111111113'));
    t.notOk(gs1.validate('234567890124'));
    t.notOk(gs1.validate('1111111111115'));
    t.notOk(gs1.validate('2345678901236'));
    t.notOk(gs1.validate('11111111111117'));
    t.notOk(gs1.validate('23456789012348'));
    t.notOk(gs1.validate('11111111111111119'));
    t.notOk(gs1.validate('23456789012345670'));
    t.notOk(gs1.validate('111111111111111111'));
    t.notOk(gs1.validate('123456789012345672'));

    //Test a number to make sure no errors occur.
    t.equal(gs1(1111111111111), '11111111111113');

    //Test to validate issue #2
    t.ok(gs1.validate('7350105160820'));

    t.end();
});