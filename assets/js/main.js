function indexViewModel() {
    var self = this;
    var $win = $(window);
    self.isOnTop = ko.observable($win.scrollTop() == 0 ? true : false);
    $win.scroll(function () {
        if ($win.scrollTop() == 0){
            self.isOnTop(true);
        }else if ($win.height() + $win.scrollTop() == $(document).height()) {
            alert('Scrolled to Page Bottom');
        }else{
            self.isOnTop(false);
        }
    });
}
$(function() {
    if(document.getElementById('__body__'))ko.applyBindings( new indexViewModel(), document.getElementById('__body__') );
    else if(console && console.log ) console.log('non existant page');
});