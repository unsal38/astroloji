async function index_get(req, res) {
    const page_params = "index";

    const js_file_array = ["js/jquery.min.js","js/templatemo-scripts.js", "js/jquery.singlePageNav.min.js", "js/parallax.min.js", "slick/slick.min.js", "js/jquery.magnific-popup.min.js","/js/index.js"]
    res.render('index', {
        page_params,
        js_file_array
    });

}

module.exports = {
    index_get
}