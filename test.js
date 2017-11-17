
describe('Testing ascii-fullwidth-haflwidth-convert', () => {
    const Converter = require('.');
    const afhc = new Converter();

    const HALF_WIDTH =
        '!"#$%&\'()*+,-./0123456789:;<=>?' +
        '@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_' +
        '`abcdefghijklmnopqrstuvwxyz{|}~' +
        '\u0020';
    const FULL_WIDTH =
        '！＂＃＄％＆＇（）＊＋，－．／' +
        '０１２３４５６７８９：；＜＝＞？' +
        '＠ＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯ' +
        'ＰＱＲＳＴＵＶＷＸＹＺ［＼］＾＿' +
        '｀ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏ' +
        'ｐｑｒｓｔｕｖｗｘｙｚ｛｜｝～' +
        '\u3000';
    const NUM_CODE_POINTS = HALF_WIDTH.length;
    
    const MIXED = 'THE ｑｕｉｃｋ， ＢＲＯＷＮ\u3000fox.';
    const MIXED_TO_FULL = 'ＴＨＥ\u3000ｑｕｉｃｋ，\u3000ＢＲＯＷＮ\u3000ｆｏｘ．';
    const MIXED_TO_HALF = 'THE quick, BROWN fox.';

    describe('Testing toFullWidth', () => {
        for (let i = 0; i < NUM_CODE_POINTS; i++) {
            let halfWidthChar = HALF_WIDTH[i];
            let fullWidthChar = FULL_WIDTH[i];

            it ('Should convert ' + halfWidthChar + ' to ' + fullWidthChar + '.', () => {
                afhc.toFullWidth(halfWidthChar).should.be.exactly(fullWidthChar);
            });
        }

        it('Should convert the half-width characters to full-width characters.', () => {
            afhc.toFullWidth(HALF_WIDTH).should.be.exactly(FULL_WIDTH);
        });

        it('Should convert mixed string to full width', () => {
            afhc.toFullWidth(MIXED).should.be.exactly(MIXED_TO_FULL);
        });
    });

    it('Should convert the half-width characters to full-width characters.', () => {
        afhc.toHalfWidth(FULL_WIDTH).should.be.exactly(HALF_WIDTH);
    });

    describe('Testing toHalfWidth', () => {
        for (let i = 0; i < NUM_CODE_POINTS; i++) {
            let halfWidthChar = HALF_WIDTH[i];
            let fullWidthChar = FULL_WIDTH[i];

            it ('Should convert ' + fullWidthChar + ' to ' + halfWidthChar + '.', () => {
                afhc.toHalfWidth(fullWidthChar).should.be.exactly(halfWidthChar);
            });
        }
        
        it('Should convert the full-width characters to half-width characters.', () => {
            afhc.toHalfWidth(FULL_WIDTH).should.be.exactly(HALF_WIDTH);
        });

        it('Should convert mixed string to half width', () => {
            afhc.toHalfWidth(MIXED).should.be.exactly(MIXED_TO_HALF);
        });
    });
});
