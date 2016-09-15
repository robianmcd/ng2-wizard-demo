(function () {
    var packages = {
        'app': {defaultExtension: 'js'},
        'rxjs': {defaultExtension: 'js'}
    };
    var ngPackageNames = [
        'common',
        'compiler',
        'core',
        'forms',
        'http',
        'platform-browser',
        'platform-browser-dynamic',
        'router'
    ];

    ngPackageNames.forEach(function packUmd(pkgName) {
        packages['@angular/' + pkgName] = {main: '/bundles/' + pkgName + '.umd.js'};
    });

    var config = {
        map: {
            '@angular': 'node_modules/@angular',
            'rxjs': 'node_modules/rxjs'
        },
        packages: packages
    };
    System.config(config);
})();
