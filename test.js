
describe('Testing ascii-fullwidth-haflwidth-convert', () => {
    const afhc = require('.');
    const HALF_WIDTH =
        '!"#$%&\'()*+,-./0123456789:;<=>?' +
        '@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_' +
        '`abcdefghijklmnopqrstuvwxyz{|}~';
    const FULL_WIDTH =
        '！＂＃＄％＆＇（）＊＋，－．／' +
        '０１２３４５６７８９：；＜＝＞？' +
        '＠ＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯ' +
        'ＰＱＲＳＴＵＶＷＸＹＺ［＼］＾＿' +
        '｀ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏ' +
        'ｐｑｒｓｔｕｖｗｘｙｚ｛｜｝～';
    const NUM_CODE_POINTS = HALF_WIDTH.length;

    describe('Testing toFullWidth', () => {
        for (let i = 0; i < NUM_CODE_POINTS; i++) {
            let halfWidthChar = HALF_WIDTH[i];
            let fullWidthChar = FULL_WIDTH[i];

            it ('Should convert half-width ' + halfWidthChar + ' to full-width ' + fullWidthChar + '.', () => {
                afhc.toFullWidth(halfWidthChar).should.be.exactly(fullWidthChar);
            });
        }
    });

    describe('Testing fromFullWidth', () => {
        for (let i = 0; i < NUM_CODE_POINTS; i++) {
            let halfWidthChar = HALF_WIDTH[i];
            let fullWidthChar = FULL_WIDTH[i];

            it ('Should convert full-width ' + fullWidthChar + ' to half-width ' + halfWidthChar + '.', () => {
                afhc.toFullWidth(fullWidthChar).should.be.exactly(halfWidthChar);
            });
        }
    });
});
