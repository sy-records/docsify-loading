const loading = function (hook) {
    hook.afterEach(function (html, next) {
        html = html.replace(/<img(.*?)>/g, function (match, p1) {
            if (p1.indexOf('loading=') === -1) {
                return match.replace('>', ' loading="lazy">');
            }
            return match;
        });

        next(html);
    });
};

$docsify = $docsify || {};
$docsify.plugins = [].concat(loading, $docsify.plugins || []);
