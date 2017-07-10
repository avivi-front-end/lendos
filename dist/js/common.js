'use strict';
if (!window.console)
    window.console = {};
if (!window.console.memory)
    window.console.memory = function() {};
if (!window.console.debug)
    window.console.debug = function() {};
if (!window.console.error)
    window.console.error = function() {};
if (!window.console.info)
    window.console.info = function() {};
if (!window.console.log)
    window.console.log = function() {};

// sticky footer
//-----------------------------------------------------------------------------
if (!Modernizr.flexbox) {
    (function() {
        var $pageWrapper = $('#page-wrapper'),
            $pageBody = $('#page-body'),
            noFlexboxStickyFooter = function() {
                $pageBody.height('auto');
                if ($pageBody.height() + $('#header').outerHeight() + $('#footer').outerHeight() < $(window).height()) {
                    $pageBody.height($(window).height() - $('#header').outerHeight() - $('#footer').outerHeight());
                } else {
                    $pageWrapper.height('auto');
                }
            };
        $(window).on('load resize', noFlexboxStickyFooter);
    })();
}
if (ieDetector.ieVersion == 10 || ieDetector.ieVersion == 11) {
    (function() {
        var $pageWrapper = $('#page-wrapper'),
            $pageBody = $('#page-body'),
            ieFlexboxFix = function() {
                if ($pageBody.addClass('flex-none').height() + $('#header').outerHeight() + $('#footer').outerHeight() < $(window).height()) {
                    $pageWrapper.height($(window).height());
                    $pageBody.removeClass('flex-none');
                } else {
                    $pageWrapper.height('auto');
                }
            };
        ieFlexboxFix();
        $(window).on('load resize', ieFlexboxFix);
    })();
}

$(function() {

    // placeholder
    //-----------------------------------------------------------------------------
    $('input[placeholder], textarea[placeholder]').placeholder();

});

var slider = (function() {
    var sliderWrap = $('.js-slider');
    var headlink = $('.slider-section__head-link');

    sliderWrap.slick({
        prevArrow: '.js-slider-prev',
        nextArrow: '.js-slider-next'
    })

    sliderWrap.on('afterChange', function(slick, currentSlide) {
        headlink.removeClass('active');
        headlink.eq(currentSlide.currentSlide).addClass('active')
    });

    headlink.on('click', function(e) {
        e.preventDefault();
        var index = $(this).index();
        sliderWrap.slick('slickGoTo', index);
    })
})();

function slowScroll(id){
    var offset= 0;
    $('html, body').animate ({
        scrollTop: $(id).offset().top - offset
    }, 500);
    return false;
}


var inputVal = (function(){
    $('.converter-input').on('keyup keypress', function(e) {
        if (e.keyCode == 8 || e.keyCode == 46) {}
        else
        {
            var letters='1234567890';
            return (letters.indexOf(String.fromCharCode(e.which))!=-1);
        }
    });
})();

 $('.js-form-order').validate({
    rules: {
      name: {
        required : true,
      },
      phone: {
        required: true,
      }
    },
    messages: {
      name: {
        required: " ",
      },
      phone: {
        required: " "
      }
    }
  });
 $('.js-form-prognoz').validate({
    rules: {
      name: {
        required : true,
      },
      phone: {
        required: true,
      }
    },
    messages: {
      name: {
        required: " ",
      },
      phone: {
        required: " "
      }
    }
  });
  $('.js-form-footer').validate({
    rules: {
      name: {
        required : true,
      },
      phone: {
        required: true,
      }
    },
    messages: {
      name: {
        required: " ",
      },
      phone: {
        required: " "
      }
    }
  });
  var showElement = (function(){
    var innerBlock = $(".js-appendText");
    $('.price__table-link').on('click', function(e) {
        e.preventDefault();
        innerBlock.text('');
        var getAttr = $(this).attr('data-name');
       innerBlock.text('Вы выбрали тип : ' + getAttr );
})
  })();

