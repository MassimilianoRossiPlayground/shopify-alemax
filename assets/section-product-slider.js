
(function (window) {
        
        if (window.customProductSlider) return;

        class CustomProductSlider {


                sliders_aa = null

                constructor() {

                }

                init() {
                        sliders_aa = document.querySelectorAll('.product-slider');
                        [...sliders_aa].forEach((slider) => {

                                console.log("spread forEach worked");

                        });
                }


        }
        // now you're certain there's no global module loaded
        let customProductSlider = window.customProductSlider = new CustomProductSlider()
        customProductSlider.init()
        return;
})(window);



