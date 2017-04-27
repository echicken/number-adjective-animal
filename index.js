var words = JSON.parse(
    require('fs').readFileSync(
        require('path').join(__dirname, './words.json'), 'utf8'
    )
);

function generate(nmax, adjc, upwd) {
    var pwd = Math.max(2, Math.floor(Math.random() * nmax) + 1);
    for (var n = 0; n < adjc; n++) {
        pwd += words.Adjectives[
            Math.floor(Math.random() * words.Adjectives.length)
        ];
    }
    pwd += words.Animals[Math.floor(Math.random() * words.Animals.length)];
    if (upwd) {
        return {
            password : pwd,
            unicodePwd : new Buffer('"' + pwd + '"', 'utf16le').toString()
        };
    } else {
        return pwd;
    }
};

module.exports = {
    getPassword : function (opts) {
        if (typeof opts !== 'object') {
            opts = { nmax : 999, adjc : 1, pwdc : 1, upwd : false };
        } else {
            if (typeof opts.nmax !== 'number') {
                opts.nmax = 999;
            } else if (opts.nmax < 2) {
                opts.nmax = 2;
            }
            if (typeof opts.adjc !== 'number' || opts.adjc < 0) opts.adjc = 1;
            if (typeof opts.upwd !== 'boolean') opts.upwd = false;
        }
        return generate(opts.nmax, opts.adjc, opts.upwd);
    },
    getPasswords : function (count, opts) {
        if (typeof count !== 'number' || count < 1) count = 1;
        var ret = [];
        for (var n = 0; n < count; n++) {
            ret.push(this.getPassword(opts));
        }
        return ret;
    }
};