(function($, document) {

    function init($element) {

        var $inputList = $element.find('.js-lm-calc__input');
        var $hintList = $element.find('.js-lm-calc__hint');
        var $footList = $element.find('.js-lm-calc__foot');

        $inputList.each(function() {

            $(this).on('focus', function() {
                $hintList.hide();
                $footList.removeClass('lm-calc__disabled');
                var $col = $(this).closest('.js-lm-calc__col');
                var $hint = $col.find('.js-lm-calc__hint');
                if (!$hint.length) {
                    return;
                }

                $col.find('.js-lm-calc__foot').addClass('lm-calc__disabled');
                $hint.slideToggle('fast', function() {

                });
            });
        });


        // $(document).on('click', function(e) {
        //     if (!$(e.target).hasClass('js-lm-calc__input')) {
        //         $hintList.hide();
        //         $footList.removeClass('lm-calc__disabled');
        //     }
        // });


        $inputList.change(function() {

            // Change "," to "."
            var val = $(this).val().toString().replace(/\,/g, '.');

            $(this).val(val);
            var filt = filter($(this).val());

            $(this).val(filt);
            var nums = numberWithCommas($(this).val());

            $(this).val(nums);

        });


        function filter(x) {
            return x.toString().replace(/[^\.\-0-9]/gim, '');
        }


        function numberWithCommas(x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        }


        ////

        function calc() {
            var $advBudget = $element.find('.js-lm-calc__adv-budget'); //СЂРµРєР»Р°РјРЅС‹Р№ Р±СЋРґР¶РµС‚
            var $adImpDown = $element.find('.js-lm-calc__ad-imp'); //РїРѕРєР°Р·РѕРІ СЂРµРєР»Р°РјС‹
            var $cpc = $element.find('.js-lm-calc__cpc'); //С†РµРЅР° Р·Р° РєР»РёРє
            var $transitionsDown = $element.find('.js-lm-calc__transitions'); //РїРµСЂРµС…РѕРґС‹
            var $ctr = $element.find('.js-lm-calc__ctr'); //ctr
            var $leadCostDown = $element.find('.js-lm-calc__lead-cost'); //СЃС‚РѕРёРјРѕСЃС‚СЊ Р»РёРґР°
            var $conv = $element.find('.js-lm-calc__conversion'); //РєРѕРЅРІРµСЂСЃРёСЏ СЃС‚СЂР°РЅРёС†С‹
            var $requestDown = $element.find('.js-lm-calc__request'); //Р·Р°СЏРІРєРё
            var $convSale = $element.find('.js-lm-calc__conv-sale'); //РєРѕРЅРІРµСЂСЃРёСЏ РІ РїСЂРѕРґР°Р¶Рё
            var $personDown = $element.find('.js-lm-calc__person'); //РєР»РёРµРЅС‚РѕРІ
            var $avTicket = $element.find('.js-lm-calc__av-ticket'); //СЃСЂРµРґРЅРёР№ С‡РµРє
            var $customerValueDown = $element.find('.js-lm-calc__customer-value'); //СЃС‚РѕРёРјРѕСЃС‚СЊ РєР»РёРµРЅС‚Р°
            var $profit = $element.find('.js-lm-calc__profit'); //СЂРµРЅС‚Р°Р±РµР»СЊРЅРѕСЃС‚СЊ
            var $netProfit = $element.find('.js-lm-calc__net-profit'); //С‡РёСЃС‚Р°СЏ РїСЂРёР±С‹Р»СЊ
            var $roiDown = $element.find('.js-lm-calc__roi'); //roi

            var calcAdvBudget = true;
            var calcAdImpDown = false;
            var calcNetProfit = false;
            $netProfit.on('focus', function() {
                calcAdvBudget = false;
                calcAdImpDown = false;
                calcNetProfit = true;
            }).on('focusout', function() {

            });


            $adImpDown.on('focus', function() {

                calcAdvBudget = false;
                calcAdImpDown = true;
                calcNetProfit = false;

                $(this).removeClass('lm-calc__input_has_opacity');
                $advBudget.addClass('lm-calc__input_has_opacity');

            }).on('focusout', function() {
                //   $(this).addClass('lm-calc__input_has_opacity');
            });

            $advBudget.on('focus', function() {

                calcAdvBudget = true;
                calcAdImpDown = false;
                calcNetProfit = false;


                $(this).removeClass('lm-calc__input_has_opacity');
                $adImpDown.addClass('lm-calc__input_has_opacity');
            });





            //        РџРµСЂРµС…РѕРґС‹ = Р РµРє.Р±СЋРґР¶РµС‚ / СЃС‚РѕРёРјРѕСЃС‚СЊ РєР»РёРєР°
            //        РџРµСЂРµС…РѕРґС‹ = 40000 / 5 = 8000
            function setTransitions() {
                if (calcAdImpDown) {
                    var r = Math.round(filter($adImpDown.val()) * filter($ctr.val() / 100));
                } else {
                    var r = Math.round(filter($advBudget.val()) / filter($cpc.val()));
                }
                if (isNaN(r) || r === Number.POSITIVE_INFINITY || r === Number.NEGATIVE_INFINITY) {
                    r = 0;
                }
                r = Math.round(r);
                r = numberWithCommas(r);
                $transitionsDown.text(r);
                $(window).trigger('changeTransitionsDown');

            }

            $advBudget.on('change', function() {

                setTransitions();
                setLeadCostDown();
                setCustomerValueDown();
                setNetProfit();
                setRoi();
            });

            $cpc.on('change', function() {
                setTransitions();
            });


            //РџРѕРєР°Р·С‹=РїРµСЂРµС…РѕРґС‹/ctr
            //РџРѕРєР°Р·С‹=8000/0,03=266 666
            function setAdImp() {
                var r = Math.round(filter($transitionsDown.text()) / (filter($ctr.val()) / 100));

                if (isNaN(r) || r === Number.POSITIVE_INFINITY || r === Number.NEGATIVE_INFINITY) {
                    r = 0;
                }

                r = Math.round(r);
                r = numberWithCommas(r);
                $adImpDown.val(r);
            }

            $ctr.on('change', function() {
                if (!calcAdImpDown) {

                    setAdImp();

                    //                      console.log(calcAdImpDown)

                    //    setTransitions();
                    //                setLeadCostDown();
                    //                setCustomerValueDown();
                    //                setNetProfit();
                    //                setRoi();


                } else {
                    //                    console.log(2)
                    setTransitions();
                }

            });
            $(window).on('changeTransitionsDown', function() {

                if (!calcAdImpDown) {
                    setAdImp();
                } else {
                    setAdvBudget();
                }

                setRequestDown();
            });


            //Р—Р°СЏРІРєРё=РєРѕРЅРІРµСЂСЃРёСЏ Р»РµРЅРґРёРЅРіР°*РїРµСЂРµС…РѕРґС‹
            //Р—Р°СЏРІРєРё=0,02*8000=160
            function setRequestDown() {
                var r = filter($conv.val()) / 100 * filter($transitionsDown.text());

                if (isNaN(r) || r === Number.POSITIVE_INFINITY || r === Number.NEGATIVE_INFINITY) {
                    r = 0;
                }

                r = Math.round(r);
                r = numberWithCommas(r);
                $requestDown.text(r);
                $(window).trigger('changeRequestDown');
            }

            $conv.on('change', function() {
                setRequestDown();
            });


            //РЎС‚РѕРёРјРѕСЃС‚СЊ Р»РёРґР°=СЂРµРєР». Р±СЋРґР¶РµС‚/Р·Р°СЏРІРєРё
            //РЎС‚РѕРёРјРѕСЃС‚СЊ Р»РёРґР°=40000/160=250 СЂСѓР±
            function setLeadCostDown() {
                var r = filter($advBudget.val()) / filter($requestDown.text());

                if (isNaN(r) || r === Number.POSITIVE_INFINITY || r === Number.NEGATIVE_INFINITY) {
                    r = 0;
                }

                r = Math.round(r);
                r = numberWithCommas(r);

                $leadCostDown.text(r);
            }

            $(window).on('changeRequestDown', function() {
                setLeadCostDown();
                setPersonDown();
            });



            //РљР»РёРµРЅС‚РѕРІ=РєРѕРЅРІРµСЂСЃРёСЏ РІ РїСЂРѕРґР°Р¶Сѓ*Р·Р°СЏРІРєРё
            //РљР»РёРµРЅС‚С‹=0,5*160=80
            function setPersonDown() {
                var r = filter($convSale.val()) / 100 * filter($requestDown.text());

                if (isNaN(r) || r === Number.POSITIVE_INFINITY || r === Number.NEGATIVE_INFINITY) {
                    r = 0;
                }

                r = Math.round(r);
                r = numberWithCommas(r);
                $personDown.text(r);
                $(window).trigger('changePersonDown');
            }

            $convSale.on('change', function() {
                setPersonDown();
            });



            //РЎС‚РѕРёРјРѕСЃС‚СЊ РєР»РёРµРЅС‚Р°=СЂРµРє. Р±СЋРґР¶РµС‚/РєР»РёРµРЅС‚РѕРІ
            //РЎС‚РѕРёРјРѕСЃС‚СЊ РєР»РёРµРЅС‚Р°=40000/80=500СЂСѓР±
            function setCustomerValueDown() {

                var r = filter($advBudget.val()) / filter($personDown.text());
                if (isNaN(r) || r === Number.POSITIVE_INFINITY || r === Number.NEGATIVE_INFINITY) {
                    r = 0;
                }

                r = Math.round(r);
                r = numberWithCommas(r);

                $customerValueDown.text(r);
                $(window).trigger('changeCustomerValueDown');
            }

            $(window).on('changePersonDown', function() {
                setCustomerValueDown();
                setNetProfit();
            });


            //Р§РёСЃС‚Р°СЏ РїСЂРёР±С‹Р»СЊ= РєР»РёРµРЅС‚С‹*СЃСЂРµРґРЅРёР№ С‡РµРє*СЂРµРЅС‚Р°Р±РµР»СЊРЅРѕСЃС‚СЊ-СЂРµРєР»Р°РјРЅС‹Р№ Р±СЋРґР¶РµС‚
            //Р§Рџ=80*2000*0,4-40000=24000
            function setNetProfit() {

                var r = filter($personDown.text()) * filter($avTicket.val()) * filter($profit.val()) / 100 - filter($advBudget.val());
                if (isNaN(r) || r === Number.POSITIVE_INFINITY || r === Number.NEGATIVE_INFINITY) {
                    r = 0;
                }
                r = Math.round(r);
                r = numberWithCommas(r);
                $netProfit.val(r);
                $(window).trigger('changeNetProfit');
                debugger;
            }

            $avTicket.on('change', function() {

                setNetProfit();
            });

            $profit.on('change', function() {
                console.log($(this));
                setNetProfit();
            });


            //ROI=С‡Рї/СЂРµРєР»Р°РјРЅС‹Р№ Р±СЋРґР¶РµС‚*100
            //roi=24000/40000*100=60%
            function setRoi() {
                var r = filter($netProfit.val()) / filter($advBudget.val()) * 100;

                if (isNaN(r) || r === Number.POSITIVE_INFINITY || r === Number.NEGATIVE_INFINITY) {
                    r = 0;
                }

                r = Math.round(r);

                var $wrap = $roiDown.closest('.js-lm-calc__roi-wrap');

                if (r < 0) {
                    $wrap.addClass('lm-calc__spec_color_red');
                } else {
                    $wrap.removeClass('lm-calc__spec_color_red');
                }

                r = numberWithCommas(r);

                //r = r.toString().replace(/\-/gim, '<i class="lm-calc__minus">-</i>');

                $roiDown.html(r);
            }

            $(window).on('changeNetProfit', function() {
                setRoi();
            });




            //Р§РёСЃС‚Р°СЏ РїСЂРёР±С‹Р»СЊ+СЂРµРєР»Р°РјРЅС‹Р№ Р±СЋРґР¶РµС‚=СЂРµРєР»Р°РјРЅС‹Р№ Р±СЋРґР¶РµС‚/СЃС‚РѕРёРјРѕСЃС‚СЊ РєР»РёРєР°*РєРѕРЅРІРµСЂСЃРёСЏ Р»РµРЅРґРёРЅРіР°*РєРѕРЅРІРµСЂСЃРёСЏ РІ РїСЂРѕРґР°Р¶Рё*СЃСЂРµРґРЅРёР№ С‡РµРє*СЂРµРЅС‚Р°Р±РµР»СЊРЅРѕСЃС‚СЊ
            function setAdvBudget() {

                if (calcAdImpDown) {

                    var r = Math.round(filter($transitionsDown.text()) * (filter($cpc.val())));

                    //Math.round(filter($adImpDown.val())*filter($(this).val()/100));

                } else {
                    var l = filter($conv.val()) / 100 * filter($convSale.val()) / 100 * filter($avTicket.val()) * filter($profit.val()) / 100;
                    var r = (filter($netProfit.val()) * filter($cpc.val())) / (l - filter($cpc.val()));





                }

                if (isNaN(r) || r === Number.POSITIVE_INFINITY || r === Number.NEGATIVE_INFINITY) {
                    r = 0;
                }

                r = Math.round(r);
                r = numberWithCommas(r);
                console.log(r);
                $advBudget.val(r);

                if (calcNetProfit) {

                    setTransitions();
                    setLeadCostDown();
                    setCustomerValueDown();

                }



            }
            $netProfit.on('change', function() {
                setAdvBudget();
            });

            $adImpDown.on('change', function() {

                var r = Math.round(filter($(this).val()));
                $(this).val(numberWithCommas(r));

                setTransitions();



            });



        }

        calc();

    }


    $(document).ready(function() {
        rubli();
        $('.js-lm-calc').each(function() {
            init($(this));
        });
        $(".converter-input input").inputmask("+9 (999) 999-9999");
        $('.js-pop-up-close').on('click', function(e){
            $.magnificPopup.close();
        });
        calcInputs();
    });
}(jQuery, document));
function calcInputs(){
    $('.js-lm-calc__input').on('focus', function(){
        var thisParent =  $(this).closest('.calculator__step-form-group');
        if(thisParent.is(':has(.js-calculator__hint)')){
            thisParent.find('.js-calculator__hint').css('display', 'block');
            thisParent.find('.calculator__step-result').addClass('disabled');
        }
    });
    $('.js-lm-calc__input').on('focusout', function(){
        $('.js-calculator__hint').css('display', 'none');
        $('.calculator__step-result').removeClass('disabled');
    });
    $('.js-lm-calc__input').on('keyup keypress', function(e) {
        if (e.keyCode == 8 || e.keyCode == 46) {}
        else
        {
            var letters='1234567890.';//якщо десятичні
            return (letters.indexOf(String.fromCharCode(e.which))!=-1);
        }
    });
    $('.calculator__step').on('click', function(){
        $('.calculator__step').removeClass('active');
        $(this).addClass('active');
    })

};

