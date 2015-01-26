$(document).ready(function() {
    $('.slider__controls-button').on('click', function(e){
    e.preventDefault();
        
        var
            $this = $(this),
            container = $this.closest('.slider'),
            list = container.find('.slider__list'),
            items = container.find('.slider__item'),
            activeSlide = items.filter('.active'),
            nextSlide = activeSlide.next(),
            prevSlide = activeSlide.prev(),
            firstSlide = items.first(),
            lastItem = items.last(),
            sliderOffset = container.offset().left,
            reqPos = 0;
        
        
        if($(this).hasClass('slider__controls-button_next')) {
            reqPos = nextSlide.offset().left - sliderOffset;

            nextSlide.addClass('active').siblings().removeClass('active');
            
        }else {
            reqPos = prevSlide.offset().left - sliderOffset;
            prevSlide.addClass('active').siblings().removeClass('active');
        }
     
     list.css('left', '-=' + reqPos + 'px')   
    });
    
});