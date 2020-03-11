function indexViewModel() {
    var self = this;
    var $win = $(window);
    self.redirect = function(section){
        $('body').animate({
            scrollTop: eval($('#' + section).offset().top - 70)
        }, 1000);

       
    }
    self.skill_categories = ko.observableArray([
        {
            name:'Programming languages',
            skills:[
                {
                    name: 'JavaScript',
                    icon:'<i class="fab fa-js-square"></i>',
                    isImage:false,
                },
                {
                    name: 'PHP',
                    icon:'<i class="fab fa-php"></i>',
                    isImage:false,
                },
                {
                    name: 'Python',
                    icon:'<i class="fab fa-python"></i>',
                    isImage:false,
                },
                {
                    name: 'SQL',
                    icon:'<i class="fas fa-database"></i>',
                    isImage:false,
                },
                {
                    name: 'HTML',
                    icon:'<i class="fab fa-html5"></i>',
                    isImage:false,
                },
                {
                    name: 'CSS',
                    icon:'<i class="fab fa-css3-alt"></i>',
                    isImage:false,
                },
                {
                    name: 'C',
                    icon:'<i class="far fa-copyright"></i>',
                    isImage:false,
                }
            ]
        },
        {
            name:'Libraries & Frameworks',
            skills:[
                {
                    name: 'jQuery',
                    icon:'jquery.png',
                    isImage:true,
                },
                {
                    name: 'React',
                    icon:'<i class="fab fa-react"></i>',
                    isImage:false,
                },
                {
                    name: 'Knockout.js',
                    icon:'<i class="fab fa-kickstarter-k"></i>',
                    isImage:false,
                },
                {
                    name: 'Node.js',
                    icon:'<i class="fab fa-node"></i>',
                    isImage:false,
                },
                {
                    name: 'Express',
                    icon:'<i class="fab fa-node-js"></i>',
                    isImage:false,
                },
                {
                    name: 'Codeigniter',
                    icon:'codeigniter.png',
                    isImage:true,
                },
                {
                    name: 'Wordpress',
                    icon:'<i class="fab fa-wordpress"></i>',
                    isImage:false,
                },
                {
                    name: 'Joomla',
                    icon: '<i class="fab fa-joomla"></i>',
                    isImage:false,
                }
            ]
        },
        {
            name:'Tools & Platforms',
            skills:[
                {
                    name: 'Apache',
                    icon:'apache.png',
                    isImage:true,
                },
                {
                    name: 'Apache Jmeter',
                    icon:'jmeter.png',
                    isImage:true,
                },
                {
                    name: 'Git',
                    icon:'<i class="fab fa-github"></i>',
                    isImage:false,
                },
                {
                    name: 'Amazon Web Services',
                    icon:'<i class="fab fa-aws"></i>',
                    isImage:false,
                },
                {
                    name: 'Google Cloud Console',
                    icon:'google.png',
                    isImage:true,
                },
            ]
        }
    ])
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