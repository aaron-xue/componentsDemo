$(function () {
    var $content = $('.content');
    var $menu = $('#menu');
    $.each(cityData, function (index, item) {
        var $itemGroup = $('<li class="item" id="item' + index + '"></li>')
        $itemGroup.append('<h2 class="item_letter">' + item.name + '</h2>')
        $menu.append('<span class="letter" name="#item' + index + '">' + item.name + '</span>')
        $menu.find("span:first-of-type").addClass("current");
        var $itemlist = $('<ul></ul>')
        $.each(item.cities, function (ide, ite) {
            $itemlist.append('<li>' + ite.name + '</li>')
        })
        $itemGroup.append($itemlist)
        $content.append($itemGroup);
    })
    var scroll = new BScroll('.wrapper', {
        probeType: 3
    })
    scroll.on('scroll', function (pos) {
        var scrollTop = $(document).scrollTop();
        var contentItems = $("#content").find(".item");
        var currentItem = "";
        contentItems.each(function () {
            var contentItem = $(this);
            var offsetTop = contentItem.offset().top;
            if (scrollTop > offsetTop - 200) {
                currentItem = "#" + contentItem.attr("id");
            }
        });
        if (currentItem != $("#menu").find(".current").attr("name")) {
            $("#menu").find(".current").removeClass("current");
            $("#menu").find("span[name='" + currentItem + "']").addClass("current");
        }
    });
    $(".l-cell").delegate("span", "click", function () {
        var allHeight = 0;
        var index = $(".l-cell span").index($(this));
        scroll.scrollToElement( $(".brand-list .item").eq(index)[0], '300');
        $(this).siblings().removeClass("current").end().addClass("current");
    });
})